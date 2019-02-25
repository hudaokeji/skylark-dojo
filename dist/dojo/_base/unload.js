/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel","./lang","../on"],function(n,d,o){var a=window,i={addOnWindowUnload:function(i,l){n.windowUnloaded||o(a,"unload",n.windowUnloaded=function(){}),o(a,"unload",d.hitch(i,l))},addOnUnload:function(n,i){o(a,"beforeunload",d.hitch(n,i))}};return n.addOnWindowUnload=i.addOnWindowUnload,n.addOnUnload=i.addOnUnload,i});
//# sourceMappingURL=../sourcemaps/_base/unload.js.map
