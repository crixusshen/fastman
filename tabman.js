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
return webpackJsonpfastman([19],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var showTab = function showTab(tab, tabLink, force) {
    var newTab = $(tab);
    if (arguments.length === 2) {
        if (typeof tabLink === 'boolean') {
            force = tabLink;
        }
    }
    if (newTab.length === 0) return false;
    if (newTab.hasClass('active')) {
        if (force) newTab.trigger('show');
        return false;
    }
    var tabs = newTab.parent('.tabs');
    if (tabs.length === 0) return false;

    // Animated tabs
    /*var isAnimatedTabs = tabs.parent().hasClass('tabs-animated-wrap');
     if (isAnimatedTabs) {
     tabs.transform('translate3d(' + -newTab.index() * 100 + '%,0,0)');
     }*/

    // Remove active class from old tabs
    var oldTab = tabs.children('.tab.active').removeClass('active');
    // Add active class to new tab
    newTab.addClass('active');
    // Trigger 'show' event on new tab
    newTab.trigger('show');

    // Update navbars in new tab
    /*if (!isAnimatedTabs && newTab.find('.navbar').length > 0) {
     // Find tab's view
     var viewContainer;
     if (newTab.hasClass(app.params.viewClass)) viewContainer = newTab[0];
     else viewContainer = newTab.parents('.' + app.params.viewClass)[0];
     app.sizeNavbars(viewContainer);
     }*/

    // Find related link for new tab
    if (tabLink) tabLink = $(tabLink);else {
        // Search by id
        if (typeof tab === 'string') tabLink = $('.tab-link[href="' + tab + '"]');else tabLink = $('.tab-link[href="#' + newTab.attr('id') + '"]');
        // Search by data-tab
        if (!tabLink || tabLink && tabLink.length === 0) {
            $('[data-tab]').each(function () {
                if (newTab.is($(this).attr('data-tab'))) tabLink = $(this);
            });
        }
    }
    if (tabLink.length === 0) return;

    // Find related link for old tab
    var oldTabLink;
    if (oldTab && oldTab.length > 0) {
        // Search by id
        var oldTabId = oldTab.attr('id');
        if (oldTabId) oldTabLink = $('.tab-link[href="#' + oldTabId + '"]');
        // Search by data-tab
        if (!oldTabLink || oldTabLink && oldTabLink.length === 0) {
            $('[data-tab]').each(function () {
                if (oldTab.is($(this).attr('data-tab'))) oldTabLink = $(this);
            });
        }
    }

    // Update links' classes
    if (tabLink && tabLink.length > 0) tabLink.addClass('active');
    if (oldTabLink && oldTabLink.length > 0) oldTabLink.removeClass('active');
    tabLink.trigger('active');

    //app.refreshScroller();

    return true;
};

var old = $.showTab;
$.showTab = showTab;

$.showTab.noConflict = function () {
    $.showTab = old;
    return this;
};
//a标签上的click事件，在iscroll下响应有问题
$(document).on("click", ".tab-link", function (e) {
    e.preventDefault();
    var clicked = $(this);
    showTab(clicked.data("tab") || clicked.attr('href'), clicked);
});

/**
 * 定义某个tab事件
 *
 * @param tabId tab对应href锚点
 * @param fun 回调事件
 */
var tabEvent = function tabEvent(tabId, fun) {
    $(".tab-link[href='#" + tabId + "']").on("click", fun);
};

/**
 * 切换tab
 *
 * @param tabId tab对应href锚点
 */
var tabSwitch = function tabSwitch(tabId) {
    // $(".tab-link[href='#" + tabId + "']").trigger('click');
    var clicked = $(".tab-link[href='#" + tabId + "']");
    showTab(clicked.data("tab") || clicked.attr('href'), clicked);
};

exports.tabEvent = tabEvent;
exports.tabSwitch = tabSwitch;

/***/ })

},[210]);
});