/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./Evented"],function(n){var e=new n;return{publish:function(n,r){return e.emit.apply(e,arguments)},subscribe:function(n,r){return e.on.apply(e,arguments)}}});
//# sourceMappingURL=sourcemaps/topic.js.map
