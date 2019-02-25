/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./regexp"],function(e,o){return e.cookie=function(e,i,n){var t,r=document.cookie;if(1==arguments.length){var a=r.match(new RegExp("(?:^|; )"+o.escapeString(e)+"=([^;]*)"));t=a?decodeURIComponent(a[1]):void 0}else{var c=(n=n||{}).expires;if("number"==typeof c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3),c=n.expires=d}c&&c.toUTCString&&(n.expires=c.toUTCString());var s,k=e+"="+(i=encodeURIComponent(i));for(s in n){k+="; "+s;var _=n[s];!0!==_&&(k+="="+_)}document.cookie=k}return t},e.cookie.isSupported=function(){return"cookieEnabled"in navigator||(this("__djCookieTest__","CookiesAllowed"),navigator.cookieEnabled="CookiesAllowed"==this("__djCookieTest__"),navigator.cookieEnabled&&this("__djCookieTest__","",{expires:-1})),navigator.cookieEnabled},e.cookie});
//# sourceMappingURL=sourcemaps/cookie.js.map
