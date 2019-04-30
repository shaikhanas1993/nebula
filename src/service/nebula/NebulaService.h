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
// define RAPIDJSON to have stdstring
#ifndef RAPIDJSON_HAS_STDSTRING
#define RAPIDJSON_HAS_STDSTRING 1
#endif

#include "rapidjson/stringbuffer.h"
#include "rapidjson/writer.h"
#include "surface/DataSurface.h"
#include "type/Type.h"

/**
 * Define some basic sharable proerpties for nebula service
 */
namespace nebula {
namespace service {

// define all service ERROR code = 0 reserved for NO_ERROR
// And this error code table can be look up
enum ErrorCode {
  NONE = 0,
  MISSING_TABLE = 1,
  MISSING_TIME_RANGE = 2,
  MISSING_OUTPUT_FIELDS = 3,
  FAIL_BUILD_QUERY_PLAN = 4,
  FAIL_EXECUTE_QUERY = 5
};

template <ErrorCode E>
struct ErrorTraits {};

template <>
struct ErrorTraits<ErrorCode::NONE> {
  static constexpr auto MESSAGE = "";
};

template <>
struct ErrorTraits<ErrorCode::MISSING_TABLE> {
  static constexpr auto MESSAGE = "Table Not Set";
};

template <>
struct ErrorTraits<ErrorCode::MISSING_TIME_RANGE> {
  static constexpr auto MESSAGE = "Time Range Not Set";
};

template <>
struct ErrorTraits<ErrorCode::MISSING_OUTPUT_FIELDS> {
  static constexpr auto MESSAGE = "No Dimension Or Metric Set";
};

template <>
struct ErrorTraits<ErrorCode::FAIL_BUILD_QUERY_PLAN> {
  static constexpr auto MESSAGE = "Fail To Build Query Plan";
};

template <>
struct ErrorTraits<ErrorCode::FAIL_EXECUTE_QUERY> {
  static constexpr auto MESSAGE = "Fail To Execute Query";
};

class ServiceProperties final {
public:
  static constexpr auto PORT = 9190;

  // default window size is 60 seconds aka 1 minute
  static constexpr auto DEFAULT_WINDOW_SIZE = 60;

  // default top size to 100 - show top 100 records
  static constexpr auto DEFAULT_TOP_SIZE = 100;

  // get error message from error code
  static const std::string errorMessage(ErrorCode);

  // jsonify a row set of data with given schema
  static const std::string jsonify(const nebula::surface::RowCursor, const nebula::type::Schema);
};
} // namespace service
} // namespace nebula