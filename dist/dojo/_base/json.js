/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel","../json"],function(dojo,json){return dojo.fromJson=function(js){return eval("("+js+")")},dojo._escapeString=json.stringify,dojo.toJsonIndentStr="\t",dojo.toJson=function(n,o){return json.stringify(n,function(n,o){if(o){var t=o.__json__||o.json;if("function"==typeof t)return t.call(o)}return o},o&&dojo.toJsonIndentStr)},dojo});
//# sourceMappingURL=../sourcemaps/_base/json.js.map
