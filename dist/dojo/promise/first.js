/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/array","../Deferred","../when"],function(e,r,n){"use strict";var t=e.forEach;return function(e){var a;if(e instanceof Array)a=e;else if(e&&"object"==typeof e)for(var f in a=[],e)Object.hasOwnProperty.call(e,f)&&a.push(e[f]);if(!a||!a.length)return(new r).resolve();var o=new r;return t(a,function(e){n(e,o.resolve,o.reject)}),o.promise}});
//# sourceMappingURL=../sourcemaps/promise/first.js.map
