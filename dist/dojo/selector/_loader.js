/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../has","require","module"],function(e,t,n){"use strict";if(!1===t.isBrowser)return{load:function(e,t,n,r){n()}};var r,c=document.createElement("div");e.add("dom-qsa2.1",!!c.querySelectorAll),e.add("dom-qsa3",function(){try{return c.innerHTML="<p class='TEST'></p>",1==c.querySelectorAll(".TEST:empty").length}catch(e){}});return{load:function(n,c,a,i){var s=t;if("?"==(n="css2"==(n="default"==n?e("config-selectorEngine")||"css3":n)||"lite"==n?"./lite":"css2.1"==n?e("dom-qsa2.1")?"./lite":"./acme":"css3"==n?e("dom-qsa3")?"./lite":"./acme":"acme"==n?"./acme":(s=c)&&n).charAt(n.length-1)){n=n.substring(0,n.length-1);var l=!0}if(l&&(e("dom-compliant-qsa")||r))return a(r);s([n],function(e){"./lite"!=n&&(r=e),a(e)})}}});
//# sourceMappingURL=../sourcemaps/selector/_loader.js.map
