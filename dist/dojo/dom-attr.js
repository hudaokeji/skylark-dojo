/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(exports,e,t,r,n,o){var a={innerHTML:1,textContent:1,className:1,htmlFor:e("ie"),value:1},i={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};function s(e,t){var r=e.getAttributeNode&&e.getAttributeNode(t);return!!r&&r.specified}exports.has=function(e,t){var n=t.toLowerCase();return a[o.names[n]||t]||s(r.byId(e),i[n]||t)},exports.get=function(e,n){e=r.byId(e);var u=n.toLowerCase(),f=o.names[u]||n,d=a[f],l=e[f];if(d&&void 0!==l)return l;if("textContent"==f)return o.get(e,f);if("href"!=f&&("boolean"==typeof l||t.isFunction(l)))return l;var b=i[u]||n;return s(e,b)?e.getAttribute(b):null},exports.set=function(e,s,u){if(e=r.byId(e),2==arguments.length){for(var f in s)exports.set(e,f,s[f]);return e}var d=s.toLowerCase(),l=o.names[d]||s,b=a[l];return"style"==l&&"string"!=typeof u?(n.set(e,u),e):b||"boolean"==typeof u||t.isFunction(u)?o.set(e,s,u):(e.setAttribute(i[d]||s,u),e)},exports.remove=function(e,t){r.byId(e).removeAttribute(i[t.toLowerCase()]||t)},exports.getNodeProp=function(e,t){e=r.byId(e);var n=t.toLowerCase(),a=o.names[n]||t;if(a in e&&"href"!=a)return e[a];var u=i[n]||t;return s(e,u)?e.getAttribute(u):null}});
//# sourceMappingURL=sourcemaps/dom-attr.js.map
