/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require"],function(e,r,n){var i=e.global.require&&e.global.require.nodeRequire;if(!i)throw new Error("Cannot find the Node.js require");var o=i("module");return{load:function(e,r,n){if(o._findPath&&o._nodeModulePaths){var a=o._findPath(e,o._nodeModulePaths(r.toUrl(".")));!1!==a&&(e=a)}var d,t=define;define=void 0;try{d=i(e)}finally{define=t}n(d)},normalize:function(e,r){return"."===e.charAt(0)&&(e=n.toUrl(r("./"+e))),e}}});
//# sourceMappingURL=sourcemaps/node.js.map
