!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonpfastman;window.webpackJsonpfastman=function(i,o,a){for(var s,u,c,l=0,f=[];l<i.length;l++)u=i[l],r[u]&&f.push(r[u][0]),r[u]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(n&&n(i,o,a);f.length;)f.shift()();if(a)for(l=0;l<a.length;l++)c=e(e.s=a[l]);return c};var i={},r={32:0};return e.e=function(t){function n(){s.onerror=s.onload=null,clearTimeout(u);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}var i=r[t];if(0===i)return new Promise(function(t){t()});if(i)return i[2];var o=new Promise(function(e,n){i=r[t]=[e,n]});i[2]=o;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,e.nc&&s.setAttribute("nonce",e.nc),s.src=e.p+""+t+".js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),o},e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw t},e(e.s=231)}({101:function(t,e,n){"use strict";var i={},r=navigator.userAgent,o=r.match(/(Android);?[\s\/]+([\d.]+)?/),a=r.match(/(iPad).*OS\s([\d_]+)/),s=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!a&&r.match(/(iPhone\sOS)\s([\d_]+)/),c=r.match(/MSIE\s([\d.]+)/)||r.match(/Trident\/[\d](?=[^?]+).*rv:([0-9.].)/);if(i.ios=i.android=i.iphone=i.ipad=i.androidChrome=i.ie=!1,o&&(i.os="android",i.osVersion=o[2],i.android=!0,i.androidChrome=r.toLowerCase().indexOf("chrome")>=0),(a||u||s)&&(i.os="ios",i.ios=!0),u&&!s&&(i.osVersion=u[2].replace(/_/g,"."),i.iphone=!0),a&&(i.osVersion=a[2].replace(/_/g,"."),i.ipad=!0),s&&(i.osVersion=s[3]?s[3].replace(/_/g,"."):null,i.iphone=!0),i.ios&&i.osVersion&&r.indexOf("Version/")>=0&&"10"===i.osVersion.split(".")[0]&&(i.osVersion=r.toLowerCase().split("version/")[1].split(" ")[0]),c&&(i.ie=!0,i.ieVersion=c[1]),i.hasNativeHistory=history&&history.pushState,i.webView=(u||a||s)&&r.match(/.*AppleWebKit(?!.*Safari)/i),i.os&&"ios"===i.os){var l=i.osVersion.split(".");i.minimalUi=!i.webView&&(s||u)&&(1*l[0]==7?1*l[1]>=1:1*l[0]>7)&&$('meta[name="viewport"]').length>0&&$('meta[name="viewport"]').attr("content").indexOf("minimal-ui")>=0}var f=$(window).width(),h=$(window).height();i.statusBar=!1,i.webView&&f*h==screen.width*screen.height?i.statusBar=!0:i.statusBar=!1;var p=[];if(i.pixelRatio=window.devicePixelRatio||1,p.push("pixel-ratio-"+Math.floor(i.pixelRatio)),i.pixelRatio>=2&&p.push("retina"),i.os&&(p.push(i.os,i.os+"-"+i.osVersion.split(".")[0],i.os+"-"+i.osVersion.replace(/\./g,"-")),"ios"===i.os))for(var d=parseInt(i.osVersion.split(".")[0],10),m=d-1;m>=6;m--)p.push("ios-gt-"+m);i.statusBar?p.push("with-statusbar-overlay"):$("html").removeClass("with-statusbar-overlay"),p.length>0&&$("html").addClass(p.join(" ")),i.isWeixin=/MicroMessenger/i.test(r),$.device=i},103:function(t,e){!function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){if(t.global)return e(n||w,i,r)}function i(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;if(!1===e.beforeSend.call(i,t,e)||!1===n(e,i,"ajaxBeforeSend",[t,e]))return!1;n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context;i.success.call(o,t,"success",e),r&&r.resolveWith(o,[t,"success",e]),n(i,o,"ajaxSuccess",[e,i,t]),u("success",e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(t,e,n){if(n.dataFilter==l)return t;var i=n.context;return n.dataFilter.call(i,t,e)}function l(){}function f(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==T?"json":x.test(t)?"script":E.test(t)&&"xml")||"text"}function h(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=h(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function m(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?m(e,u,i,n):e.add(n,u)})}var v,g,y=+new Date,w=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,T="application/json",S="text/html",C=/^\s*$/,j=w.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"Zepto"+y++,l=w.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),!1===o(p,e)?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),w.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},t.ajax=function(e){var n,r,u=t.extend({},e||{}),d=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===u[v]&&(u[v]=t.ajaxSettings[v]);i(u),u.crossDomain||(n=w.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(r=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,r)),p(u);var m=u.dataType,y=/\?.+=\?/.test(u.url);if(y&&(m="jsonp"),!1!==u.cache&&(e&&!0===e.cache||"script"!=m&&"jsonp"!=m)||(u.url=h(u.url,"_="+Date.now())),"jsonp"==m)return y||(u.url=h(u.url,u.jsonp?u.jsonp+"=?":!1===u.jsonp?"":"callback=?")),t.ajaxJSONP(u,d);var b,x=u.accepts[m],E={},T=function(t,e){E[t.toLowerCase()]=[t,e]},S=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,A=u.xhr(),$=A.setRequestHeader;if(d&&d.promise(A),u.crossDomain||T("X-Requested-With","XMLHttpRequest"),T("Accept",x||"*/*"),(x=u.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),A.overrideMimeType&&A.overrideMimeType(x)),(u.contentType||!1!==u.contentType&&u.data&&"GET"!=u.type.toUpperCase())&&T("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(g in u.headers)T(g,u.headers[g]);if(A.setRequestHeader=T,A.onreadystatechange=function(){if(4==A.readyState){A.onreadystatechange=l,clearTimeout(b);var e,n=!1;if(A.status>=200&&A.status<300||304==A.status||0==A.status&&"file:"==S){if(m=m||f(u.mimeType||A.getResponseHeader("content-type")),"arraybuffer"==A.responseType||"blob"==A.responseType)e=A.response;else{e=A.responseText;try{e=c(e,m,u),"script"==m?(0,eval)(e):"xml"==m?e=A.responseXML:"json"==m&&(e=C.test(e)?null:t.parseJSON(e))}catch(t){n=t}if(n)return s(n,"parsererror",A,u,d)}a(e,A,u,d)}else s(A.statusText||null,A.status?"error":"abort",A,u,d)}},!1===o(A,u))return A.abort(),s(null,"abort",A,u,d),A;var M=!("async"in u)||u.async;if(A.open(u.type,u.url,M,u.username,u.password),u.xhrFields)for(g in u.xhrFields)A[g]=u.xhrFields[g];for(g in E)$.apply(A,E[g]);return u.timeout>0&&(b=setTimeout(function(){A.onreadystatechange=l,A.abort(),s(null,"timeout",A,u,d)},u.timeout)),A.send(u.data?u.data:null),A},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=d(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var A=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(A(e)+"="+A(n))},m(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto)},104:function(t,e){!function(t){function e(e,i){var u=e[s],c=u&&r[u];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var l=a(i);if(l in c)return c[l]}return o.call(t(e),i)}function n(e,n,o){var u=e[s]||(e[s]=++t.uuid),c=r[u]||(r[u]=i(e));return void 0!==n&&(c[a(n)]=o),c}function i(e){var n={};return t.each(e.attributes||u,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date,u=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0 in this?e(this[0],i):void 0:this.each(function(){n(this,i,r)})},t.data=function(e,n,i){return t(e).data(n,i)},t.hasData=function(e){var n=e[s],i=n&&r[n];return!!i&&!t.isEmptyObject(i)},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?a(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(Zepto)},105:function(t,e){!function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function a(t){return b[t]||y&&w[t]||t}function s(n,r,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in b&&(s=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return r.fn.apply(this,arguments)}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=E}),e.timeStamp||(e.timeStamp=Date.now()),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},E=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||!1===r||(r=i,i=n,n=f),r!==f&&!1!==i||(r=i,i=f),!1===r&&(r=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||!1===i||(i=n,n=f),!1===i&&(i=E),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(Zepto)},106:function(t,e){var n=function(){function t(t){return null==t?String(t):X[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){var e=!!t&&"length"in t&&t.length,i=S.type(t);return"function"!=i&&!n(t)&&("array"==i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function s(t){return P.call(t,function(t){return null!=t})}function u(t){return t.length>0?S.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in V?V[t]:V[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||F[c(t)]?e:e+"px"}function h(t){var e,n;return D[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function p(t){return"children"in t?N.call(t.children):S.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,e){var n,i=t?t.length:0;for(n=0;n<i;n++)this[n]=t[n];this.length=i,this.selector=e||""}function m(t,e,n){for(T in e)n&&(o(e[T])||Q(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),Q(e[T])&&!Q(t[T])&&(t[T]=[]),m(t[T],e[T],n)):e[T]!==E&&(t[T]=e[T])}function v(t,e){return null==e?S(t):S(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t,e){var n=t.className||"",i=n&&n.baseVal!==E;if(e===E)return i?n.baseVal:n;i?n.baseVal=e:t.className=e}function b(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)x(t.childNodes[n],e)}var E,T,S,C,j,A,$=[],M=$.concat,P=$.filter,N=$.slice,O=window.document,D={},V={},F={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,L=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,R=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],Z=O.createElement("table"),B=O.createElement("tr"),U={tr:O.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:B,th:B,"*":O.createElement("div")},H=/complete|loaded|interactive/,W=/^[\w-]*$/,X={},J=X.toString,Y={},G=O.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~Y.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},A=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var i,r,a;return L.test(t)&&(i=S(O.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(z,"<$1></$2>")),e===E&&(e=k.test(t)&&RegExp.$1),e in U||(e="*"),a=U[e],a.innerHTML=""+t,i=S.each(N.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=S(i),S.each(n,function(t,e){q.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return new d(t,e)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var i;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&k.test(t))i=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return S(n).find(t);i=Y.qsa(O,t)}else{if(e(t))return S(O).ready(t);if(Y.isZ(t))return t;if(Q(t))i=s(t);else if(r(t))i=[t],t=null;else if(k.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return S(n).find(t);i=Y.qsa(O,t)}}return Y.Z(i,t)},S=function(t,e){return Y.init(t,e)},S.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Y.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=W.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:N.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=Q,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},S.inArray=function(t,e,n){return $.indexOf.call(e,t,n)},S.camelCase=j,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.noop=function(){},S.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return u(o)},S.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},S.grep=function(t,e){return P.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),S.fn={constructor:Y.Z,length:0,forEach:$.forEach,reduce:$.reduce,push:$.push,sort:$.sort,splice:$.splice,indexOf:$.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Y.isZ(e)?e.toArray():e;return M.apply(Y.isZ(this)?this.toArray():this,n)},map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(N.apply(this,arguments))},ready:function(t){return H.test(O.readyState)&&O.body?t(S):O.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===E?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return $.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(P.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return S(A(this.concat(S(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):S(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return r(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:S(t)},find:function(t){var e=this;return t?"object"==typeof t?S(t).filter(function(){var t=this;return $.some.call(e,function(e){return S.contains(e,t)})}):1==this.length?S(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):S()},closest:function(t,e){var n=[],r="object"==typeof t&&S(t);return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:Y.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return v(e,t)},parent:function(t){return v(A(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||N.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=S(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=S(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(T in t)y(this,T,t[T]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=K[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):E},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=g(this,t,e,this.value)})):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=S(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(O.documentElement!==this[0]&&!S.contains(O.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0];if("string"==typeof e){if(!i)return;return i.style[j(e)]||getComputedStyle(i,"").getPropertyValue(e)}if(Q(e)){if(!i)return;var r={},o=getComputedStyle(i,"");return S.each(e,function(t,e){r[e]=i.style[j(e)]||o.getPropertyValue(e)}),r}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&$.some.call(this,function(t){return this.test(w(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){C=[];var n=w(this);g(this,t,e,n).split(/\s+/g).forEach(function(t){S(this).hasClass(t)||C.push(t)},this),C.length&&w(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return w(this,"");C=w(this),g(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),w(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=S(this);g(this,t,n,w(this)).split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=_.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,i.top+=parseFloat(S(e[0]).css("border-top-width"))||0,i.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!_.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(r){var o,a=this[0];return r===E?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=S(this),a.css(t,g(this,r,e,a[t]()))})}}),I.forEach(function(e,n){var i=n%2;S.fn[e]=function(){var e,r,o=S.map(arguments,function(n){var i=[];return e=t(n),"array"==e?(n.forEach(function(t){return t.nodeType!==E?i.push(t):S.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(Y.fragment(t)))}),i):"object"==e||null==n?n:Y.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=S.contains(O.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return S(t).remove();r.insertBefore(t,e),s&&x(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:window;e.eval.call(e,t.innerHTML)}})})})},S.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),Y.Z.prototype=d.prototype=S.fn,Y.uniq=A,Y.deserializeValue=b,S.zepto=Y,S}();window.Zepto=n,void 0===window.$&&(window.$=n)},231:function(t,e,n){n(106),n(105),n(92),n(104),n(103),n(101),n(75),t.exports=n(74)},32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.compareVersion=function(t,e){var n=t.split("."),i=e.split(".");if(t===e)return 0;for(var r=0;r<n.length;r++){var o=parseInt(n[r]);if(!i[r])return 1;var a=parseInt(i[r]);if(o<a)return-1;if(o>a)return 1}return-1}},74:function(t,e,n){"use strict";function i(){var t=0,e=0,n=screen.height,i=screen.width,r=document.documentElement.clientHeight,u=document.documentElement.clientWidth,f=window.devicePixelRatio;switch(window.orientation){case 0:case 180:s?(t=Math.max(n,i),e=Math.max(r,u),o||a||t/f>=e&&u!=i&&(t/=f)):(t=Math.min(n,i),e=Math.min(r,u),o||a||Math.ceil(t/f)>=e&&r!=n&&(t/=f));break;case-90:case 90:s?(t=Math.min(n,i),e=Math.min(r,u),o||a||t/f>=e&&r!=n&&(t/=f)):c||l?(t=Math.max(n,i),e=Math.max(r,u),o||a||t/f>=e&&u!=i&&(t=t/f-100)):(t=Math.max(n,i),e=Math.max(r,u),o||a||Math.ceil(t/f)>=e&&u!=i&&(t/=f));break;default:t=i}window.remFontSize=t/16,document.documentElement.style.fontSize=t/16+"px";try{for(var h=document.getElementById(kb.settings.id+"_kb").querySelectorAll(".keyboardEle"),p=0;p<h.length;p++)$(h[p]).removeClass("active").removeClass("active2")}catch(t){}}var r=n(32),o=window.navigator.appVersion.match(/iPad/gi),a=window.navigator.appVersion.match(/iphone/gi),s=window.navigator.appVersion.match(/SM-T800/gi),u=window.navigator.appVersion.match(/UCBrowser/gi),c=window.navigator.appVersion.match(/Lenovo A890e/gi)&&window.navigator.appVersion.match(/360 Aphone Browser/gi),l=window.navigator.appVersion.match(/HUAWEI D2-6070/gi)&&window.navigator.appVersion.match(/LieBaoFast/gi),f=window.navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),h=window.navigator.userAgent.match(/U3\/((\d+|\.){5,})/i),p=h&&parseInt(h[1].split(".").join(""),10)>=80,d=window.navigator.appVersion.match(/(iphone|ipad|ipod)/gi),m=!0,v=window.navigator.appVersion.match(/android/gi);if(function(){o&&(document.querySelector("html").className="ua-ipad")}(),v&&u){var g=null;window.addEventListener("orientationchange",function(){m=!1,clearTimeout(g),g=setTimeout(i,300)},!1);navigator.userAgent.match(/Firefox/gi)&&window.addEventListener("resize",function(){clearTimeout(g),g=setTimeout(i,300)},!1),i()}else!function(t){function e(){var t=o.getAttribute("data-dpr");if(t)try{a=parseInt(t)}catch(t){}if("no"!=o.getAttribute("data-rem")){var e=o.getBoundingClientRect().width/a,n=e/16,i=n*a;o.style.fontSize=i+"px";var r=o.getAttribute("data-sysfont");if(v&&r){var s=document.createElement("div");s.style.cssText="width:1rem;height:0;overflow: hidden;position:absolute;z-index:-1;visibility: hidden;",document.body.appendChild(s);var u=s.offsetWidth;document.body.removeChild(s);var c=document.querySelector("html"),l=parseFloat(c.style.fontSize)||0,f=l;u!=l&&(f=Math.pow(l,2)/u),c.style.fontSize=f+"px"}}}var n,i=t.document,o=i.documentElement,a=t.devicePixelRatio||1;d||f&&f[1]>534||p||(a=1),a=parseInt(a);var s=o.getAttribute("data-dpr");if(s)try{a=parseInt(s)}catch(t){}o.setAttribute("data-dpr",a);var u=1/a,c=i.querySelector('meta[name="viewport"]');c||(c=i.createElement("meta"),c.setAttribute("name","viewport"),i.head.appendChild(c)),$.device.ios&&r.compareVersion($.device.osVersion,"10.0.0")<0&&(u=1),o.setAttribute("data-scale",u),"no"!=o.getAttribute("data-rem")&&c.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(e,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(e,300))},!1),e()}(window)},75:function(t,e,n){"use strict";function i(t,e){function n(t){if(t.target===this)for(e.call(this,t),i=0;i<r.length;i++)o.off(r[i],n)}var i,r=t,o=this;if(e)for(i=0;i<r.length;i++)o.on(r[i],n)}["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});$.fn["outer"+e]=function(e){var n=this;if(n){var i=n[t]();return{width:["left","right"],height:["top","bottom"]}[t].forEach(function(t){e&&(i+=parseInt(n.css("margin-"+t),10))}),i}return null}}),$.support=function(){return{touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)}}(),$.touchEvents={start:$.support.touch?"touchstart":"mousedown",move:$.support.touch?"touchmove":"mousemove",end:$.support.touch?"touchend":"mouseup"},$.getTranslate=function(t,e){var n,i,r,o;return void 0===e&&(e="x"),r=window.getComputedStyle(t,null),window.WebKitCSSMatrix?o=new WebKitCSSMatrix("none"===r.webkitTransform?"":r.webkitTransform):(o=r.MozTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=o.toString().split(",")),"x"===e&&(i=window.WebKitCSSMatrix?o.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===e&&(i=window.WebKitCSSMatrix?o.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),i||0},$.requestAnimationFrame=function(t){return window.requestAnimationFrame?window.requestAnimationFrame(t):window.webkitRequestAnimationFrame?window.webkitRequestAnimationFrame(t):window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(t):window.setTimeout(t,1e3/60)},$.cancelAnimationFrame=function(t){return window.cancelAnimationFrame?window.cancelAnimationFrame(t):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(t):window.mozCancelAnimationFrame?window.mozCancelAnimationFrame(t):window.clearTimeout(t)},$.fn.dataset=function(){var t={},e=this[0].dataset;for(var n in e){var i=t[n]=e[n];"false"===i?t[n]=!1:"true"===i?t[n]=!0:parseFloat(i)===1*i&&(t[n]=1*i)}return $.extend({},t,this[0].__eleData)},$.fn.zeptoData=$.fn.data,$.fn.data=function(t,e){var n=$(this).dataset();if(!t)return n;if(void 0===e){var i=n[t],r=this[0].__eleData;return r&&t in r?r[t]:i}for(var o=0;o<this.length;o++){var a=this[o];t in n&&delete a.dataset[t],a.__eleData||(a.__eleData={}),a.__eleData[t]=e}return this},$.fn.animationEnd=function(t){return i.call(this,["webkitAnimationEnd","animationend"],t),this},$.fn.transitionEnd=function(t){return i.call(this,["webkitTransitionEnd","transitionend"],t),this},$.fn.transition=function(t){"string"!=typeof t&&(t+="ms");for(var e=0;e<this.length;e++){var n=this[e].style;n.webkitTransitionDuration=n.MozTransitionDuration=n.transitionDuration=t}return this},$.fn.transform=function(t){for(var e=0;e<this.length;e++){var n=this[e].style;n.webkitTransform=n.MozTransform=n.transform=t}return this},$.fn.prevAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.previousElementSibling;){var i=n.previousElementSibling;t?$(i).is(t)&&e.push(i):e.push(i),n=i}return $(e)},$.fn.nextAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.nextElementSibling;){var i=n.nextElementSibling;t?$(i).is(t)&&e.push(i):e.push(i),n=i}return $(e)},$.fn.show=function(){function t(t){var n,i;return e[t]||(n=document.createElement(t),document.body.appendChild(n),i=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"===i&&(i="block"),e[t]=i),e[t]}var e={};return this.each(function(){"none"===this.style.display&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display"),this.style.display=t(this.nodeName)})},$.fn.serializeArray=function(){var t,e,n=[],i=function e(i){if(i.forEach)return i.forEach(e);n.push({name:t,value:i})};return this[0]&&$.each(this[0].elements,function(n,r){e=r.type,t=r.name,t&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&"file"!=e&&("radio"!=e&&"checkbox"!=e||r.checked)&&i($(r).val())}),n},$.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")}},92:function(t,e,n){"use strict";!function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={};t(document).ready(function(){var p,d,m,v,g=0,y=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown",function(e){(v=a(e,"down"))&&!o(e)||(m=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),p=Date.now(),d=p-(h.last||p),h.el=t("tagName"in m.target?m.target:m.target.parentNode),s&&clearTimeout(s),h.x1=m.pageX,h.y1=m.pageY,d>0&&d<=250&&(h.isDoubleTap=!0),h.last=p,l=setTimeout(n,750),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove",function(t){(v=a(t,"move"))&&!o(t)||(m=v?t:t.touches[0],i(),h.x2=m.pageX,h.y2=m.pageY,g+=Math.abs(h.x1-h.x2),y+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp",function(n){(v=a(n,"up"))&&!o(n)||(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2))),h={}},0):"last"in h&&(g<30&&y<30?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el&&h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),g=y=0)}).on("touchcancel MSPointerCancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto)}})});