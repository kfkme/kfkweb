(function(){var l={DOWN_APP_URL:"http://m.jd.com/download/downApp.html",DOWN_APP_IOS:"http://union.m.jd.com/download/go.action?to=http%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid414245413&client=apple&unionId=12532&subunionId=m-top&key=e4dd45c0f480d8a08c4621b4fff5de74",DOWN_APP_ANDROID:"http://m.jd.com/download/downApp.html",DOWN_WEIXIN:"http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",DOWN_IPAD:"https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",INTENT_URL:"openApp.jdMobile://360buy?params=",Chrome_Intent:"intent://m.jd.com/#Intent;scheme=openApp.jdMobile;package=com.jingdong.app.mall;end"};var x=navigator.userAgent;var c=window.localStorage?true:false;var d=(x.match(/Chrome\/([\d.]+)/)||x.match(/CriOS\/([\d.]+)/))?true:false;var z=(x.match(/(Android);?[\s\/]+([\d.]+)?/))?true:false;var p=(x.match(/(iPad).*OS\s([\d_]+)/))?true:false;var t=(!p&&x.match(/(iPhone\sOS)\s([\d_]+)/))?true:false;var f=navigator.userAgent.indexOf("MicroMessenger")>=0;var q=false;var r="plugIn_downloadAppPlugIn_loadIframe";var k=false;var b=0;var a={};var h={};var n={};function A(e,E){var C=document.getElementsByTagName("script");for(i=0;i<C.length;i++){if(C[i].src&&C[i].src.indexOf("/active/track/mping.min.js")!=-1){E();return}}var D=document.createElement("script");D.type="text/javascript";D.src=e;D.onload=D.onreadystatechange=function(){if(this.readyState&&this.readyState=="loading"){return}E()};D.onerror=function(){B.removeChild(D);E()};var B=document.getElementsByTagName("head")[0];B.appendChild(D)}function j(E){var D=[];if(E){for(var C in E){if(C&&E[C]){D.push('"'+C+'":"'+E[C]+'"')}}}try{D.push('"m_param":'+MPing.EventSeries.getSeries())}catch(F){D.push('"m_param":null')}var B="{"+D.join(",")+"}";return l.INTENT_URL+B+"&r="+(new Date()).getTime()}function u(e){return"intent://m.jd.com/#Intent;scheme="+e+";package=com.jingdong.app.mall;end"}function w(){WeixinJSBridge.invoke("getInstallState",{packageName:"com.jingdong.app.mall",packageUrl:"openApp.jdMobile://"},function(C){var D=C.err_msg,B=0;if(D.indexOf("get_install_state:yes")>-1){q=true}})}function s(B,C){if(f){if(q){var e=C&&C.DOWN_APP_URL?C.DOWN_APP_URL:j(B);location.href=e}else{var e=C&&C.DOWN_WEIXIN?C.DOWN_WEIXIN:l.DOWN_WEIXIN;location.href=e}return}o(B,C)}function o(B,D){var e=null;var C=null;if(p){e=D&&D.DOWN_IPAD?D.DOWN_IPAD:l.DOWN_IPAD}else{if(t){e=D&&D.DOWN_APP_IOS?D.DOWN_APP_IOS:l.DOWN_APP_IOS}else{e=D&&D.DOWN_APP_URL?D.DOWN_APP_URL:l.DOWN_APP_URL}}if(d){if(z){C=u()}else{C=D&&D.INTENT_URL?D.INTENT_URL:j(B)}}else{C=D&&D.INTENT_URL?D.INTENT_URL:j(B)}document.querySelector("#"+r).src=C;setTimeout(function(){location.href=e},100)}function v(C){try{var D=new MPing.inputs.Click(C);D.event_param="";var B=new MPing();B.send(D)}catch(E){}}function g(e){var B=(e||"mGen")+(++b);return B}function m(B,e){(typeof console!=="undefined"&&console!==null)&&(console[e||(e="log")])&&console[e](B)}if(f){if(window.WeixinJSBridge&&WeixinJSBridge.invoke){w()}else{document.addEventListener("WeixinJSBridgeReady",w,!1)}}if(window.$LAB){$LAB.setOptions({AlwaysPreserveOrder:true}).script("http://h5.m.jd.com/active/track/mping.min.js")}else{A("http://h5.m.jd.com/active/track/mping.min.js",function(){})}if(c){try{window.localStorage.setItem("M_test",1)}catch(y){c=false}try{window.localStorage.getItem("M_test")}catch(y){c=false}try{window.localStorage.removeItem("M_test")}catch(y){c=false}}if(window.Zepto||window.jQuery){$.fn.downloadAppPlugIn=function(B,e){var C=this;var D=$(this).attr("id");if(!D){D=g("downloadAppPlugIn");$(this).attr("id",D)}a[D]=B;if(e){h[D]=e}$(C).bind("click",function(E){if(!k){$("body").append('<iframe id="'+r+'" style="display:none;width:0px;height:0px;"></iframe>');k=true}v("MDownLoadFloat_OpenNow");s(a[$(this).attr("id")],h[$(this).attr("id")])})};$.fn.downloadAppPlugInClose=function(B,E,D){if(!B){m("closeId is null","error");return}var F=$(this).attr("id");if(!F){F=g("downloadAppPlugInClose");$(this).attr("id",F)}n[F]=B;var e=Date.now();if(c){if(localStorage.downCloseDate&&e-parseInt(localStorage.downCloseDate,10)<86400000){$("#"+B).hide();if(E){var C=D?D:null;E.call(C)}return false}}$(this).bind("click",function(H){v("MDownLoadFloat_Close");$("#"+n[this.getAttribute("id")]).hide();if(c){localStorage.downCloseDate=Date.now()}if(E){var G=D?D:null;E.call(G)}})}}else{window.$=function(e){if(typeof e=="object"){return e}var B=document.querySelector(e);B.downloadAppPlugIn=function(D,C){var E=B.getAttribute("id");if(!E){E=g("downloadAppPlugIn");B.setAttribute("id",E)}a[E]=D;if(C){h[E]=C}B.addEventListener("click",function(){if(!k){var F=document.createElement("iframe");F.id=r;F.style="display:none;width:0px;height:0px;";document.body.appendChild(F);k=true}v("MDownLoadFloat_OpenNow");s(a[this.getAttribute("id")],h[this.getAttribute("id")])},!1)};B.downloadAppPlugInClose=function(D,G,F){if(!D){m("closeId is null","error");return}var H=B.getAttribute("id");if(!H){H=g("downloadAppPlugInClose");B.setAttribute("id",H)}n[H]=D;var C=Date.now();if(c){if(localStorage.downCloseDate&&C-parseInt(localStorage.downCloseDate,10)<86400000){document.querySelector("#"+D).style.display="none";if(G){var E=F?F:null;G.call(E)}return false}}B.addEventListener("click",function(){v("MDownLoadFloat_Close");document.querySelector("#"+n[this.getAttribute("id")]).style.display="none";if(c){localStorage.downCloseDate=Date.now()}if(G){var I=F?F:null;G.call(I)}},!1)};return B}}})();