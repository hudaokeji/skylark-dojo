/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./dom-geometry","./_base/lang","./domReady","./sniff","./_base/window"],function(e,d,i,r,a){var o=a.doc.documentElement,t=r("ie"),l=r("opera"),s=Math.floor,j=r("ff"),_=e.boxModel.replace(/-/,""),m={dj_quirks:r("quirks"),dj_opera:l,dj_khtml:r("khtml"),dj_webkit:r("webkit"),dj_safari:r("safari"),dj_chrome:r("chrome"),dj_gecko:r("mozilla"),dj_ios:r("ios"),dj_android:r("android")};t&&(m.dj_ie=!0,m["dj_ie"+s(t)]=!0,m.dj_iequirks=r("quirks")),j&&(m["dj_ff"+s(j)]=!0),m["dj_"+_]=!0;var c="";for(var f in m)m[f]&&(c+=f+" ");return o.className=d.trim(o.className+" "+c),i(function(){if(!e.isBodyLtr()){var i="dj_rtl dijitRtl "+c.replace(/ /g,"-rtl ");o.className=d.trim(o.className+" "+i+"dj_rtl dijitRtl "+c.replace(/ /g,"-rtl "))}}),r});
//# sourceMappingURL=sourcemaps/uacss.js.map
