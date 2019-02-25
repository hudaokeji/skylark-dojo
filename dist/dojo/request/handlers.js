/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../json","../_base/kernel","../_base/array","../has","../has!dom?../selector/_loader"],function(e,n,t,r){var a;if(r.add("activex","undefined"!=typeof ActiveXObject),r.add("dom-parser",function(e){return"DOMParser"in e}),r("activex")){var o,s=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"];a=function(e){var n=e.data,a=e.text;function u(e){try{var t=new ActiveXObject(e);t.async=!1,t.loadXML(a),n=t,o=e}catch(e){return!1}return!0}return n&&r("dom-qsa2.1")&&!n.querySelectorAll&&r("dom-parser")&&(n=(new DOMParser).parseFromString(a,"application/xml")),n&&n.documentElement||o&&u(o)||t.some(s,u),n}}var u=function(e){return r("native-xhr2-blob")||"blob"!==e.options.handleAs||"undefined"==typeof Blob?e.xhr.response:new Blob([e.xhr.response],{type:e.xhr.getResponseHeader("Content-Type")})},c={javascript:function(e){return n.eval(e.text||"")},json:function(n){return e.parse(n.text||null)},xml:a,blob:u,arraybuffer:u,document:u};function i(e){var n=c[e.options.handleAs];return e.data=n?n(e):e.data||e.text,e}return i.register=function(e,n){c[e]=n},i});
//# sourceMappingURL=../sourcemaps/request/handlers.js.map
