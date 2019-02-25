/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../_base/declare","./util/QueryResults","./util/SimpleQueryEngine"],function(t,i,e){return t("dojo.store.Memory",null,{constructor:function(t){for(var i in t)this[i]=t[i];this.setData(this.data||[])},data:null,idProperty:"id",index:null,queryEngine:e,get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},put:function(t,i){var e=this.data,r=this.index,n=this.idProperty,s=t[n]=i&&"id"in i?i.id:n in t?t[n]:Math.random();if(s in r){if(i&&!1===i.overwrite)throw new Error("Object already exists");e[r[s]]=t}else r[s]=e.push(t)-1;return s},add:function(t,i){return(i=i||{}).overwrite=!1,this.put(t,i)},remove:function(t){var i=this.index,e=this.data;if(t in i)return e.splice(i[t],1),this.setData(e),!0},query:function(t,e){return i(this.queryEngine(t,e)(this.data))},setData:function(t){t.items?(this.idProperty=t.identifier||this.idProperty,t=this.data=t.items):this.data=t,this.index={};for(var i=0,e=t.length;i<e;i++)this.index[t[i][this.idProperty]]=i}})});
//# sourceMappingURL=../sourcemaps/store/Memory.js.map
