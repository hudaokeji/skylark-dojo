/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["exports","module","require","../has"],function(o,r,e,n){if(!1===e.isBrowser)return{load:function(o,r,e,n){e()}};var t,f=n("config-requestProvider");n("host-browser")||n("host-webworker")?t="./xhr":n("host-node")&&(t="./node"),f||(f=t),o.getPlatformDefaultId=function(){return t},o.load=function(o,r,n,i){e(["platform"==o?t:f],function(o){n(o)})}});
//# sourceMappingURL=../sourcemaps/request/default.js.map
