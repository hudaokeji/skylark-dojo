/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./_base/lang"],function(n,r){var e={};return r.setObject("dojo.regexp",e),e.escapeString=function(n,r){return n.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,function(n){return r&&-1!=r.indexOf(n)?n:"\\"+n})},e.buildGroupRE=function(n,r,t){if(!(n instanceof Array))return r(n);for(var u=[],o=0;o<n.length;o++)u.push(r(n[o]));return e.group(u.join("|"),t)},e.group=function(n,r){return"("+(r?"?:":"")+n+")"},e});
//# sourceMappingURL=sourcemaps/regexp.js.map
