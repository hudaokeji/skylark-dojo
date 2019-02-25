/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/array","./_base/lang","./number","./i18n","./i18n!./cldr/nls/currency","./cldr/monetary"],function(r,n,e,a,t,c){var u={};return n.setObject("dojo.currency",u),u._mixInDefaults=function(e){(e=e||{}).type="currency";var t=a.getLocalization("dojo.cldr","currency",e.locale)||{},u=e.currency,i=c.getData(u);return r.forEach(["displayName","symbol","group","decimal"],function(r){i[r]=t[u+"_"+r]}),i.fractional=[!0,!1],n.mixin(i,e)},u.format=function(r,n){return e.format(r,u._mixInDefaults(n))},u.regexp=function(r){return e.regexp(u._mixInDefaults(r))},u.parse=function(r,n){return e.parse(r,u._mixInDefaults(n))},u});
//# sourceMappingURL=sourcemaps/currency.js.map
