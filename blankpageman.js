/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([13],{16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={};i.cache={};var r=function(t,e,n){var o=/[^\w\-\.:]/.test(t)?function(t,e){var n,i=[],r=[];for(n in t)i.push(n),r.push(t[n]);return new Function(i,o.code).apply(e||t,r)}:i.cache[t]=i.cache[t]||(void 0).get(document.getElementById(t).innerHTML);return o.code=o.code||"var $parts=[]; $parts.push('"+t.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/(^|%>)[^\t]*/g,function(t){return t.replace(/'/g,"\\'")}).replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("$parts.push('")+"'); return $parts.join('');",e?o(e,n):o},c=function(t,e,n,i,c,p){var a=t;if("string"!=typeof n){var s=$.extend({},e,"object"==(void 0===n?"undefined":o(n))&&n),u=void 0==s.container?"body":s.container,l=!1;$.isArray(a)&&a.length&&"script"==$(a)[0].nodeName.toLowerCase()?(a=$(r(a[0].innerHTML,s)).appendTo($(u)),l=!0):$.isArray(a)&&a.length&&""==a.selector?(a=$(r(a[0].outerHTML,s)).appendTo($(u)),l=!0):$.isArray(a)||(a=$(r(i,s)).appendTo($(u)),l=!0)}return a.each(function(){var t=$(this),i=t.data("fz."+p);i||t.data("fz."+p,i=new c(this,$.extend({},e,"object"==(void 0===n?"undefined":o(n))&&n),l)),"string"==typeof n&&i[n]()})};e.tpl=r,e.adaptObject=c},201:function(t,e,n){t.exports=n(81)},81:function(t,e,n){"use strict";function o(t){t.children()&&t.children().hide(),t.find("section.ui-notice").remove()}function i(t,e){var e=e||{};for(var n in t)"object"===c(t[n])?(e[n]=t[n].constructor===Array?[]:{},i(t[n],e[n])):e[n]=t[n];return e}function r(t){var e=$.extend({},s,t),n=$(e.container),r=function(t){var e=window.document.documentElement.getAttribute("data-scale")||1,o=n.height()*e<n.width()*e?n.height()*e:n.width()*e,i=window.document.documentElement.getBoundingClientRect().width*e/16;return o*t/(window.document.documentElement.getBoundingClientRect().width*e)/i},c={};c=i(e,c),c.props.iconFontSize=r(c.props.iconFontSize*c.iconScale),c.props.iconFontSize=0==c.props.iconFontSize?"inherit":c.props.iconFontSize,c.props.tipFontSize=r(c.props.tipFontSize*c.fontScale),c.props.tipFontSize=0==c.props.tipFontSize?"inherit":c.props.tipFontSize,$("<style>"+c.container+" .ui-notice > i:before{font-size: "+c.props.iconFontSize+"rem</style>").appendTo("head"),o(n);var l=(0,p.adaptObject)(this,s,c,a,u,"blankPage");return l.destory=function(){l.remove(),n.children()&&n.children().show(),n=null},l}Object.defineProperty(e,"__esModule",{value:!0}),e.blankPage=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=n(16),a='<section <% if(container != "body"){ %> style="position:relative;" <% }else{ %> style="height:100%;" <% } %> class="ui-notice"><i class="<%=font%>-icon animate-<%=icon%> icon-<%=icon%>" <% if(!title){%>style="margin-bottom:0;"<%} %>></i><% if(title) { %> <p style="font-size: <%=props.tipFontSize%>rem"><%=title%></p> <% } %><div data-role="button" class="ui-notice-btn" style="font-size: <%=props.tipFontSize%>rem"><%=buttonText%></div></section>',s={title:"正在加载...",icon:"loading",buttonText:"重新载入",button:!1,type:"click",font:"fontello",container:"body",fontScale:1,iconScale:1,props:{iconFontSize:65,tipFontSize:28}},u=function(t,e,n){this.option=$.extend({},s,e),this.button=$(t).find('[data-role="button"]'),this.element=$(t),this._bindEvent()};u.prototype={_bindEvent:function(){var t=this;this.option.button?t.button.on(this.option.type,function(e){var n=$(t.button).index($(this)),o=$.Event("blankPage:action");o.index=n,t.element.trigger(o),e.stopPropagation()}):t.button.remove()}},e.blankPage=r}},[201])});