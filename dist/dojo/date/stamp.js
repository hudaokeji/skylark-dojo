/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/lang","../_base/array"],function(e,t){var n={};return e.setObject("dojo.date.stamp",n),n.fromISOString=function(e,i){n._isoRegExp||(n._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var r=n._isoRegExp.exec(e),o=null;if(r){r.shift(),r[1]&&r[1]--,r[6]&&(r[6]*=1e3),i&&(i=new Date(i),t.forEach(t.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(e){return i["get"+e]()}),function(e,t){r[t]=r[t]||e})),o=new Date(r[0]||1970,r[1]||0,r[2]||1,r[3]||0,r[4]||0,r[5]||0,r[6]||0),r[0]<100&&o.setFullYear(r[0]||1970);var s=0,a=r[7]&&r[7].charAt(0);"Z"!=a&&(s=60*(r[8]||0)+(Number(r[9])||0),"-"!=a&&(s*=-1)),a&&(s-=o.getTimezoneOffset()),s&&o.setTime(o.getTime()+6e4*s)}return o},n.toISOString=function(e,t){var n=function(e){return e<10?"0"+e:e},i=[],r=(t=t||{}).zulu?"getUTC":"get",o="";if("time"!=t.selector){var s=e[r+"FullYear"]();o=["0000".substr((s+"").length)+s,n(e[r+"Month"]()+1),n(e[r+"Date"]())].join("-")}if(i.push(o),"date"!=t.selector){var a=[n(e[r+"Hours"]()),n(e[r+"Minutes"]()),n(e[r+"Seconds"]())].join(":"),u=e[r+"Milliseconds"]();if(t.milliseconds&&(a+="."+(u<100?"0":"")+n(u)),t.zulu)a+="Z";else if("time"!=t.selector){var l=e.getTimezoneOffset(),f=Math.abs(l);a+=(l>0?"-":"+")+n(Math.floor(f/60))+":"+n(f%60)}i.push(a)}return i.join("T")},n});
//# sourceMappingURL=../sourcemaps/date/stamp.js.map
