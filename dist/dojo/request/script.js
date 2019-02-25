/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["module","./watch","./util","../_base/kernel","../_base/array","../_base/lang","../on","../dom","../dom-construct","../has","../_base/window"],function(module,watch,util,kernel,array,lang,on,dom,domConstruct,has,win){has.add("script-readystatechange",function(e,t){return void 0!==t.createElement("script").onreadystatechange&&(void 0===e.opera||"[object Opera]"!==e.opera.toString())});var mid=module.id.replace(/[\/\.\-]/g,"_"),counter=0,loadEvent=has("script-readystatechange")?"readystatechange":"load",readyRegExp=/complete|loaded/,callbacks=kernel.global[mid+"_callbacks"]={},deadScripts=[];function attach(e,t,a){var c=a||win.doc,r=c.createElement("script");return r.type="text/javascript",r.src=t,r.id=e,r.async=!0,r.charset="utf-8",c.getElementsByTagName("head")[0].appendChild(r)}function remove(e,t,a){domConstruct.destroy(dom.byId(e,t)),callbacks[e]&&(a?callbacks[e]=function(){delete callbacks[e]}:delete callbacks[e])}function _addDeadScript(e){var t=e.response.options,a=t.ioArgs?t.ioArgs.frameDoc:t.frameDoc;deadScripts.push({id:e.id,frameDoc:a}),t.ioArgs&&(t.ioArgs.frameDoc=null),t.frameDoc=null}function canceler(e,t){e.canDelete&&script._remove(e.id,t.options.frameDoc,!0)}function isValid(e){return deadScripts&&deadScripts.length&&(array.forEach(deadScripts,function(e){script._remove(e.id,e.frameDoc),e.frameDoc=null}),deadScripts=[]),!e.options.jsonp||!e.data}function isReadyScript(e){return!!this.scriptLoaded}function isReadyCheckString(response){var checkString=response.options.checkString;return checkString&&eval("typeof("+checkString+') !== "undefined"')}function handleResponse(e,t){this.canDelete&&_addDeadScript(this),t?this.reject(t):this.resolve(e)}function script(e,t,a){var c=util.parseArgs(e,util.deepCopy({},t));e=c.url,t=c.options;var r=util.deferred(c,canceler,isValid,t.jsonp?null:t.checkString?isReadyCheckString:isReadyScript,handleResponse);(lang.mixin(r,{id:mid+counter++,canDelete:!1}),t.jsonp)&&(new RegExp("[?&]"+t.jsonp+"=").test(e)||(e+=(~e.indexOf("?")?"&":"?")+t.jsonp+"="+(t.frameDoc?"parent.":"")+mid+"_callbacks."+r.id),r.canDelete=!0,callbacks[r.id]=function(e){c.data=e,r.handleResponse(c)});if(util.notify&&util.notify.emit("send",c,r.promise.cancel),!t.canAttach||t.canAttach(r)){var n=script._attach(r.id,e,t.frameDoc);if(!t.jsonp&&!t.checkString)var i=on(n,loadEvent,function(e){("load"===e.type||readyRegExp.test(n.readyState))&&(i.remove(),r.scriptLoaded=e)})}return watch(r),a?r:r.promise}return script.get=script,script._attach=attach,script._remove=remove,script._callbacksProperty=mid+"_callbacks",script});
//# sourceMappingURL=../sourcemaps/request/script.js.map
