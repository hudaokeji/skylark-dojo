/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./_base/lang","./_base/array","./_base/connect","./query","./domReady"],function(n,i,o,e,t,r){n.deprecated("dojo.behavior","Use dojo/on with event delegation (on.selector())");return n.behavior=new function(){function n(n,i){return n[i]||(n[i]=[]),n[i]}var r=0;function a(n,i,o){var e={};for(var t in n)void 0===e[t]&&(o?o.call(i,n[t],t):i(n[t],t))}this._behaviors={},this.add=function(o){a(o,this,function(o,e){var t=n(this._behaviors,e);"number"!=typeof t.id&&(t.id=r++);var u=[];t.push(u),(i.isString(o)||i.isFunction(o))&&(o={found:o}),a(o,function(i,o){n(u,o).push(i)})})};var u=function(n,o,t){i.isString(o)?"found"==t?e.publish(o,[n]):e.connect(n,t,function(){e.publish(o,arguments)}):i.isFunction(o)&&("found"==t?o(n):e.connect(n,t,o))};this.apply=function(){a(this._behaviors,function(n,e){t(e).forEach(function(e){var t=0,r="_dj_behavior_"+n.id;if("number"!=typeof e[r]||(t=e[r])!=n.length){for(var c,f=t;c=n[f];f++)a(c,function(n,t){i.isArray(n)&&o.forEach(n,function(n){u(e,n,t)})});e[r]=n.length}})})}},r(function(){n.behavior.apply()}),n.behavior});
//# sourceMappingURL=sourcemaps/behavior.js.map
