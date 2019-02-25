/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","require","./has","./has!host-browser?./request"],function(e,t,n,r){var o;n("host-browser")?o=function(e,t,n){r(e,{sync:!!t,headers:{"X-Requested-With":null}}).then(n)}:t.getText?o=t.getText:console.error("dojo/text plugin failed to load because loader does not support getText");var s={},i=function(e){if(e){var t=(e=e.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"")).match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);t&&(e=t[1])}else e="";return e},a={},l={};return e.cache=function(e,n,r){var a;"string"==typeof e?/\//.test(e)?(a=e,r=n):a=t.toUrl(e.replace(/\./g,"/")+(n?"/"+n:"")):(a=e+"",r=n);var l=void 0!=r&&"string"!=typeof r?r.value:r,c=r&&r.sanitize;return"string"==typeof l?(s[a]=l,c?i(l):l):null===l?(delete s[a],null):(a in s||o(a,!0,function(e){s[a]=e}),c?i(s[a]):s[a])},{dynamic:!0,normalize:function(e,t){var n=e.split("!"),r=n[0];return(/^\./.test(r)?t(r):r)+(n[1]?"!"+n[1]:"")},load:function(e,t,n){var r=e.split("!"),c=r.length>1,u=r[0],f=t.toUrl(r[0]),d="url:"+f,h=a,v=function(e){n(c?i(e):e)};if(u in s?h=s[u]:t.cache&&d in t.cache?h=t.cache[d]:f in s&&(h=s[f]),h===a)if(l[f])l[f].push(v);else{var p=l[f]=[v];o(f,!t.async,function(e){s[u]=s[f]=e;for(var t=0;t<p.length;)p[t++](e);delete l[f]})}else v(h)}}});
//# sourceMappingURL=sourcemaps/text.js.map
