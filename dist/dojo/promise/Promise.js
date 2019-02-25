/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/lang"],function(n){"use strict";function t(){throw new TypeError("abstract")}return n.extend(function(){},{then:function(n,e,i){t()},cancel:function(n,e){t()},isResolved:function(){t()},isRejected:function(){t()},isFulfilled:function(){t()},isCanceled:function(){t()},always:function(n){return this.then(n,n)},otherwise:function(n){return this.then(null,n)},trace:function(){return this},traceRejected:function(){return this},toString:function(){return"[object Promise]"}})});
//# sourceMappingURL=../sourcemaps/promise/Promise.js.map
