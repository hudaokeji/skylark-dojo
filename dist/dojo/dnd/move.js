/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/declare","../dom-geometry","../dom-style","./common","./Mover","./Moveable"],function(t,n,o,e,r,i){var a=t("dojo.dnd.move.constrainedMoveable",i,{constraints:function(){},within:!1,constructor:function(t,n){n||(n={}),this.constraints=n.constraints,this.within=n.within},onFirstMove:function(t){var o=this.constraintBox=this.constraints.call(this,t);if(o.r=o.l+o.w,o.b=o.t+o.h,this.within){var e=n.getMarginSize(t.node);o.r-=e.w,o.b-=e.h}},onMove:function(t,n){var o=this.constraintBox,e=t.node.style;this.onMoving(t,n),n.l=n.l<o.l?o.l:o.r<n.l?o.r:n.l,n.t=n.t<o.t?o.t:o.b<n.t?o.b:n.t,e.left=n.l+"px",e.top=n.t+"px",this.onMoved(t,n)}});return{constrainedMoveable:a,boxConstrainedMoveable:t("dojo.dnd.move.boxConstrainedMoveable",a,{box:{},constructor:function(t,n){var o=n&&n.box;this.constraints=function(){return o}}}),parentConstrainedMoveable:t("dojo.dnd.move.parentConstrainedMoveable",a,{area:"content",constructor:function(t,e){var r=e&&e.area;this.constraints=function(){var t=this.node.parentNode,e=o.getComputedStyle(t),i=n.getMarginBox(t,e);if("margin"==r)return i;var a=n.getMarginExtents(t,e);return i.l+=a.l,i.t+=a.t,i.w-=a.w,i.h-=a.h,"border"==r?i:(a=n.getBorderExtents(t,e),i.l+=a.l,i.t+=a.t,i.w-=a.w,i.h-=a.h,"padding"==r?i:(a=n.getPadExtents(t,e),i.l+=a.l,i.t+=a.t,i.w-=a.w,i.h-=a.h,i))}}})}});
//# sourceMappingURL=../sourcemaps/dnd/move.js.map
