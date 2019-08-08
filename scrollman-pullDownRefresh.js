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
return webpackJsonpfastman([9],{

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(95);


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by dfzq on 2017/2/13.
 */
var refreshTime = 0;
var initPullToRefreshJS = function initPullToRefreshJS(pageContainer) {
    var eventsTarget = $(pageContainer);
    if (!eventsTarget.hasClass('pull-down-refresh')) {
        eventsTarget = eventsTarget.find('.pull-down-refresh');
    }
    if (!eventsTarget || eventsTarget.length === 0) return;

    var page = eventsTarget.hasClass('ui-container') ? eventsTarget : eventsTarget.parents('.ui-container');
    var scroller = $.getScroller(page[0]);
    if (!scroller) return;

    var container = eventsTarget;

    function handleScroll() {
        if (container.hasClass('refreshing')) return;
        if (scroller.scrollTop() * -1 >= 44) {
            container.removeClass('pull-down').addClass('pull-up');
        } else {
            container.removeClass('pull-up').addClass('pull-down');
        }
    }

    function handleRefresh() {
        if (container.hasClass('refreshing')) return;
        container.removeClass('pull-down pull-up');
        container.addClass('refreshing transitioning');
        container.trigger('refresh');
        refreshTime = +new Date();
    }
    scroller.on('scroll', handleScroll);
    scroller.scroller.on('ptr', handleRefresh);

    // Detach Events on page remove
    function destroyPullToRefresh() {
        scroller.off('scroll', handleScroll);
        scroller.scroller.off('ptr', handleRefresh);
    }
    eventsTarget[0].destroyPullToRefresh = destroyPullToRefresh;
};

var pullToRefreshDoneJS = function pullToRefreshDoneJS(container) {
    container = $(container);
    if (container.length === 0) container = $('.pull-down-refresh.refreshing');
    if (container.length === 0) return;
    var interval = +new Date() - refreshTime;
    var timeOut = interval > 1000 ? 0 : 1000 - interval; //long than bounce time
    var scroller = $.getScroller(container);
    setTimeout(function () {
        scroller.refresh();
        container.removeClass('refreshing');
        container.transitionEnd(function () {
            container.removeClass("transitioning");
        });
    }, timeOut);
};
var pullToRefreshTriggerJS = function pullToRefreshTriggerJS(container) {
    container = $(container);
    if (container.length === 0) container = $('.pull-down-refresh');
    if (container.hasClass('refreshing')) return;
    container.addClass('refreshing');
    var scroller = $.getScroller(container);
    scroller.scrollTop(44 + 1, 200);
    container.trigger('refresh');
};

var destroyPullToRefreshJS = function destroyPullToRefreshJS(pageContainer) {
    pageContainer = $(pageContainer);
    var pullToRefreshContent = pageContainer.hasClass('pull-down-refresh') ? pageContainer : pageContainer.find('.pull-down-refresh');
    if (pullToRefreshContent.length === 0) return;
    if (pullToRefreshContent[0].destroyPullToRefresh) pullToRefreshContent[0].destroyPullToRefresh();
};

$._pullToRefreshJSScroll = {
    "initPullToRefresh": initPullToRefreshJS,
    "pullToRefreshDone": pullToRefreshDoneJS,
    "pullToRefreshTrigger": pullToRefreshTriggerJS,
    "destroyPullToRefresh": destroyPullToRefreshJS
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by dfzq on 2017/2/12.
 */
$.initPullToRefresh = function (pageContainer) {
    var eventsTarget = $(pageContainer);
    // 从子节点中查找是否有pull-down-refresh标注
    if (!eventsTarget.hasClass('pull-down-refresh')) {
        eventsTarget = eventsTarget.find('.pull-down-refresh');
    }
    if (!eventsTarget || eventsTarget.length === 0) return;

    // dynamicTriggerDistance - 当容器上定义data-ptr-distance则动态计算该layer的实际高度，这只是一个启动特性的标识符
    // triggerDistance - 下拉距离，超过该距离则触发下拉刷新事件
    // touchesStart - 存放Touch/Mouse相关坐标位置等参数
    // touchStartTime - 触发touchStart事件时的time
    var isTouched,
        isMoved,
        touchesStart = {},
        isScrolling,
        touchesDiff,
        touchStartTime,
        container,
        refresh = false,
        useTranslate = false,
        startTranslate = 0,
        translate,
        scrollTop,
        wasScrolled,
        triggerDistance,
        dynamicTriggerDistance;

    container = eventsTarget;

    // 定义向下拉动距离，默认44pt
    if (container.attr('data-ptr-distance')) {
        dynamicTriggerDistance = true;
    } else {
        triggerDistance = 44;
    }

    function handleTouchStart(e) {
        if (isTouched) {
            // 屏蔽掉安卓系统的双点事件
            if ($.device.android) {
                if ('targetTouches' in e && e.targetTouches.length > 1) return;
            } else return;
        }
        isMoved = false;
        isTouched = true;
        isScrolling = undefined;
        wasScrolled = undefined;
        touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        touchStartTime = new Date().getTime();
        /*jshint validthis:true */
        container = $(this);
    }

    function handleTouchMove(e) {
        if (!isTouched) return;
        var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        // 计算当前是否是垂直方向的滚动操作
        if (typeof isScrolling === 'undefined') {
            isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x));
        }
        if (!isScrolling) {
            isTouched = false;
            return;
        }

        scrollTop = container[0].scrollTop;
        if (typeof wasScrolled === 'undefined' && scrollTop !== 0) wasScrolled = true;

        if (!isMoved) {
            /*jshint validthis:true */
            container.removeClass('transitioning');
            if (scrollTop > container[0].offsetHeight) {
                isTouched = false;
                return;
            }
            if (dynamicTriggerDistance) {
                triggerDistance = container.attr('data-ptr-distance');
                if (triggerDistance.indexOf('%') >= 0) triggerDistance = container[0].offsetHeight * parseInt(triggerDistance, 10) / 100;
            }
            startTranslate = container.hasClass('refreshing') ? triggerDistance : 0;
            // if (container[0].scrollHeight === container[0].offsetHeight || !$.device.ios) {
            //     useTranslate = true;
            // } else {
            //     useTranslate = false;
            // }
            useTranslate = true;
        }
        isMoved = true;
        touchesDiff = pageY - touchesStart.y;

        if (touchesDiff > 0 && scrollTop <= 0 || scrollTop < 0) {
            // iOS 8 fix
            if ($.device.ios && parseInt($.device.osVersion.split('.')[0], 10) > 7 && scrollTop === 0 && !wasScrolled) useTranslate = true;

            if (useTranslate) {
                e.preventDefault();
                translate = Math.pow(touchesDiff, 0.85) + startTranslate;
                container.transform('translate3d(0,' + translate + 'px,0)');
                // console.log(translate);
            } else {}
            if (useTranslate && Math.pow(touchesDiff, 0.85) > triggerDistance || !useTranslate && touchesDiff >= triggerDistance * 2) {
                refresh = true;
                container.addClass('pull-up').removeClass('pull-down');
            } else {
                refresh = false;
                container.removeClass('pull-up').addClass('pull-down');
            }
        } else {

            container.removeClass('pull-up pull-down');
            refresh = false;
            return;
        }
    }

    function handleTouchEnd() {
        if (!isTouched || !isMoved) {
            isTouched = false;
            isMoved = false;
            return;
        }
        if (translate) {
            container.addClass('transitioning');
            translate = 0;
        }
        container.transform('');
        if (refresh) {
            //防止二次触发
            if (container.hasClass('refreshing')) return;
            container.addClass('refreshing');
            container.trigger('refresh');
        } else {
            container.removeClass('pull-down');
        }
        isTouched = false;
        isMoved = false;
    }

    // 根据Document/DocumentTouch添加触屏或鼠猫事件
    eventsTarget.on($.touchEvents.start, handleTouchStart);
    eventsTarget.on($.touchEvents.move, handleTouchMove);
    eventsTarget.on($.touchEvents.end, handleTouchEnd);

    function destroyPullToRefresh() {
        eventsTarget.off($.touchEvents.start, handleTouchStart);
        eventsTarget.off($.touchEvents.move, handleTouchMove);
        eventsTarget.off($.touchEvents.end, handleTouchEnd);
    }
    eventsTarget[0].destroyPullToRefresh = destroyPullToRefresh;
};
$.pullToRefreshDone = function (container) {
    $(window).scrollTop(0); //解决微信下拉刷新顶部消失的问题
    container = $(container);
    if (container.length === 0) container = $('.pull-down-refresh.refreshing');
    container.removeClass('refreshing').addClass('transitioning');
    container.transitionEnd(function () {
        container.removeClass('transitioning pull-up pull-down');
    });
};
$.pullToRefreshTrigger = function (container) {
    container = $(container);
    if (container.length === 0) container = $('.pull-down-refresh');
    if (container.hasClass('refreshing')) return;
    container.addClass('transitioning refreshing');
    container.trigger('refresh');
};

$.destroyPullToRefresh = function (pageContainer) {
    pageContainer = $(pageContainer);
    var pullToRefreshContent = pageContainer.hasClass('pull-down-refresh') ? pageContainer : pageContainer.find('.pull-down-refresh');
    if (pullToRefreshContent.length === 0) return;
    if (pullToRefreshContent[0].destroyPullToRefresh) pullToRefreshContent[0].destroyPullToRefresh();
};

/***/ })

},[222]);
});