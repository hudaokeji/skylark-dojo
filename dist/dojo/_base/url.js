/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./kernel"],function(t){var h=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),e=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"),r=function(){for(var t=null,i=arguments,s=[i[0]],a=1;a<i.length;a++)if(i[a]){var n=new r(i[a]+""),u=new r(s[0]+"");if(""!=n.path||n.scheme||n.authority||n.query){if(!n.scheme&&(n.scheme=u.scheme,!n.authority&&(n.authority=u.authority,"/"!=n.path.charAt(0)))){for(var p=(u.path.substring(0,u.path.lastIndexOf("/")+1)+n.path).split("/"),o=0;o<p.length;o++)"."==p[o]?o==p.length-1?p[o]="":(p.splice(o,1),o--):o>0&&(1!=o||""!=p[0])&&".."==p[o]&&".."!=p[o-1]&&(o==p.length-1?(p.splice(o,1),p[o-1]=""):(p.splice(o-1,2),o-=2));n.path=p.join("/")}}else n.fragment!=t&&(u.fragment=n.fragment),n=u;s=[],n.scheme&&s.push(n.scheme,":"),n.authority&&s.push("//",n.authority),s.push(n.path),n.query&&s.push("?",n.query),n.fragment&&s.push("#",n.fragment)}this.uri=s.join("");var c=this.uri.match(h);this.scheme=c[2]||(c[1]?"":t),this.authority=c[4]||(c[3]?"":t),this.path=c[5],this.query=c[7]||(c[6]?"":t),this.fragment=c[9]||(c[8]?"":t),this.authority!=t&&(c=this.authority.match(e),this.user=c[3]||t,this.password=c[4]||t,this.host=c[6]||c[7],this.port=c[9]||t)};return r.prototype.toString=function(){return this.uri},t._Url=r});
//# sourceMappingURL=../sourcemaps/_base/url.js.map
