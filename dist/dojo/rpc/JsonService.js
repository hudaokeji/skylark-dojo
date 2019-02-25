/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/declare","../_base/Deferred","../_base/json","../_base/lang","../_base/xhr","./RpcService"],function(e,t,s,n,i,r){return e("dojo.rpc.JsonService",r,{bustCache:!1,contentType:"application/json-rpc",lastSubmissionId:0,callRemote:function(e,s){var n=new t;return this.bind(e,s,n),n},bind:function(e,t,s,n){i.post({url:n||this.serviceUrl,postData:this.createRequest(e,t),contentType:this.contentType,timeout:this.timeout,handleAs:"json-comment-optional"}).addCallbacks(this.resultCallback(s),this.errorCallback(s))},createRequest:function(e,t){var n={params:t,method:e,id:++this.lastSubmissionId};return s.toJson(n)},parseResults:function(e){if(n.isObject(e)){if("result"in e)return e.result;if("Result"in e)return e.Result;if("ResultSet"in e)return e.ResultSet}return e}})});
//# sourceMappingURL=../sourcemaps/rpc/JsonService.js.map
