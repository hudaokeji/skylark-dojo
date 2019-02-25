/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./aspect","./on"],function(t,n){"use strict";var r=t.after;function e(){}return e.prototype={on:function(t,e){return n.parse(this,t,e,function(t,n){return r(t,"on"+n,e,!0)})},emit:function(t,r){var e=[this];return e.push.apply(e,arguments),n.emit.apply(n,e)}},e});
//# sourceMappingURL=sourcemaps/Evented.js.map
