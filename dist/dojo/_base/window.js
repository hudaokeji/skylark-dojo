/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel","./lang","../sniff"],function(o,l,a){var n={global:o.global,doc:o.global.document||null,body:function(l){return(l=l||o.doc).body||l.getElementsByTagName("body")[0]},setContext:function(l,a){o.global=n.global=l,o.doc=n.doc=a},withGlobal:function(l,a,i,t){var d=o.global;try{return o.global=n.global=l,n.withDoc.call(null,l.document,a,i,t)}finally{o.global=n.global=d}},withDoc:function(l,i,t,d){var e,r,c,u=n.doc,g=a("quirks"),s=a("ie");try{return o.doc=n.doc=l,o.isQuirks=a.add("quirks","BackCompat"==o.doc.compatMode,!0,!0),a("ie")&&(c=l.parentWindow)&&c.navigator&&(e=parseFloat(c.navigator.appVersion.split("MSIE ")[1])||void 0,(r=l.documentMode)&&5!=r&&Math.floor(e)!=r&&(e=r),o.isIE=a.add("ie",e,!0,!0)),t&&"string"==typeof i&&(i=t[i]),i.apply(t,d||[])}finally{o.doc=n.doc=u,o.isQuirks=a.add("quirks",g,!0,!0),o.isIE=a.add("ie",s,!0,!0)}}};return a("extend-dojo")&&l.mixin(o,n),n});
//# sourceMappingURL=../sourcemaps/_base/window.js.map
