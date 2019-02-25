/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./util","../errors/RequestTimeoutError","../errors/CancelError","../_base/array","../has!host-browser?../_base/window:","../has!host-browser?dom-addeventlistener?:../on:"],function(e,n,t,o,i,s){var l=null,a=[];function c(){for(var e,t=+new Date,o=0;o<a.length&&(e=a[o]);o++){var i=e.response,s=i.options;e.isCanceled&&e.isCanceled()||e.isValid&&!e.isValid(i)?(a.splice(o--,1),r._onAction&&r._onAction()):e.isReady&&e.isReady(i)?(a.splice(o--,1),e.handleResponse(i),r._onAction&&r._onAction()):e.startTime&&e.startTime+(s.timeout||0)<t&&(a.splice(o--,1),e.cancel(new n("Timeout exceeded",i)),r._onAction&&r._onAction())}r._onInFlight&&r._onInFlight(e),a.length||(clearInterval(l),l=null)}function r(e){e.response.options.timeout&&(e.startTime=+new Date),e.isFulfilled()||(a.push(e),l||(l=setInterval(c,50)),e.response.options.sync&&c())}return r.cancelAll=function(){try{o.forEach(a,function(e){try{e.cancel(new t("All requests canceled."))}catch(e){}})}catch(e){}},i&&s&&i.doc.attachEvent&&s(i.global,"unload",function(){r.cancelAll()}),r});
//# sourceMappingURL=../sourcemaps/request/watch.js.map
