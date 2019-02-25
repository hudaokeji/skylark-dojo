/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./_base/lang"],function(r,t){var i=r.AdapterRegistry=function(r){this.pairs=[],this.returnWrappers=r||!1};return t.extend(i,{register:function(r,t,i,s,e){this.pairs[e?"unshift":"push"]([r,t,i,s])},match:function(){for(var r=0;r<this.pairs.length;r++){var t=this.pairs[r];if(t[1].apply(this,arguments))return t[3]||this.returnWrappers?t[2]:t[2].apply(this,arguments)}throw new Error("No match found")},unregister:function(r){for(var t=0;t<this.pairs.length;t++){if(this.pairs[t][0]==r)return this.pairs.splice(t,1),!0}return!1}}),i});
//# sourceMappingURL=sourcemaps/AdapterRegistry.js.map
