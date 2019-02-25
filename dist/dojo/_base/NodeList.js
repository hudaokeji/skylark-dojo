/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel","../query","./array","./html","../NodeList-dom"],function(e,o,n){var t=o.NodeList,r=t.prototype;return r.connect=t._adaptAsForEach(function(){return e.connect.apply(this,arguments)}),r.coords=t._adaptAsMap(e.coords),t.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"],n.forEach(t.events,function(e){var o="on"+e;r[o]=function(e,n){return this.connect(o,e,n)}}),e.NodeList=t,t});
//# sourceMappingURL=../sourcemaps/_base/NodeList.js.map
