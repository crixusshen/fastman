/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([8],{1:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},218:function(t,e,n){t.exports=n(95)},23:function(t,e,n){(function(e){function n(t,n,o){var r={container:e.document.body,offset:0,debounce:15,failsafe:150};void 0!==n&&"function"!=typeof n||(o=n,n={});var i=r.container=n.container||r.container,c=r.offset=n.offset||r.offset,f=r.debounce=n.debounce||r.debounce,s=r.failsafe=n.failsafe||r.failsafe;!0===s?s=150:!1===s&&(s=0),s>0&&s<f&&(s=f+50);for(var l=0;l<u.length;l++)if(u[l].container===i&&u[l]._debounce===f&&u[l]._failsafe===s)return u[l].isInViewport(t,c,o);return u[u.push(a(i,f,s))-1].isInViewport(t,c,o)}function o(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function r(t,e,n){var o;return function(){function r(){o=null,n||t.apply(a,i)}var a=this,i=arguments,c=n&&!o;clearTimeout(o),o=setTimeout(r,e),c&&t.apply(a,i)}}function a(t,n,a){function u(t,e,n){if(!n)return A(t,e);var o=l(t,e,n);return o.watch(),o}function l(t,e,n){function o(){m.add(t,e,n)}function r(){m.remove(t)}return{watch:o,dispose:r}}function d(t,e,n){A(t,e)&&(m.remove(t),n(t))}function A(n,o){if(!n)return!1;if(!s(e.document.documentElement,n)||!s(e.document.documentElement,t))return!1;if(!n.offsetWidth||!n.offsetHeight)return!1;var r=n.getBoundingClientRect(),a={};if(t===e.document.body)a={top:-o,left:-o,right:e.document.documentElement.clientWidth+o,bottom:e.document.documentElement.clientHeight+o};else{var i=t.getBoundingClientRect();a={top:i.top-o,left:i.left-o,right:i.right+o,bottom:i.bottom+o}}return r.right>=a.left&&r.left<=a.right&&r.bottom>=a.top&&r.top<=a.bottom}var m=i(),p=t===e.document.body?e:t,h=r(m.checkAll(d),n);return o(p,"scroll",h),p===e&&o(e,"resize",h),f&&c(m,t,h),a>0&&setInterval(h,a),{container:t,isInViewport:u,_debounce:n,_failsafe:a}}function i(){function t(t,e,n){o(t)||a.push([t,e,n])}function e(t){var e=n(t);-1!==e&&a.splice(e,1)}function n(t){for(var e=a.length-1;e>=0;e--)if(a[e][0]===t)return e;return-1}function o(t){return-1!==n(t)}function r(t){return function(){for(var e=a.length-1;e>=0;e--)t.apply(this,a[e])}}var a=[];return{add:t,remove:e,isWatched:o,checkAll:r}}function c(t,e,n){function o(t){!0===t.some(r)&&setTimeout(n,0)}function r(e){var n=c.call([],Array.prototype.slice.call(e.addedNodes),e.target);return i.call(n,t.isWatched).length>0}var a=new MutationObserver(o),i=Array.prototype.filter,c=Array.prototype.concat;a.observe(e,{childList:!0,subtree:!0,attributes:!0})}t.exports=n;var u=[],f="function"==typeof e.MutationObserver,s=function(){return!e.document||(e.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:e.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1})}}).call(e,n(1))},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(23);e.default=o},95:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.LazyLoad=void 0;var o=n(37),r=function(t){return t&&t.__esModule?t:{default:t}}(o),a=function(e){var n=e.container,o=void 0===n?".page-group":n,a=e.offset,i=void 0===a?333:a,c=e.src,u=void 0===c?"data-src":c;return{actions:{lazyLoad:{refresh:function(e){var n="function"==typeof t.MutationObserver,a=$(o),c=a.find("img");c&&c.length>0&&$.each(c,function(t,e){if(e){var o=$(e);if(!o.attr("src"))if(o.attr("src","data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="),o.addClass("lazyload-load"),n)(0,r.default)(e,{offset:i},function(t){var e=$(t).attr(u),n=$(t).attr("lazy");e&&!n&&($(t).attr("src",e),$(t)[0].onerror=function(t){$(this).attr("src","data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="),$(this).addClass("lazyload-loaderror"),$(this).on("click",function(){$(this).hasClass("lazyload-loaderror")&&$(this).removeClass("lazyload-loaderror").addClass("lazyload-load").attr("src",e)})},$(t).attr("lazy","1"))});else{var a=o.attr(u);a&&o.attr("src",a)}}})}}},hooks:{onPageDidAppear:function(t,e,n,o,r){o.lazyLoad.refresh()}}}};e.LazyLoad=a}).call(e,n(1))}},[218])});