/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([19],{210:function(t,e,a){t.exports=a(85)},85:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,a){var n=$(t);if(2===arguments.length&&"boolean"==typeof e&&(a=e),0===n.length)return!1;if(n.hasClass("active"))return a&&n.trigger("show"),!1;var i=n.parent(".tabs");if(0===i.length)return!1;var r=i.children(".tab.active").removeClass("active");if(n.addClass("active"),n.trigger("show"),e?e=$(e):(!(e="string"==typeof t?$('.tab-link[href="'+t+'"]'):$('.tab-link[href="#'+n.attr("id")+'"]'))||e&&0===e.length)&&$("[data-tab]").each(function(){n.is($(this).attr("data-tab"))&&(e=$(this))}),0!==e.length){var o;if(r&&r.length>0){var s=r.attr("id");s&&(o=$('.tab-link[href="#'+s+'"]')),(!o||o&&0===o.length)&&$("[data-tab]").each(function(){r.is($(this).attr("data-tab"))&&(o=$(this))})}return e&&e.length>0&&e.addClass("active"),o&&o.length>0&&o.removeClass("active"),e.trigger("active"),!0}},i=$.showTab;$.showTab=n,$.showTab.noConflict=function(){return $.showTab=i,this},$(document).on("click",".tab-link",function(t){t.preventDefault();var e=$(this);n(e.data("tab")||e.attr("href"),e)});var r=function(t,e){$(".tab-link[href='#"+t+"']").on("click",e)},o=function(t){var e=$(".tab-link[href='#"+t+"']");n(e.data("tab")||e.attr("href"),e)};e.tabEvent=r,e.tabSwitch=o}},[210])});