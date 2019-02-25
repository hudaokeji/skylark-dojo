/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../../_base/lang"],function(e){var a={};return e.setObject("dojo.data.util.filter",a),a.patternToRegExp=function(e,a){for(var c="^",s=null,t=0;t<e.length;t++)switch(s=e.charAt(t)){case"\\":c+=s,t++,c+=e.charAt(t);break;case"*":c+=".*";break;case"?":c+=".";break;case"$":case"^":case"/":case"+":case".":case"|":case"(":case")":case"{":case"}":case"[":case"]":c+="\\";default:c+=s}return c+="$",a?new RegExp(c,"mi"):new RegExp(c,"m")},a});
//# sourceMappingURL=../../sourcemaps/data/util/filter.js.map
