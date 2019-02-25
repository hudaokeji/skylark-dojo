/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(e,t,n,o,u){var i,r;function s(e,n){var u=function(u,i){return t(u,e,function(e){return n?n(e,i):o.isDescendant(e.relatedTarget,u)?void 0:i.call(this,e)})};return u.bubble=function(t){return s(e,function(e,n){var o=t(e.target),u=e.relatedTarget;if(o&&o!=(u&&1==u.nodeType&&t(u)))return n.call(o,e)})},u}return n.add("dom-quirks",u.doc&&"BackCompat"==u.doc.compatMode),n.add("events-mouseenter",u.doc&&"onmouseenter"in u.doc.createElement("div")),n.add("events-mousewheel",u.doc&&"onmousewheel"in u.doc),i=n("dom-quirks")&&n("ie")||!n("dom-addeventlistener")?{LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,t){return e.button&t},isLeft:function(e){return 1&e.button},isMiddle:function(e){return 4&e.button},isRight:function(e){return 2&e.button}}:{LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,t){return e.button==t},isLeft:function(e){return 0==e.button},isMiddle:function(e){return 1==e.button},isRight:function(e){return 2==e.button}},e.mouseButtons=i,r=n("events-mousewheel")?"mousewheel":function(e,n){return t(e,"DOMMouseScroll",function(e){e.wheelDelta=-e.detail,n.call(this,e)})},{_eventHandler:s,enter:s("mouseover"),leave:s("mouseout"),wheel:r,isLeft:i.isLeft,isMiddle:i.isMiddle,isRight:i.isRight}});
//# sourceMappingURL=sourcemaps/mouse.js.map
