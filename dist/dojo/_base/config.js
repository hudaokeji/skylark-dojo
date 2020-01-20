/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../has","require"],function(o,require){var a={};if(o("dojo-config-api")){var n,i=require.rawConfig;for(n in i)a[n]=i[n]}else{var r=function(a,i,r){for(n in a)"has"!=n&&o.add(i+n,a[n],0,r)},e=function(){return this}();r(a=o("dojo-loader")?require.rawConfig:e.dojoConfig||e.djConfig||{},"config",1),r(a.has,"",1)}if(!a.locale&&"undefined"!=typeof navigator){var f=navigator.language||navigator.userLanguage;f&&(a.locale=f.toLowerCase())}return a});
//# sourceMappingURL=../sourcemaps/_base/config.js.map
