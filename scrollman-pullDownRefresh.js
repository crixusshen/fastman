!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.fastman=r():e.fastman=r()}(this,function(){return webpackJsonpfastman([9],{224:function(e,r,s){s(97),e.exports=s(96)},96:function(e,r,s){"use strict";var n=0,t=function(e){function r(){a.hasClass("refreshing")||(-1*i.scrollTop()>=44?a.removeClass("pull-down").addClass("pull-up"):a.removeClass("pull-up").addClass("pull-down"))}function s(){a.hasClass("refreshing")||(a.removeClass("pull-down pull-up"),a.addClass("refreshing transitioning"),a.trigger("refresh"),n=+new Date)}function t(){i.off("scroll",r),i.scroller.off("ptr",s)}var o=$(e);if(o.hasClass("pull-down-refresh")||(o=o.find(".pull-down-refresh")),o&&0!==o.length){var l=o.hasClass("ui-container")?o:o.parents(".ui-container"),i=$.getScroller(l[0]);if(i){var a=o;i.on("scroll",r),i.scroller.on("ptr",s),o[0].destroyPullToRefresh=t}}},o=function(e){if(e=$(e),0===e.length&&(e=$(".pull-down-refresh.refreshing")),0!==e.length){var r=+new Date-n,s=r>1e3?0:1e3-r,t=$.getScroller(e);setTimeout(function(){t.refresh(),e.removeClass("refreshing"),e.transitionEnd(function(){e.removeClass("transitioning")})},s)}},l=function(e){if(e=$(e),0===e.length&&(e=$(".pull-down-refresh")),!e.hasClass("refreshing")){e.addClass("refreshing");$.getScroller(e).scrollTop(45,200),e.trigger("refresh")}},i=function(e){e=$(e);var r=e.hasClass("pull-down-refresh")?e:e.find(".pull-down-refresh");0!==r.length&&r[0].destroyPullToRefresh&&r[0].destroyPullToRefresh()};$._pullToRefreshJSScroll={initPullToRefresh:t,pullToRefreshDone:o,pullToRefreshTrigger:l,destroyPullToRefresh:i}},97:function(e,r,s){"use strict";$.initPullToRefresh=function(e){function r(e){if(l){if(!$.device.android)return;if("targetTouches"in e&&e.targetTouches.length>1)return}i=!1,l=!0,a=void 0,c=void 0,C.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,C.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,u=(new Date).getTime(),h=$(this)}function s(e){if(l){var r="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;if(void 0===a&&(a=!!(a||Math.abs(s-C.y)>Math.abs(r-C.x))),!a)return void(l=!1);if(p=h[0].scrollTop,void 0===c&&0!==p&&(c=!0),!i){if(h.removeClass("transitioning"),p>h[0].offsetHeight)return void(l=!1);v&&(g=h.attr("data-ptr-distance"),g.indexOf("%")>=0&&(g=h[0].offsetHeight*parseInt(g,10)/100)),m=h.hasClass("refreshing")?g:0,w=!0}if(i=!0,!((f=s-C.y)>0&&p<=0||p<0))return h.removeClass("pull-up pull-down"),void(T=!1);$.device.ios&&parseInt($.device.osVersion.split(".")[0],10)>7&&0===p&&!c&&(w=!0),w&&(e.preventDefault(),d=Math.pow(f,.85)+m,h.transform("translate3d(0,"+d+"px,0)")),w&&Math.pow(f,.85)>g||!w&&f>=2*g?(T=!0,h.addClass("pull-up").removeClass("pull-down")):(T=!1,h.removeClass("pull-up").addClass("pull-down"))}}function n(){if(!l||!i)return l=!1,void(i=!1);if(d&&(h.addClass("transitioning"),d=0),h.transform(""),T){if(h.hasClass("refreshing"))return;h.addClass("refreshing"),h.trigger("refresh")}else h.removeClass("pull-down");l=!1,i=!1}function t(){o.off($.touchEvents.start,r),o.off($.touchEvents.move,s),o.off($.touchEvents.end,n)}var o=$(e);if(o.hasClass("pull-down-refresh")||(o=o.find(".pull-down-refresh")),o&&0!==o.length){var l,i,a,f,u,h,d,p,c,g,v,C={},T=!1,w=!1,m=0;h=o,h.attr("data-ptr-distance")?v=!0:g=44,o.on($.touchEvents.start,r),o.on($.touchEvents.move,s),o.on($.touchEvents.end,n),o[0].destroyPullToRefresh=t}},$.pullToRefreshDone=function(e){$(window).scrollTop(0),e=$(e),0===e.length&&(e=$(".pull-down-refresh.refreshing")),e.removeClass("refreshing").addClass("transitioning"),e.transitionEnd(function(){e.removeClass("transitioning pull-up pull-down")})},$.pullToRefreshTrigger=function(e){e=$(e),0===e.length&&(e=$(".pull-down-refresh")),e.hasClass("refreshing")||(e.addClass("transitioning refreshing"),e.trigger("refresh"))},$.destroyPullToRefresh=function(e){e=$(e);var r=e.hasClass("pull-down-refresh")?e:e.find(".pull-down-refresh");0!==r.length&&r[0].destroyPullToRefresh&&r[0].destroyPullToRefresh()}}},[224])});