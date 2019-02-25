/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../sniff","../_base/kernel","../_base/lang","../dom"],function(e,t,n,a){var o=n.getObject("dojo.dnd",!0);return o.getCopyKeyState=function(t){return t[e("mac")?"metaKey":"ctrlKey"]},o._uniqueId=0,o.getUniqueId=function(){var e;do{e=t._scopeName+"Unique"+ ++o._uniqueId}while(a.byId(e));return e},o._empty={},o.isFormElement=function(e){var t=e.target;return 3==t.nodeType&&(t=t.parentNode)," a button textarea input select option ".indexOf(" "+t.tagName.toLowerCase()+" ")>=0},o});
//# sourceMappingURL=../sourcemaps/dnd/common.js.map
