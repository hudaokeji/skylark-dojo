/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./has"],function(t){var e,n=function(){return this}(),a=document,o={loaded:1,complete:1},r="string"!=typeof a.readyState,c=!!o[a.readyState],i=[];function d(t){i.push(t),c&&f()}function f(){if(!e){for(e=!0;i.length;)try{i.shift()(a)}catch(t){console.error(t,"in domReady callback",t.stack)}e=!1,d._onQEmpty()}}if(d.load=function(t,e,n){d(n)},d._Q=i,d._onQEmpty=function(){},r&&(a.readyState="loading"),!c){var u=[],l=function(t){t=t||n.event,c||"readystatechange"==t.type&&!o[a.readyState]||(r&&(a.readyState="complete"),c=1,f())},h=function(t,e){t.addEventListener(e,l,!1),i.push(function(){t.removeEventListener(e,l,!1)})};if(!t("dom-addeventlistener")){h=function(t,e){e="on"+e,t.attachEvent(e,l),i.push(function(){t.detachEvent(e,l)})};var s=a.createElement("div");try{s.doScroll&&null===n.frameElement&&u.push(function(){try{return s.doScroll("left"),1}catch(t){}})}catch(t){}}if(h(a,"DOMContentLoaded"),h(n,"load"),"onreadystatechange"in a?h(a,"readystatechange"):r||u.push(function(){return o[a.readyState]}),u.length){var y=function(){if(!c){for(var t=u.length;t--;)if(u[t]())return void l("poller");setTimeout(y,30)}};y()}}return d});
//# sourceMappingURL=sourcemaps/domReady.js.map
