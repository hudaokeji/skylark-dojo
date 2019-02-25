/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../on","../_base/window","../dom-construct","../domReady!"],function(n,c,t){var i,o,r=t.create("div",null,c.body());n.once(r,"click",function(n){i=n}),r.click();try{o=void 0===i.clientX}catch(n){o=!0}finally{t.destroy(r)}return function(n){return o?function(c){n.call(this,function(n){var c,t={};for(c in n)t[c]=n[c];return t}(c))}:n}});
//# sourceMappingURL=../sourcemaps/on/asyncEventListener.js.map
