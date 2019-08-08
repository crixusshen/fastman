/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fastman"] = factory();
	else
		root["fastman"] = factory();
})(this, function() {
return webpackJsonpfastman([12],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 无限滚动组件
 * Created by dfzq on 2017/2/17.
 */

/**
 * 处理scroller的onScroll事件
 */
var handleInfiniteScroll = function handleInfiniteScroll() {
    // this关键字在箭头符号中拿不到
    var inf = $(this);
    var scroller = $.getScroller(inf);
    var scrollTop = scroller.scrollTop();
    var scrollHeight = scroller.scrollHeight();
    var height = inf[0].offsetHeight;
    var distance = inf[0].getAttribute('data-distance');
    var onTop = inf.hasClass('infinite-scroll-top');
    if (!distance) distance = 50;
    if (typeof distance === 'string' && distance.indexOf('%') >= 0) {
        distance = parseInt(distance, 10) / 100 * height;
    }
    if (distance > height) distance = height;
    if (onTop) {
        if (scrollTop < distance) {
            inf.trigger('infinite');
        }
    } else {
        if (scrollTop + height >= scrollHeight - distance) {
            inf.trigger('infinite');
        }
    }
};

/**
 * 添加无限滚动组件
 * @param infiniteContent 无限滚动的容器
 */
var attachInfiniteScroll = function attachInfiniteScroll(infiniteContent) {
    $.getScroller(infiniteContent).on('scroll', handleInfiniteScroll);
};

/**
 * 移除无限滚动组件
 * @param infiniteContent 无限滚动的容器
 */
var infiniteScrollDone = function infiniteScrollDone(infiniteContent) {
    if (infiniteContent == undefined) infiniteContent = '.infinite-scroll';
    $.getScroller(infiniteContent).off('scroll', handleInfiniteScroll);
    // 如果开发者没有定制化指示器，检查是否使用了系统内置的指示器，如果使用并删除
    if ($('.infinite-scroll-preloader-layer').length > 0) $('.infinite-scroll-preloader-layer').remove();
};

/**
 * 初始化无限滚动组件
 * @param pageContainer 页面（路由）容器
 */
var initInfiniteScroll = function initInfiniteScroll(pageContainer) {
    pageContainer = $(pageContainer);
    var infiniteContent = pageContainer.hasClass('infinite-scroll') ? pageContainer : pageContainer.find('.infinite-scroll');
    if (infiniteContent.length === 0) return;
    attachInfiniteScroll(infiniteContent);
    // //如果是顶部无限刷新，要将滚动条初始化于最下端
    // pageContainer.forEach(function(v){
    //     if($(v).hasClass('infinite-scroll-top')){
    //         var height = v.scrollHeight - v.clientHeight;
    //         $(v).scrollTop(height);
    //     }
    // });
    // function detachEvents() {
    //     detachInfiniteScroll(infiniteContent);
    //     pageContainer.off('pageBeforeRemove', detachEvents);
    // }
    // pageContainer.on('pageBeforeRemove', detachEvents);
};

// 无限刷新时触发的刷新回调
var infiniteRefresh = function infiniteRefresh(callback) {
    $(document).on('infinite', '.infinite-scroll', callback);
};

exports.initInfiniteScroll = initInfiniteScroll;
exports.infiniteRefresh = infiniteRefresh;
exports.infiniteScrollDone = infiniteScrollDone;

/***/ })

},[223]);
});