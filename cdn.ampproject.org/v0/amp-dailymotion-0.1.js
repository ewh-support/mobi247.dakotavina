(self.AMP=self.AMP||[]).push({n:"amp-dailymotion",v:"1522422854768",f:(function(AMP){var h;(function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a})(this);function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ba(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function m(a){var b=Object.create(null);if(!a)return b;for(var c;c=ca.exec(a);){var d=ba(c[1],c[1]),e=c[2]?ba(c[2],c[2]):"";b[d]=e}return b};var q="";function da(a){var b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=m(c.location.originalHash||c.location.hash),e=m(c.location.search);q||(q=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011522422854768");c=b.AMP_MODE={localDev:!1,development:!("1"!=d.development&&!c.AMP_DEV_MODE),examiner:"2"==d.development,filter:d.filter,minified:!0,lite:void 0!=e.amp_lite,test:!1,log:d.log,version:"1522422854768",rtvVersion:q}}return c};var ea=Object.prototype.toString;function r(a){return"number"===typeof a&&isFinite(a)};self.log=self.log||{user:null,dev:null,userForEmbed:null};var t=self.log;function fa(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function u(){if(t.dev)return t.dev;throw Error("failed to call initLogConstructor");};function ga(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function ha(a){return a||{}};function v(a){this.Na=a;this.M=Object.create(null)}v.prototype.get=function(a){if(this.M[a])return this.M[a].access=Date.now(),this.M[a].payload};v.prototype.put=function(a,b){var c=this;this.M[a]={payload:b,access:Date.now()};var d=Object.keys(this.M);d.length>this.Na&&(u().warn("lru-cache","Trimming template cache"),d.sort(function(a,b){return c.M[b].access-c.M[a].access}),delete this.M[d[d.length-1]])};function ia(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};ha({c:!0,v:!0,a:!0,ad:!0});var w,x,ja=["javascript:","data:","vbscript:"];function ka(a,b,c){if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),g=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return g+=d[1]?"#"+d[1]:""}function la(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var g=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(g))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")}
function ma(a){if(!a)return!0;if("string"==typeof a){w||(w=self.document.createElement("a"),x=self.UrlCache||(self.UrlCache=new v(100)));var b=x.get(a);if(b)a=b;else{b=w;b.href=a;b.protocol||(b.href=b.href);var c={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=
c.hostname;c.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;x.put(a,c);a=c}}return!ja.includes(a.protocol)};function na(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&oa(b,"action")?y(b,"action"):null)return b}return z(a,"action")}function pa(a,b,c){var d=A(a),e=qa(d);a=e;var g=ra(a),f=g[b];f||(f=g[b]={obj:null,promise:null,resolve:null,context:null,ctor:null});f.ctor||f.obj||(f.ctor=c,f.context=d,f.resolve&&y(a,b))}function B(a,b){a=a.__AMP_TOP||a;return y(a,b)}function z(a,b){a=A(a);a=qa(a);return y(a,b)}
function A(a){return a.nodeType?B((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function qa(a){a=A(a);return a.isSingleDoc()?a.win:a}function y(a,b){oa(a,b);var c=ra(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ra(a){var b=a.services;b||(b=a.services={});return b}function oa(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function C(a){a.parentElement&&a.parentElement.removeChild(a)}function sa(a){var b,c,d=b||function(a){return a},e=a.dataset;a={};var g=c?c:/^param(.+)/,f;for(f in e){var k=f.match(g);if(k){var l=k[1][0].toLowerCase()+k[1].substr(1);a[d(l)]=e[f]}}return a}function ta(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};function D(a){return B(a,"platform")}function E(a){return z(a,"viewport")};var F,ua="Webkit webkit Moz moz ms O o".split(" ");function va(a,b){var c=void 0;if(ia(b,"--"))return b;F||(F=ga());var d=F[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<ua.length;g++){var f=ua[g]+e;if(void 0!==a[f]){e=f;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(F[b]=d)}return d}function wa(a,b,c){var d;(b=va(a.style,b))&&(a.style[b]=d?c+d:c)}function G(a,b){for(var c in b)wa(a,c,b[c])}
function xa(a,b){"number"==typeof a&&(a+="px");if(void 0===b)return"translate("+a+")";"number"==typeof b&&(b+="px");return"translate("+a+", "+b+")"};var H;function I(a,b,c){function d(a){try{return f(a)}catch(p){throw self.reportError(p),p;}}var e=void 0,g=a,f=c,k=ya(),l=!1;e&&(l=e.capture);g.addEventListener(b,d,k?e:l);return function(){g&&g.removeEventListener(b,d,k?e:l);d=g=f=null}}function ya(){if(void 0!==H)return H;H=!1;try{var a={get capture(){H=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return H};function J(a,b,c){return I(a,b,c)}function za(a,b){var c=b,d=I(a,"load",function(a){try{c(a)}finally{c=null,d()}});return d}function Aa(a){var b,c,d=new Promise(function(b){c=za(a,b)});d.then(c,c);b&&b(c);return d};function Ba(){this.G=null}h=Ba.prototype;h.add=function(a){var b=this;this.G||(this.G=[]);this.G.push(a);return function(){b.remove(a)}};h.remove=function(a){this.G&&(a=this.G.indexOf(a),-1<a&&this.G.splice(a,1))};h.removeAll=function(){this.G&&(this.G.length=0)};h.fire=function(a){if(this.G)for(var b=this.G,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.G?this.G.length:0};function K(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function Ca(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1};function Da(a,b){function c(){d=0;var f=500-(a.Date.now()-e);if(0<f)d=a.setTimeout(c,f);else{var k=g;g=null;b.apply(null,k)}}var d=0,e=0,g=null;return function(b){for(var f=[],l=0;l<arguments.length;++l)f[l-0]=arguments[l];e=a.Date.now();g=f;d||(d=a.setTimeout(c,500))}};function Ea(a,b,c,d,e){var g=c,f=b;b>c&&(g=b,f=c);a<f?a=f:a>g&&(a=g);return(a-b)*(e-d)/(c-b)+d};function L(a,b,c,d){var e=new Fa(0,0,a,b,c,d,1,1);return e.solveYValueFromXValue.bind(e)}function Fa(a,b,c,d,e,g,f,k){this.x0=a;this.y0=b;this.x1=c;this.y1=d;this.x2=e;this.y2=g;this.x3=f;this.y3=k}h=Fa.prototype;h.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
h.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,g=0,f=0;8>f;f++){var g=this.getPointX(c),k=(this.getPointX(c+b)-g)/b;if(Math.abs(g-a)<b)return c;if(Math.abs(k)<b)break;else g<a?d=c:e=c,c-=(g-a)/k}for(f=0;Math.abs(g-a)>b&&8>f;f++)g<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),g=this.getPointX(c);return c};
h.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};h.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};h.lerp=function(a,b,c){return a+c*(b-a)};
var Ga=L(.25,.1,.25,1),Ha=L(.42,0,1,1),Ia=L(0,0,.58,1),Ja=L(.42,0,.58,1),Ka={linear:function(a){return a},ease:Ga,"ease-in":Ha,"ease-out":Ia,"ease-in-out":Ja};function La(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return L(b[0],b[1],b[2],b[3])}return null}return Ka[a]}return a};function Ma(){}function M(a,b){this.T=a;this.m=b||B(self,"vsync");this.ta=null;this.D=[]}function Na(a,b){var c;return(new M(a)).setCurve(c).add(0,b,1).start(200)}M.prototype.setCurve=function(a){a&&(this.ta=La(a));return this};M.prototype.add=function(a,b,c,d){this.D.push({delay:a,func:b,duration:c,curve:La(d)});return this};
M.prototype.start=function(a){var b=new N(this.m,this.T,this.D,this.ta,a);a=b;a.Ca=Date.now();a.da=!0;a.m.canAnimate(a.T)?a.Ga(a.Fa):(u().warn("Animation","cannot animate"),O(a,!1,0));return b};
function N(a,b,c,d,e){var g=this;this.m=a;this.T=b;this.D=[];for(b=0;b<c.length;b++){var f=c[b];this.D.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.Oa=e;this.Xa=this.Wa=this.Ca=0;this.da=!1;this.Fa={};this.za=new Promise(function(a,b){g.Sa=a;g.Ra=b});this.Ga=this.m.createAnimTask(this.T,{mutate:this.Ta.bind(this)})}N.prototype.then=function(a,b){return a||b?this.za.then(a,b):this.za};
N.prototype.thenAlways=function(a){a=a||Ma;return this.then(a,a)};N.prototype.halt=function(a){O(this,!1,a||0)};function O(a,b,c){if(a.da){a.da=!1;if(0!=c){1<a.D.length&&a.D.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.D.length;c++)a.D[c].func(1,!0);else for(var d=a.D.length-1;0<=d;d--)a.D[d].func(0,!1)}catch(e){u().error("Animation","completion failed: "+e,e),b=!1}}b?a.Sa():a.Ra()}}
N.prototype.Ta=function(){if(this.da){for(var a=Date.now(),b=Math.min((a-this.Ca)/this.Oa,1),c=0;c<this.D.length;c++){var d=this.D[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.D.length;c++)if(d=this.D[c],d.started&&!d.completed)a:{var e,g;if(0<d.duration){if(e=g=Math.min((b-d.delay)/d.duration,1),d.curve&&1!=e)try{e=d.curve(g)}catch(f){u().error("Animation","step curve failed: "+f,f);O(this,!1,0);break a}}else e=g=1;1==g&&(d.completed=!0);try{d.func(e,d.completed)}catch(f){u().error("Animation",
"step mutate failed: "+f,f),O(this,!1,0)}}1==b?O(this,!0,0):this.m.canAnimate(this.T)?this.Ga(this.Fa):(u().warn("Animation","cancel animation"),O(this,!1,0))}};function Oa(a){var b;b=void 0===b?" ":b;return function(c,d){for(var e=[],g=0;g<a.length;g++){var f=(0,a[g])(c,d);"string"==typeof f&&e.push(f)}return e.join(b)}}function Pa(a,b){return function(c,d){for(var e in b)wa(a,e,b[e](c,d))}}function P(a,b){return function(c){return a+(b-a)*c}}function Qa(a){return function(b){return a(b)+"px"}}
function Ra(a,b){return function(c){var d=a(c);"number"==typeof d&&(d+="px");if(!b)return"translate("+d+")";c=b(c);"number"==typeof c&&(c+="px");return"translate("+d+","+c+")"}}function Sa(){var a=P(.6,.6);return function(b){return"scale("+a(b)+")"}};var Ta={title:"",artist:"",album:"",artwork:[{src:""}]};function Ua(a,b,c,d){var e=a.navigator;"mediaSession"in e&&a.MediaMetadata&&(e.mediaSession.metadata=new a.MediaMetadata(Ta),Va(b),e.mediaSession.metadata=new a.MediaMetadata(b),e.mediaSession.setActionHandler("play",c),e.mediaSession.setActionHandler("pause",d))}
function Wa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c;a:{try{c=JSON.parse(b.textContent);break a}catch(e){}c=void 0}var d=c;if(d&&d.image){if("string"===typeof d.image)return d.image;if(d.image["@list"]&&"string"===typeof d.image["@list"][0])return d.image["@list"][0];if("string"===typeof d.image.url)return d.image.url;if("string"===typeof d.image[0])return d.image[0]}}}
function Va(a){a&&a.artwork&&(Array.isArray(a.artwork),a.artwork.forEach(function(a){if(a){var b="[object Object]"===ea.call(a)?a.src:a;fa().assert(ma(b))}}))};function Q(){this.Z=!1;this.ua=new Ba}Q.prototype.onSessionEnd=function(a){this.ua.add(a)};Q.prototype.beginSession=function(){this.Z=!0};Q.prototype.endSession=function(){this.Z&&this.ua.fire();this.Z=!1};Q.prototype.isSessionActive=function(){return this.Z};function Xa(a,b,c,d){this.element=b;this.va=d;this.fidelity=c;this.turn=0==c?Math.floor(4*Math.random()):0;this.ca=null;this.l=E(a)}
Xa.prototype.update=function(a){var b=this;if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}var c=this.l.getSize(),d=K(0,0,c.width,c.height);this.l.getClientRectAsync(this.element).then(function(a){var c={positionRect:a,viewportRect:d,relativePos:""},e=b.ca;if(!(e&&Ca(e.positionRect,c.positionRect)&&Ca(e.viewportRect,c.viewportRect))){var e=c.positionRect,k=c.viewportRect;c.relativePos=e.top<k.top?"top":e.bottom>k.bottom?"bottom":"inside";k=c.viewportRect;e.top<=k.bottom&&
k.top<=e.bottom&&e.left<=k.right&&k.left<=e.right?(b.ca=c,b.va(c)):b.ca&&(b.ca=null,c.positionRect=null,b.va(c))}})};function R(a){var b=this;this.o=a;this.Ja=a.win;this.O=[];this.m=B(this.Ja,"vsync");this.l=E(a);this.ea=[];this.ia=this.pa=this.ma=!1;this.Ma=Da(this.Ja,function(){b.ma=!1})}R.prototype.observe=function(a,b,c){var d=new Xa(this.o,a,b,c);this.O.push(d);this.ia||Ya(this);d.update()};R.prototype.unobserve=function(a){for(var b=0;b<this.O.length;b++)if(this.O[b].element==a){this.O.splice(b,1);if(0==this.O.length)for(this.ia=!1;this.ea.length;)this.ea.pop()();return}u().error("POSITION_OBSERVER","cannot unobserve unobserved element")};
function Ya(a){a.ia=!0;a.ea.push(a.l.onScroll(function(){a.Ma();a.ma=!0;a.pa||Za(a)}));a.ea.push(a.l.onResize(function(){a.updateAllEntries(!0)}))}R.prototype.updateAllEntries=function(a){for(var b=0;b<this.O.length;b++)this.O[b].update(a)};function Za(a){a.updateAllEntries();a.pa=!0;a.ma?a.m.measure(function(){Za(a)}):a.pa=!1}function $a(a){pa(a,"position-observer",function(){return new R(a)})};function ab(a){var b=this;this.ampdoc=a;this.l=E(this.ampdoc);this.A=null;this.Aa=this.Ba=!1;this.Y=this.ra=null;this.Ha=B(a.win,"timer");this.Ka=na(a);this.sa=function(){for(var a=0;a<b.A.length;a++){var d=b.A[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e,g=d.video.getCurrentTime(),f=d.video.getDuration();r(g)&&r(f)&&0<f&&(e=b.ampdoc.win,g={time:g,percent:g/f},f={detail:g},Object.assign(f,void 0),"function"==typeof e.CustomEvent?e=new e.CustomEvent("video-manager.timeUpdate",
f):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent("video-manager.timeUpdate",!!f.bubbles,!!f.cancelable,g)),b.Ka.trigger(d.video.element,"timeUpdate",e,1))}}b.Ha.delay(b.sa,1E3)};this.Ha.delay(this.sa,1E3)}h=ab.prototype;
h.register=function(a,b){b=void 0===b?!0:b;var c=a;c.registerAction("play",c.play.bind(c,!1),1);c.registerAction("pause",c.pause.bind(c),1);c.registerAction("mute",c.mute.bind(c),1);c.registerAction("unmute",c.unmute.bind(c),1);c.registerAction("fullscreen",c.fullscreenEnter.bind(c),1);a.supportsPlatform()&&(this.A=this.A||[],c=new bb(this,a,b),cb(this,c),db(this,c),eb(this,c),this.A.push(c),a.element.dispatchCustomEvent("registered"),a.element.classList.add("i-amphtml-video-interface"))};
function cb(a,b){J(b.video.element,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});J(b.video.element,"reloaded",function(){b.videoLoaded()});if(!a.Ba){var c=function(){for(var b=0;b<a.A.length;b++)a.A[b].updateVisibility()};a.l.onScroll(c);a.l.onChanged(c);a.Ba=!0}}
function eb(a,b){if(b.hasFullscreenOnLandscape){var c=a.ampdoc.win,d=c.screen,e=function(){var a,e=a=d&&"orientation"in d?ia(d.orientation.type,"landscape"):-90==c.orientation||90==c.orientation;b.W&&(!e&&b.V?b.V&&(b.video.fullscreenExit(),b.V=!1):e&&"playing_manual"==b.getPlayingState()&&b.K&&z(b.o,"viewer").isVisible()&&!b.video.isFullscreen()&&!b.V&&(b.video.fullscreenEnter(),b.V=b.video.isFullscreen()))};if(d&&"orientation"in d){var g=d.orientation;J(g,"change",e.bind(a))}J(c,"orientationchange",
e.bind(a))}}function db(a,b){if(b.hasDocking&&(a.ra||($a(a.ampdoc),a.ra=z(a.ampdoc,"position-observer")),a.ra.observe(b.video.element,1,function(a){b.onDockableVideoPositionChanged(a)}),!a.Aa)){var c=function(){for(var b=0;b<a.A.length;b++)a.A[b].refreshDockedVideo()};a.l.onResize(c);a.Aa=!0}}function fb(a,b){for(var c=0;c<a.A.length;c++)if(a.A[c].video===b)return a.A[c];u().error("video-manager","video is not registered to this video manager");return null}
h.getVideoAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.A.length;b++){var c=this.A[b];if(c.video.element===a){b=c;break a}}u().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};h.getPlayingState=function(a){return fb(this,a).getPlayingState()};h.userInteractedWithAutoPlay=function(a){return fb(this,a).userInteractedWithAutoPlay()};h.canDock=function(a){return!this.Y||this.Y==a};
h.registerDocked=function(a){this.Y=a};h.unregisterDocked=function(){this.Y=null;for(var a=0;a<this.A.length;a++)this.A[a].X=!1};
function bb(a,b,c){var d=this;this.oa=a;this.o=a.ampdoc;this.l=E(this.o);this.video=b;this.La=c;this.Va=null;this.V=this.K=this.P=this.W=!1;this.m=B(this.o.win,"vsync");this.ga=new Q;this.ga.onSessionEnd(function(){return S(d,"video-session")});this.S=new Q;this.S.onSessionEnd(function(){return S(d,"video-session-visible")});this.ha=gb.bind(null,this.o.win,da(this.o.win).lite);b=b.element;this.qa=this.xa=this.fa=!1;this.I=this.w=null;this.L=!1;this.C=this.j=null;this.F=this.B="inline";this.U=0;this.ja=
null;this.na=this.$=this.J=this.R=this.ka=this.X=!1;this.h={mouse:{x:0,y:0},displacement:{x:0,y:0},initial:{x:0,y:0},position:{x:0,y:0},previous:{x:0,y:0},velocity:{x:0,y:0}};this.la=[];this.hasDocking=b.hasAttribute("dock");this.hasAutoplay=b.hasAttribute("autoplay");var e=b.getAttribute("fullscreen-on-landscape");this.hasFullscreenOnLandscape=""==e||"always"==e;this.N=Ta;Aa(b).then(function(){return d.videoLoaded()});J(b,"pause",function(){S(d,"video-pause");d.P=!1;d.qa?d.qa=!1:d.ga.endSession()});
J(b,"playing",function(){return hb(d)});J(b,"muted",function(){return d.L=!0});J(b,"unmuted",function(){return d.L=!1});J(b,"ended",function(){S(d,"video-ended")});this.updateVisibility();this.hasAutoplay&&ib(this);this.hasDocking&&jb(this)}function hb(a){a.P=!0;a.video.preimplementsMediaSessionAPI()||Ua(a.o.win,a.N,function(){a.video.play(!1)},function(){a.video.pause()});a.ga.beginSession();a.K&&a.S.beginSession();S(a,"video-play")}h=bb.prototype;
h.videoLoaded=function(){var a=this;this.W=!0;this.w=this.video.element.querySelector("video, iframe");this.m.measure(function(){a.j=a.video.element.getBoundingClientRect()});kb(this);this.updateVisibility();this.K&&lb(this)};
function kb(a){if(!a.video.preimplementsMediaSessionAPI()){a.video.getMetadata()&&(a.N=ga(a.video.getMetadata()));var b=a.o.win.document;if(!a.N.artwork||0==a.N.artwork.length){var c;(c=Wa(b))||(c=(c=b.querySelector('meta[property="og:image"]'))?c.getAttribute("content"):void 0);c||(c=(c=b.querySelector('link[rel="shortcut icon"]')||b.querySelector('link[rel="icon"]'))?c.getAttribute("href"):void 0);var d=c;d&&(a.N.artwork=[{src:d}])}!a.N.title&&(b=a.video.element.getAttribute("title")||a.video.element.getAttribute("aria-label")||
a.w.getAttribute("title")||a.w.getAttribute("aria-label")||b.title)&&(a.N.title=b)}}function lb(a){z(a.o,"viewer").isVisible()&&a.ha().then(function(b){var c=a.hasAutoplay&&!a.fa;c&&b?a.La&&(a.K?(a.S.beginSession(),a.video.play(!0),a.xa=!0):(a.P&&a.S.endSession(),a.video.pause(),a.qa=!0)):a.K?a.S.beginSession():a.P&&a.S.endSession()})}
function ib(a){a.video.isInteractive()&&a.video.hideControls();a.ha().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),a.video.isInteractive()&&mb(a))})}
function mb(a){function b(b){a.m.mutate(function(){g.classList.toggle("amp-video-eq-play",b)})}function c(){this.fa=!0;this.video.showControls();this.video.unmute();k.forEach(function(a){a()});C(g);C(f)}function d(){G(f,{display:"none"})}function e(){G(f,{display:"block"})}a.video.hideControls();var g=nb(a),f=ob(a);a.m.mutate(function(){a.video.element.appendChild(g);a.video.element.appendChild(f)});var k=[];k.push(J(f,"click",c.bind(a)));k.push(J(g,"click",c.bind(a)));k.push(J(a.video.element,"pause",
b.bind(a,!1)));k.push(J(a.video.element,"playing",b.bind(a,!0)));k.push(J(a.video.element,"ad_start",d.bind(a)));k.push(J(a.video.element,"ad_end",e.bind(a)))}function jb(a){a.m.run({measure:function(){a.j=a.video.element.getBoundingClientRect()},mutate:function(){a.video.element.classList.add("i-amphtml-dockable-video")}})}function T(a,b,c,d){return(d=void 0===d?!1:d)?Ea(a.U,a.j.height,0,b,c):Ea(a.U,0,a.j.height,b,c)}
h.refreshDockedVideo=function(){var a=this;this.m.run({measure:function(){a.j=a.video.element.getBoundingClientRect();pb(a)},mutate:function(){a.F="inline";if(a.ja)a.onDockableVideoPositionChanged(a.ja);qb(a)}})};function pb(a){a.m.measure(function(){a.C=a.w.getBoundingClientRect();a.h.initial.x=a.C.left;a.h.initial.y=a.C.top;a.h.position.x=a.C.left;a.h.position.y=a.C.top;a.h.previous.x=a.C.left;a.h.previous.y=a.C.top;a.h.displacement.x=0;a.h.displacement.y=0})}
function qb(a){a.I&&a.w&&a.m.mutate(function(){function b(a){var b;b=c;b=(a=va(b.style,a))?b.style[a]:void 0;return b}var c=a.w;G(a.I,{top:b("top"),left:b("left"),bottom:b("bottom"),right:b("right"),transform:b("transform"),"transform-origin":b("transform-origin"),borderRadius:b("borderRadius"),width:b("width"),height:b("height"),position:"fixed","z-index":"17",background:"transparent"})})}
h.onDockableVideoPositionChanged=function(a){var b=this;this.m.run({measure:function(){b.j=b.video.element.getBoundingClientRect();var c="bottom"==a.relativePos,d="top"==a.relativePos,e="inside"==a.relativePos;b.ja=a;a.positionRect||(a.positionRect=c?K(b.j.left,b.l.getHeight(),b.j.width,b.j.height):K(b.j.left,-b.j.height,b.j.width,b.j.height));var g=a.viewportRect.top,f=a.viewportRect.bottom,k=a.positionRect.top,l=a.positionRect.bottom;b.U=k<=g?l-g:l>=f?f-k:l-k;b.X=b.X||Math.ceil(b.U)>=b.j.height;
g=b.video.element.offsetTop;f=b.l.getScrollHeight()-g-b.video.element.offsetHeight;c&&g<b.l.getHeight()||d&&f<b.l.getHeight()?b.B="inline":b.video.element.offsetHeight>=b.l.getHeight()?b.B="inline":(g=b.o.win.document,"inline"!=b.B||e)?e&&(b.B="inline"):d?b.B=ta(g)?"top_left":"top_right":c&&(b.B=ta(g)?"bottom_left":"bottom_right")},mutate:function(){if(b.W&&b.j&&b.w&&("playing_manual"==b.getPlayingState()||b.w.classList.contains("i-amphtml-dockable-video-minimizing"))){var a="inline"!=b.B&&b.X,d=
"playing_manual"==b.getPlayingState(),e="paused"==b.getPlayingState(),g=b.w.classList.contains("i-amphtml-dockable-video-minimizing");if(a&&(d||e&&g)){if("inline"==b.F&&b.oa.canDock(b)&&(b.video.hideControls(),b.w.classList.add("i-amphtml-dockable-video-minimizing"),G(b.w,{height:b.j.height+"px",width:b.j.width+"px",maxWidth:b.j.width+"px"}),G(b.video.element,{"background-color":"#222"}),b.F="docking",b.oa.registerDocked(b)),"inline"!=b.F){var f=b.l.getWidth(),k=b.l.getHeight(),l=f-.6*b.j.width-20,
n=k-.6*b.j.height-20,p=f=0;switch(b.B){case "top_left":f=p=20;break;case "top_right":p=l;f=20;break;case "bottom_left":f=n;p=20;break;case "bottom_right":f=n,p=l}k=Math.max(0,Math.min(k-b.j.height,b.j.top));p=T(b,b.j.left,p,!0)+"px";f=T(b,k,f,!0)+"px";f=xa(p,f);k="scale("+T(b,.6,1)+")";G(b.w,{transform:f+" "+k,transformOrigin:"top left",bottom:"auto",top:"0px",right:"auto",left:"0px"});.6==T(b,.6,1)?b.F="docked":b.F="docking"}}else g&&rb(b);"docked"==b.F?sb(b):tb(b)}}})};
function U(a,b,c,d){a.la.push(I(b,c,d))}
function sb(a){a.ka||a.m.run({measure:function(){pb(a)},mutate:function(){a.I=a.o.win.document.createElement("i-amphtml-dragging-mask");qb(a);a.video.element.appendChild(a.I);U(a,a.I,"mousedown",function(b){b.preventDefault();a.R=!0;a.J=!1;V(a,b,!0)});U(a,a.o.win.document,"mouseup",function(){a.R=!1;a.J=!1;W(a)});U(a,a.o.win.document,"mousemove",function(b){a.J=a.R;a.J&&(b.preventDefault(),a.F="draggable",W(a));V(a,b)});U(a,a.I,"touchstart",function(b){b.preventDefault();a.R=!0;a.J=!1;V(a,b,!0)});
U(a,a.o.win.document,"touchend",function(){a.R=!1;a.J=!1;W(a)});U(a,a.o.win.document,"touchmove",function(b){a.J=a.R;a.J&&(b.preventDefault(),a.F="draggable",W(a));V(a,b)});a.ka=!0}})}
function W(a){a.m.run({measure:function(){a.C=a.w.getBoundingClientRect()},mutate:function(){if(a.W&&a.w&&"inline"!=a.B&&0==a.U&&a.w.classList.contains("i-amphtml-dockable-video-minimizing")&&"draggable"==a.F){var b=a.h;if(a.J){b.previous.x=b.position.x;b.previous.y=b.position.y;b.position.x=b.mouse.x-b.displacement.x;b.position.y=b.mouse.y-b.displacement.y;b.velocity.x=b.position.x-b.previous.x;b.velocity.y=b.position.y-b.previous.y;var c=a.C.width,d=a.C.height,e=b.position.x+c/2,g=b.position.y+
d/2;if(e>a.l.getWidth()||0>e||g>a.l.getHeight()||0>g)a.na=!0}else if(b.position.x+=b.velocity.x,b.position.y+=b.velocity.y,b.velocity.x*=.55,b.velocity.y*=.55,a.na){a.video.pause();rb(a);a.na=!1;return}if(!a.J&&!a.$&&3>=Math.abs(b.velocity.x)&&3>=Math.abs(b.velocity.y)){var f=a.l.getWidth()-a.C.width-20,k=a.l.getHeight()-a.C.height-20;ub(a);var l=b.position.x,n=b.position.y;switch(a.B){case "bottom_right":l=f;n=k;break;case "top_right":l=f;n=20;break;case "bottom_left":l=20;n=k;break;case "top_left":n=
l=20}if(b.position.x!=l||b.position.y!=n)a.$=!0,vb(a,a.I,l,n),vb(a,a.w,l,n),a.F="docked"}a.$||(wb(a,a.I),wb(a,a.w));a.J||a.m.mutate(function(){W(a)})}}})}function tb(a){a.m.mutate(function(){for(var b=a.la.pop();b;)b.call(),b=a.la.pop();a.ka=!1;a.I&&(C(a.I),a.I=null)})}
function V(a,b,c){c=void 0===c?!1:c;b.x?(a.h.mouse.x=b.x,a.h.mouse.y=b.y):b.touches&&(a.h.mouse.x=b.touches[0].clientX,a.h.mouse.y=b.touches[0].clientY);c&&(a.h.displacement.x=Math.abs(a.h.position.x-a.h.mouse.x),a.h.displacement.y=Math.abs(a.h.position.y-a.h.mouse.y))}function ub(a){var b=a.l.getWidth()/2,c=a.l.getHeight()/2,d=a.C.width,e=a.C.height,g=a.h.position.x+d/2,f=a.h.position.y+e/2;g>=b?f>=c?a.B="bottom_right":f<c&&(a.B="top_right"):g<b&&(f>=c?a.B="bottom_left":f<c&&(a.B="top_left"))}
function rb(a){tb(a);a.video.showControls();a.w.classList.remove("i-amphtml-dockable-video-minimizing");a.w.setAttribute("style","");G(a.video.element,{"background-color":"transparent"});a.F="inline";a.oa.unregisterDocked()}
function nb(a){var b=a.o.win.document,c=b.createElement("i-amphtml-video-eq");c.classList.add("amp-video-eq");for(var d=1;4>=d;d++){var e=b.createElement("div");e.classList.add("amp-video-eq-col");for(var g=1;2>=g;g++){var f=b.createElement("div");f.classList.add("amp-video-eq-"+d+"-"+g);e.appendChild(f)}c.appendChild(e)}var k=D(a.o.win);k.isIos()&&c.setAttribute("unpausable","");return c}
function vb(a,b,c,d){Na(b,Pa(b,{transform:Oa([Ra(Qa(P(a.h.position.x,c)),Qa(P(a.h.position.y,d))),Sa()])})).thenAlways(function(){a.h.position.x=c;a.h.position.y=d;a.$=!1})}function wb(a,b){a=xa(a.h.position.x+"px",a.h.position.y+"px");G(b,{transform:a+" scale(0.6)","transform-origin":"top left",bottom:"auto",top:"0px",right:"auto",left:"0px"})}function ob(a){a=a.o.win.document.createElement("i-amphtml-video-mask");a.classList.add("i-amphtml-fill-content");return a}
h.updateVisibility=function(a){function b(){d.K!=e&&d.W&&lb(d)}function c(){if(1==a)d.K=!0;else{var b=d.video.element.getIntersectionChangeEntry(),c=r(b.intersectionRatio)?100*b.intersectionRatio:0;d.K=75<=c}}var d=this,e=this.K;this.m.run({measure:c,mutate:b})};h.getPlayingState=function(){return this.P?this.P&&this.xa&&!this.fa?"playing_auto":"playing_manual":"paused"};h.userInteractedWithAutoPlay=function(){return this.fa};
h.getAnalyticsDetails=function(){var a=this,b=this.video;return this.ha().then(function(c){var d=a.video.element.getLayoutBox(),e=d.width,d=d.height,g=a.hasAutoplay&&c,f=b.getPlayedRanges(),k=f.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:g,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.L,playedTotal:k,playedRangesJson:JSON.stringify(f),state:a.getPlayingState(),width:e}})};var X=null;
function gb(a,b){if(X)return X;if(b)return X=Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;c.setAttribute("height","0");c.setAttribute("width","0");G(c,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});try{var d=c.play();d&&d.catch&&d.catch(function(){})}catch(e){}return X=Promise.resolve(!c.paused)}
function S(a,b){var c,d=a.video,e=c?Promise.resolve(c):a.getAnalyticsDetails();e.then(function(a){d.element.dispatchCustomEvent(b,a)})};function Y(a){a=AMP.BaseElement.call(this,a)||this;a.ba="unstarted";a.Ia=null;a.H=null;a.L=!1;a.Qa=!1;a.Ua=null;a.aa=null;a.ya=null;a.Da=null;a.Ea=null;a.wa=!1;return a}aa(Y,AMP.BaseElement);h=Y.prototype;h.preconnectCallback=function(a){this.preconnect.url("https://www.dailymotion.com",a);this.preconnect.url("https://static1.dmcdn.net",a)};h.supportsPlatform=function(){return!0};h.isInteractive=function(){return!0};
h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};h.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};
h.buildCallback=function(){var a=this;this.Ia=fa().assert(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-dailymotion> %s",this.element);pa(this.element,"video-manager",ab);z(this.element,"video-manager").register(this);this.aa=new Promise(function(b){a.ya=b});this.Da=new Promise(function(b){a.Ea=b})};
h.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe");a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=xb(this);this.applyFillContent(a);this.element.appendChild(a);this.H=a;this.Ua=J(this.win,"message",this.Pa.bind(this));this.Qa=this.element.hasAttribute("autoplay");return this.loadPromise(this.H)};
h.Pa=function(a){if("https://www.dailymotion.com"==a.origin&&a.source==this.H.contentWindow&&a.data&&a.type&&"message"==a.type&&(a=m(a.data),void 0!==a))switch(a.event){case "apiready":this.ya(!0);this.element.dispatchCustomEvent("load");break;case "end":this.element.dispatchCustomEvent("ended");case "pause":this.element.dispatchCustomEvent("pause");this.ba="pause";break;case "play":this.element.dispatchCustomEvent("playing");this.ba="play";break;case "volumechange":if("unstarted"==this.ba||this.L!=
(0==a.volume||"true"==a.muted))(this.L=0==a.volume||"true"==a.muted)?this.element.dispatchCustomEvent("muted"):this.element.dispatchCustomEvent("unmuted");break;case "progress":this.Ea(!0);break;case "fullscreenchange":this.wa="true"==a.fullscreen}};function Z(a,b,c){var d="https://www.dailymotion.com";a.aa.then(function(){if(a.H&&a.H.contentWindow){var e=JSON.stringify(ha({command:b,parameters:c||[]}));a.H.contentWindow.postMessage(e,d)}})}
function xb(a){var b="https://www.dailymotion.com/embed/video/"+encodeURIComponent(a.Ia||"")+"?api=1&html=1&app=amp",c="mute endscreen-enable sharing-enable start ui-highlight ui-logo info".split(" ");c.forEach(function(c){var d=a.element.getAttribute("data-"+c);if(d){var e=b,d=encodeURIComponent(c)+"="+encodeURIComponent(d);b=ka(e,d,void 0)}});var d=sa(a.element);return b=ka(b,la(d))}h.pauseCallback=function(){this.pause()};
h.play=function(a){var b=this;Z(this,"play");a&&"pause"!=this.ba&&this.Da.then(function(){Z(b,"play")})};h.pause=function(){Z(this,"pause")};h.mute=function(){var a=this;Z(this,"muted",[!0]);this.aa.then(function(){a.element.dispatchCustomEvent("muted");a.L=!0})};h.unmute=function(){var a=this;Z(this,"muted",[!1]);this.aa.then(function(){a.element.dispatchCustomEvent("unmuted");a.L=!1})};h.showControls=function(){Z(this,"controls",[!0])};h.hideControls=function(){Z(this,"controls",[!1])};
h.fullscreenEnter=function(){var a=D(this.win);if(a.isSafari()||a.isIos())Z(this,"fullscreen",[!0]);else if(this.H){var a=this.H,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitRequestFullScreen||a.webkitEnterFullscreen||a.webkitEnterFullScreen||a.msRequestFullscreen||a.msRequestFullScreen||a.mozRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
h.fullscreenExit=function(){var a=D(this.win);if(a.isSafari()||a.isIos())Z(this,"fullscreen",[!1]);else if(this.H){var a=this.H,b=a.cancelFullScreen||a.exitFullscreen||a.exitFullScreen||a.webkitExitFullscreen||a.webkitExitFullScreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a.ownerDocument&&(b=a.ownerDocument.cancelFullScreen||a.ownerDocument.exitFullscreen||a.ownerDocument.exitFullScreen||a.ownerDocument.webkitExitFullscreen||a.ownerDocument.webkitExitFullScreen||
a.ownerDocument.webkitCancelFullScreen||a.ownerDocument.mozCancelFullScreen||a.ownerDocument.msExitFullscreen),b&&b.call(a.ownerDocument))}};h.isFullscreen=function(){var a=D(this.win);a.isSafari()||a.isIos()?a=this.wa:this.H?(a=this.H,a=a.webkitDisplayingFullscreen?!0:a.ownerDocument&&(a.ownerDocument.fullscreenElement||a.ownerDocument.webkitFullscreenElement||a.ownerDocument.mozFullScreenElement||a.webkitCurrentFullScreenElement)==a?!0:!1):a=!1;return a};h.getMetadata=function(){};
h.preimplementsMediaSessionAPI=function(){return!1};h.getCurrentTime=function(){return 0};h.getDuration=function(){return 1};h.getPlayedRanges=function(){return[]};(function(a){a.registerElement("amp-dailymotion",Y)})(self.AMP);
})});
//# sourceMappingURL=amp-dailymotion-0.1.js.map

