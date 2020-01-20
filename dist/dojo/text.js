/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","require","./has","./has!host-browser?./request"],function(e,require,t,n){if(!1===require.isBrowser)return{load:function(e,t,n,r){n()}};var r;t("host-browser")?r=function(e,t,r){n(e,{sync:!!t,headers:{"X-Requested-With":null}}).then(r)}:require.getText?r=require.getText:console.error("dojo/text plugin failed to load because loader does not support getText");var o={},i=function(e){if(e){var t=(e=e.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"")).match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);t&&(e=t[1])}else e="";return e},s={},a={};return e.cache=function(module,e,t){var n;"string"==typeof module?/\//.test(module)?(n=module,t=e):n=require.toUrl(module.replace(/\./g,"/")+(e?"/"+e:"")):(n=module+"",t=e);var s=void 0!=t&&"string"!=typeof t?t.value:t,a=t&&t.sanitize;return"string"==typeof s?(o[n]=s,a?i(s):s):null===s?(delete o[n],null):(n in o||r(n,!0,function(e){o[n]=e}),a?i(o[n]):o[n])},{dynamic:!0,normalize:function(e,t){var n=e.split("!"),r=n[0];return(/^\./.test(r)?t(r):r)+(n[1]?"!"+n[1]:"")},load:function(e,require,t){var n=e.split("!"),l=n.length>1,u=n[0],c=require.toUrl(n[0]),f="url:"+c,d=s,h=function(e){t(l?i(e):e)};if(u in o?d=o[u]:require.cache&&f in require.cache?d=require.cache[f]:c in o&&(d=o[c]),d===s)if(a[c])a[c].push(h);else{var v=a[c]=[h];r(c,!require.async,function(e){o[u]=o[c]=e;for(var t=0;t<v.length;)v[t++](e);delete a[c]})}else h(d)}}});
//# sourceMappingURL=sourcemaps/text.js.map
