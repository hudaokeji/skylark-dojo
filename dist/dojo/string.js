/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./_base/lang"],function(t,r){var e=/[&<>'"\/]/g,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},i={};return r.setObject("dojo.string",i),i.escape=function(t){return t?t.replace(e,function(t){return n[t]}):""},i.rep=function(t,r){if(r<=0||!t)return"";for(var e=[];1&r&&e.push(t),r>>=1;)t+=t;return e.join("")},i.pad=function(t,r,e,n){e||(e="0");var u=String(t),c=i.rep(e,Math.ceil((r-u.length)/e.length));return n?u+c:c+u},i.substitute=function(e,n,i,u){return u=u||t.global,i=i?r.hitch(u,i):function(t){return t},e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,e,c){var a=r.getObject(e,!1,n);return c&&(a=r.getObject(c,!1,u).call(u,a,e)),i(a,e).toString()})},i.trim=String.prototype.trim?r.trim:function(t){for(var r=(t=t.replace(/^\s+/,"")).length-1;r>=0;r--)if(/\S/.test(t.charAt(r))){t=t.substring(0,r+1);break}return t},i});
//# sourceMappingURL=sourcemaps/string.js.map
