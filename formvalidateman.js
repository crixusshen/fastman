/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([11],{213:function(t,e,n){t.exports=n(91)},35:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.closeToast=e.toast=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n(9),o=function(t,e,n){if("object"===(void 0===t?"undefined":i(t))){var o=t,r=o.text,d=void 0===r?"":r,l=o.duration,c=void 0===l?2e3:l,p=o.extraclass,u=void 0===p?"":p;t=d,e=c,n=u}else"number"!=typeof e&&(n=e,e=2e3);var s=$('<div class="modal toast '+(n||"")+'">'+t+"</div>").appendTo(document.body);return(0,a.openModal)(s,function(){setTimeout(function(){(0,a.closeModal)(s)},e||2e3)}),s},r=function(t){(0,a.closeModal)(t)};e.toast=o,e.closeToast=r},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.validateExtend=e.validate=void 0;var i=n(35),a=['input:not([type]),input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="file"],input[type="hidden"],input[type="month"],input[type="number"],input[type="password"],input[type="range"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"],textarea',"select",'input[type="checkbox"],input[type="radio"]'],o=a.join(","),r={},d=function(){function t(t){if(!e){var n=(0,i.toast)(t,99999999);e=!0,setTimeout(function(){(0,i.closeToast)(n),e=!1},1500)}}var e=null;return{show:t}}(),l=function(t,e){var n,i=$(this),o={required:!0,conditional:!0,pattern:!0},l=$.trim(i.val())||"",c=i.attr("data-validate"),p=void 0!=c?r[c]:{},u=i.attr("data-required"),s=i.attr("data-pattern")||("regexp"==$.type(p.pattern)?p.pattern:/(?:)/),f=i.attr("data-conditional")||p.conditional,y=i.attr("data-descriptions")||p.descriptions;i.attr("data-describedby")||p.describedby;return y=$.isPlainObject(y)?y:e.descriptions[y]||{},u=""==u||(u||!!p.required),"regexp"!=$.type(s)&&(s=RegExp(s)),u&&(i.is(a[0]+","+a[1])?!l.length>0&&(o.required=!1):i.is(a[2])&&(i.is("[name]")?0==e.$form.find('[name="'+i.prop("name")+'"]:checked').length&&(o.required=!1):o.required=field.is(":checked"))),i.is(a[0])&&(s.test(l)||(u?o.pattern=!1:l.length>0&&(o.pattern=!1))),"undefined"!=f&&($.isFunction(f)?o.conditional=!!f.call(i,l,e):e.conditional.hasOwnProperty(f)&&!e.conditional[f].call(i,l,e)&&(o.conditional=!1)),n=y.valid,o.required?o.pattern?o.conditional||(n=y.conditional):n=y.pattern:n=y.required,"function"==typeof p.each&&p.each.call(i,t,o,e),e.eachField.call(i,t,o,e),o.required&&o.pattern&&o.conditional?("function"==typeof p.valid&&p.valid.call(i,t,o,e),e.eachValidField.call(i,t,o,e)):(!e.firstInvalid&&e.firstInvalidFocus&&(e.firstInvalid=!0,i.focus()),1==e.type&&d.show(n),"function"==typeof p.invalid&&p.invalid.call(i,t,o,e),e.eachInvalidField.call(i,t,o,e)),o},c=function(t){return $.extend(r,t)},p=function(t,e){var n=$(t),i={type:1,validateInSubmit:!0,sendForm:!1,onKeyup:!1,onChange:!0,firstInvalidFocus:!1,conditional:{},descriptions:{},eachField:$.noop,eachValidField:$.noop,eachInvalidField:$.noop,valid:$.noop,invalid:$.noop,namespace:"mvalidate"},r=$.extend(!0,i,e),d=r.namespace;return r.type=Number(r.type),r.firstInvalid=!1,n.mvalidateDestroy().each(function(t){var e,n=$(this);n.is("form")&&(r.$form=n,n.zeptoData(name,{options:r}),e=n.find(o),r.onKeyup&&e.filter(a[0]).each(function(){$(this).on("keyup."+d,function(t){l.call(this,t,r)})}),r.onChange&&e.each(function(){$(this).is(a[1]+","+a[2])&&$(this).on("change."+d,function(t){l.call(this,t,r)})}),r.validateInSubmit&&n.on("submit."+d,function(t){var i=!0;r.firstInvalid=!1,e.each(function(){var e=l.call(this,t,r);e.pattern&&e.conditional&&e.required||(i=!1)}),i?(r.sendForm||t.preventDefault(),$.isFunction(r.valid)&&r.valid.call(n,t,r)):(t.preventDefault(),t.stopImmediatePropagation(),$.isFunction(r.invalid)&&r.invalid.call(n,t,r))}))})};$.fn.mvalidateDestroy=function(){var t,e=$(this),n=e.zeptoData(name);return e.is("form")&&$.isPlainObject(n)&&"string"==typeof n.options.namespace&&(t=e.removeData(name).find(o),t.off("."+n.options.namespace)),e},e.validate=p,e.validateExtend=c}},[213])});