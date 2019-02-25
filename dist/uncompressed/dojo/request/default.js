define([
	'exports',
	'module',
	'require',
	'../has'
], function(exports, module, require, has){
	if (require.isBrowser===false) { // for build,will be changed with better implementation. by LWF
		return {
	        load: function (name, req, onLoad, config) {
	            onLoad();
	        }			
		};
	}

	var defId = has('config-requestProvider'),
		platformId;

	if(has('host-browser') || has('host-webworker')){
		platformId = './xhr';
	}else if(has('host-node')){
		platformId = './node';
	/* TODO:
	}else if(has('host-rhino')){
		platformId = './rhino';
   */
	}

	if(!defId){
		defId = platformId;
	}

	exports.getPlatformDefaultId = function(){
		return platformId;
	};

	exports.load = function(id, parentRequire, loaded, config){
		require([id == 'platform' ? platformId : defId], function(provider){
			loaded(provider);
		});
	};
});
