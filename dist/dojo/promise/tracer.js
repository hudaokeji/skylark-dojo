/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/lang","./Promise","../Evented"],function(t,e,n){"use strict";var r=new n,o=r.emit;function c(t){setTimeout(function(){o.apply(r,t)},0)}return r.emit=null,e.prototype.trace=function(){var e=t._toArray(arguments);return this.then(function(t){c(["resolved",t].concat(e))},function(t){c(["rejected",t].concat(e))},function(t){c(["progress",t].concat(e))}),this},e.prototype.traceRejected=function(){var e=t._toArray(arguments);return this.otherwise(function(t){c(["rejected",t].concat(e))}),this},r});
//# sourceMappingURL=../sourcemaps/promise/tracer.js.map
