/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.fastman=i():e.fastman=i()}(this,function(){return webpackJsonpfastman([12],{224:function(e,i,n){e.exports=n(98)},98:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=function(){var e=$(this),i=$.getScroller(e),n=i.scrollTop(),t=i.scrollHeight(),o=e[0].offsetHeight,r=e[0].getAttribute("data-distance"),l=e.hasClass("infinite-scroll-top");r||(r=50),"string"==typeof r&&r.indexOf("%")>=0&&(r=parseInt(r,10)/100*o),r>o&&(r=o),l?n<r&&e.trigger("infinite"):n+o>=t-r&&e.trigger("infinite")},o=function(e){$.getScroller(e).on("scroll",t)},r=function(e){void 0==e&&(e=".infinite-scroll"),$.getScroller(e).off("scroll",t),$(".infinite-scroll-preloader-layer").length>0&&$(".infinite-scroll-preloader-layer").remove()},l=function(e){e=$(e);var i=e.hasClass("infinite-scroll")?e:e.find(".infinite-scroll");0!==i.length&&o(i)},f=function(e){$(document).on("infinite",".infinite-scroll",e)};i.initInfiniteScroll=l,i.infiniteRefresh=f,i.infiniteScrollDone=r}},[224])});