!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var i=r(2),s=i,o=Function("return this")();s.exportSymbol("proto.nebula.service.DataType",null,o),s.exportSymbol("proto.nebula.service.EchoRequest",null,o),s.exportSymbol("proto.nebula.service.EchoResponse",null,o),s.exportSymbol("proto.nebula.service.Metric",null,o),s.exportSymbol("proto.nebula.service.Operation",null,o),s.exportSymbol("proto.nebula.service.Order",null,o),s.exportSymbol("proto.nebula.service.Predicate",null,o),s.exportSymbol("proto.nebula.service.PredicateAnd",null,o),s.exportSymbol("proto.nebula.service.PredicateOr",null,o),s.exportSymbol("proto.nebula.service.QueryRequest",null,o),s.exportSymbol("proto.nebula.service.QueryResponse",null,o),s.exportSymbol("proto.nebula.service.Rollup",null,o),s.exportSymbol("proto.nebula.service.Statistics",null,o),s.exportSymbol("proto.nebula.service.TableStateRequest",null,o),s.exportSymbol("proto.nebula.service.TableStateResponse",null,o),proto.nebula.service.EchoRequest=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.EchoRequest,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.EchoRequest.displayName="proto.nebula.service.EchoRequest"),proto.nebula.service.EchoResponse=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.EchoResponse,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.EchoResponse.displayName="proto.nebula.service.EchoResponse"),proto.nebula.service.TableStateRequest=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.TableStateRequest,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.TableStateRequest.displayName="proto.nebula.service.TableStateRequest"),proto.nebula.service.TableStateResponse=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.TableStateResponse,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.TableStateResponse.displayName="proto.nebula.service.TableStateResponse"),proto.nebula.service.Predicate=function(e){i.Message.initialize(this,e,0,-1,proto.nebula.service.Predicate.repeatedFields_,null)},s.inherits(proto.nebula.service.Predicate,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.Predicate.displayName="proto.nebula.service.Predicate"),proto.nebula.service.PredicateAnd=function(e){i.Message.initialize(this,e,0,-1,proto.nebula.service.PredicateAnd.repeatedFields_,null)},s.inherits(proto.nebula.service.PredicateAnd,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.PredicateAnd.displayName="proto.nebula.service.PredicateAnd"),proto.nebula.service.PredicateOr=function(e){i.Message.initialize(this,e,0,-1,proto.nebula.service.PredicateOr.repeatedFields_,null)},s.inherits(proto.nebula.service.PredicateOr,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.PredicateOr.displayName="proto.nebula.service.PredicateOr"),proto.nebula.service.Metric=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.Metric,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.Metric.displayName="proto.nebula.service.Metric"),proto.nebula.service.Order=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.Order,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.Order.displayName="proto.nebula.service.Order"),proto.nebula.service.QueryRequest=function(e){i.Message.initialize(this,e,0,-1,proto.nebula.service.QueryRequest.repeatedFields_,proto.nebula.service.QueryRequest.oneofGroups_)},s.inherits(proto.nebula.service.QueryRequest,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.QueryRequest.displayName="proto.nebula.service.QueryRequest"),proto.nebula.service.Statistics=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.Statistics,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.Statistics.displayName="proto.nebula.service.Statistics"),proto.nebula.service.QueryResponse=function(e){i.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.nebula.service.QueryResponse,i.Message),s.DEBUG&&!COMPILED&&(proto.nebula.service.QueryResponse.displayName="proto.nebula.service.QueryResponse"),i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.EchoRequest.prototype.toObject=function(e){return proto.nebula.service.EchoRequest.toObject(e,this)},proto.nebula.service.EchoRequest.toObject=function(e,t){var r={name:i.Message.getFieldWithDefault(t,1,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.EchoRequest.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.EchoRequest;return proto.nebula.service.EchoRequest.deserializeBinaryFromReader(r,t)},proto.nebula.service.EchoRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setName(r);break;default:t.skipField()}}return e},proto.nebula.service.EchoRequest.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.EchoRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.EchoRequest.serializeBinaryToWriter=function(e,t){var r;(r=e.getName()).length>0&&t.writeString(1,r)},proto.nebula.service.EchoRequest.prototype.getName=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.EchoRequest.prototype.setName=function(e){i.Message.setProto3StringField(this,1,e)},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.EchoResponse.prototype.toObject=function(e){return proto.nebula.service.EchoResponse.toObject(e,this)},proto.nebula.service.EchoResponse.toObject=function(e,t){var r={message:i.Message.getFieldWithDefault(t,1,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.EchoResponse.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.EchoResponse;return proto.nebula.service.EchoResponse.deserializeBinaryFromReader(r,t)},proto.nebula.service.EchoResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setMessage(r);break;default:t.skipField()}}return e},proto.nebula.service.EchoResponse.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.EchoResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.EchoResponse.serializeBinaryToWriter=function(e,t){var r;(r=e.getMessage()).length>0&&t.writeString(1,r)},proto.nebula.service.EchoResponse.prototype.getMessage=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.EchoResponse.prototype.setMessage=function(e){i.Message.setProto3StringField(this,1,e)},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.TableStateRequest.prototype.toObject=function(e){return proto.nebula.service.TableStateRequest.toObject(e,this)},proto.nebula.service.TableStateRequest.toObject=function(e,t){var r={table:i.Message.getFieldWithDefault(t,1,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.TableStateRequest.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.TableStateRequest;return proto.nebula.service.TableStateRequest.deserializeBinaryFromReader(r,t)},proto.nebula.service.TableStateRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setTable(r);break;default:t.skipField()}}return e},proto.nebula.service.TableStateRequest.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.TableStateRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.TableStateRequest.serializeBinaryToWriter=function(e,t){var r;(r=e.getTable()).length>0&&t.writeString(1,r)},proto.nebula.service.TableStateRequest.prototype.getTable=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.TableStateRequest.prototype.setTable=function(e){i.Message.setProto3StringField(this,1,e)},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.TableStateResponse.prototype.toObject=function(e){return proto.nebula.service.TableStateResponse.toObject(e,this)},proto.nebula.service.TableStateResponse.toObject=function(e,t){var r={blockcount:i.Message.getFieldWithDefault(t,1,0),rowcount:i.Message.getFieldWithDefault(t,2,0),memsize:i.Message.getFieldWithDefault(t,3,0)};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.TableStateResponse.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.TableStateResponse;return proto.nebula.service.TableStateResponse.deserializeBinaryFromReader(r,t)},proto.nebula.service.TableStateResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readInt32();e.setBlockcount(r);break;case 2:r=t.readInt64();e.setRowcount(r);break;case 3:r=t.readInt64();e.setMemsize(r);break;default:t.skipField()}}return e},proto.nebula.service.TableStateResponse.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.TableStateResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.TableStateResponse.serializeBinaryToWriter=function(e,t){var r=void 0;0!==(r=e.getBlockcount())&&t.writeInt32(1,r),0!==(r=e.getRowcount())&&t.writeInt64(2,r),0!==(r=e.getMemsize())&&t.writeInt64(3,r)},proto.nebula.service.TableStateResponse.prototype.getBlockcount=function(){return i.Message.getFieldWithDefault(this,1,0)},proto.nebula.service.TableStateResponse.prototype.setBlockcount=function(e){i.Message.setProto3IntField(this,1,e)},proto.nebula.service.TableStateResponse.prototype.getRowcount=function(){return i.Message.getFieldWithDefault(this,2,0)},proto.nebula.service.TableStateResponse.prototype.setRowcount=function(e){i.Message.setProto3IntField(this,2,e)},proto.nebula.service.TableStateResponse.prototype.getMemsize=function(){return i.Message.getFieldWithDefault(this,3,0)},proto.nebula.service.TableStateResponse.prototype.setMemsize=function(e){i.Message.setProto3IntField(this,3,e)},proto.nebula.service.Predicate.repeatedFields_=[3],i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.Predicate.prototype.toObject=function(e){return proto.nebula.service.Predicate.toObject(e,this)},proto.nebula.service.Predicate.toObject=function(e,t){var r,s={column:i.Message.getFieldWithDefault(t,1,""),op:i.Message.getFieldWithDefault(t,2,0),valueList:null==(r=i.Message.getRepeatedField(t,3))?void 0:r};return e&&(s.$jspbMessageInstance=t),s}),proto.nebula.service.Predicate.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.Predicate;return proto.nebula.service.Predicate.deserializeBinaryFromReader(r,t)},proto.nebula.service.Predicate.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setColumn(r);break;case 2:r=t.readEnum();e.setOp(r);break;case 3:r=t.readString();e.addValue(r);break;default:t.skipField()}}return e},proto.nebula.service.Predicate.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.Predicate.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.Predicate.serializeBinaryToWriter=function(e,t){var r=void 0;(r=e.getColumn()).length>0&&t.writeString(1,r),0!==(r=e.getOp())&&t.writeEnum(2,r),(r=e.getValueList()).length>0&&t.writeRepeatedString(3,r)},proto.nebula.service.Predicate.prototype.getColumn=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.Predicate.prototype.setColumn=function(e){i.Message.setProto3StringField(this,1,e)},proto.nebula.service.Predicate.prototype.getOp=function(){return i.Message.getFieldWithDefault(this,2,0)},proto.nebula.service.Predicate.prototype.setOp=function(e){i.Message.setProto3EnumField(this,2,e)},proto.nebula.service.Predicate.prototype.getValueList=function(){return i.Message.getRepeatedField(this,3)},proto.nebula.service.Predicate.prototype.setValueList=function(e){i.Message.setField(this,3,e||[])},proto.nebula.service.Predicate.prototype.addValue=function(e,t){i.Message.addToRepeatedField(this,3,e,t)},proto.nebula.service.Predicate.prototype.clearValueList=function(){this.setValueList([])},proto.nebula.service.PredicateAnd.repeatedFields_=[1],i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.PredicateAnd.prototype.toObject=function(e){return proto.nebula.service.PredicateAnd.toObject(e,this)},proto.nebula.service.PredicateAnd.toObject=function(e,t){var r={expressionList:i.Message.toObjectList(t.getExpressionList(),proto.nebula.service.Predicate.toObject,e)};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.PredicateAnd.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.PredicateAnd;return proto.nebula.service.PredicateAnd.deserializeBinaryFromReader(r,t)},proto.nebula.service.PredicateAnd.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=new proto.nebula.service.Predicate;t.readMessage(r,proto.nebula.service.Predicate.deserializeBinaryFromReader),e.addExpression(r);break;default:t.skipField()}}return e},proto.nebula.service.PredicateAnd.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.PredicateAnd.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.PredicateAnd.serializeBinaryToWriter=function(e,t){var r;(r=e.getExpressionList()).length>0&&t.writeRepeatedMessage(1,r,proto.nebula.service.Predicate.serializeBinaryToWriter)},proto.nebula.service.PredicateAnd.prototype.getExpressionList=function(){return i.Message.getRepeatedWrapperField(this,proto.nebula.service.Predicate,1)},proto.nebula.service.PredicateAnd.prototype.setExpressionList=function(e){i.Message.setRepeatedWrapperField(this,1,e)},proto.nebula.service.PredicateAnd.prototype.addExpression=function(e,t){return i.Message.addToRepeatedWrapperField(this,1,e,proto.nebula.service.Predicate,t)},proto.nebula.service.PredicateAnd.prototype.clearExpressionList=function(){this.setExpressionList([])},proto.nebula.service.PredicateOr.repeatedFields_=[1],i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.PredicateOr.prototype.toObject=function(e){return proto.nebula.service.PredicateOr.toObject(e,this)},proto.nebula.service.PredicateOr.toObject=function(e,t){var r={expressionList:i.Message.toObjectList(t.getExpressionList(),proto.nebula.service.Predicate.toObject,e)};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.PredicateOr.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.PredicateOr;return proto.nebula.service.PredicateOr.deserializeBinaryFromReader(r,t)},proto.nebula.service.PredicateOr.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=new proto.nebula.service.Predicate;t.readMessage(r,proto.nebula.service.Predicate.deserializeBinaryFromReader),e.addExpression(r);break;default:t.skipField()}}return e},proto.nebula.service.PredicateOr.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.PredicateOr.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.PredicateOr.serializeBinaryToWriter=function(e,t){var r;(r=e.getExpressionList()).length>0&&t.writeRepeatedMessage(1,r,proto.nebula.service.Predicate.serializeBinaryToWriter)},proto.nebula.service.PredicateOr.prototype.getExpressionList=function(){return i.Message.getRepeatedWrapperField(this,proto.nebula.service.Predicate,1)},proto.nebula.service.PredicateOr.prototype.setExpressionList=function(e){i.Message.setRepeatedWrapperField(this,1,e)},proto.nebula.service.PredicateOr.prototype.addExpression=function(e,t){return i.Message.addToRepeatedWrapperField(this,1,e,proto.nebula.service.Predicate,t)},proto.nebula.service.PredicateOr.prototype.clearExpressionList=function(){this.setExpressionList([])},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.Metric.prototype.toObject=function(e){return proto.nebula.service.Metric.toObject(e,this)},proto.nebula.service.Metric.toObject=function(e,t){var r={column:i.Message.getFieldWithDefault(t,1,""),method:i.Message.getFieldWithDefault(t,2,0)};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.Metric.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.Metric;return proto.nebula.service.Metric.deserializeBinaryFromReader(r,t)},proto.nebula.service.Metric.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setColumn(r);break;case 2:r=t.readEnum();e.setMethod(r);break;default:t.skipField()}}return e},proto.nebula.service.Metric.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.Metric.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.Metric.serializeBinaryToWriter=function(e,t){var r=void 0;(r=e.getColumn()).length>0&&t.writeString(1,r),0!==(r=e.getMethod())&&t.writeEnum(2,r)},proto.nebula.service.Metric.prototype.getColumn=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.Metric.prototype.setColumn=function(e){i.Message.setProto3StringField(this,1,e)},proto.nebula.service.Metric.prototype.getMethod=function(){return i.Message.getFieldWithDefault(this,2,0)},proto.nebula.service.Metric.prototype.setMethod=function(e){i.Message.setProto3EnumField(this,2,e)},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.Order.prototype.toObject=function(e){return proto.nebula.service.Order.toObject(e,this)},proto.nebula.service.Order.toObject=function(e,t){var r={column:i.Message.getFieldWithDefault(t,1,""),desc:i.Message.getBooleanFieldWithDefault(t,2,!1)};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.Order.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.Order;return proto.nebula.service.Order.deserializeBinaryFromReader(r,t)},proto.nebula.service.Order.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setColumn(r);break;case 2:r=t.readBool();e.setDesc(r);break;default:t.skipField()}}return e},proto.nebula.service.Order.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.Order.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.Order.serializeBinaryToWriter=function(e,t){var r=void 0;(r=e.getColumn()).length>0&&t.writeString(1,r),(r=e.getDesc())&&t.writeBool(2,r)},proto.nebula.service.Order.prototype.getColumn=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.Order.prototype.setColumn=function(e){i.Message.setProto3StringField(this,1,e)},proto.nebula.service.Order.prototype.getDesc=function(){return i.Message.getBooleanFieldWithDefault(this,2,!1)},proto.nebula.service.Order.prototype.setDesc=function(e){i.Message.setProto3BooleanField(this,2,e)},proto.nebula.service.QueryRequest.repeatedFields_=[7,8],proto.nebula.service.QueryRequest.oneofGroups_=[[2,3]],proto.nebula.service.QueryRequest.FilterCase={FILTER_NOT_SET:0,FILTERA:2,FILTERO:3},proto.nebula.service.QueryRequest.prototype.getFilterCase=function(){return i.Message.computeOneofCase(this,proto.nebula.service.QueryRequest.oneofGroups_[0])},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.QueryRequest.prototype.toObject=function(e){return proto.nebula.service.QueryRequest.toObject(e,this)},proto.nebula.service.QueryRequest.toObject=function(e,t){var r,s={table:i.Message.getFieldWithDefault(t,1,""),filtera:(r=t.getFiltera())&&proto.nebula.service.PredicateAnd.toObject(e,r),filtero:(r=t.getFiltero())&&proto.nebula.service.PredicateOr.toObject(e,r),start:i.Message.getFieldWithDefault(t,4,0),end:i.Message.getFieldWithDefault(t,5,0),window:i.Message.getFieldWithDefault(t,6,0),dimensionList:null==(r=i.Message.getRepeatedField(t,7))?void 0:r,metricList:i.Message.toObjectList(t.getMetricList(),proto.nebula.service.Metric.toObject,e),top:i.Message.getFieldWithDefault(t,9,0),order:(r=t.getOrder())&&proto.nebula.service.Order.toObject(e,r)};return e&&(s.$jspbMessageInstance=t),s}),proto.nebula.service.QueryRequest.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.QueryRequest;return proto.nebula.service.QueryRequest.deserializeBinaryFromReader(r,t)},proto.nebula.service.QueryRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setTable(r);break;case 2:r=new proto.nebula.service.PredicateAnd;t.readMessage(r,proto.nebula.service.PredicateAnd.deserializeBinaryFromReader),e.setFiltera(r);break;case 3:r=new proto.nebula.service.PredicateOr;t.readMessage(r,proto.nebula.service.PredicateOr.deserializeBinaryFromReader),e.setFiltero(r);break;case 4:r=t.readUint64();e.setStart(r);break;case 5:r=t.readUint64();e.setEnd(r);break;case 6:r=t.readUint32();e.setWindow(r);break;case 7:r=t.readString();e.addDimension(r);break;case 8:r=new proto.nebula.service.Metric;t.readMessage(r,proto.nebula.service.Metric.deserializeBinaryFromReader),e.addMetric(r);break;case 9:r=t.readUint32();e.setTop(r);break;case 10:r=new proto.nebula.service.Order;t.readMessage(r,proto.nebula.service.Order.deserializeBinaryFromReader),e.setOrder(r);break;default:t.skipField()}}return e},proto.nebula.service.QueryRequest.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.QueryRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.QueryRequest.serializeBinaryToWriter=function(e,t){var r=void 0;(r=e.getTable()).length>0&&t.writeString(1,r),null!=(r=e.getFiltera())&&t.writeMessage(2,r,proto.nebula.service.PredicateAnd.serializeBinaryToWriter),null!=(r=e.getFiltero())&&t.writeMessage(3,r,proto.nebula.service.PredicateOr.serializeBinaryToWriter),0!==(r=e.getStart())&&t.writeUint64(4,r),0!==(r=e.getEnd())&&t.writeUint64(5,r),0!==(r=e.getWindow())&&t.writeUint32(6,r),(r=e.getDimensionList()).length>0&&t.writeRepeatedString(7,r),(r=e.getMetricList()).length>0&&t.writeRepeatedMessage(8,r,proto.nebula.service.Metric.serializeBinaryToWriter),0!==(r=e.getTop())&&t.writeUint32(9,r),null!=(r=e.getOrder())&&t.writeMessage(10,r,proto.nebula.service.Order.serializeBinaryToWriter)},proto.nebula.service.QueryRequest.prototype.getTable=function(){return i.Message.getFieldWithDefault(this,1,"")},proto.nebula.service.QueryRequest.prototype.setTable=function(e){i.Message.setProto3StringField(this,1,e)},proto.nebula.service.QueryRequest.prototype.getFiltera=function(){return i.Message.getWrapperField(this,proto.nebula.service.PredicateAnd,2)},proto.nebula.service.QueryRequest.prototype.setFiltera=function(e){i.Message.setOneofWrapperField(this,2,proto.nebula.service.QueryRequest.oneofGroups_[0],e)},proto.nebula.service.QueryRequest.prototype.clearFiltera=function(){this.setFiltera(void 0)},proto.nebula.service.QueryRequest.prototype.hasFiltera=function(){return null!=i.Message.getField(this,2)},proto.nebula.service.QueryRequest.prototype.getFiltero=function(){return i.Message.getWrapperField(this,proto.nebula.service.PredicateOr,3)},proto.nebula.service.QueryRequest.prototype.setFiltero=function(e){i.Message.setOneofWrapperField(this,3,proto.nebula.service.QueryRequest.oneofGroups_[0],e)},proto.nebula.service.QueryRequest.prototype.clearFiltero=function(){this.setFiltero(void 0)},proto.nebula.service.QueryRequest.prototype.hasFiltero=function(){return null!=i.Message.getField(this,3)},proto.nebula.service.QueryRequest.prototype.getStart=function(){return i.Message.getFieldWithDefault(this,4,0)},proto.nebula.service.QueryRequest.prototype.setStart=function(e){i.Message.setProto3IntField(this,4,e)},proto.nebula.service.QueryRequest.prototype.getEnd=function(){return i.Message.getFieldWithDefault(this,5,0)},proto.nebula.service.QueryRequest.prototype.setEnd=function(e){i.Message.setProto3IntField(this,5,e)},proto.nebula.service.QueryRequest.prototype.getWindow=function(){return i.Message.getFieldWithDefault(this,6,0)},proto.nebula.service.QueryRequest.prototype.setWindow=function(e){i.Message.setProto3IntField(this,6,e)},proto.nebula.service.QueryRequest.prototype.getDimensionList=function(){return i.Message.getRepeatedField(this,7)},proto.nebula.service.QueryRequest.prototype.setDimensionList=function(e){i.Message.setField(this,7,e||[])},proto.nebula.service.QueryRequest.prototype.addDimension=function(e,t){i.Message.addToRepeatedField(this,7,e,t)},proto.nebula.service.QueryRequest.prototype.clearDimensionList=function(){this.setDimensionList([])},proto.nebula.service.QueryRequest.prototype.getMetricList=function(){return i.Message.getRepeatedWrapperField(this,proto.nebula.service.Metric,8)},proto.nebula.service.QueryRequest.prototype.setMetricList=function(e){i.Message.setRepeatedWrapperField(this,8,e)},proto.nebula.service.QueryRequest.prototype.addMetric=function(e,t){return i.Message.addToRepeatedWrapperField(this,8,e,proto.nebula.service.Metric,t)},proto.nebula.service.QueryRequest.prototype.clearMetricList=function(){this.setMetricList([])},proto.nebula.service.QueryRequest.prototype.getTop=function(){return i.Message.getFieldWithDefault(this,9,0)},proto.nebula.service.QueryRequest.prototype.setTop=function(e){i.Message.setProto3IntField(this,9,e)},proto.nebula.service.QueryRequest.prototype.getOrder=function(){return i.Message.getWrapperField(this,proto.nebula.service.Order,10)},proto.nebula.service.QueryRequest.prototype.setOrder=function(e){i.Message.setWrapperField(this,10,e)},proto.nebula.service.QueryRequest.prototype.clearOrder=function(){this.setOrder(void 0)},proto.nebula.service.QueryRequest.prototype.hasOrder=function(){return null!=i.Message.getField(this,10)},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.Statistics.prototype.toObject=function(e){return proto.nebula.service.Statistics.toObject(e,this)},proto.nebula.service.Statistics.toObject=function(e,t){var r={rowsscanned:i.Message.getFieldWithDefault(t,1,0),querytimems:i.Message.getFieldWithDefault(t,2,0),error:i.Message.getFieldWithDefault(t,3,0),message:i.Message.getFieldWithDefault(t,4,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.nebula.service.Statistics.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.Statistics;return proto.nebula.service.Statistics.deserializeBinaryFromReader(r,t)},proto.nebula.service.Statistics.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readUint64();e.setRowsscanned(r);break;case 2:r=t.readUint32();e.setQuerytimems(r);break;case 3:r=t.readUint32();e.setError(r);break;case 4:r=t.readString();e.setMessage(r);break;default:t.skipField()}}return e},proto.nebula.service.Statistics.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.Statistics.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.Statistics.serializeBinaryToWriter=function(e,t){var r=void 0;0!==(r=e.getRowsscanned())&&t.writeUint64(1,r),0!==(r=e.getQuerytimems())&&t.writeUint32(2,r),0!==(r=e.getError())&&t.writeUint32(3,r),(r=e.getMessage()).length>0&&t.writeString(4,r)},proto.nebula.service.Statistics.prototype.getRowsscanned=function(){return i.Message.getFieldWithDefault(this,1,0)},proto.nebula.service.Statistics.prototype.setRowsscanned=function(e){i.Message.setProto3IntField(this,1,e)},proto.nebula.service.Statistics.prototype.getQuerytimems=function(){return i.Message.getFieldWithDefault(this,2,0)},proto.nebula.service.Statistics.prototype.setQuerytimems=function(e){i.Message.setProto3IntField(this,2,e)},proto.nebula.service.Statistics.prototype.getError=function(){return i.Message.getFieldWithDefault(this,3,0)},proto.nebula.service.Statistics.prototype.setError=function(e){i.Message.setProto3IntField(this,3,e)},proto.nebula.service.Statistics.prototype.getMessage=function(){return i.Message.getFieldWithDefault(this,4,"")},proto.nebula.service.Statistics.prototype.setMessage=function(e){i.Message.setProto3StringField(this,4,e)},i.Message.GENERATE_TO_OBJECT&&(proto.nebula.service.QueryResponse.prototype.toObject=function(e){return proto.nebula.service.QueryResponse.toObject(e,this)},proto.nebula.service.QueryResponse.toObject=function(e,t){var r,s={stats:(r=t.getStats())&&proto.nebula.service.Statistics.toObject(e,r),type:i.Message.getFieldWithDefault(t,2,0),data:t.getData_asB64()};return e&&(s.$jspbMessageInstance=t),s}),proto.nebula.service.QueryResponse.deserializeBinary=function(e){var t=new i.BinaryReader(e),r=new proto.nebula.service.QueryResponse;return proto.nebula.service.QueryResponse.deserializeBinaryFromReader(r,t)},proto.nebula.service.QueryResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=new proto.nebula.service.Statistics;t.readMessage(r,proto.nebula.service.Statistics.deserializeBinaryFromReader),e.setStats(r);break;case 2:r=t.readEnum();e.setType(r);break;case 3:r=t.readBytes();e.setData(r);break;default:t.skipField()}}return e},proto.nebula.service.QueryResponse.prototype.serializeBinary=function(){var e=new i.BinaryWriter;return proto.nebula.service.QueryResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.nebula.service.QueryResponse.serializeBinaryToWriter=function(e,t){var r=void 0;null!=(r=e.getStats())&&t.writeMessage(1,r,proto.nebula.service.Statistics.serializeBinaryToWriter),0!==(r=e.getType())&&t.writeEnum(2,r),(r=e.getData_asU8()).length>0&&t.writeBytes(3,r)},proto.nebula.service.QueryResponse.prototype.getStats=function(){return i.Message.getWrapperField(this,proto.nebula.service.Statistics,1)},proto.nebula.service.QueryResponse.prototype.setStats=function(e){i.Message.setWrapperField(this,1,e)},proto.nebula.service.QueryResponse.prototype.clearStats=function(){this.setStats(void 0)},proto.nebula.service.QueryResponse.prototype.hasStats=function(){return null!=i.Message.getField(this,1)},proto.nebula.service.QueryResponse.prototype.getType=function(){return i.Message.getFieldWithDefault(this,2,0)},proto.nebula.service.QueryResponse.prototype.setType=function(e){i.Message.setProto3EnumField(this,2,e)},proto.nebula.service.QueryResponse.prototype.getData=function(){return i.Message.getFieldWithDefault(this,3,"")},proto.nebula.service.QueryResponse.prototype.getData_asB64=function(){return i.Message.bytesAsB64(this.getData())},proto.nebula.service.QueryResponse.prototype.getData_asU8=function(){return i.Message.bytesAsU8(this.getData())},proto.nebula.service.QueryResponse.prototype.setData=function(e){i.Message.setProto3BytesField(this,3,e)},proto.nebula.service.Operation={EQ:0,NEQ:1,MORE:2,LESS:3,LIKE:4},proto.nebula.service.Rollup={SUM:0,COUNT:1,MAX:2,MIN:3,AVG:4,P99:5},proto.nebula.service.DataType={NATIVE:0,JSON:1},s.object.extend(t,proto.nebula.service)},function(e,t,r){"use strict";r.r(t);const{EchoRequest:i,EchoResponse:s,TableStateRequest:o,TableStateResponse:n,Operation:a,Predicate:u,PredicateAnd:l,PredicateOr:c,Rollup:p,Metric:d,Order:b,QueryRequest:v,Statistics:y,DataType:g,QueryResponse:f}=r(0),{EchoClient:R,V1Client:h}=r(3);t.default={EchoClient:R,V1Client:h,EchoRequest:i,TableStateRequest:o,Operation:a,Predicate:u,PredicateAnd:l,PredicateOr:c,Rollup:p,Metric:d,Order:b,QueryRequest:v,Statistics:y,DataType:g,QueryResponse:f,test:function(){console.log("test")}}},function(e,t){e.exports=require("google-protobuf")},function(e,t,r){"use strict";var i=r(4),s=r(0);var o=t.EchoService={echoBack:{path:"/nebula.service.Echo/EchoBack",requestStream:!1,responseStream:!1,requestType:s.EchoRequest,responseType:s.EchoResponse,requestSerialize:function(e){if(!(e instanceof s.EchoRequest))throw new Error("Expected argument of type nebula.service.EchoRequest");return new Buffer(e.serializeBinary())},requestDeserialize:function(e){return s.EchoRequest.deserializeBinary(new Uint8Array(e))},responseSerialize:function(e){if(!(e instanceof s.EchoResponse))throw new Error("Expected argument of type nebula.service.EchoResponse");return new Buffer(e.serializeBinary())},responseDeserialize:function(e){return s.EchoResponse.deserializeBinary(new Uint8Array(e))}}};t.EchoClient=i.makeGenericClientConstructor(o);var n=t.V1Service={state:{path:"/nebula.service.V1/State",requestStream:!1,responseStream:!1,requestType:s.TableStateRequest,responseType:s.TableStateResponse,requestSerialize:function(e){if(!(e instanceof s.TableStateRequest))throw new Error("Expected argument of type nebula.service.TableStateRequest");return new Buffer(e.serializeBinary())},requestDeserialize:function(e){return s.TableStateRequest.deserializeBinary(new Uint8Array(e))},responseSerialize:function(e){if(!(e instanceof s.TableStateResponse))throw new Error("Expected argument of type nebula.service.TableStateResponse");return new Buffer(e.serializeBinary())},responseDeserialize:function(e){return s.TableStateResponse.deserializeBinary(new Uint8Array(e))}},query:{path:"/nebula.service.V1/Query",requestStream:!1,responseStream:!1,requestType:s.QueryRequest,responseType:s.QueryResponse,requestSerialize:function(e){if(!(e instanceof s.QueryRequest))throw new Error("Expected argument of type nebula.service.QueryRequest");return new Buffer(e.serializeBinary())},requestDeserialize:function(e){return s.QueryRequest.deserializeBinary(new Uint8Array(e))},responseSerialize:function(e){if(!(e instanceof s.QueryResponse))throw new Error("Expected argument of type nebula.service.QueryResponse");return new Buffer(e.serializeBinary())},responseDeserialize:function(e){return s.QueryResponse.deserializeBinary(new Uint8Array(e))}}};t.V1Client=i.makeGenericClientConstructor(n)},function(e,t){e.exports=require("grpc")}]).default);