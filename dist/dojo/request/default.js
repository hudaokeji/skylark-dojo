/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","require","../has"],function(o,e,r){var t,n=r("config-requestProvider");r("host-browser")||r("host-webworker")?t="./xhr":r("host-node")&&(t="./node"),n||(n=t),o.getPlatformDefaultId=function(){return t},o.load=function(o,r,f,i){e(["platform"==o?t:n],function(o){f(o)})}});
//# sourceMappingURL=../sourcemaps/request/default.js.map
