/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require","./sniff","./_base/lang","./_base/array","./_base/config","./ready","./_base/declare","./_base/connect","./_base/Deferred","./_base/json","./_base/Color","./has!dojo-firebug?./_firebug/firebug","./has!host-browser?./_base/browser","./has!dojo-sync-loader?./_base/loader","dojo/i18n","dojo/cookie","dojo/date","dojo/cache","dojo/fx","dojo/hccss","dojo/html","dojo/number","dojo/parser","dojo/request","dojo/Stateful","dojo/string","dojo/touch","dojo/uacss","dojo/window","dojo/cldr/nls/currency","dojo/cldr/nls/gregorian","dojo/data/api/Identity","dojo/data/api/Notification","dojo/data/api/Read","dojo/data/api/Request","dojo/data/api/Write","dojo/data/ItemFileReadStore","dojo/data/ItemFileWriteStore","dojo/date/stamp","dojo/dnd/Avatar","dojo/dnd/Manager","dojo/dnd/Moveable","dojo/dnd/Mover","dojo/dnd/TimedMoveable","dojo/dnd/move","dojo/fx/Toggler","dojo/fx/easing","dojo/nls/colors","dojo/promise/all","dojo/promise/first","dojo/request/default","dojo/request/iframe","dojo/request/script","dojo/store/util/QueryResults","dojo/store/util/SimpleQueryEngine","dojo/store/Memory","dojo/store/Observable"],function(o,e,d,r,a,s,i,j){if(i.isDebug&&d(["./_firebug/firebug"]),e.add("dojo-config-require",1),e("dojo-config-require")){var t=i.require;t&&(t=s.map(a.isArray(t)?t:[t],function(o){return o.replace(/\./g,"/")}),o.isAsync?d(t):j(1,function(){d(t)}))}return o});
//# sourceMappingURL=sourcemaps/main.js.map
