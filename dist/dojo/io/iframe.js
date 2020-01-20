/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/config","../_base/json","../_base/kernel","../_base/lang","../_base/xhr","../sniff","../_base/window","../dom","../dom-construct","../query","require","../aspect","../request/iframe"],function(e,r,t,o,n,a,s,i,l,u,require,f,c){t.deprecated("dojo/io/iframe","Use dojo/request/iframe.","2.0");var d=c._iframeName;d=d.substring(0,d.lastIndexOf("_"));var m=o.delegate(c,{create:function(){return m._frame=c.create.apply(c,arguments)},get:null,post:null,send:function(o){var a,s=n._ioSetArgs(o,function(e){a&&a.cancel()},function(e){var o=null,n=e.ioArgs;try{var s=n.handleAs;"xml"===s||"html"===s?o=a.response.data:(o=a.response.text,"json"===s?o=r.fromJson(o):"javascript"===s&&(o=t.eval(o)))}catch(e){o=e}return o},function(e,r){return r.ioArgs._hasError=!0,e}),l=s.ioArgs,u="GET",d=i.byId(o.form);o.method&&"POST"===o.method.toUpperCase()&&d&&(u="POST");var m={method:u,handleAs:"json"===o.handleAs||"javascript"===o.handleAs?"text":o.handleAs,form:o.form,query:d?null:o.content,data:d?o.content:null,timeout:o.timeout,ioArgs:l};if(m.method&&(m.method=m.method.toUpperCase()),e.ioPublish&&t.publish&&!1!==l.args.ioPublish)var h=f.after(c,"_notifyStart",function(e){e.options.ioArgs===l&&(h.remove(),n._ioNotifyStart(s))},!0);return a=c(l.url,m,!0),l._callNext=a._callNext,a.then(function(){s.resolve(s)}).otherwise(function(e){s.ioArgs.error=e,s.reject(e)}),s},_iframeOnload:s.global[d+"_onload"]});return o.setObject("dojo.io.iframe",m),m});
//# sourceMappingURL=../sourcemaps/io/iframe.js.map
