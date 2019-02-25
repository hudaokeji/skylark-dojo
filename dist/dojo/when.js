/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./Deferred","./promise/Promise"],function(e,n){"use strict";return function(r,t,i,o){var s=r&&"function"==typeof r.then,f=s&&r instanceof n;if(!s)return arguments.length>1?t?t(r):r:(new e).resolve(r);if(!f){var c=new e(r.cancel);r.then(c.resolve,c.reject,c.progress),r=c.promise}return t||i||o?r.then(t,i,o):r}});
//# sourceMappingURL=sourcemaps/when.js.map
