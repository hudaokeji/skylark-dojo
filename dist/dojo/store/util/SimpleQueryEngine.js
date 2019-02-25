/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../../_base/array"],function(t){return function(r,n){switch(typeof r){default:throw new Error("Can not query with a "+typeof r);case"object":case"undefined":var e=r;r=function(t){for(var r in e){var n=e[r];if(n&&n.test){if(!n.test(t[r],t))return!1}else if(n!=t[r])return!1}return!0};break;case"string":if(!this[r])throw new Error("No filter function "+r+" was found in store");r=this[r];case"function":}function i(e){var i=t.filter(e,r),u=n&&n.sort;if(u&&i.sort("function"==typeof u?u:function(t,r){for(var n,e=0;n=u[e];e++){var i=t[n.attribute],a=r[n.attribute];if((i=null!=i?i.valueOf():i)!=(a=null!=a?a.valueOf():a))return!!n.descending==(null==i||i>a)?-1:1}return 0}),n&&(n.start||n.count)){var a=i.length;(i=i.slice(n.start||0,(n.start||0)+(n.count||1/0))).total=a}return i}return i.matches=r,i}});
//# sourceMappingURL=../../sourcemaps/store/util/SimpleQueryEngine.js.map
