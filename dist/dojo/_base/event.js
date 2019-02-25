/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel","../on","../has","../dom-geometry"],function(e,n,t,i){if(n._fixEvent){var o=n._fixEvent;n._fixEvent=function(e,n){return(e=o(e,n))&&i.normalizeEvent(e),e}}var f={fix:function(e,t){return n._fixEvent?n._fixEvent(e,t):e},stop:function(e){t("dom-addeventlistener")||e&&e.preventDefault?(e.preventDefault(),e.stopPropagation()):((e=e||window.event).cancelBubble=!0,n._preventDefault.call(e))}};return t("extend-dojo")&&(e.fixEvent=f.fix,e.stopEvent=f.stop),f});
//# sourceMappingURL=../sourcemaps/_base/event.js.map
