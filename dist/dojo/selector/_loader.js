/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../has","require"],function(e,t){"use strict";var c,n=document.createElement("div");e.add("dom-qsa2.1",!!n.querySelectorAll),e.add("dom-qsa3",function(){try{return n.innerHTML="<p class='TEST'></p>",1==n.querySelectorAll(".TEST:empty").length}catch(e){}});return{load:function(n,a,r,s){var i=t;if("?"==(n="css2"==(n="default"==n?e("config-selectorEngine")||"css3":n)||"lite"==n?"./lite":"css2.1"==n?e("dom-qsa2.1")?"./lite":"./acme":"css3"==n?e("dom-qsa3")?"./lite":"./acme":"acme"==n?"./acme":(i=a)&&n).charAt(n.length-1)){n=n.substring(0,n.length-1);var l=!0}if(l&&(e("dom-compliant-qsa")||c))return r(c);i([n],function(e){"./lite"!=n&&(c=e),r(e)})}}});
//# sourceMappingURL=../sourcemaps/selector/_loader.js.map
