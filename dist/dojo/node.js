/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require","module"],function(e,r,require,module){if(!1===require.isBrowser)return{load:function(e,r,n,o){n()}};var n=e.global.require&&e.global.require.nodeRequire;if(!n)throw new Error("Cannot find the Node.js require");module=n("module");return{load:function(e,r,o){if(module._findPath&&module._nodeModulePaths){var i=module._findPath(e,module._nodeModulePaths(r.toUrl(".")));!1!==i&&(e=i)}var d,t=define;define=void 0;try{d=n(e)}finally{define=t}o(d)},normalize:function(e,r){return"."===e.charAt(0)&&(e=require.toUrl(r("./"+e))),e}}});
//# sourceMappingURL=sourcemaps/node.js.map
