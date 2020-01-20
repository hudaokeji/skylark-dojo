/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["require","./_base/config","./dom-class","./dom-style","./has","./domReady","./_base/window"],function(require,e,o,r,d,n,t){return d.add("highcontrast",function(){var o=t.doc.createElement("div");o.style.cssText='border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("'+(e.blankGif||require.toUrl("./resources/blank.gif"))+'");',t.body().appendChild(o);var n=r.getComputedStyle(o),i=n.backgroundImage,a=n.borderTopColor==n.borderRightColor||i&&("none"==i||"url(invalid-url:)"==i);return d("ie")<=8?o.outerHTML="":t.body().removeChild(o),a}),n(function(){d("highcontrast")&&o.add(t.body(),"dj_a11y")}),d});
//# sourceMappingURL=sourcemaps/hccss.js.map
