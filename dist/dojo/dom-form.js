/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/lang","./dom","./io-query","./json"],function(e,t,i,n){function r(t,i,n){if(null!==n){var r=t[i];"string"==typeof r?t[i]=[r,n]:e.isArray(r)?r.push(n):t[i]=n}}var o={fieldToObject:function(e){var i=null;if(e=t.byId(e)){var n=e.name,r=(e.type||"").toLowerCase();if(n&&r&&!e.disabled)if("radio"==r||"checkbox"==r)e.checked&&(i=e.value);else if(e.multiple){i=[];for(var o=[e.firstChild];o.length;)for(var l=o.pop();l;l=l.nextSibling){if(1!=l.nodeType||"option"!=l.tagName.toLowerCase()){l.nextSibling&&o.push(l.nextSibling),l.firstChild&&o.push(l.firstChild);break}l.selected&&i.push(l.value)}}else i=e.value}return i},toObject:function(e){for(var i={},n=t.byId(e).elements,l=0,a=n.length;l<a;++l){var u=n[l],f=u.name,s=(u.type||"").toLowerCase();f&&s&&"file|submit|image|reset|button".indexOf(s)<0&&!u.disabled&&(r(i,f,o.fieldToObject(u)),"image"==s&&(i[f+".x"]=i[f+".y"]=i[f].x=i[f].y=0))}return i},toQuery:function(e){return i.objectToQuery(o.toObject(e))},toJson:function(e,t){return n.stringify(o.toObject(e),null,t?4:0)}};return o});
//# sourceMappingURL=sourcemaps/dom-form.js.map
