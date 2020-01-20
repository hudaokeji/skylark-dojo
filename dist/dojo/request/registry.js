/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["require","../_base/array","./default!platform","./util"],function(require,n,r,t){var e=[];function u(n,t){for(var u,i=e.slice(0),l=0;u=i[l++];)if(u(n,t))return u.request.call(null,n,t);return r.apply(null,arguments)}return u.register=function(r,t,u){var i=function(n,r){var t;return r?(t=n.test?function(r){return n.test(r)}:n.apply&&n.call?function(){return n.apply(null,arguments)}:function(r){return r===n}).request=r:(t=function(){return!0}).request=n,t}(r,t);return e[u?"unshift":"push"](i),{remove:function(){var r;~(r=n.indexOf(e,i))&&e.splice(r,1)}}},u.load=function(n,t,e,i){n?require([n],function(n){r=n,e(u)}):e(u)},t.addCommonMethods(u),u});
//# sourceMappingURL=../sourcemaps/request/registry.js.map
