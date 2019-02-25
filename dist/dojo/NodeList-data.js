/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./query","./_base/lang","./_base/array","./dom-attr"],function(e,a,t,n,r){var o=a.NodeList,d={},i=0,c="data-dojo-dataid",f=function(e){var a=r.get(e,c);return a||(a="pid"+i++,r.set(e,c,a)),a};o._nodeDataCache=e._nodeDataCache=d;var u=e._nodeData=function(e,a,n){var r,o=f(e);return d[o]||(d[o]={}),1==arguments.length?d[o]:("string"==typeof a?arguments.length>2?d[o][a]=n:r=d[o][a]:r=t.mixin(d[o],a),r)},_=e._removeNodeData=function(e,a){var t=f(e);d[t]&&(a?delete d[t][a]:delete d[t])};return o._gcNodeData=e._gcNodeData=function(){var e=a("["+c+"]").map(f);for(var t in d)n.indexOf(e,t)<0&&delete d[t]},t.extend(o,{data:o._adaptWithCondition(u,function(e){return 0===e.length||1==e.length&&"string"==typeof e[0]}),removeData:o._adaptAsForEach(_)}),o});
//# sourceMappingURL=sourcemaps/NodeList-data.js.map
