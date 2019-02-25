/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/lang","./_base/array","./dom"],function(e,a,n){var r,s=/\s+/,t=[""];function l(e){if("string"==typeof e||e instanceof String){if(e&&!s.test(e))return t[0]=e,t;var n=e.split(s);return n.length&&!n[0]&&n.shift(),n.length&&!n[n.length-1]&&n.pop(),n}return e?a.filter(e,function(e){return e}):[]}var i={};return r={contains:function(e,a){return(" "+n.byId(e).className+" ").indexOf(" "+a+" ")>=0},add:function(e,a){e=n.byId(e),a=l(a);var r,s=e.className;r=(s=s?" "+s+" ":" ").length;for(var t,i=0,c=a.length;i<c;++i)(t=a[i])&&s.indexOf(" "+t+" ")<0&&(s+=t+" ");r<s.length&&(e.className=s.substr(1,s.length-2))},remove:function(a,r){var s;if(a=n.byId(a),void 0!==r){r=l(r),s=" "+a.className+" ";for(var t=0,i=r.length;t<i;++t)s=s.replace(" "+r[t]+" "," ");s=e.trim(s)}else s="";a.className!=s&&(a.className=s)},replace:function(e,a,s){e=n.byId(e),i.className=e.className,r.remove(i,s),r.add(i,a),e.className!==i.className&&(e.className=i.className)},toggle:function(e,a,s){if(e=n.byId(e),void 0===s)for(var t,i=0,c=(a=l(a)).length;i<c;++i)t=a[i],r[r.contains(e,t)?"remove":"add"](e,t);else r[s?"add":"remove"](e,a);return s}}});
//# sourceMappingURL=sourcemaps/dom-class.js.map
