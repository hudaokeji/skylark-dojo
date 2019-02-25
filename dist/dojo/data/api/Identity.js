/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["../../_base/declare","./Read"],function(t,e){return t("dojo.data.api.Identity",e,{getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},getIdentity:function(t){throw new Error("Unimplemented API: dojo.data.api.Identity.getIdentity")},getIdentityAttributes:function(t){throw new Error("Unimplemented API: dojo.data.api.Identity.getIdentityAttributes")},fetchItemByIdentity:function(t){if(!this.isItemLoaded(t.item))throw new Error("Unimplemented API: dojo.data.api.Identity.fetchItemByIdentity")}})});
//# sourceMappingURL=../../sourcemaps/data/api/Identity.js.map
