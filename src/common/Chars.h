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

#pragma once

#include <glog/logging.h>

#include "Hash.h"

/**
 * Some utility functions related to strings
 */
namespace nebula {
namespace common {
// split a char streams into a vector of strings
class Chars {
public:
  static unordered_set<std::string> split(const char* data, size_t size, char delimeter = ',') {
    if (!data || size < 1) {
      return unordered_set<std::string>();
    }

    size_t start = 0;
    size_t end = 0;
    unordered_set<std::string> set;

#define ADD_SEGMENT                         \
  if (start != end) {                       \
    set.emplace(data + start, end - start); \
  }

    while (end < size) {
      // found delimeter, process
      if (*(data + end) == delimeter) {
        ADD_SEGMENT

        // prepare next char
        start = end + 1;
      }

      // move to next char
      ++end;
    }

    // capture the last segment after the last delimeter
    ADD_SEGMENT

#undef ADD_SEGMENT

    return set;
  }

  // char equals
  static inline bool eq(char a, char b) {
    return a == b;
  }

  // char equlas ignoring case
  static inline bool ieq(char a, char b) {
    return a == b || std::tolower(a) == std::tolower(b);
  }

  static bool prefix(const char* src, size_t s_size, const char* target, size_t t_size, bool ignoreCase = true) {
    if (s_size < t_size) {
      return false;
    }

    bool (*eqf)(char a, char b) = ignoreCase ? &ieq : &eq;
    for (size_t i = 0; i < t_size; ++i) {
      if (!(*eqf)(*(src + i), *(target + i))) {
        return false;
      }
    }

    return true;
  }
};
} // namespace common
} // namespace nebula