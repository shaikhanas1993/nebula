/*
 * Copyright 2017-present Shawn Cao
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "Memory.h"

#include <gflags/gflags.h>
#include <lz4.h>

#include "Bits.h"

DEFINE_bool(ALLOC_CHECK, false, "check allocation and fail it grows too much");

namespace nebula {
namespace common {

Pool& Pool::getDefault() {
  static Pool pool;
  return pool;
}

// not-threadsafe
void ExtendableSlice::ensure(size_t size) {
  // increase 10 slices requests, logging warning, increase over 30 slices requests, logging error.
  static constexpr size_t errors[] = { 50, 100 };
  if (UNLIKELY(size >= capacity())) {
    // TODO(cao): a bit prediction here, is this effective?
    // OR we just need real paged slices without continous memory chunk
    if (numExtended_ > 4) {
      // give 2 times of what asked
      size *= 2;
    } else if (numExtended_ > 8) {
      size *= 4;
    } else if (numExtended_ > 16) {
      size *= 8;
    }

    auto slices = slices_;
    while (slices * size_ <= size) {
      ++slices;

      if (FLAGS_ALLOC_CHECK) {
        auto detects = slices - slices_;
        if (detects >= errors[0]) {
          LOG(WARNING) << "Slices increased too fast in single request";

          // over error bound - fail it
          if (UNLIKELY(detects > errors[1])) {
            LOG(FATAL) << fmt::format(
              "Slices grows too fast: page size ({0}) too small or allocation leak towards {1}", size_, size);
          }
        }
      }
    }

    N_ENSURE_GT(slices, slices_, "required slices should be more than existing capacity");
    ++numExtended_;
    this->ptr_ = static_cast<NByte*>(this->pool_.extend(this->ptr_, capacity(), slices * size_));
    std::swap(slices, slices_);
  }
}

// append a bytes array of length bytes to position
size_t ExtendableSlice::write(size_t position, const NByte* data, size_t length) {
  if (UNLIKELY(length == 0)) {
    return 0;
  }

  size_t cursor = position + length;
  ensure(cursor);

  // copy data into given place
  std::memcpy(this->ptr_ + position, data, length);
  return length;
}

size_t ExtendableSlice::copy(NByte* buffer, size_t offset, size_t length) const {
  N_ENSURE(length <= capacity(), "requested data is too much.");

  // copy over
  std::memcpy(buffer + offset, this->ptr_, length);

  return length;
}

void ExtendableSlice::seal(size_t max) {
  if (ownbuffer_) {
    auto wasted = capacity() - max;
    if (wasted >= max || wasted >= 1024) {
      // Do we need alignment here to improvement fragmentation?
      auto buffer = pool_.allocate(max);
      N_ENSURE_NOT_NULL(buffer, "buffer not null");
      std::memcpy(buffer, ptr_, max);
      pool_.free(static_cast<void*>(ptr_), size_);
      ptr_ = static_cast<NByte*>(buffer);
      size_ = max;
    }
  }
}

// write value at position for width of bits
// bits can not be larger than 64 (8 bytes)
size_t ExtendableSlice::writeBits(size_t pos, int bits, size_t value) {
  // ensure we have enough bytes in allocation
  const auto totalBits = (pos + bits);
  ensure(totalBits / 8 + ((totalBits % 8 == 0) ? 0 : 1));

  // the starting byte and bit (offset in memory chunk) to work on
  const auto start = pos / 8;
  auto byte = start;
  auto bit = pos % 8;

  // auto decrement bits as we work on byte by byte
  auto p = (uint8_t*)ptr_;
  while (bits > 0) {
    // fit bit from value in reverse order for current byte
    Byte::write(p + byte, bit, bits, value);

    // move to next byte to work on.
    auto delta = 8 - bit;
    bits -= delta;
    value >>= delta;

    bit = 0;
    ++byte;
  }

  return byte - start;
}

size_t ExtendableSlice::readBits(size_t pos, int bits) const {
  size_t value = 0;
  // the starting byte and bit (offset in memory chunk) to work on
  const auto start = pos / 8;
  auto byte = start;
  auto bit = pos % 8;
  auto shift = 0;

  // auto decrement bits as we work on byte by byte
  auto p = (uint8_t*)ptr_;
  while (bits > 0) {
    // fit bit from value in reverse order for current byte
    size_t v = Byte::read(p + byte, bit, bits);
    value |= v << shift;

    // move to next byte to work on.
    auto delta = 8 - bit;
    bits -= delta;
    shift += delta;
    bit = 0;
    ++byte;
  }

  return value;
}

size_t PagedSlice::write(size_t position, const NByte* data, size_t size) {
  // case like empty string
  if (size == 0) {
    return 0;
  }

  // ensure the buffer can fit the largest data item
  ensure(size);

  // if current buffer can't fit the data, compress and flush the buffer
  if (write_.size + size > size_) {
    compress(position);
  }

  // write the data into current buffer and increase index
  std::memcpy(this->ptr_ + write_.size, data, size);
  write_.size += size;
  return size;
}

std::string_view PagedSlice::read(size_t position, size_t size) const {
  if (size == 0) {
    return PagedSlice::EMPTY_STRING;
  }

  // if the requested data is still in write buffer
  if (write_.include(position)) {
    return std::string_view((char*)this->ptr_ + position - write_.offset, size);
  }

  // because we make sure every single element is captured in single block
  // so we don't have single item across block
  if (!read_.include(position)) {
    uncompress(position);
  }

  // build data using copy elision
  // note that, we're returning a string view on top of current buffer
  // which is possible to be swapped by next read
  // hence it requires client to consume it before next read, or corrupted data may happen
  return std::string_view((char*)bufferPtr_ + position - read_.offset, size);
}

// ensure the buffer is big enough to hold single item
void PagedSlice::ensure(size_t size) {
  if (UNLIKELY(size >= size_)) {
    size_t newSize = size_;
    while (newSize <= size) {
      newSize *= 2;
    }

    ptr_ = static_cast<NByte*>(pool_.extend(ptr_, size_, newSize));
    size_ = newSize;
  }
}

// release unused memory
// if current slice has compression blocks, the buffer is to be used soon
// otherwise, we decide reallocation based on wasted bytes and percentage
void PagedSlice::seal() {
  // if buffer is valid
  N_ENSURE(ownbuffer_, "buffer is owned");

  // we are asking at least keep a word in the buffer
  const auto validSize = write_.size;
  auto wasted = size_ - validSize;
  // wasted is more than valid or absolute value is more than 4KB
  // let's reclaim it
  if (wasted >= validSize || wasted >= 1024) {
    // Do we need alignment here to improvement fragmentation?
    auto buffer = pool_.allocate(validSize);
    N_ENSURE_NOT_NULL(buffer, "buffer not null");
    std::memcpy(buffer, ptr_, validSize);
    pool_.free(static_cast<void*>(ptr_), size_);
    ptr_ = static_cast<NByte*>(buffer);
    size_ = validSize;
  }
}

// compress current buffer and link it to the chain
// recording the data range for this block [x-index_, x]
void PagedSlice::compress(size_t position) {
  // compress current buffer into a new block
  // for raw data range(offset=position - index_, size=index_)
  // output should be maximum size of input
  const auto srcSize = write_.size;

  // try to compress it
  auto slice = std::make_unique<OneSlice>(srcSize);
  // if codec is not-compressed, we just put this slice in
  if (type_ == folly::io::CodecType::NO_COMPRESSION) {
    std::memcpy(slice->ptr(), ptr_, srcSize);
    blocks_.emplace_front(write_, false, std::move(slice));
  } else {
    auto compressedSize = LZ4_compress_default((char*)ptr_, (char*)slice->ptr(), srcSize, srcSize);

    // not good to compress, keep it as raw
    if (compressedSize == 0) {
      std::memcpy(slice->ptr(), ptr_, srcSize);
      blocks_.emplace_front(write_, false, std::move(slice));
    } else {
      // copy into a smaller buffer
      auto fit = std::make_unique<OneSlice>(compressedSize);
      std::memcpy(fit->ptr(), slice->ptr(), compressedSize);
      blocks_.emplace_front(write_, true, std::move(fit));
    }
  }

  // reset the buffer
  N_ENSURE_EQ(write_.offset + write_.size, position, "unexpected position");
  write_.offset = position;
  write_.size = 0;
}

// uncompress the compression block covers given position
// and load it into current buffer (ptr_)
void PagedSlice::uncompress(size_t position) const {
  // search the block that includes the position
  // assuming we don't have a lot of blocks to iterate,
  // otherwise this linear loop might require optimization for fast locating.
  for (auto& block : blocks_) {
    if (block.range.include(position)) {
      // TODO(cao) - I was looking for an interface to use existing buffer to hold the raw data
      // auto raw = codec_->uncompress(, block.range.size);
      auto compressedSize = block.data->size();

      N_ENSURE(type_ == folly::io::CodecType::NO_COMPRESSION || type_ == folly::io::CodecType::LZ4,
               "only supporting LZ4 or NONE for now");
      if (block.compressed) {
        // prepare the read buffer for this block
        if (buffer_ == nullptr || buffer_->size() < block.range.size) {
          auto buffer = std::make_unique<OneSlice>(block.range.size);
          buffer.swap(const_cast<std::unique_ptr<OneSlice>&>(buffer_));
        }

        auto ret = (uint32_t)LZ4_decompress_safe((char*)block.data->ptr(), (char*)buffer_->ptr(), compressedSize, buffer_->size());
        N_ENSURE_EQ(ret, block.range.size, "raw data size mismatches.");
        *const_cast<NByte**>(&bufferPtr_) = buffer_->ptr();
      } else {
        *const_cast<NByte**>(&bufferPtr_) = block.data->ptr();
      }

      // TODO(cao) - sorry to use const_cast here as we want to keep read interfaces as const methods
      *const_cast<CRange*>(&read_) = block.range;
      return;
    }
  }

  throw NException(fmt::format("invalid position to uncompress: {0}", position));
}

} // namespace common
} // namespace nebula