/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","require","./_base/config","./aspect","./_base/lang","./topic","./domReady","./sniff"],function(o,require,t,n,e,i,a,r){o.hash=function(o,t){return arguments.length?("#"==o.charAt(0)&&(o=o.substring(1)),t?g(o):location.href="#"+o,o):d()};var s,h,l,c=t.hashPollFrequency||100;function u(o,t){var n=o.indexOf(t);return n>=0?o.substring(n+1):""}function d(){return u(location.href,"#")}function f(){i.publish("/dojo/hashchange",d())}function m(){d()!==s&&(s=d(),f())}function g(o){if(h){if(h.isTransitioning())return void setTimeout(e.hitch(null,g,o),c);var t=h.iframe.location.href,n=t.indexOf("?");h.iframe.location.replace(t.substring(0,n)+"?"+o)}else location.replace("#"+o),!l&&m()}return a(function(){"onhashchange"in o.global&&(!r("ie")||r("ie")>=8&&"BackCompat"!=document.compatMode)?l=n.after(o.global,"onhashchange",f,!0):document.addEventListener?(s=d(),setInterval(m,c)):document.attachEvent&&(h=new function(){var n=document.createElement("iframe"),i=t.dojoBlankHtmlUrl||require.toUrl("./resources/blank.html");t.useXDomain&&!t.dojoBlankHtmlUrl&&console.warn("dojo/hash: When using cross-domain Dojo builds, please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl to the path on your domain to blank.html"),n.id="dojo-hash-iframe",n.src=i+"?"+d(),n.style.display="none",document.body.appendChild(n),this.iframe=o.global["dojo-hash-iframe"];var a,r,h,l,m,g=this.iframe.location;function b(){s=d(),a=m?s:u(g.href,"?"),r=!1,h=null}this.isTransitioning=function(){return r},this.pollLocation=function(){if(!m)try{var o=u(g.href,"?");document.title!=l&&(l=this.iframe.document.title=document.title)}catch(o){m=!0,console.error("dojo/hash: Error adding history entry. Server unreachable.")}var t=d();if(r&&s===t){if(!m&&o!==h)return void setTimeout(e.hitch(this,this.pollLocation),0);b(),f()}else if(s!==t||!m&&a!==o){if(s!==t)return s=t,r=!0,h=t,n.src=i+"?"+h,m=!1,void setTimeout(e.hitch(this,this.pollLocation),0);m||(location.href="#"+g.search.substring(1),b(),f())}setTimeout(e.hitch(this,this.pollLocation),c)},b(),setTimeout(e.hitch(this,this.pollLocation),c)})}),o.hash});
//# sourceMappingURL=sourcemaps/hash.js.map
