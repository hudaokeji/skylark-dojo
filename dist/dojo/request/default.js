/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","module","require","../has"],function(exports,module,require,o){if(!1===require.isBrowser)return{load:function(o,r,e,n){e()}};var r,e=o("config-requestProvider");o("host-browser")||o("host-webworker")?r="./xhr":o("host-node")&&(r="./node"),e||(e=r),exports.getPlatformDefaultId=function(){return r},exports.load=function(o,n,t,f){require(["platform"==o?r:e],function(o){t(o)})}});
//# sourceMappingURL=../sourcemaps/request/default.js.map
