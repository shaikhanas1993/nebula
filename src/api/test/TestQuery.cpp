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

#include "gtest/gtest.h"
#include <folly/init/Init.h>
#include <glog/logging.h>
#include <sys/mman.h>
#include "api/dsl/Dsl.h"
#include "api/dsl/Expressions.h"
#include "common/Cursor.h"
#include "common/Errors.h"
#include "common/Likely.h"
#include "common/Memory.h"
#include "execution/BlockManager.h"
#include "execution/ExecutionPlan.h"
#include "execution/core/ServerExecutor.h"
#include "execution/io/trends/Trends.h"
#include "fmt/format.h"
#include "gmock/gmock.h"
#include "meta/NBlock.h"
#include "meta/TestTable.h"
#include "surface/DataSurface.h"
#include "type/Serde.h"

namespace nebula {
namespace api {
namespace test {

using namespace nebula::api::dsl;
using nebula::common::Cursor;
using nebula::execution::BlockManager;
using nebula::execution::core::ServerExecutor;
using nebula::execution::io::trends::TrendsTable;
using nebula::meta::MockMs;
using nebula::meta::NBlock;
using nebula::surface::RowData;
using nebula::type::Schema;
using nebula::type::TypeSerializer;

TEST(ApiTest, TestDataFromCsv) {
  TrendsTable trends;
  // query this table
  const auto query = table(trends.name(), trends.getMs())
                       .where(col("query") == "yoga")
                       .select(
                         col("_time_").as("date"),
                         sum(col("count")).as("total"))
                       .groupby({ 1 });

  // compile the query into an execution plan
  auto plan = query.compile();

  // print out the plan through logging
  plan->display();

  // load test data to run this query
  trends.loadTrends(1);

  nebula::common::Evidence::Duration tick;
  // pass the query plan to a server to execute - usually it is itself
  auto result = ServerExecutor(nebula::meta::NNode::local().toString()).execute(*plan);

  // print out result;
  LOG(INFO) << "----------------------------------------------------------------";
  LOG(INFO) << "Query: select dt, sum(count) as total from trends.draft where query='yoga' group by 1;";
  LOG(INFO) << "Get Results With Rows: " << result->size() << " using " << tick.elapsedMs() << " ms";
  LOG(INFO) << fmt::format("col: {0:12} | {1:12}", "Date", "Total");
  while (result->hasNext()) {
    const auto& row = result->next();
    LOG(INFO) << fmt::format("row: {0:50} | {1:12}",
                             row.readLong("date"),
                             row.readInt("total"));
  }
}

TEST(ApiTest, TestMatchedKeys) {
  TrendsTable trends;
  // query this table
  const auto query = table(trends.name(), trends.getMs())
                       .where(like(col("query"), "leg work%"))
                       .select(
                         col("query"),
                         col("_time_"),
                         sum(col("count")).as("total"))
                       .groupby({ 1, 2 });

  // compile the query into an execution plan
  auto plan = query.compile();

  // print out the plan through logging
  plan->display();

  // load test data to run this query
  trends.loadTrends(1);

  nebula::common::Evidence::Duration tick;
  // pass the query plan to a server to execute - usually it is itself
  auto result = ServerExecutor(nebula::meta::NNode::local().toString()).execute(*plan);

  // print out result;
  LOG(INFO) << "----------------------------------------------------------------";
  LOG(INFO) << "Query: select query, count(1) as total from trends.draft where query like '%work%' group by 1;";
  LOG(INFO) << "Get Results With Rows: " << result->size() << " using " << tick.elapsedMs() << " ms";
  LOG(INFO) << fmt::format("col: {0:20} | {1:12} | {2:12}", "Query", "Date", "Total");
  while (result->hasNext()) {
    const auto& row = result->next();
    LOG(INFO) << fmt::format("row: {0:20} | {1:12} | {2:12}",
                             row.readString("query"),
                             row.readLong("_time_"),
                             row.readInt("total"));
  }
}

TEST(ApiTest, TestMultipleBlocks) {
  TrendsTable trends;
  // query this table
  const auto query = table(trends.name(), trends.getMs())
                       .where(like(col("query"), "leg work%"))
                       .select(
                         col("query"),
                         sum(col("count")).as("total"))
                       .groupby({ 1 });

  // compile the query into an execution plan
  auto plan = query.compile();

  // print out the plan through logging
  plan->display();

  // load test data to run this query
  trends.loadTrends(10);

  nebula::common::Evidence::Duration tick;
  // pass the query plan to a server to execute - usually it is itself
  auto result = ServerExecutor(nebula::meta::NNode::local().toString()).execute(*plan);

  // print out result;
  LOG(INFO) << "----------------------------------------------------------------";
  LOG(INFO) << "Query: select query, count(1) as total from trends.draft where query like '%leg work%' group by 1;";
  LOG(INFO) << "Get Results With Rows: " << result->size() << " using " << tick.elapsedMs() << " ms";
  LOG(INFO) << fmt::format("col: {0:20} | {1:12}", "Query", "Total");
  while (result->hasNext()) {
    const auto& row = result->next();
    LOG(INFO) << fmt::format("row: {0:20} | {1:12}",
                             row.readString("query"),
                             row.readInt("total"));
  }
}

} // namespace test
} // namespace api
} // namespace nebula
