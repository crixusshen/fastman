/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([4],{111:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.app=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(49),a=n(143),c=o(a),u=n(50),s=o(u),l=n(52),f="http://www.w3.org/2000/svg",d=function(e){function t(e){$.router&&($.router.vdoms[e]||b&&(b=void 0,w.push(e)))}function n(e){for(var t=0;t<M.onError.length;t++)M.onError[t](e);if(t<=0)throw e}function o(e,t,r,i,c,l){Object.keys(t).forEach(function(f){e[f]&&!l||(e[f]={});var d,p=r?r+"."+f:f,h=t[f];"function"==typeof h?e[f]=function(e){var t=c;for(d=0;d<M.onAction.length;d++)M.onAction[d](p,e);var o;if(t===_.effect||t===_.mutation){var r={};for(var l in C)T[l]||(r[l]=C[l]);t===_.effect?(s.default.AllMutationActions||(s.default.AllMutationActions=r),o=h.apply(void 0,arguments)):o=h(E,e,r,n)}else o=h(E,e,C,n);if(null===o||void 0===o||"function"==typeof o.then||!i)return o;for(d=0;d<M.onUpdate.length;d++)M.onUpdate[d](E,o,e);E=u(E,o),a(E,y,p)}:o(e[f],h,p,!0)})}function a(e,t,n){for(j=0;j<M.onRender.length;j++)t=M.onRender[j](e,t);var o=0;b&&(o=w.indexOf(e.router.match));var r=function(){k=x[e.router.match],k=g(S,k,b,b=t(e,C),o),x[e.router.match]=k,$.router&&($.router.vdoms[e.router.match]=b);for(var n=0;n<L.length;n++)L[n]();L=[]};if(n&&-1!=n.indexOf("router.match")?$.router&&($.router.vdoms[e.router.match]?b=$.router.vdoms[e.router.match]:r()):r(),n&&-1!=n.indexOf("router.match"))for(j=0;j<M.onRendered.length;j++)t=M.onRendered[j](e,t,b)}function u(e,t){var n={};if("object"!==(void 0===t?"undefined":r(t))||Array.isArray(t))return t;for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n}function d(e,t){setTimeout(function(){e(t)},0)}function p(e,t){if("string"==typeof e)var n=document.createTextNode(e);else{var n=(t=t||"svg"===e.tag)?document.createElementNS(f,e.tag):document.createElement(e.tag);for(var o in e.data)"onCreate"===o?d(e.data[o],n):v(n,o,e.data[o]);for(var r=0;r<e.children.length;r++)n.appendChild(p(e.children[r],t))}return n}function h(e,t,n){e[t]=n,e.removeAttribute(t)}function v(e,t,n,o){if(t=t.toLowerCase(),n){if("style"===t){for(var r in o)r in n||(e.style[r]="");for(var r in n)e.style[r]=n[r]}else if("o"===t[0]&&"n"===t[1]){var i=t.substr(2);e.removeEventListener(i,o),e.addEventListener(i,n)}else if(e.setAttribute(t,n),e.namespaceURI!==f){if("text"===e.type)var a=e.selectionStart,c=e.selectionEnd;e[t]=n,a>=0&&e.setSelectionRange(a,c)}}else h(e,t,n,o)}function m(e,t,n){for(var o in u(n,t)){var r=t[o],i=n[o],a=e[o];"onUpdate"===o?d(r,e):r===i&&a===r||v(e,o,r,i)}}function g(e,t,n,o){if(void 0===n)t=e.appendChild(p(o));else if(void 0===o)L.push(e.removeChild.bind(e,t)),n&&n.data&&n.data.onRemove&&d(n.data.onRemove,t);else if(o.tag!==n.tag||(void 0===o?"undefined":r(o))!==(void 0===n?"undefined":r(n))||"string"==typeof o&&o!==n)if("string"==typeof o)t.textContent=o;else{var i=p(o);e.replaceChild(i,t),t=i}else if(o.tag){m(t,o.data,n.data);for(var a=o.children.length,c=n.children.length,i=0;i<a||i<c;i++)g(t,t.childNodes[i],n.children[i],o.children[i])}return t}var y=e.view||function(){return""};$.loadDocument=t;for(var E,b,k,S,w=[],C={},T={},A=[],M={onError:[],onAction:[],onUpdate:[],onRender:[],onRendered:[],onPageInit:[],onPageWillAppear:[],onPageDidAppear:[],onPageWillDisappear:[]},O={onPageWillAppear:i.EVENTS.pageAnimationStart,onPageDidAppear:i.EVENTS.pageAnimationEnd,onPageWillDisappear:i.EVENTS.beforePageSwitch,onPageInit:i.EVENTS.pageInit},_={action:0,effect:1,mutation:2},x=[],L=[],P=e.plugins||[],j=-1;j<P.length;j++){var N=function(e){o(C,e,"",!1,_.effect,!0)},R=j<0?e:P[j](e,N),D=R.model;if(null!=D&&(E=u(E,D)),(D=R.actions)&&o(C,D,"",!0,_.action,!1),D=R.mutations){var I={};Object.keys(D).forEach(function(e){I["$"+e]=D[e],I[e]=D[e]}),o(C,I,"",!0,_.mutation,!1)}(D=R.effects)&&(Object.keys(D).forEach(function(e){T[e]=D[e]}),o(C,D,"",!1,_.effect,!1)),(D=R.readies)&&(A=A.concat(D));var F=R.hooks;(D=F)&&Object.keys(D).forEach(function(e){M[e]&&M[e].push(D[e])})}Object.keys(O).forEach(function(e){O[e]&&$(document).on(O[e],function(t,n,o){for(var r=0;r<M[e].length;r++)M[e][r](t,n,o,C,E)})}),function(e){"l"!==document.readyState[0]?e():document.addEventListener("DOMContentLoaded",e),$.device.ios&&l._compareVersion($.device.osVersion,"11.0.0")>=0||window.addEventListener("load",function(){new c.default(document.body)})}(function(){if($(".page-loading").remove(),i.Util.supportStorage()){S=e.root||document.body,a(E,y),E.router&&w.push(E.router.match);for(var t=0;t<A.length;t++)A[t](E,C,n);var o=$.router=new i.Router;o.vdoms[E.router.match]=b;var r=o._getCurrentSection();$.router.hash2ViewId[E.router.match]=r.attr("id"),$('[data-toggle="scroller"]').scroller({type:"native"}),r.isBack=!1,r.trigger(i.EVENTS.pageAnimationEnd,[r.attr("id"),r]),r.trigger(i.EVENTS.pageInit,[r.attr("id"),r])}})};t.app=d},112:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(16),a=(o(i),n(51)),c=o(a),u=function(e){return function(t,n){return{actions:{container:{modify:function(t,o,i,a){if("object"===(void 0===o?"undefined":r(o))){for(var u in o)e.register(u,{useClass:o[u]});var s=(0,c.default)(e)();n(s.effects),i.$updateModel(t)}}}}}}};t.default=u},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return{actions:{model:{setState:function(e,t){return t},setObjectState:function(e,t){if("object"!==(void 0===t?"undefined":o(t)))throw new Error("parameter of action.model.setObjectState must be object type.");var n={};for(var r in t){n[r]={};for(var i in e[r]){var a=t[r][i];n[r][i]=a||e[r][i]}}return n}}}}}},114:function(e,t,n){"use strict";function o(e,t){var n,o={};-1!=t.indexOf("&")&&(t=t.substr(0,t.indexOf("&")));for(var r in e){var i=[];if("*"!==r&&(t.replace(new RegExp("^"+r.replace(/\//g,"\\/").replace(/:([A-Za-z0-9_]+)/g,function(e,t){return i.push(t),"([-A-Za-z0-9_]+)"})+"/?$","g"),function(){for(var e=1;e<arguments.length-2;e++)o[i.shift()]=arguments[e];n=r}),n))break}return{match:n||"*",params:o,path:t}}function r(e){var t=e.indexOf("#");return-1===t?"/":e.slice(t+1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=null;return{model:{router:o(e.view,r(location.href))},actions:{router:{match:function(t,n){return{router:o(e.view,r(n))}},go:function(e,t,n){n.router.match(0==t.indexOf("#")?t:"#"+t)},back:function(){history.back()},block:function(e,n){t="function"==typeof n?n:null},destoryBlock:function(){t=null}}},hooks:{onRender:function(t){return $.loadDocument(t.router.match),e.view[t.router.match]},onRendered:function(e,t,n){$.router&&($.router.popstateFlag?$.router.popstateFlag=!1:$.router.load(e.router))}},readies:[function(n,i){addEventListener("popstate",function(n){if(t)t(),t=null;else{$.router.popstateFlag=!0;var a=o(e.view,r(location.href));i.router.match(location.href),$.router._onPopState(n,a.match)}})}]}}},143:function(e,t,n){var o;!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function r(e,t){var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!r.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=this,c=0,u=o.length;c<u;c++)i[o[c]]=function(e,t){return function(){return e.apply(t,arguments)}}(i[o[c]],i);a&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var r=Node.prototype.removeEventListener;"click"===t?r.call(e,t,n.hijacked||n,o):r.call(e,t,n,o)},e.addEventListener=function(t,n,o){var r=Node.prototype.addEventListener;"click"===t?r.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):r.call(e,t,n,o)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null)}}var i=navigator.userAgent.indexOf("Windows Phone")>=0,a=navigator.userAgent.indexOf("Android")>0&&!i,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!i,u=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=c&&/OS [6-7]_\d/.test(navigator.userAgent),l=navigator.userAgent.indexOf("BB10")>0;r.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(c&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},r.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!a;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},r.prototype.sendClick=function(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},r.prototype.determineEventType=function(e){return a&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},r.prototype.focus=function(e){var t;c&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},r.prototype.updateScrollParent=function(e){var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},r.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},r.prototype.onTouchStart=function(e){var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],c){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!u){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},r.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},r.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},r.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},r.prototype.onTouchEnd=function(e){var t,n,o,r,i,l=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(i=e.changedTouches[0],l=document.elementFromPoint(i.pageX-window.pageXOffset,i.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=l.tagName.toLowerCase())){if(t=this.findControl(l)){if(this.focus(l),a)return!1;l=t}}else if(this.needsFocus(l))return e.timeStamp-n>100||c&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,e),c&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!c||u||!(r=l.fastClickScrollParent)||r.fastClickLastScrollTop===r.scrollTop)||(this.needsClick(l)||(e.preventDefault(),this.sendClick(l,e)),!1)},r.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},r.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},r.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},r.prototype.destroy=function(){var e=this.layer;a&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},r.notNeeded=function(e){var t,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!a)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(l&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(t=document.querySelector("meta[name=viewport]"))&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},r.attach=function(e,t){return new r(e,t)},void 0!==(o=function(){return r}.call(t,n,t,e))&&(e.exports=o)}()},16:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r,i,a=(i=r=function e(){o(this,e)},r._pool=new Map,i);t.default=a},212:function(e,t,n){e.exports=n(86)},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,c;for(i=[],o=arguments.length;o-- >2;)a.push(arguments[o]);for(;a.length;)if(Array.isArray(r=a.pop()))for(o=r.length;o--;)a.push(r[o]);else null!=r&&!0!==r&&!1!==r&&("number"==typeof r&&(r+=""),n="string"==typeof r,n&&c?i[i.length-1]+=r:(i.push(r),c=n));if("function"==typeof e){if(new e(t,i).render)return new e(t,i).render();throw new Error("view class must define render function.")}return{tag:e,data:t||{},children:i}};var o,r,i,a=[]},50:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e)}return r(e,[{key:"select",value:function(){return e.AllMutationActions}}]),e}();t.default=i},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(16),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){return function(){var t={},n=r.default._pool;return n.size>0&&n.forEach(function(n,o,r){if(o.constructor)if(n){var i=n.length;if(i>0)for(var a=e.resolve(o.constructor),c=0,u=i;c<u;c++)t[n[c]]=a[n[c]]}else{var s=e.resolve(o);for(var l in s)"function"==typeof s[l]&&(t[l]=s[l])}}),{effects:t}}};t.default=i},86:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Container=t.ActionService=t.ImportAction=t.ModelState=t.Router=t.app=t.h=void 0;var r=n(32),i=o(r),a=n(111),c=n(114),u=o(c),s=n(113),l=o(s),f=n(51),d=o(f),p=n(50),h=o(p),v=n(112),m=o(v);t.h=i.default,t.app=a.app,t.Router=u.default,t.ModelState=l.default,t.ImportAction=d.default,t.ActionService=h.default,t.Container=m.default}},[212])});