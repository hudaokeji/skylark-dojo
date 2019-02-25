/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel","../has","./lang"],function(r,n,t){var e,f={};function i(r){return f[r]=new Function("item","index","array",r)}function o(r){var n=!r;return function(t,e,o){var l,u=0,a=t&&t.length||0;if(a&&"string"==typeof t&&(t=t.split("")),"string"==typeof e&&(e=f[e]||i(e)),o){for(;u<a;++u)if(l=!e.call(o,t[u],u,t),r^l)return!l}else for(;u<a;++u)if(l=!e(t[u],u,t),r^l)return!l;return n}}function l(r){var n=1,t=0,f=0;return r||(n=t=f=-1),function(i,o,l,a){if(a&&n>0)return u.lastIndexOf(i,o,l);var s,c=i&&i.length||0,p=r?c+f:t;for(l===e?s=r?t:c+f:l<0?(s=c+l)<0&&(s=t):s=l>=c?c+f:l,c&&"string"==typeof i&&(i=i.split(""));s!=p;s+=n)if(i[s]==o)return s;return-1}}var u={every:o(!1),some:o(!0),indexOf:l(!0),lastIndexOf:l(!1),forEach:function(r,n,t){var e=0,o=r&&r.length||0;if(o&&"string"==typeof r&&(r=r.split("")),"string"==typeof n&&(n=f[n]||i(n)),t)for(;e<o;++e)n.call(t,r[e],e,r);else for(;e<o;++e)n(r[e],e,r)},map:function(r,n,t,e){var o=0,l=r&&r.length||0,u=new(e||Array)(l);if(l&&"string"==typeof r&&(r=r.split("")),"string"==typeof n&&(n=f[n]||i(n)),t)for(;o<l;++o)u[o]=n.call(t,r[o],o,r);else for(;o<l;++o)u[o]=n(r[o],o,r);return u},filter:function(r,n,t){var e,o=0,l=r&&r.length||0,u=[];if(l&&"string"==typeof r&&(r=r.split("")),"string"==typeof n&&(n=f[n]||i(n)),t)for(;o<l;++o)e=r[o],n.call(t,e,o,r)&&u.push(e);else for(;o<l;++o)n(e=r[o],o,r)&&u.push(e);return u},clearCache:function(){f={}}};return n("extend-dojo")&&t.mixin(r,u),u});
//# sourceMappingURL=../sourcemaps/_base/array.js.map
