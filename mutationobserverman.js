!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([8],{2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},219:function(t,e,n){t.exports=n(49)},49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(57);e.default=o},57:function(t,e,n){(function(e){function n(t,n,o){var r={container:e.document.body,offset:0,debounce:15,failsafe:150};void 0!==n&&"function"!=typeof n||(o=n,n={});var c=r.container=n.container||r.container,u=r.offset=n.offset||r.offset,a=r.debounce=n.debounce||r.debounce,s=r.failsafe=n.failsafe||r.failsafe;!0===s?s=150:!1===s&&(s=0),s>0&&s<a&&(s=a+50);for(var l=0;l<f.length;l++)if(f[l].container===c&&f[l]._debounce===a&&f[l]._failsafe===s)return f[l].isInViewport(t,u,o);return f[f.push(i(c,a,s))-1].isInViewport(t,u,o)}function o(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function r(t,e,n){var o;return function(){function r(){o=null,n||t.apply(i,c)}var i=this,c=arguments,u=n&&!o;clearTimeout(o),o=setTimeout(r,e),u&&t.apply(i,c)}}function i(t,n,i){function f(t,e,n){if(!n)return m(t,e);var o=l(t,e,n);return o.watch(),o}function l(t,e,n){function o(){p.add(t,e,n)}function r(){p.remove(t)}return{watch:o,dispose:r}}function d(t,e,n){m(t,e)&&(p.remove(t),n(t))}function m(n,o){if(!n)return!1;if(!s(e.document.documentElement,n)||!s(e.document.documentElement,t))return!1;if(!n.offsetWidth||!n.offsetHeight)return!1;var r=n.getBoundingClientRect(),i={};if(t===e.document.body)i={top:-o,left:-o,right:e.document.documentElement.clientWidth+o,bottom:e.document.documentElement.clientHeight+o};else{var c=t.getBoundingClientRect();i={top:c.top-o,left:c.left-o,right:c.right+o,bottom:c.bottom+o}}return r.right>=i.left&&r.left<=i.right&&r.bottom>=i.top&&r.top<=i.bottom}var p=c(),h=t===e.document.body?e:t,v=r(p.checkAll(d),n);return o(h,"scroll",v),h===e&&o(e,"resize",v),a&&u(p,t,v),i>0&&setInterval(v,i),{container:t,isInViewport:f,_debounce:n,_failsafe:i}}function c(){function t(t,e,n){o(t)||i.push([t,e,n])}function e(t){var e=n(t);-1!==e&&i.splice(e,1)}function n(t){for(var e=i.length-1;e>=0;e--)if(i[e][0]===t)return e;return-1}function o(t){return-1!==n(t)}function r(t){return function(){for(var e=i.length-1;e>=0;e--)t.apply(this,i[e])}}var i=[];return{add:t,remove:e,isWatched:o,checkAll:r}}function u(t,e,n){function o(t){!0===t.some(r)&&setTimeout(n,0)}function r(e){var n=u.call([],Array.prototype.slice.call(e.addedNodes),e.target);return c.call(n,t.isWatched).length>0}var i=new MutationObserver(o),c=Array.prototype.filter,u=Array.prototype.concat;i.observe(e,{childList:!0,subtree:!0,attributes:!0})}t.exports=n;var f=[],a="function"==typeof e.MutationObserver,s=function(){return!e.document||(e.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:e.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1})}}).call(e,n(2))}},[219])});