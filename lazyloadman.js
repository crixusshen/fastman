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
return webpackJsonpfastman([14],{

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LazyLoad = undefined;

var _inViewPort = __webpack_require__(48);

var _inViewPort2 = _interopRequireDefault(_inViewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoad = function LazyLoad(_ref) {
    var _ref$container = _ref.container,
        container = _ref$container === undefined ? '.page-group' : _ref$container,
        _ref$offset = _ref.offset,
        offset = _ref$offset === undefined ? 333 : _ref$offset,
        _ref$src = _ref.src,
        src = _ref$src === undefined ? 'data-src' : _ref$src;

    return {
        actions: {
            lazyLoad: {
                refresh: function refresh(_) {
                    // 查看浏览器是否支持MutationObserver特性
                    var supportsMutationObserver = typeof global.MutationObserver === 'function';

                    var $pageContent = $(container);
                    // 获取容器内所有的图片集合
                    var items = $pageContent.find('img');

                    // 占位图片 1px 透明图
                    var placeholderSrc = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';

                    if (items && items.length > 0) {
                        $.each(items, function (i, $img) {
                            if ($img) {
                                var $$img = $($img);

                                // 如果当前img已经定义了src则不执行懒加载
                                if (!$$img.attr('src')) {

                                    // 添加默认占位图片（解决viewport针对没有高度的元素不执行回调的bug，因此默认追加一张1px的透明图片）
                                    $$img.attr('src', placeholderSrc);
                                    // 添加默认占位样式
                                    $$img.addClass('lazyload-load');

                                    // 支持MutationObserver特性
                                    if (supportsMutationObserver) {
                                        (0, _inViewPort2.default)($img, { offset: offset }, function (elt) {
                                            // 获取真实图片地址
                                            var realSrc = $(elt).attr(src);
                                            // 获取是否已经执行过懒加载状态
                                            var isLazyFlag = $(elt).attr('lazy');

                                            if (realSrc && !isLazyFlag) {
                                                $(elt).attr('src', realSrc);
                                                $(elt)[0].onerror = function (e) {
                                                    // 添加图片加载失败刷新的样式
                                                    $(this).attr('src', 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==');
                                                    $(this).addClass('lazyload-loaderror');

                                                    // 点击重新加载图片
                                                    $(this).on('click', function () {
                                                        if ($(this).hasClass('lazyload-loaderror')) {
                                                            $(this).removeClass('lazyload-loaderror').addClass('lazyload-load').attr('src', realSrc);
                                                        }
                                                    });
                                                };
                                                // 已经懒加载则置为1
                                                $(elt).attr('lazy', '1');

                                                console.log('[LazyImage CallBack]:' + realSrc);
                                            }
                                        });
                                    }
                                    // 不支持MutationObserver特性
                                    else {
                                            var realSrc = $$img.attr(src);
                                            if (realSrc) {
                                                $$img.attr('src', realSrc);
                                                console.log('[No LazyImage CallBack]:' + realSrc);
                                            }
                                        }
                                }
                            }
                        });
                    }
                }
            }
        },
        hooks: {
            onPageDidAppear: function onPageDidAppear(e, pageId, $page, actions, model) {
                actions.lazyLoad.refresh();
            }
        }
    };
}; /**
    * 图片懒加载
    * Created by dfzq on 2017/8/14.
    */
exports.LazyLoad = LazyLoad;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })

},[219]);
});