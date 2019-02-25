/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./tracer","../has","../_base/lang","../_base/array"],function(e,t,n,r){function o(e,t,n){var r="";e&&e.stack&&(r+=e.stack),t&&t.stack&&(r+="\n    ----------------------------------------\n    rejected"+t.stack.split("\n").slice(1).join("\n").replace(/^\s+/," ")),n&&n.stack&&(r+="\n    ----------------------------------------\n"+n.stack),console.error(e,r)}function s(e,t,n,r){t||o(e,n,r)}t.add("config-useDeferredInstrumentation","report-unhandled-rejections");var i=[],c=!1,a=1e3;function d(e,t,n,o){r.some(i,function(n){if(n.error===e)return t&&(n.handled=!0),!0})||i.push({error:e,rejection:n,handled:t,deferred:o,timestamp:(new Date).getTime()}),c||(c=setTimeout(u,a))}function u(){var e=(new Date).getTime(),t=e-a;i=r.filter(i,function(e){return!(e.timestamp<t)||(e.handled||o(e.error,e.rejection,e.deferred),!1)}),c=!!i.length&&setTimeout(u,i[0].timestamp+a-e)}return function(r){var o=t("config-useDeferredInstrumentation");if(o){e.on("resolved",n.hitch(console,"log","resolved")),e.on("rejected",n.hitch(console,"log","rejected")),e.on("progress",n.hitch(console,"log","progress"));var i=[];if("string"==typeof o&&(o=(i=o.split(",")).shift()),"report-rejections"===o)r.instrumentRejected=s;else{if("report-unhandled-rejections"!==o&&!0!==o&&1!==o)throw new Error("Unsupported instrumentation usage <"+o+">");r.instrumentRejected=d,a=parseInt(i[0],10)||a}}}});
//# sourceMappingURL=../sourcemaps/promise/instrumentation.js.map
