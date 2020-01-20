/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../sniff","../_base/kernel","../_base/lang","../dom"],function(e,t,n,a){var exports=n.getObject("dojo.dnd",!0);return exports.getCopyKeyState=function(t){return t[e("mac")?"metaKey":"ctrlKey"]},exports._uniqueId=0,exports.getUniqueId=function(){var e;do{e=t._scopeName+"Unique"+ ++exports._uniqueId}while(a.byId(e));return e},exports._empty={},exports.isFormElement=function(e){var t=e.target;return 3==t.nodeType&&(t=t.parentNode)," a button textarea input select option ".indexOf(" "+t.tagName.toLowerCase()+" ")>=0},exports});
//# sourceMappingURL=../sourcemaps/dnd/common.js.map
