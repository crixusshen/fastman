/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonpfastman;window.webpackJsonpfastman=function(o,i,a){for(var c,s,u,l=0,f=[];l<o.length;l++)s=o[l],r[s]&&f.push(r[s][0]),r[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);for(n&&n(o,i,a);f.length;)f.shift()();if(a)for(l=0;l<a.length;l++)u=e(e.s=a[l]);return u};var o={},r={32:0};return e.e=function(t){function n(){c.onerror=c.onload=null,clearTimeout(s);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}var o=r[t];if(0===o)return new Promise(function(t){t()});if(o)return o[2];var i=new Promise(function(e,n){o=r[t]=[e,n]});o[2]=i;var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,e.nc&&c.setAttribute("nonce",e.nc),c.src=e.p+""+t+".js";var s=setTimeout(n,12e4);return c.onerror=c.onload=n,a.appendChild(c),i},e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw t},e(e.s=212)}({114:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(52),a=n(143),c=o(a),s=n(53),u=o(s),l=n(56),f="http://www.w3.org/2000/svg",d=function(t){function e(t){$.router&&($.router.vdoms[t]||S&&(S=void 0,E.push(t)))}function n(t){for(var e=0;e<P.onError.length;e++)P.onError[e](t);if(e<=0)throw t}function o(t,e,r,i,c){Object.keys(e).forEach(function(l){t[l]&&!c||(t[l]={});var f,d=l,p=e[l];"function"==typeof p?t[l]=function(t){var e=i;for(f=0;f<P.onAction.length;f++)P.onAction[f](d,t);var o;if(e===I.effect||e===I.mutation){var c={};for(var l in _)k[l]||(c[l]=_[l]);e===I.effect?(u.default.AllMutationActions||(u.default.AllMutationActions=c),o=p.apply(void 0,arguments)):o=p(b,t,c,n)}else o=p(b,t,_,n);if(null===o||void 0===o||"function"==typeof o.then||!r)return o;for(f=0;f<P.onUpdate.length;f++)P.onUpdate[f](b,o,t);b=s(b,o),a(b,y,d)}:o(t[l],p,d,c)})}function a(t,e,n){for(M=0;M<P.onRender.length;M++)e=P.onRender[M](t,e);var o=0;S&&(o=E.indexOf(t.router.match));var r=function(){C=A[t.router.match],C=v(w,C,S,S=e(t,_),o),A[t.router.match]=C,$.router&&($.router.vdoms[t.router.match]=S);for(var n=0;n<O.length;n++)O[n]();O=[]};if(n&&-1!=n.indexOf("router.match")?$.router&&($.router.vdoms[t.router.match]?S=$.router.vdoms[t.router.match]:r()):r(),n&&-1!=n.indexOf("router.match"))for(M=0;M<P.onRendered.length;M++)e=P.onRendered[M](t,e,S)}function s(t,e){var n={};if("object"!==(void 0===e?"undefined":r(e))||Array.isArray(e))return e;for(var o in t)n[o]=t[o];for(var o in e)n[o]=e[o];return n}function d(t,e){setTimeout(function(){t(e)},0)}function p(t,e){if("string"==typeof t)var n=document.createTextNode(t);else{var n=(e=e||"svg"===t.tag)?document.createElementNS(f,t.tag):document.createElement(t.tag);for(var o in t.data)"onCreate"===o?d(t.data[o],n):m(n,o,t.data[o]);for(var r=0;r<t.children.length;r++)n.appendChild(p(t.children[r],e))}return n}function h(t,e,n){t[e]=n,t.removeAttribute(e)}function m(t,e,n,o){if(e=e.toLowerCase(),n){if("style"===e){for(var r in o)r in n||(t.style[r]="");for(var r in n)t.style[r]=n[r]}else if("o"===e[0]&&"n"===e[1]){var i=e.substr(2);t.removeEventListener(i,o),t.addEventListener(i,n)}else if(t.setAttribute(e,n),t.namespaceURI!==f){if("text"===t.type)var a=t.selectionStart,c=t.selectionEnd;t[e]=n,a>=0&&t.setSelectionRange(a,c)}}else h(t,e,n,o)}function g(t,e,n){for(var o in s(n,e)){var r=e[o],i=n[o],a=t[o];"onUpdate"===o?d(r,t):r===i&&a===r||m(t,o,r,i)}}function v(t,e,n,o){if(void 0===n)e=t.appendChild(p(o));else if(void 0===o)O.push(t.removeChild.bind(t,e)),n&&n.data&&n.data.onRemove&&d(n.data.onRemove,e);else if(o.tag!==n.tag||(void 0===o?"undefined":r(o))!==(void 0===n?"undefined":r(n))||"string"==typeof o&&o!==n)if("string"==typeof o)e.textContent=o;else{var i=p(o);t.replaceChild(i,e),e=i}else if(o.tag){g(e,o.data,n.data);for(var a=o.children.length,c=n.children.length,i=0;i<a||i<c;i++)v(e,e.childNodes[i],n.children[i],o.children[i])}return e}var y=t.view||function(){return""};$.loadDocument=e;for(var b,S,C,w,E=[],_={},k={},T=[],P={onError:[],onAction:[],onUpdate:[],onRender:[],onRendered:[],onPageInit:[],onPageWillAppear:[],onPageDidAppear:[],onPageWillDisappear:[]},x={onPageWillAppear:i.EVENTS.pageAnimationStart,onPageDidAppear:i.EVENTS.pageAnimationEnd,onPageWillDisappear:i.EVENTS.beforePageSwitch,onPageInit:i.EVENTS.pageInit},I={action:0,effect:1,mutation:2},A=[],O=[],L=t.plugins||[],M=-1;M<L.length;M++){var j=function(t){o(_,t,!1,I.effect,!0)},N=M<0?t:L[M](t,j),D=N.model;if(null!=D&&(b=s(b,D)),(D=N.actions)&&o(_,D,!0,I.action,!1),D=N.mutations){var R={};Object.keys(D).forEach(function(t){R["$"+t]=D[t],R[t]=D[t]}),o(_,R,!0,I.mutation,!1)}(D=N.effects)&&(Object.keys(D).forEach(function(t){k[t]=D[t]}),o(_,D,!1,I.effect,!1)),(D=N.readies)&&(T=T.concat(D));var V=N.hooks;(D=V)&&Object.keys(D).forEach(function(t){P[t]&&P[t].push(D[t])})}Object.keys(x).forEach(function(t){x[t]&&$(document).on(x[t],function(e,n,o){for(var r=0;r<P[t].length;r++)P[t][r](e,n,o,_,b)})}),function(t){"l"!==document.readyState[0]?t():document.addEventListener("DOMContentLoaded",t),$.device.ios&&l._compareVersion($.device.osVersion,"11.0.0")>=0||window.addEventListener("load",function(){new c.default(document.body)})}(function(){if($(".page-loading").remove(),i.Util.supportStorage()){w=t.root||document.body,a(b,y),b.router&&E.push(b.router.match);for(var e=0;e<T.length;e++)T[e](b,_,n);var o=$.router=new i.Router;o.vdoms[b.router.match]=S;var r=o._getCurrentSection();$.router.hash2ViewId[b.router.match]=r.attr("id"),$('[data-toggle="scroller"]').scroller({type:"native"}),r.isBack=!1,r.trigger(i.EVENTS.pageAnimationEnd,[r.attr("id"),r]),r.trigger(i.EVENTS.pageInit,[r.attr("id"),r])}})};e.app=d},115:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(28),a=(o(i),n(55)),c=o(a),s=function(t){return function(e,n){return{actions:{container:{modify:function(e,o,i,a){if("object"===(void 0===o?"undefined":r(o))){for(var s in o)t.register(s,{useClass:o[s]});var u=(0,c.default)(t)();n(u.effects),i.$updateModel(e)}}}}}}};e.default=s},116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){return{actions:{model:{setState:function(t,e){return e},setObjectState:function(t,e){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("parameter of action.model.setObjectState must be object type.");var n={};for(var r in e){n[r]={};for(var i in t[r]){var a=e[r][i];n[r][i]=a||t[r][i]}}return n}}}}}},117:function(t,e,n){"use strict";function o(t,e){var n,o={};-1!=e.indexOf("&")&&(e=e.substr(0,e.indexOf("&")));for(var r in t){var i=[];if("*"!==r&&(e.replace(new RegExp("^"+r.replace(/\//g,"\\/").replace(/:([A-Za-z0-9_]+)/g,function(t,e){return i.push(e),"([-A-Za-z0-9_]+)"})+"/?$","g"),function(){for(var t=1;t<arguments.length-2;t++)o[i.shift()]=arguments[t];n=r}),n))break}return{match:n||"*",params:o,path:e}}function r(t){var e=t.indexOf("#");return-1===e?"/":t.slice(e+1)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=null;return{model:{router:o(t.view,r(location.href))},actions:{router:{match:function(e,n){return{router:o(t.view,r(n))}},go:function(t,e,n){n.router.match(0==e.indexOf("#")?e:"#"+e)},back:function(){history.back()},block:function(t,n){e="function"==typeof n?n:null},destoryBlock:function(){e=null}}},hooks:{onRender:function(e){return $.loadDocument(e.router.match),t.view[e.router.match]},onRendered:function(t,e,n){$.router&&($.router.popstateFlag?$.router.popstateFlag=!1:$.router.load(t.router))}},readies:[function(n,i){addEventListener("popstate",function(n){if(e)e(),e=null;else{$.router.popstateFlag=!0;var a=o(t.view,r(location.href));i.router.match(location.href),$.router._onPopState(n,a.match)}})}]}}},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.getUrlFragment=function(t){var e=t.indexOf("#");return-1===e?"/":t.slice(e+1)},r=e.getAbsoluteUrl=function(t){var e=document.createElement("a");e.setAttribute("href",t);var n=e.href;return e=null,n},i=e.getBaseUrl=function(t){var e=t.indexOf("#");return-1===e?t.slice(0):t.slice(0,e)};e.toUrlObject=function(t){var e=r(t);return{base:i(e),full:e,original:t,fragment:o(t)}},e.supportStorage=function(){var t="ob.router.storage.ability";try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(t){return!1}}},143:function(t,e,n){var o;!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function r(t,e){var n;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!r.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=this,c=0,s=o.length;c<s;c++)i[o[c]]=function(t,e){return function(){return t.apply(e,arguments)}}(i[o[c]],i);a&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var r=Node.prototype.removeEventListener;"click"===e?r.call(t,e,n.hijacked||n,o):r.call(t,e,n,o)},t.addEventListener=function(e,n,o){var r=Node.prototype.addEventListener;"click"===e?r.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):r.call(t,e,n,o)}),"function"==typeof t.onclick&&(n=t.onclick,t.addEventListener("click",function(t){n(t)},!1),t.onclick=null)}}var i=navigator.userAgent.indexOf("Windows Phone")>=0,a=navigator.userAgent.indexOf("Android")>0&&!i,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!i,s=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),l=navigator.userAgent.indexOf("BB10")>0;r.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(c&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},r.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!a;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},r.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},r.prototype.determineEventType=function(t){return a&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},r.prototype.focus=function(t){var e;c&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},r.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},r.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},r.prototype.onTouchStart=function(t){var e,n,o;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],c){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!s){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},r.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},r.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},r.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},r.prototype.onTouchEnd=function(t){var e,n,o,r,i,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(i=t.changedTouches[0],l=document.elementFromPoint(i.pageX-window.pageXOffset,i.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=l.tagName.toLowerCase())){if(e=this.findControl(l)){if(this.focus(l),a)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-n>100||c&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),c&&"select"===o||(this.targetElement=null,t.preventDefault()),!1);return!(!c||s||!(r=l.fastClickScrollParent)||r.fastClickLastScrollTop===r.scrollTop)||(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},r.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},r.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},r.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},r.prototype.destroy=function(){var t=this.layer;a&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},r.notNeeded=function(t){var e,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!a)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(l&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},r.attach=function(t,e){return new r(t,e)},void 0!==(o=function(){return r}.call(e,n,e,t))&&(t.exports=o)}()},212:function(t,e,n){t.exports=n(89)},28:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r,i,a=(i=r=function t(){o(this,t)},r._pool=new Map,i);e.default=a},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(132),r=n(56);window.CustomEvent||(window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n},window.CustomEvent.prototype=window.Event.prototype);var i={pageLoadStart:"pageLoadStart",pageLoadCancel:"pageLoadCancel",pageLoadError:"pageLoadError",pageLoadComplete:"pageLoadComplete",pageAnimationStart:"pageAnimationStart",pageAnimationEnd:"pageAnimationEnd",beforePageRemove:"beforePageRemove",pageRemoved:"pageRemoved",beforePageSwitch:"beforePageSwitch",pageInit:"pageInitInternal"},a={sectionGroupClass:"page-group",curPageClass:"page-current",visiblePageClass:"page-visible",pageClass:"page"},c={leftToRight:"from-left-to-right",rightToLeft:"from-right-to-left"},s=window.history,u=function(){this.sessionNames={currentState:"dfzq.router.currentState",maxStateId:"dfzq.router.maxStateId"},this._init(),this.xhr=null,this.vdoms={},this.hash2ViewId={},this.popstateFlag=!1};u.prototype._init=function(){this.$view=$("body"),this.cache={};var t=$(document),e=location.href;this._saveDocumentIntoCache(t,e);var n,r=(o.toUrlObject(e),t.find("."+a.pageClass)),i=t.find("."+a.curPageClass),c=i.eq(0);if(i.length||(i=r.eq(0)),i.attr("id")||i.attr("id",null==s.state?this._generateRandomId():s.state.pageId),c.length&&c.attr("id")!==i.attr("id")?(c.removeClass(a.curPageClass),i.addClass(a.curPageClass)):i.addClass(a.curPageClass),n=i.attr("id"),null===s.state){var u={id:this._getNextStateId(),url:o.toUrlObject(e),pageId:n};s.replaceState(u,"",e),this._saveAsCurrentState(u),this._incMaxStateId()}},u.prototype.load=function(t,e){this._switchToSection(t)},u.prototype.forward=function(){s.forward()},u.prototype.back=function(){s.back()},u.prototype.loadPage=u.prototype.load,u.prototype._switchToSection=function(t){var e=t.path,n=t.match;if(e){var o,r=this._getCurrentSection();if(o=this.hash2ViewId[n]?$("#"+this.hash2ViewId[n]):this.$view.find("."+a.pageClass).eq(-1),r!==o){this._animateSection(r,o,c.rightToLeft);var i;o.attr("id")?i=o.attr("id"):(i=this._generateRandomId(),o.attr("id",i)),this.hash2ViewId[n]=i,this._pushNewState("#"+e,i)}}},u.prototype._switchToDocument=function(t,e,n,r){var i=o.toUrlObject(t).base;e&&delete this.cache[i];var a=this.cache[i],c=this;a?this._doSwitchDocument(t,n,r):this._loadDocument(t,{success:function(e){try{c._parseDocument(t,e),c._doSwitchDocument(t,n,r)}catch(e){location.href=t}},error:function(){location.href=t}})},u.prototype._doSwitchDocument=function(t,e,n){void 0===e&&(e=!0);var r,c=o.toUrlObject(t),s=this.$view.find("."+a.sectionGroupClass),u=$($("<div></div>").append(this.cache[c.base].$content).html()),l=u.find("."+a.pageClass),f=u.find("."+a.curPageClass);c.fragment&&(r=u.find("#"+c.fragment)),r&&r.length?f=r.eq(0):f.length||(f=l.eq(0)),f.attr("id")||f.attr("id",this._generateRandomId());var d=this._getCurrentSection();d.trigger(i.beforePageSwitch,[d.attr("id"),d]),l.removeClass(a.curPageClass),f.addClass(a.curPageClass),this.$view.prepend(u),this._animateDocument(s,u,f,n),e&&this._pushNewState(t,f.attr("id"))},u.prototype._isTheSameDocument=function(t,e){return o.toUrlObject(t).base===o.toUrlObject(e).base},u.prototype._loadDocument=function(t,e){this.xhr&&this.xhr.readyState<4&&(this.xhr.onreadystatechange=function(){},this.xhr.abort(),this.dispatch(i.pageLoadCancel)),this.dispatch(i.pageLoadStart),e=e||{};var n=this;this.xhr=$.ajax({url:t,success:$.proxy(function(t,n,o){var r=$("<html></html>");r.append(t),e.success&&e.success.call(null,r,n,o)},this),error:function(t,o,r){e.error&&e.error.call(null,t,o,r),n.dispatch(i.pageLoadError)},complete:function(t,o){e.complete&&e.complete.call(null,t,o),n.dispatch(i.pageLoadComplete)}})},u.prototype._parseDocument=function(t,e){if(!e.find("."+a.sectionGroupClass).length)throw new Error("missing router view mark: "+a.sectionGroupClass);this._saveDocumentIntoCache(e,t)},u.prototype._saveDocumentIntoCache=function(t,e){var n=o.toUrlObject(e).base,r=$(t);this.cache[n]={$doc:r,$content:r.find("."+a.sectionGroupClass)}},u.prototype._getLastState=function(){var t=sessionStorage.getItem(this.sessionNames.currentState);try{t=JSON.parse(t)}catch(e){t=null}return t},u.prototype._saveAsCurrentState=function(t){sessionStorage.setItem(this.sessionNames.currentState,JSON.stringify(t))},u.prototype._getNextStateId=function(){var t=sessionStorage.getItem(this.sessionNames.maxStateId);return t?parseInt(t,10)+1:1},u.prototype._incMaxStateId=function(){sessionStorage.setItem(this.sessionNames.maxStateId,this._getNextStateId())},u.prototype._animateDocument=function(t,e,n,o){var r=n.attr("id"),c=t.find("."+a.curPageClass);c.addClass(a.visiblePageClass).removeClass(a.curPageClass),n.trigger(i.pageAnimationStart,[r,n]),this._animateElement(t,e,o),t.animationEnd(function(){c.removeClass(a.visiblePageClass),$(window).trigger(i.beforePageRemove,[t]),t.remove(),$(window).trigger(i.pageRemoved)}),e.animationEnd(function(){n.trigger(i.pageAnimationEnd,[r,n]),n.trigger(i.pageInit,[r,n])})},u.prototype._animateSection=function(t,e,n){var o=e.attr("id");t.isBack=n!==c.rightToLeft,t.trigger(i.beforePageSwitch,[t.attr("id"),t]),t.removeClass(a.curPageClass),e.addClass(a.curPageClass),e.isBack=n!==c.rightToLeft,$('[data-toggle="scroller"]').not(".native-scroll").not(".javascript-scroll").scroller({type:"native"}),e.trigger(i.pageAnimationStart,[o,e]),this._animateElement(t,e,n);var r=!0;for(var s in this.hash2ViewId)if(this.hash2ViewId[s]===o){r=!1;break}e.animationEnd(function(){e.trigger(i.pageAnimationEnd,[o,e]),r&&e.trigger(i.pageInit,[o,e])})},u.prototype._animateElement=function(t,e,n){void 0===n&&(n=c.rightToLeft);var o,i,a=["page-from-center-to-left","page-from-center-to-right","page-from-right-to-center","page-from-right-to-center-compatible","page-from-left-to-center"].join(" ");switch(n){case c.rightToLeft:o="page-from-center-to-left",i=$.device.ios&&r._compareVersion($.device.osVersion,"10.0.0")>=0&&r._compareVersion($.device.osVersion,"11.0.0")<0?"page-from-right-to-center-compatible":"page-from-right-to-center";break;case c.leftToRight:o="page-from-center-to-right",i="page-from-left-to-center";break;default:o="page-from-center-to-left",i=$.device.ios&&r._compareVersion($.device.osVersion,"10.0.0")>=0&&r._compareVersion($.device.osVersion,"11.0.0")<0?"page-from-right-to-center-compatible":"page-from-right-to-center"}t.removeClass(a).addClass(o),e.removeClass(a).addClass(i),t.animationEnd(function(){t.removeClass(a)}),e.animationEnd(function(){e.removeClass(a)})},u.prototype._getCurrentSection=function(){return this.$view.find("."+a.curPageClass).eq(0)},u.prototype._back=function(t,e){var n=$("#"+t.pageId);if(n.length){var o=this._getCurrentSection();this._animateSection(o,n,c.leftToRight),this._saveAsCurrentState(t)}else location.href=t.url.full},u.prototype._forward=function(t,e){if(this._isTheSameDocument(t.url.full,e.url.full)){var n=$("#"+t.pageId);if(n.length){var o=this._getCurrentSection();this._animateSection(o,n,c.rightToLeft),this._saveAsCurrentState(t)}else location.href=t.url.base}else this._saveDocumentIntoCache($(document),e.url.full),this._switchToDocument(t.url.full,!1,!1,c.rightToLeft),this._saveAsCurrentState(t)},u.prototype._onPopState=function(t,e){var n=t.state;if(n&&n.pageId){var o=this._getLastState();if(!o)return void console.error;n.id!==o.id&&(n.id<o.id?this._back(n,o):this._forward(n,o),this.hash2ViewId[e]=n.pageId)}},u.prototype._pushNewState=function(t,e){var n={id:this._getNextStateId(),pageId:e,url:o.toUrlObject(t)};s.pushState(n,"",t),this._saveAsCurrentState(n),this._incMaxStateId()},u.prototype._generateRandomId=function(){return"page-"+ +new Date},u.prototype.dispatch=function(t){var e=new CustomEvent(t,{bubbles:!0,cancelable:!0});window.dispatchEvent(e)},e.Router=u,e.Util=o,e.routerConfig=a,e.EVENTS=i},53:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=function(){function t(){o(this,t)}return r(t,[{key:"select",value:function(){return t.AllMutationActions}}]),t}();e.default=i},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n,c;for(i=[],o=arguments.length;o-- >2;)a.push(arguments[o]);for(;a.length;)if(Array.isArray(r=a.pop()))for(o=r.length;o--;)a.push(r[o]);else null!=r&&!0!==r&&!1!==r&&("number"==typeof r&&(r+=""),n="string"==typeof r,n&&c?i[i.length-1]+=r:(i.push(r),c=n));if("function"==typeof t){if(new t(e,i).render)return new t(e,i).render();throw new Error("view class must define render function.")}return{tag:t,data:e||{},children:i}};var o,r,i,a=[]},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),r=function(t){return t&&t.__esModule?t:{default:t}}(o),i=function(t){return function(){var e={},n=r.default._pool;return n.size>0&&n.forEach(function(n,o,r){if(o.constructor)if(n){var i=n.length;if(i>0)for(var a=t.resolve(o.constructor),c=0,s=i;c<s;c++)e[n[c]]=a[n[c]]}else{var u=t.resolve(o);for(var l in u)"function"==typeof u[l]&&(e[l]=u[l])}}),{effects:e}}};e.default=i},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){for(var n=t.split(".").length;n<e;)t+=".0",n++;return t},r=function(t){var e=navigator.userAgent.toLowerCase().match(/DFYJ\/([\d.]+)/i);return e?e[1]:void 0},i=function(t,e){var n=t.split("."),r=e.split("."),i=Math.max(n.length,r.length);t=o(t,i),e=o(e,i);var a=t.split("."),c=e.split(".");if(t===e)return 0;for(var s=0;s<a.length;s++){var u=parseInt(a[s]);if(!c[s])return 1;var l=parseInt(c[s]);if(u<l)return-1;if(u>l)return 1}return-1},a=function(t){var e=r();return e?i(e,t):1};e.getVersion=r,e.compareVersion=a,e._compareVersion=i},89:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Container=e.ActionService=e.ImportAction=e.ModelState=e.Router=e.app=e.h=void 0;var r=n(54),i=o(r),a=n(114),c=n(117),s=o(c),u=n(116),l=o(u),f=n(55),d=o(f),p=n(53),h=o(p),m=n(115),g=o(m);e.h=i.default,e.app=a.app,e.Router=s.default,e.ModelState=l.default,e.ImportAction=d.default,e.ActionService=h.default,e.Container=g.default}})});