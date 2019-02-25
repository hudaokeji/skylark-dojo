/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(e,t,r,n,o,a){var i={innerHTML:1,textContent:1,className:1,htmlFor:t("ie"),value:1},s={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};function u(e,t){var r=e.getAttributeNode&&e.getAttributeNode(t);return!!r&&r.specified}e.has=function(e,t){var r=t.toLowerCase();return i[a.names[r]||t]||u(n.byId(e),s[r]||t)},e.get=function(e,t){e=n.byId(e);var o=t.toLowerCase(),f=a.names[o]||t,d=i[f],l=e[f];if(d&&void 0!==l)return l;if("textContent"==f)return a.get(e,f);if("href"!=f&&("boolean"==typeof l||r.isFunction(l)))return l;var b=s[o]||t;return u(e,b)?e.getAttribute(b):null},e.set=function(t,u,f){if(t=n.byId(t),2==arguments.length){for(var d in u)e.set(t,d,u[d]);return t}var l=u.toLowerCase(),b=a.names[l]||u,c=i[b];return"style"==b&&"string"!=typeof f?(o.set(t,f),t):c||"boolean"==typeof f||r.isFunction(f)?a.set(t,u,f):(t.setAttribute(s[l]||u,f),t)},e.remove=function(e,t){n.byId(e).removeAttribute(s[t.toLowerCase()]||t)},e.getNodeProp=function(e,t){e=n.byId(e);var r=t.toLowerCase(),o=a.names[r]||t;if(o in e&&"href"!=o)return e[o];var i=s[r]||t;return u(e,i)?e.getAttribute(i):null}});
//# sourceMappingURL=sourcemaps/dom-attr.js.map
