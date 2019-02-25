/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define([],function(){"use strict";var e,r=0;function n(n){return function(t,i,a,u){var v,o=t[i];o&&o.target==t||(t[i]=v=function(){for(var n=r,t=arguments,i=v.before;i;)t=i.advice.apply(this,t)||t,i=i.next;if(v.around)var a=v.around.advice(this,t);for(var u=v.after;u&&u.id<n;){if(u.receiveArguments){var o=u.advice.apply(this,t);a=o===e?a:o}else a=u.advice.call(this,a,t);u=u.next}return a},o&&(v.around={advice:function(e,r){return o.apply(e,r)}}),v.target=t);var f=function(e,n,t,i){var a,u=e[n],v="around"==n;if(v){var o=t(function(){return u.advice(this,arguments)});a={remove:function(){o&&(o=e=t=null)},advice:function(e,r){return o?o.apply(e,r):u.advice(e,r)}}}else a={remove:function(){if(a.advice){var r=a.previous,i=a.next;i||r?(r?r.next=i:e[n]=i,i&&(i.previous=r)):delete e[n],e=t=a.advice=null}},id:r++,advice:t,receiveArguments:i};if(u&&!v)if("after"==n){for(;u.next&&(u=u.next););u.next=a,a.previous=u}else"before"==n&&(e[n]=a,a.next=u,u.previous=a);else e[n]=a;return a}(v||o,n,a,u);return a=null,f}}var t=n("after");return{before:n("before"),around:n("around"),after:t}});
//# sourceMappingURL=sourcemaps/aspect.js.map
