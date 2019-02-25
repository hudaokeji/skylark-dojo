/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../Evented","../_base/lang","./util"],function(n,t,i){var e=0,o=[].slice,r=t.mixin(new n,{onsend:function(n){e||this.emit("start"),e++},_onload:function(n){this.emit("done",n)},_onerror:function(n){this.emit("done",n)},_ondone:function(n){--e<=0&&(e=0,this.emit("stop"))},emit:function(t,i){var e=n.prototype.emit.apply(this,arguments);return this["_on"+t]&&this["_on"+t].apply(this,o.call(arguments,1)),e}});function s(n,t){return r.on(n,t)}return s.emit=function(n,t,i){return r.emit(n,t,i)},i.notify=s});
//# sourceMappingURL=../sourcemaps/request/notify.js.map
