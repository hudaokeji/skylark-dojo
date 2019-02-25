/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../../_base/declare"],function(n){var t=n(null,{idProperty:"id",queryEngine:null,get:function(n){},getIdentity:function(n){},put:function(n,t){},add:function(n,t){},remove:function(n){delete this.index[n];for(var t=this.data,i=this.idProperty,e=0,o=t.length;e<o;e++)if(t[e][i]==n)return void t.splice(e,1)},query:function(n,t){},transaction:function(){},getChildren:function(n,t){},getMetadata:function(n){}});return t.PutDirectives=n(null,{}),t.SortInformation=n(null,{}),t.QueryOptions=n(null,{}),t.QueryResults=n(null,{forEach:function(n,t){},filter:function(n,t){},map:function(n,t){},then:function(n,t){},observe:function(n,t){},total:0}),t.Transaction=n(null,{commit:function(){},abort:function(n,t){}}),t});
//# sourceMappingURL=../../sourcemaps/store/api/Store.js.map
