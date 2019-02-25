/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./sniff","./_base/window"],function(e,t){if(e("ie")<=7)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){}var r={};e("ie")?r.byId=function(e,r){if("string"!=typeof e)return e;var n=r||t.doc,i=e&&n.getElementById(e);if(i&&(i.attributes.id.value==e||i.id==e))return i;var u=n.all[e];u&&!u.nodeName||(u=[u]);for(var a=0;i=u[a++];)if(i.attributes&&i.attributes.id&&i.attributes.id.value==e||i.id==e)return i}:r.byId=function(e,r){return("string"==typeof e?(r||t.doc).getElementById(e):e)||null},r.isDescendant=function(e,t){try{for(e=r.byId(e),t=r.byId(t);e;){if(e==t)return!0;e=e.parentNode}}catch(e){}return!1},e.add("css-user-select",function(e,t,r){if(!r)return!1;var n=r.style,i=["Khtml","O","Moz","Webkit"],u=i.length,a="userSelect";do{if(void 0!==n[a])return a}while(u--&&(a=i[u]+"UserSelect"));return!1});var n=e("css-user-select");return r.setSelectable=n?function(e,t){r.byId(e).style[n]=t?"":"none"}:function(e,t){var n=(e=r.byId(e)).getElementsByTagName("*"),i=n.length;if(t)for(e.removeAttribute("unselectable");i--;)n[i].removeAttribute("unselectable");else for(e.setAttribute("unselectable","on");i--;)n[i].setAttribute("unselectable","on")},r});
//# sourceMappingURL=sourcemaps/dom.js.map
