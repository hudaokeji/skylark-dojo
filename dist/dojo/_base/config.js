/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../has","require"],function(o,a){var n={};if(o("dojo-config-api")){var i,r=a.rawConfig;for(i in r)n[i]=r[i]}else{var e=function(a,n,r){for(i in a)"has"!=i&&o.add(n+i,a[i],0,r)},f=function(){return this}();e(n=o("dojo-loader")?a.rawConfig:f.dojoConfig||f.djConfig||{},"config",1),e(n.has,"",1)}if(!n.locale&&"undefined"!=typeof navigator){var g=navigator.language||navigator.userLanguage;g&&(n.locale=g.toLowerCase())}return n});
//# sourceMappingURL=../sourcemaps/_base/config.js.map
