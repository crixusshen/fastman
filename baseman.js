!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([28],{202:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={};r.cache={};var i=function(e,t,n){var o=/[^\w\-\.:]/.test(e)?function(e,t){var n,r=[],i=[];for(n in e)r.push(n),i.push(e[n]);return new Function(r,o.code).apply(t||e,i)}:r.cache[e]=r.cache[e]||(void 0).get(document.getElementById(e).innerHTML);return o.code=o.code||"var $parts=[]; $parts.push('"+e.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/(^|%>)[^\t]*/g,function(e){return e.replace(/'/g,"\\'")}).replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("$parts.push('")+"'); return $parts.join('');",t?o(t,n):o},a=function(e,t,n,r,a,p){var c=e;if("string"!=typeof n){var f=$.extend({},t,"object"==(void 0===n?"undefined":o(n))&&n),s=void 0==f.container?"body":f.container,u=!1;$.isArray(c)&&c.length&&"script"==$(c)[0].nodeName.toLowerCase()?(c=$(i(c[0].innerHTML,f)).appendTo($(s)),u=!0):$.isArray(c)&&c.length&&""==c.selector?(c=$(i(c[0].outerHTML,f)).appendTo($(s)),u=!0):$.isArray(c)||(c=$(i(r,f)).appendTo($(s)),u=!0)}return c.each(function(){var e=$(this),r=e.data("fz."+p);r||e.data("fz."+p,r=new a(this,$.extend({},t,"object"==(void 0===n?"undefined":o(n))&&n),u)),"string"==typeof n&&r[n]()})};t.tpl=i,t.adaptObject=a}},[202])});