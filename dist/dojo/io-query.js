/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/lang"],function(e){var r={};return{objectToQuery:function(n){var o=encodeURIComponent,i=[];for(var t in n){var a=n[t];if(a!=r[t]){var f=o(t)+"=";if(e.isArray(a))for(var s=0,u=a.length;s<u;++s)i.push(f+o(a[s]));else i.push(f+o(a))}}return i.join("&")},queryToObject:function(r){for(var n,o,i,t=decodeURIComponent,a=r.split("&"),f={},s=0,u=a.length;s<u;++s)if((i=a[s]).length){var c=i.indexOf("=");c<0?(n=t(i),o=""):(n=t(i.slice(0,c)),o=t(i.slice(c+1))),"string"==typeof f[n]&&(f[n]=[f[n]]),e.isArray(f[n])?f[n].push(o):f[n]=o}return f}}});
//# sourceMappingURL=sourcemaps/io-query.js.map
