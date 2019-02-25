/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
if(dojo.config.baseUrl?dojo.baseUrl=dojo.config.baseUrl:dojo.baseUrl="./",dojo._name="spidermonkey",dojo.isSpidermonkey=!0,dojo.exit=function(o){quit(o)},"function"==typeof print&&(console.debug=print),"undefined"==typeof line2pc)throw new Error("attempt to use SpiderMonkey host environment when no 'line2pc' global");if(dojo._spidermonkeyCurrentFile=function(o){var r="";try{throw Error("whatever")}catch(o){r=o.stack}var e=r.match(/[^@]*\.js/gi);if(!e)throw Error("could not parse stack string: '"+r+"'");var n=void 0!==o&&o?e[o+1]:e[e.length-1];if(!n)throw Error("could not find file name in stack string '"+r+"'");return n},dojo._loadUri=function(o){return load(o),1},dojo.config.modulePaths)for(var param in dojo.config.modulePaths)dojo.registerModulePath(param,dojo.config.modulePaths[param]);
//# sourceMappingURL=../sourcemaps/_base/configSpidermonkey.js.map
