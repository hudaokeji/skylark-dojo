/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(e,t,n){"use strict";if(n("dom")){var r=window.ScriptEngineMajorVersion;n.add("jscript",r&&r()+ScriptEngineMinorVersion()/10),n.add("event-orientationchange",n("touch")&&!n("android")),n.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation),n.add("event-focusin",function(e,t,n){return"onfocusin"in n}),n("touch")&&n.add("touch-can-modify-event-delegate",function(){var e=function(){};e.prototype=document.createEvent("MouseEvents");try{var t=new e;return t.target=null,null===t.target}catch(e){return!1}})}var o=function(e,t,n,r){return"function"!=typeof e.on||"function"==typeof t||e.nodeType?o.parse(e,t,n,a,r,this):e.on(t,n)};o.pausable=function(e,t,n,r){var i,a=o(e,t,function(){if(!i)return n.apply(this,arguments)},r);return a.pause=function(){i=!0},a.resume=function(){i=!1},a},o.once=function(e,t,n,r){var i=o(e,t,function(){return i.remove(),n.apply(this,arguments)});return i},o.parse=function(e,t,n,r,i,a){if(t.call)return t.call(a,e,n);if(t instanceof Array)c=t;else if(t.indexOf(",")>-1)var c=t.split(/\s*,\s*/);if(c){for(var u,s=[],f=0;u=c[f++];)s.push(o.parse(e,u,n,r,i,a));return s.remove=function(){for(var e=0;e<s.length;e++)s[e].remove()},s}return r(e,t,n,i,a)};var i=/^touch/;function a(e,t,r,a,c){var u=t.match(/(.*):(.*)/);if(u)return t=u[2],u=u[1],o.selector(u,t).call(c,e,r);if(n("touch")&&(i.test(t)&&(r=_(r)),n("event-orientationchange")||"orientationchange"!=t||(t="resize",e=window,r=_(r))),p&&(r=p(r)),e.addEventListener){var s=t in l,f=s?l[t]:t;return e.addEventListener(f,r,s),{remove:function(){e.removeEventListener(f,r,s)}}}if(t="on"+t,m&&e.attachEvent)return m(e,t,r);throw new Error("Target must be an event emitter")}function c(){this.cancelable=!1,this.defaultPrevented=!0}function u(){this.bubbles=!1}o.matches=function(e,n,r,o,i){for(i=i&&i.matches?i:t.query,o=!1!==o,1!=e.nodeType&&(e=e.parentNode);!i.matches(e,n,r);)if(e==r||!1===o||!(e=e.parentNode)||1!=e.nodeType)return!1;return e},o.selector=function(e,t,n){return function(r,i){var a="function"==typeof e?{matches:e}:this,c=t.bubble;function u(t){return o.matches(t,e,r,n,a)}return c?o(r,c(u),i):o(r,t,function(e){var t=u(e.target);if(t)return i.call(t,e)})}};var s=[].slice,f=o.emit=function(e,t,n){var r=s.call(arguments,2),o="on"+t;if("parentNode"in e){var i=r[0]={};for(var a in n)i[a]=n[a];i.preventDefault=c,i.stopPropagation=u,i.target=e,i.type=t,n=i}do{e[o]&&e[o].apply(e,r)}while(n&&n.bubbles&&(e=e.parentNode));return n&&n.cancelable&&n},l=n("event-focusin")?{}:{focusin:"focus",focusout:"blur"};if(!n("event-stopimmediatepropagation"))var d=function(){this.immediatelyStopped=!0,this.modified=!0},p=function(e){return function(t){if(!t.immediatelyStopped)return t.stopImmediatePropagation=d,e.apply(this,arguments)}};if(n("dom-addeventlistener"))o.emit=function(e,t,n){if(e.dispatchEvent&&document.createEvent){var r=(e.ownerDocument||document).createEvent("HTMLEvents");for(var i in r.initEvent(t,!!n.bubbles,!!n.cancelable),n)i in r||(r[i]=n[i]);return e.dispatchEvent(r)&&r}return f.apply(o,arguments)};else{o._fixEvent=function(e,t){e||(e=(t&&(t.ownerDocument||t.document||t).parentWindow||window).event);if(!e)return e;try{v&&e.type==v.type&&e.srcElement==v.target&&(e=v)}catch(e){}if(!e.target)switch(e.target=e.srcElement,e.currentTarget=t||e.srcElement,"mouseover"==e.type&&(e.relatedTarget=e.fromElement),"mouseout"==e.type&&(e.relatedTarget=e.toElement),e.stopPropagation||(e.stopPropagation=w,e.preventDefault=g),e.type){case"keypress":var n="charCode"in e?e.charCode:e.keyCode;10==n?(n=0,e.keyCode=13):13==n||27==n?n=0:3==n&&(n=99),e.charCode=n,y(e)}return e};var v,h=function(e){this.handle=e};h.prototype.remove=function(){delete _dojoIEListeners_[this.handle]};var m=function(t,r,i){if(i=function(e){return function(t){t=o._fixEvent(t,this);var n=e.call(this,t);return t.modified&&(v||setTimeout(function(){v=null}),v=t),n}}(i),((t.ownerDocument?t.ownerDocument.parentWindow:t.parentWindow||t.window||window)!=top||n("jscript")<5.8)&&!n("config-_allow_leaks")){"undefined"==typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var a,c=t[r];if(!c||!c.listeners){var u=c;(c=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}")).listeners=[],t[r]=c,c.global=this,u&&c.listeners.push(_dojoIEListeners_.push(u)-1)}return c.listeners.push(a=c.global._dojoIEListeners_.push(i)-1),new h(a)}return e.after(t,r,i,!0)},y=function(e){e.keyChar=e.charCode?String.fromCharCode(e.charCode):"",e.charOrCode=e.keyChar||e.keyCode},w=function(){this.cancelBubble=!0},g=o._preventDefault=function(){if(this.bubbledKeyCode=this.keyCode,this.ctrlKey)try{this.keyCode=0}catch(e){}this.defaultPrevented=!0,this.returnValue=!1,this.modified=!0}}if(n("touch"))var E=function(){},b=window.orientation,_=function(e){return function(t){var r=t.corrected;if(!r){var o=t.type;try{delete t.type}catch(e){}if(t.type){if(n("touch-can-modify-event-delegate"))E.prototype=t,r=new E;else for(var i in r={},t)r[i]=t[i];r.preventDefault=function(){t.preventDefault()},r.stopPropagation=function(){t.stopPropagation()}}else(r=t).type=o;if(t.corrected=r,"resize"==o)return b==window.orientation?null:(b=window.orientation,r.type="orientationchange",e.call(this,r));"rotation"in r||(r.rotation=0,r.scale=1);var a=r.changedTouches[0];for(var c in a)delete r[c],r[c]=a[c]}return e.call(this,r)}};return o});
//# sourceMappingURL=sourcemaps/on.js.map
