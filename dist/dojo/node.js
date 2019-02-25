/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require","module"],function(e,r,n,o){if(!1===n.isBrowser)return{load:function(e,r,n,o){n()}};var i=e.global.require&&e.global.require.nodeRequire;if(!i)throw new Error("Cannot find the Node.js require");o=i("module");return{load:function(e,r,n){if(o._findPath&&o._nodeModulePaths){var d=o._findPath(e,o._nodeModulePaths(r.toUrl(".")));!1!==d&&(e=d)}var t,a=define;define=void 0;try{t=i(e)}finally{define=a}n(t)},normalize:function(e,r){return"."===e.charAt(0)&&(e=n.toUrl(r("./"+e))),e}}});
//# sourceMappingURL=sourcemaps/node.js.map
