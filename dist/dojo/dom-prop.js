/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","./_base/kernel","./sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(exports,e,t,n,o,r,a,d){var s={},i=0,c=e._scopeName+"attrid";t.add("dom-textContent",function(e,t,n){return"textContent"in n}),exports.names={class:"className",for:"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",textcontent:"textContent",valuetype:"valueType"},exports.get=function(e,n){e=o.byId(e);var r=n.toLowerCase(),a=exports.names[r]||n;return"textContent"!=a||t("dom-textContent")?e[a]:function e(t){for(var n,o="",r=t.childNodes,a=0;n=r[a];a++)8!=n.nodeType&&(1==n.nodeType?o+=e(n):o+=n.nodeValue);return o}(e)},exports.set=function(e,l,u){if(e=o.byId(e),2==arguments.length&&"string"!=typeof l){for(var f in l)exports.set(e,f,l[f]);return e}var m=l.toLowerCase(),p=exports.names[m]||l;if("style"==p&&"string"!=typeof u)return r.set(e,u),e;if("innerHTML"==p)return t("ie")&&e.tagName.toLowerCase()in{col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1}?(a.empty(e),e.appendChild(a.toDom(u,e.ownerDocument))):e[p]=u,e;if("textContent"==p&&!t("dom-textContent"))return a.empty(e),e.appendChild(e.ownerDocument.createTextNode(u)),e;if(n.isFunction(u)){var y=e[c];y||(y=i++,e[c]=y),s[y]||(s[y]={});var x=s[y][p];if(x)d.disconnect(x);else try{delete e[p]}catch(e){}return u?s[y][p]=d.connect(e,p,u):e[p]=null,e}return e[p]=u,e}});
//# sourceMappingURL=sourcemaps/dom-prop.js.map
