/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["require","../_base/array","./default!platform","./util"],function(n,r,t,e){var u=[];function i(n,r){for(var e,i=u.slice(0),l=0;e=i[l++];)if(e(n,r))return e.request.call(null,n,r);return t.apply(null,arguments)}return i.register=function(n,t,e){var i=function(n,r){var t;return r?(t=n.test?function(r){return n.test(r)}:n.apply&&n.call?function(){return n.apply(null,arguments)}:function(r){return r===n}).request=r:(t=function(){return!0}).request=n,t}(n,t);return u[e?"unshift":"push"](i),{remove:function(){var n;~(n=r.indexOf(u,i))&&u.splice(n,1)}}},i.load=function(r,e,u,l){r?n([r],function(n){t=n,u(i)}):u(i)},e.addCommonMethods(i),i});
//# sourceMappingURL=../sourcemaps/request/registry.js.map
