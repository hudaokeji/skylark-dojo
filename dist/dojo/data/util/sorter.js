/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../../_base/lang"],function(r){var t={};return r.setObject("dojo.data.util.sorter",t),t.basicComparator=function(r,t){var n=-1;return null===r&&(r=void 0),null===t&&(t=void 0),r==t?n=0:(r>t||null==r)&&(n=1),n},t.createSortFunction=function(r,n){var a,e=[];function o(r,t,n,a){return function(e,o){var u=a.getValue(e,r),i=a.getValue(o,r);return t*n(u,i)}}for(var u=n.comparatorMap,i=t.basicComparator,c=0;c<r.length;c++){var f=(a=r[c]).attribute;if(f){var l=a.descending?-1:1,v=i;u&&("string"!=typeof f&&"toString"in f&&(f=f.toString()),v=u[f]||i),e.push(o(f,l,v,n))}}return function(r,t){for(var n=0;n<e.length;){var a=e[n++](r,t);if(0!==a)return a}return 0}},t});
//# sourceMappingURL=../../sourcemaps/data/util/sorter.js.map
