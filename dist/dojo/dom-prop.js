/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","./_base/kernel","./sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(e,t,n,o,r,a,d,s){var i={},c=0,l=t._scopeName+"attrid";n.add("dom-textContent",function(e,t,n){return"textContent"in n}),e.names={class:"className",for:"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",textcontent:"textContent",valuetype:"valueType"},e.get=function(t,o){t=r.byId(t);var a=o.toLowerCase(),d=e.names[a]||o;return"textContent"!=d||n("dom-textContent")?t[d]:function e(t){for(var n,o="",r=t.childNodes,a=0;n=r[a];a++)8!=n.nodeType&&(1==n.nodeType?o+=e(n):o+=n.nodeValue);return o}(t)},e.set=function(t,u,f){if(t=r.byId(t),2==arguments.length&&"string"!=typeof u){for(var m in u)e.set(t,m,u[m]);return t}var p=u.toLowerCase(),y=e.names[p]||u;if("style"==y&&"string"!=typeof f)return a.set(t,f),t;if("innerHTML"==y)return n("ie")&&t.tagName.toLowerCase()in{col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1}?(d.empty(t),t.appendChild(d.toDom(f,t.ownerDocument))):t[y]=f,t;if("textContent"==y&&!n("dom-textContent"))return d.empty(t),t.appendChild(t.ownerDocument.createTextNode(f)),t;if(o.isFunction(f)){var x=t[l];x||(x=c++,t[l]=x),i[x]||(i[x]={});var C=i[x][y];if(C)s.disconnect(C);else try{delete t[y]}catch(e){}return f?i[x][y]=s.connect(t,y,f):t[y]=null,t}return t[y]=f,t}});
//# sourceMappingURL=sourcemaps/dom-prop.js.map
