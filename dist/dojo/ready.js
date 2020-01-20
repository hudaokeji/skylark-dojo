/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require","./has!host-browser?./domReady","./_base/lang"],function(o,r,require,a,n){var e=0,i=[],d=0,t=function(){e=1,o._postLoad=o.config.afterOnLoad=!0,f()},f=function(){if(!d){for(d=1;e&&(!a||0==a._Q.length)&&(!require.idle||require.idle())&&i.length;){var o=i.shift();try{o()}catch(o){if(o.info=o.message,!require.signal)throw o;require.signal("error",o)}}d=0}};require.on&&require.on("idle",f),a&&(a._onQEmpty=f);var s=o.ready=o.addOnLoad=function(r,a,e){var d=n._toArray(arguments);"number"!=typeof r?(e=a,a=r,r=1e3):d.shift(),(e=e?n.hitch.apply(o,d):function(){a()}).priority=r;for(var t=0;t<i.length&&r>=i[t].priority;t++);i.splice(t,0,e),f()};if(r.add("dojo-config-addOnLoad",1),r("dojo-config-addOnLoad")){var c=o.config.addOnLoad;c&&s[n.isArray(c)?"apply":"call"](o,c)}return r("dojo-sync-loader")&&o.config.parseOnLoad&&!o.isAsync&&s(99,function(){o.parser||(o.deprecated("Add explicit require(['dojo/parser']);","","2.0"),require(["dojo/parser"]))}),a?a(t):t(),s});
//# sourceMappingURL=sourcemaps/ready.js.map
