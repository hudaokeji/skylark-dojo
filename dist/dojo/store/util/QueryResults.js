/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../../_base/array","../../_base/lang","../../when"],function(t,n,r){var e=function(a){if(!a)return a;var u=!!a.then;function o(n){a[n]=function(){var o=arguments,f=r(a,function(r){return Array.prototype.unshift.call(o,r),e(t[n].apply(t,o))});if("forEach"!==n||u)return f}}return u&&(a=n.delegate(a)),o("forEach"),o("filter"),o("map"),null==a.total&&(a.total=r(a,function(t){return t.length})),a};return n.setObject("dojo.store.util.QueryResults",e),e});
//# sourceMappingURL=../../sourcemaps/store/util/QueryResults.js.map
