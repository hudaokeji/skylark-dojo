/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../has","require","module"],function(e,require,module){"use strict";if(!1===require.isBrowser)return{load:function(e,t,n,r){n()}};var t,n=document.createElement("div");e.add("dom-qsa2.1",!!n.querySelectorAll),e.add("dom-qsa3",function(){try{return n.innerHTML="<p class='TEST'></p>",1==n.querySelectorAll(".TEST:empty").length}catch(e){}});return{load:function(n,r,c,a){var i=require;if("?"==(n="css2"==(n="default"==n?e("config-selectorEngine")||"css3":n)||"lite"==n?"./lite":"css2.1"==n?e("dom-qsa2.1")?"./lite":"./acme":"css3"==n?e("dom-qsa3")?"./lite":"./acme":"acme"==n?"./acme":(i=r)&&n).charAt(n.length-1)){n=n.substring(0,n.length-1);var s=!0}if(s&&(e("dom-compliant-qsa")||t))return c(t);i([n],function(e){"./lite"!=n&&(t=e),c(e)})}}});
//# sourceMappingURL=../sourcemaps/selector/_loader.js.map
