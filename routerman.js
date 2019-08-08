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
return webpackJsonpfastman([7],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/3/4.
 */
/**
 * 获取 url 的 fragment（即 hash 中去掉 # 的剩余部分）
 *
 * 如果没有则返回空字符串
 * 如: http://example.com/path/?query=d#123 => 123
 *
 * @param {String} url url
 * @returns {String}
 */
var getUrlFragment = exports.getUrlFragment = function getUrlFragment(url) {
    var hashIndex = url.indexOf('#');
    //return hashIndex === -1 ? '' : url.slice(hashIndex + 1);
    return hashIndex === -1 ? '/' : url.slice(hashIndex + 1);
};

/**
 * 获取一个链接相对于当前页面的绝对地址形式
 *
 * 假设当前页面是 http://a.com/b/c
 * 那么有以下情况:
 * d => http://a.com/b/d
 * /e => http://a.com/e
 * #1 => http://a.com/b/c#1
 * http://b.com/f => http://b.com/f
 *
 * @param {String} url url
 * @returns {String}
 */
var getAbsoluteUrl = exports.getAbsoluteUrl = function getAbsoluteUrl(url) {
    var link = document.createElement('a');
    link.setAttribute('href', url);
    var absoluteUrl = link.href;
    link = null;
    return absoluteUrl;
};

/**
 * 获取一个 url 的基本部分，即不包括 hash
 *
 * @param {String} url url
 * @returns {String}
 */
var getBaseUrl = exports.getBaseUrl = function getBaseUrl(url) {
    var hashIndex = url.indexOf('#');
    return hashIndex === -1 ? url.slice(0) : url.slice(0, hashIndex);
};

/**
 * 把一个字符串的 url 转为一个可获取其 base 和 fragment 等的对象
 *
 * @param {String} url url
 * @returns {UrlObject}
 */
var toUrlObject = exports.toUrlObject = function toUrlObject(url) {
    var fullUrl = getAbsoluteUrl(url),
        baseUrl = getBaseUrl(fullUrl),
        fragment = getUrlFragment(url);

    return {
        base: baseUrl,
        full: fullUrl,
        original: url,
        fragment: fragment
    };
};

/**
 * 判断浏览器是否支持 sessionStorage，支持返回 true，否则返回 false
 * @returns {Boolean}
 */
var supportStorage = exports.supportStorage = function supportStorage() {
    var mod = 'ob.router.storage.ability';
    try {
        sessionStorage.setItem(mod, mod);
        sessionStorage.removeItem(mod);
        return true;
    } catch (e) {
        return false;
    }
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/2/9.
 */
var Util = __webpack_require__(130);
var Version = __webpack_require__(53);

if (!window.CustomEvent) {
    window.CustomEvent = function (type, config) {
        config = config || { bubbles: false, cancelable: false, detail: undefined };
        var e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, config.bubbles, config.cancelable, config.detail);
        return e;
    };

    window.CustomEvent.prototype = window.Event.prototype;
}

var EVENTS = {
    pageLoadStart: 'pageLoadStart', // ajax 开始加载新页面前
    pageLoadCancel: 'pageLoadCancel', // 取消前一个 ajax 加载动作后
    pageLoadError: 'pageLoadError', // ajax 加载页面失败后
    pageLoadComplete: 'pageLoadComplete', // ajax 加载页面完成后（不论成功与否）
    pageAnimationStart: 'pageAnimationStart', // 动画切换 page 前
    pageAnimationEnd: 'pageAnimationEnd', // 动画切换 page 结束后
    beforePageRemove: 'beforePageRemove', // 移除旧 document 前（适用于非内联 page 切换）
    pageRemoved: 'pageRemoved', // 移除旧 document 后（适用于非内联 page 切换）
    beforePageSwitch: 'beforePageSwitch', // page 切换前，在 pageAnimationStart 前，beforePageSwitch 之后会做一些额外的处理才触发 pageAnimationStart
    pageInit: 'pageInitInternal' // 目前是定义为一个 page 加载完毕后（实际和 pageAnimationEnd 等同）
};

var routerConfig = {
    sectionGroupClass: 'page-group',
    // 表示是当前 page 的 class
    curPageClass: 'page-current',
    // 用来辅助切换时表示 page 是 visible 的,
    // 之所以不用 curPageClass，是因为 page-current 已被赋予了「当前 page」这一含义而不仅仅是 display: block
    // 并且，别的地方已经使用了，所以不方便做变更，故新增一个
    visiblePageClass: 'page-visible',
    // 表示是 page 的 class，注意，仅是标志 class，而不是所有的 class
    pageClass: 'page'
};

var DIRECTION = {
    leftToRight: 'from-left-to-right',
    rightToLeft: 'from-right-to-left'
};

var theHistory = window.history;

/**
 * 路由构造函数
 * @constructor 构造器
 */
var Router = function Router() {
    this.sessionNames = {
        currentState: 'dfzq.router.currentState',
        maxStateId: 'dfzq.router.maxStateId'
    };

    // 初始化history的state并做了一些缓存工作
    this._init();
    this.xhr = null;
    // Hash对应的VDom
    this.vdoms = {};
    // Hash对应的viewId
    this.hash2ViewId = {};
    // 路由是否由popstate引起
    this.popstateFlag = false;

    // 这块的声明已被移植到核心库的router模块中
    //window.addEventListener('popstate', this._onPopState.bind(this));
};

/**
 * 初始化
 *
 * - 把当前文档内容缓存起来
 * - 查找默认展示的块内容，查找顺序如下
 *      1. id 是 url 中的 fragment 的元素
 *      2. 有当前块 class 标识的第一个元素
 *      3. 第一个块
 * - 初始页面 state 处理
 *
 * @private
 */
Router.prototype._init = function () {

    this.$view = $('body');

    // 用来保存 document 的 map
    this.cache = {};
    var $doc = $(document);
    var currentUrl = location.href;
    // 根据absoluteUrl将当前页面的document和page-group的dom缓存起来
    this._saveDocumentIntoCache($doc, currentUrl);

    var curPageId;

    var currentUrlObj = Util.toUrlObject(currentUrl);
    var $allSection = $doc.find('.' + routerConfig.pageClass);
    var $visibleSection = $doc.find('.' + routerConfig.curPageClass);
    var $curVisibleSection = $visibleSection.eq(0);
    var $hashSection;

    // if (currentUrlObj.fragment) {
    //     $hashSection = $doc.find('#' + currentUrlObj.fragment);
    // }
    // if ($hashSection && $hashSection.length) {
    //     $visibleSection = $hashSection.eq(0);
    // }
    // else if (!$visibleSection.length) {
    //     $visibleSection = $allSection.eq(0);
    // }
    if (!$visibleSection.length) {
        $visibleSection = $allSection.eq(0);
    }
    // 如果当前page没有定义id，则随机产生id
    if (!$visibleSection.attr('id')) {
        $visibleSection.attr('id', theHistory.state == null ? this._generateRandomId() : theHistory.state.pageId);
    }

    if ($curVisibleSection.length && $curVisibleSection.attr('id') !== $visibleSection.attr('id')) {
        // 在 router 到 inner page 的情况下，刷新（或者直接访问该链接）
        // 直接切换 class 会有「闪」的现象,或许可以采用 animateSection 来减缓一下
        $curVisibleSection.removeClass(routerConfig.curPageClass);
        $visibleSection.addClass(routerConfig.curPageClass);
    } else {
        $visibleSection.addClass(routerConfig.curPageClass);
    }
    curPageId = $visibleSection.attr('id');

    // 新进入一个使用 history.state 相关技术的页面时，如果第一个 state 不 push/replace,
    // 那么在后退回该页面时，将不触发 popState 事件
    if (theHistory.state === null) {
        var curState = {
            id: this._getNextStateId(),
            url: Util.toUrlObject(currentUrl),
            pageId: curPageId
        };

        theHistory.replaceState(curState, '', currentUrl);
        this._saveAsCurrentState(curState);
        this._incMaxStateId();
    }
};

/**
 * 切换到 url 指定的块或文档
 *
 * 如果 url 指向的是当前页面，那么认为是切换块；
 * 否则是切换文档
 *
 * @param {String} router 核心层的router，内部包含match和path
 * @param {Boolean=} ignoreCache 是否强制请求不使用缓存，对 document 生效，默认是 false
 */
Router.prototype.load = function (router, ignoreCache) {
    // if (ignoreCache === undefined) {
    //     ignoreCache = false;
    // }

    // if (this._isTheSameDocument(location.href, url)) {
    //     this._switchToSection(Util.getUrlFragment(url));
    // } else {
    //     this._saveDocumentIntoCache($(document), location.href);
    //     this._switchToDocument(url, ignoreCache);
    // }

    // // TODO 目前只支持内联，未来可扩展外联链接方式 ...
    // var hashId = Util.getUrlFragment(url)
    // core模块中进行v-tree操作
    // // 查找当前doms作用域中是否存在当前路由
    // if (!this.vdoms[hashId])
    //     $.loadDocument(hashId)
    // 切换页面块
    this._switchToSection(router);
};

/**
 * 调用 history.forward()
 */
Router.prototype.forward = function () {
    theHistory.forward();
};

/**
 * 调用 history.back()
 */
Router.prototype.back = function () {
    theHistory.back();
};

//noinspection JSUnusedGlobalSymbols
/**
 * @deprecated
 */
Router.prototype.loadPage = Router.prototype.load;

/**
 * 切换显示当前文档另一个块
 *
 * 把新块从右边切入展示，同时会把新的块的记录用 history.pushState 来保存起来
 *
 * 如果已经是当前显示的块，那么不做任何处理；
 * 如果没对应的块，那么忽略。
 *
 * @param {String} router 待切换router,内部包含match和path
 * @private
 */
Router.prototype._switchToSection = function (router) {
    var hashId = router.path;
    var match = router.match;
    if (!hashId) {
        return;
    }

    var $curPage = this._getCurrentSection();
    // 根据路由规则，新页面将会是page-group的最后一个子节点
    //$newPage = $('#' + sectionId);
    var $newPage;
    if (!this.hash2ViewId[match]) {
        $newPage = this.$view.find('.' + routerConfig.pageClass).eq(-1);
    } else {
        $newPage = $('#' + this.hash2ViewId[match]);
    }

    // 如果已经是当前页，不做任何处理
    if ($curPage === $newPage) {
        return;
    }

    this._animateSection($curPage, $newPage, DIRECTION.rightToLeft);
    // 待切换的块未设置ID，自动生成一个随机值
    var sectionId;
    if (!$newPage.attr('id')) {
        sectionId = this._generateRandomId();
        $newPage.attr('id', sectionId);
    } else {
        sectionId = $newPage.attr('id');
    }
    this.hash2ViewId[match] = sectionId;

    this._pushNewState('#' + hashId, sectionId);

    // // 更新当前可见页面的node
    // $.setNode(this.vdoms[hashId])
};

/**
 * 载入显示一个新的文档
 *
 * - 如果有缓存，那么直接利用缓存来切换
 * - 否则，先把页面加载过来缓存，然后再切换
 *      - 如果解析失败，那么用 location.href 的方式来跳转
 *
 * 注意：不能在这里以及其之后用 location.href 来 **读取** 切换前的页面的 url，
 *     因为如果是 popState 时的调用，那么此时 location 已经是 pop 出来的 state 的了
 *
 * @param {String} url 新的文档的 url
 * @param {Boolean=} ignoreCache 是否不使用缓存强制加载页面
 * @param {Boolean=} isPushState 是否需要 pushState
 * @param {String=} direction 新文档切入的方向
 * @private
 */
Router.prototype._switchToDocument = function (url, ignoreCache, isPushState, direction) {
    var baseUrl = Util.toUrlObject(url).base;

    if (ignoreCache) {
        delete this.cache[baseUrl];
    }

    var cacheDocument = this.cache[baseUrl];
    var context = this;

    if (cacheDocument) {
        this._doSwitchDocument(url, isPushState, direction);
    } else {
        // TODO 改造成mobi中的http通讯模块 ...
        this._loadDocument(url, {
            success: function success($doc) {
                try {
                    context._parseDocument(url, $doc);
                    context._doSwitchDocument(url, isPushState, direction);
                } catch (e) {
                    location.href = url;
                }
            },
            error: function error() {
                location.href = url;
            }
        });
    }
};

/**
 * 利用缓存来做具体的切换文档操作
 *
 * - 确定待切入的文档的默认展示 section
 * - 把新文档 append 到 view 中
 * - 动画切换文档
 * - 如果需要 pushState，那么把最新的状态 push 进去并把当前状态更新为该状态
 *
 * @param {String} url 待切换的文档的 url
 * @param {Boolean} isPushState 加载页面后是否需要 pushState，默认是 true
 * @param {String} direction 动画切换方向，默认是 DIRECTION.rightToLeft
 * @private
 */
Router.prototype._doSwitchDocument = function (url, isPushState, direction) {
    if (typeof isPushState === 'undefined') {
        isPushState = true;
    }

    var urlObj = Util.toUrlObject(url);
    // 当前Document
    var $currentDoc = this.$view.find('.' + routerConfig.sectionGroupClass);
    // 将要animateTo的Document
    var $newDoc = $($('<div></div>').append(this.cache[urlObj.base].$content).html());

    // 确定一个 document 展示 section 的顺序
    // 1. 与 hash 关联的 element
    // 2. 默认的标识为 current 的 element
    // 3. 第一个 section
    var $allSection = $newDoc.find('.' + routerConfig.pageClass);
    var $visibleSection = $newDoc.find('.' + routerConfig.curPageClass);
    var $hashSection;

    if (urlObj.fragment) {
        $hashSection = $newDoc.find('#' + urlObj.fragment);
    }
    if ($hashSection && $hashSection.length) {
        $visibleSection = $hashSection.eq(0);
    } else if (!$visibleSection.length) {
        $visibleSection = $allSection.eq(0);
    }
    if (!$visibleSection.attr('id')) {
        $visibleSection.attr('id', this._generateRandomId());
    }

    var $currentSection = this._getCurrentSection();
    $currentSection.trigger(EVENTS.beforePageSwitch, [$currentSection.attr('id'), $currentSection]);

    $allSection.removeClass(routerConfig.curPageClass);
    $visibleSection.addClass(routerConfig.curPageClass);

    // prepend 而不 append 的目的是避免 append 进去新的 document 在后面，
    // 其里面的默认展示的(.page-current) 的页面直接就覆盖了原显示的页面（因为都是 absolute）
    this.$view.prepend($newDoc);

    this._animateDocument($currentDoc, $newDoc, $visibleSection, direction);

    if (isPushState) {
        this._pushNewState(url, $visibleSection.attr('id'));
    }
};

/**
 * 判断两个 url 指向的页面是否是同一个
 *
 * 判断方式: 如果两个 url 的 base 形式（不带 hash 的绝对形式）相同，那么认为是同一个页面
 *
 * @param {String} url
 * @param {String} anotherUrl
 * @returns {Boolean}
 * @private
 */
Router.prototype._isTheSameDocument = function (url, anotherUrl) {
    return Util.toUrlObject(url).base === Util.toUrlObject(anotherUrl).base;
};

/**
 * ajax 加载 url 指定的页面内容
 *
 * 加载过程中会发出以下事件
 *  pageLoadCancel: 如果前一个还没加载完,那么取消并发送该事件
 *  pageLoadStart: 开始加载
 *  pageLodComplete: ajax complete 完成
 *  pageLoadError: ajax 发生 error
 *
 *
 * @param {String} url url
 * @param {Object=} callback 回调函数配置，可选，可以配置 success\error 和 complete
 *      所有回调函数的 this 都是 null，各自实参如下：
 *      success: $doc, status, xhr
 *      error: xhr, status, err
 *      complete: xhr, status
 *
 * @private
 */
Router.prototype._loadDocument = function (url, callback) {
    // 并发操作考虑
    if (this.xhr && this.xhr.readyState < 4) {
        this.xhr.onreadystatechange = function () {};
        this.xhr.abort();
        this.dispatch(EVENTS.pageLoadCancel);
    }

    this.dispatch(EVENTS.pageLoadStart);

    callback = callback || {};
    var self = this;

    this.xhr = $.ajax({
        url: url,
        success: $.proxy(function (data, status, xhr) {
            // 给包一层 <html/>，从而可以拿到完整的结构
            var $doc = $('<html></html>');
            $doc.append(data);
            callback.success && callback.success.call(null, $doc, status, xhr);
        }, this),
        error: function error(xhr, status, err) {
            callback.error && callback.error.call(null, xhr, status, err);
            // Ajax失败时的回调处理
            self.dispatch(EVENTS.pageLoadError);
        },
        complete: function complete(xhr, status) {
            callback.complete && callback.complete.call(null, xhr, status);
            self.dispatch(EVENTS.pageLoadComplete);
        }
    });
};

/**
 * 对于 ajax 加载进来的页面，把其缓存起来
 *
 * @param {String} url url
 * @param $doc ajax 载入的页面的 jq 对象，可以看做是该页面的 $(document)
 * @private
 */
Router.prototype._parseDocument = function (url, $doc) {
    var $innerView = $doc.find('.' + routerConfig.sectionGroupClass);

    if (!$innerView.length) {
        throw new Error('missing router view mark: ' + routerConfig.sectionGroupClass);
    }

    this._saveDocumentIntoCache($doc, url);
};

/**
 * 把一个页面的相关信息保存到 this.cache 中
 *
 * 以页面的 baseUrl 为 key,而 value 则是一个 DocumentCache
 *
 * @param {*} doc doc
 * @param {String} url url
 * @private
 */
Router.prototype._saveDocumentIntoCache = function (doc, url) {
    var urlAsKey = Util.toUrlObject(url).base;
    var $doc = $(doc);

    this.cache[urlAsKey] = {
        $doc: $doc,
        $content: $doc.find('.' + routerConfig.sectionGroupClass)
    };
};

/**
 * 从 sessionStorage 中获取保存下来的「当前状态」
 *
 * 如果解析失败，那么认为当前状态是 null
 *
 * @returns {State|null}
 * @private
 */
Router.prototype._getLastState = function () {
    var currentState = sessionStorage.getItem(this.sessionNames.currentState);
    try {
        currentState = JSON.parse(currentState);
    } catch (e) {
        currentState = null;
    }

    return currentState;
};

/**
 * 把一个状态设为当前状态，保存仅 sessionStorage 中
 *
 * @param {State} state
 * @private
 */
Router.prototype._saveAsCurrentState = function (state) {
    sessionStorage.setItem(this.sessionNames.currentState, JSON.stringify(state));
};

/**
 * 获取下一个 state 的 id
 *
 * 读取 sessionStorage 里的最后的状态的 id，然后 + 1；如果原没设置，那么返回 1
 *
 * @returns {number}
 * @private
 */
Router.prototype._getNextStateId = function () {
    var maxStateId = sessionStorage.getItem(this.sessionNames.maxStateId);
    return maxStateId ? parseInt(maxStateId, 10) + 1 : 1;
};

/**
 * 把 sessionStorage 里的最后状态的 id 自加 1
 *
 * @private
 */
Router.prototype._incMaxStateId = function () {
    sessionStorage.setItem(this.sessionNames.maxStateId, this._getNextStateId());
};

/**
 * 从一个文档切换为显示另一个文档
 *
 * @param $from 目前显示的文档
 * @param $to 待切换显示的新文档
 * @param $visibleSection 新文档中展示的 section 元素
 * @param direction 新文档切入方向
 * @private
 */
Router.prototype._animateDocument = function ($from, $to, $visibleSection, direction) {
    var sectionId = $visibleSection.attr('id');

    var $visibleSectionInFrom = $from.find('.' + routerConfig.curPageClass);
    $visibleSectionInFrom.addClass(routerConfig.visiblePageClass).removeClass(routerConfig.curPageClass);

    $visibleSection.trigger(EVENTS.pageAnimationStart, [sectionId, $visibleSection]);

    this._animateElement($from, $to, direction);

    $from.animationEnd(function () {
        $visibleSectionInFrom.removeClass(routerConfig.visiblePageClass);
        // 移除 document 前后，发送 beforePageRemove 和 pageRemoved 事件
        $(window).trigger(EVENTS.beforePageRemove, [$from]);
        $from.remove();
        $(window).trigger(EVENTS.pageRemoved);
    });

    $to.animationEnd(function () {
        $visibleSection.trigger(EVENTS.pageAnimationEnd, [sectionId, $visibleSection]);
        // 外层（init.js）中会绑定 pageInitInternal 事件，然后对页面进行初始化
        $visibleSection.trigger(EVENTS.pageInit, [sectionId, $visibleSection]);
    });
};

/**
 * 把当前文档的展示 section 从一个 section 切换到另一个 section
 *
 * @param $from
 * @param $to
 * @param direction
 * @private
 */
Router.prototype._animateSection = function ($from, $to, direction) {
    var toId = $to.attr('id');
    $from.isBack = direction === DIRECTION.rightToLeft ? false : true;
    $from.trigger(EVENTS.beforePageSwitch, [$from.attr('id'), $from]);

    $from.removeClass(routerConfig.curPageClass);
    $to.addClass(routerConfig.curPageClass);
    $to.isBack = direction === DIRECTION.rightToLeft ? false : true;

    // 给容器添加scroller自由滚动特性
    // 解决virtual-dom和js-scroller公用冲突的bug，全部使用原生scroller
    $('[data-toggle="scroller"]').not(".native-scroll").not(".javascript-scroll").scroller({
        type: 'native'
    });

    $to.trigger(EVENTS.pageAnimationStart, [toId, $to]);
    this._animateElement($from, $to, direction);
    // 判断是否PageInit
    var _isInit = true;
    for (var key in this.hash2ViewId) {
        if (this.hash2ViewId[key] === toId) {
            _isInit = false;
            break;
        }
    }
    $to.animationEnd(function () {
        $to.trigger(EVENTS.pageAnimationEnd, [toId, $to]);
        // 外层（init.js）中会绑定 pageInitInternal 事件，然后对页面进行初始化
        if (_isInit) {
            $to.trigger(EVENTS.pageInit, [toId, $to]);
        }
    });
};

/**
 * 切换显示两个元素
 *
 * 切换是通过更新 class 来实现的，而具体的切换动画则是 class 关联的 css 来实现
 *
 * @param $from 当前显示的元素
 * @param $to 待显示的元素
 * @param direction 切换的方向
 * @private
 */
Router.prototype._animateElement = function ($from, $to, direction) {
    // todo: 可考虑如果入参不指定，那么尝试读取 $to 的属性，再没有再使用默认的
    // 考虑读取点击的链接上指定的方向
    if (typeof direction === 'undefined') {
        direction = DIRECTION.rightToLeft;
    }

    var animPageClasses = ['page-from-center-to-left', 'page-from-center-to-right', 'page-from-right-to-center', 'page-from-right-to-center-compatible', 'page-from-left-to-center'].join(' ');

    var classForFrom, classForTo;
    switch (direction) {
        case DIRECTION.rightToLeft:
            classForFrom = 'page-from-center-to-left';
            //classForTo = $.device.ios ? 'page-from-right-to-center-compatible' : 'page-from-right-to-center';
            classForTo = $.device.ios && Version._compareVersion($.device.osVersion, '10.0.0') >= 0 && Version._compareVersion($.device.osVersion, '11.0.0') < 0 ? 'page-from-right-to-center-compatible' : 'page-from-right-to-center';
            break;
        case DIRECTION.leftToRight:
            classForFrom = 'page-from-center-to-right';
            classForTo = 'page-from-left-to-center';
            break;
        default:
            classForFrom = 'page-from-center-to-left';
            //classForTo = $.device.ios ? 'page-from-right-to-center-compatible' : 'page-from-right-to-center';
            classForTo = $.device.ios && Version._compareVersion($.device.osVersion, '10.0.0') >= 0 && Version._compareVersion($.device.osVersion, '11.0.0') < 0 ? 'page-from-right-to-center-compatible' : 'page-from-right-to-center';
            break;
    }

    $from.removeClass(animPageClasses).addClass(classForFrom);
    $to.removeClass(animPageClasses).addClass(classForTo);

    $from.animationEnd(function () {
        $from.removeClass(animPageClasses);
    });
    $to.animationEnd(function () {
        $to.removeClass(animPageClasses);
    });
};

/**
 * 获取当前显示的第一个 section
 *
 * @returns {*}
 * @private
 */
Router.prototype._getCurrentSection = function () {
    return this.$view.find('.' + routerConfig.curPageClass).eq(0);
};

/**
 * popState 事件关联着的后退处理
 *
 * 判断两个 state 判断是否是属于同一个文档，然后做对应的 section 或文档切换；
 * 同时在切换后把新 state 设为当前 state
 *
 * @param {State} state 新 state
 * @param {State} fromState 旧 state
 * @private
 */
Router.prototype._back = function (state, fromState) {
    // if (this._isTheSameDocument(state.url.full, fromState.url.full)) {
    //     var $newPage = $('#' + state.pageId);
    //     if ($newPage.length) {
    //         var $currentPage = this._getCurrentSection();
    //         this._animateSection($currentPage, $newPage, DIRECTION.leftToRight);
    //         this._saveAsCurrentState(state);
    //     } else {
    //         // location.href = state.url.full;
    //         location.href = state.url.base
    //     }
    // } else {
    //     this._saveDocumentIntoCache($(document), fromState.url.full);
    //     this._switchToDocument(state.url.full, false, false, DIRECTION.leftToRight);
    //     this._saveAsCurrentState(state);
    // }
    var $newPage = $('#' + state.pageId);
    if ($newPage.length) {
        var $currentPage = this._getCurrentSection();
        this._animateSection($currentPage, $newPage, DIRECTION.leftToRight);
        this._saveAsCurrentState(state);
    } else {
        location.href = state.url.full;
        //location.href = state.url.base
    }
};

/**
 * popState 事件关联着的前进处理,类似于 _back，不同的是切换方向
 *
 * @param {State} state 新 state
 * @param {State} fromState 旧 state
 * @private
 */
Router.prototype._forward = function (state, fromState) {
    if (this._isTheSameDocument(state.url.full, fromState.url.full)) {
        var $newPage = $('#' + state.pageId);
        if ($newPage.length) {
            var $currentPage = this._getCurrentSection();
            this._animateSection($currentPage, $newPage, DIRECTION.rightToLeft);
            this._saveAsCurrentState(state);
        } else {
            // location.href = state.url.full;
            location.href = state.url.base;
        }
    } else {
        this._saveDocumentIntoCache($(document), fromState.url.full);
        this._switchToDocument(state.url.full, false, false, DIRECTION.rightToLeft);
        this._saveAsCurrentState(state);
    }
};

/**
 * popState 事件处理
 *
 * 根据 pop 出来的 state 和当前 state 来判断是前进还是后退
 *
 * @param event popstate事件对象
 * @param routerMatch 路由规则，支持通配符
 * @private
 */
Router.prototype._onPopState = function (event, routerMatch) {
    var state = event.state;
    // if not a valid state, do nothing
    if (!state || !state.pageId) {
        return;
    }

    var lastState = this._getLastState();

    if (!lastState) {
        console.error && console.error('Missing last state when backward or forward');
        return;
    }

    if (state.id === lastState.id) {
        return;
    }

    if (state.id < lastState.id) {
        this._back(state, lastState);
    } else {
        this._forward(state, lastState);
    }

    // 前进后退都记录当前的hash对应的viewId，用于v-dom查找对应hash的node对象（已修复）
    this.hash2ViewId[routerMatch] = state.pageId;

    // 更新当前可见页面的node
    // $.setNode(this.vdoms[lastState.url.fragment])
    //$.setNode(this.vdoms[Util.getUrlFragment(location.href)])
};

/**
 * 页面进入到一个新状态
 *
 * 把新状态 push 进去，设置为当前的状态，然后把 maxState 的 id +1。
 *
 * @param {String} url 新状态的 url
 * @param {String} sectionId 新状态中显示的 section 元素的 id
 * @private
 */
Router.prototype._pushNewState = function (url, sectionId) {
    var state = {
        id: this._getNextStateId(),
        pageId: sectionId,
        url: Util.toUrlObject(url)
    };

    theHistory.pushState(state, '', url);
    this._saveAsCurrentState(state);
    this._incMaxStateId();
};

/**
 * 生成一个随机的 id
 *
 * @returns {string}
 * @private
 */
Router.prototype._generateRandomId = function () {
    return "page-" + +new Date();
};

Router.prototype.dispatch = function (event) {
    var e = new CustomEvent(event, {
        bubbles: true,
        cancelable: true
    });

    //noinspection JSUnresolvedFunction
    window.dispatchEvent(e);
};

exports.Router = Router;
exports.Util = Util;
exports.routerConfig = routerConfig;
exports.EVENTS = EVENTS;

// /**
//  * 判断一个链接是否使用 router 来处理
//  *
//  * @param $link
//  * @returns {boolean}
//  */
// function isInRouterBlackList($link) {
//     var classBlackList = [
//         'external',
//         'tab-link',
//         'open-popup',
//         'close-popup',
//         'open-panel',
//         'close-panel'
//     ];
//
//     for (var i = classBlackList.length -1 ; i >= 0; i--) {
//         if ($link.hasClass(classBlackList[i])) {
//             return true;
//         }
//     }
//
//     var linkEle = $link.get(0);
//     var linkHref = linkEle.getAttribute('href');
//
//     var protoWhiteList = [
//         'http',
//         'https'
//     ];
//
//     //如果非noscheme形式的链接，且协议不是http(s)，那么路由不会处理这类链接
//     if (/^(\w+):/.test(linkHref) && protoWhiteList.indexOf(RegExp.$1) < 0) {
//         return true;
//     }
//
//     //noinspection RedundantIfStatementJS
//     if (linkEle.hasAttribute('external')) {
//         return true;
//     }
//
//     return false;
// }

// /**
//  * 自定义是否执行路由功能的过滤器
//  *
//  * 可以在外部定义 $.config.routerFilter 函数，实参是点击链接的 Zepto 对象。
//  *
//  * @param $link 当前点击的链接的 Zepto 对象
//  * @returns {boolean} 返回 true 表示执行路由功能，否则不做路由处理
//  */
// function customClickFilter($link) {
//     // 路由功能开关过滤器，返回 false 表示当前点击链接不使用路由
//     var customRouterFilter = $link => {
//         // 某个区域的 a 链接不想使用路由功能
//         if ($link.is('.disable-router a')) {
//             return false;
//         }
//
//         return true;
//     };
//     if ($.isFunction(customRouterFilter)) {
//         var filterResult = customRouterFilter($link);
//         if (typeof filterResult === 'boolean') {
//             return filterResult;
//         }
//     }
//
//     return true;
// }

// $(function() {
//     // 当前浏览器是否支持sessionStorage特性
//     if (!Util.supportStorage()) {
//         return;
//     }
//
//     // 页面元素需要定义.page，不然路由模块默认不会生效
//     var $pages = $('.' + routerConfig.pageClass);
//     if (!$pages.length) {
//         var warnMsg = 'Disable router function because of no .page elements';
//         if (window.console && window.console.warn) {
//             console.warn(warnMsg);
//         }
//         return;
//     }
//
//     // 初始化路由：historyState
//     var router = $.router = new Router();
//
//     // 为page容器中的a标签注册点击事件
//     $(document).on('click', 'a', function(e) {
//         var $target = $(e.currentTarget);
//
//         var filterResult = customClickFilter($target);
//         if (!filterResult) {
//             return;
//         }
//
//         if (isInRouterBlackList($target)) {
//             return;
//         }
//
//         e.preventDefault();
//
//         if ($target.hasClass('back')) {
//             router.back();
//         } else {
//             var url = $target.attr('href');
//             if (!url || url === '#') {
//                 return;
//             }
//
//             var ignoreCache = $target.attr('data-no-cache') === 'true';
//
//             router.load(url, ignoreCache);
//         }
//     });
// });

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/7/31.
 */

/**
 * 末尾补.0
 * @param num 原始值
 * @param n   位数最大的值
 * @returns {*}
 */
var padZero = function padZero(num, n) {
    var len = num.split('.').length;
    while (len < n) {
        num = num + '.0';
        len++;
    }
    return num;
};

/**
 * 获取APP版本号
 * @param _
 * @returns {*}
 */
var getVersion = function getVersion(_) {
    var groups = navigator.userAgent.toLowerCase().match(/DFYJ\/([\d.]+)/i);
    if (!groups) {
        return undefined;
    } else {
        return groups[1];
    }
};

/**
 * 比较手机系统版本，arg1 > arg2, return 1; arg1 == arg2, return 0; arg1 < arg2, return -1
 * @param compareVersion
 * @returns {number}
 */
var _compareVersion = function _compareVersion(a, b) {
    // 补.0操作
    var _as = a.split('.');
    var _bs = b.split('.');
    var max = Math.max(_as.length, _bs.length);
    a = padZero(a, max);
    b = padZero(b, max);

    var as = a.split('.');
    var bs = b.split('.');
    if (a === b) return 0;

    for (var i = 0; i < as.length; i++) {
        var x = parseInt(as[i]);
        if (!bs[i]) return 1;
        var y = parseInt(bs[i]);
        if (x < y) return -1;
        if (x > y) return 1;
    }
    return -1;
};

/**
 * 比较APP版本，比compareVersion大则返回1，否则返回-1；相等返回0；
 * @param compareVersion
 * @returns {number}
 */
var compareVersion = function compareVersion(_compareVersion2) {
    // 获取当前版本号
    var currentVersion = getVersion();
    if (!currentVersion) {
        return 1;
    } else {
        return _compareVersion(currentVersion, _compareVersion2);
    }
};

exports.getVersion = getVersion;
exports.compareVersion = compareVersion;
exports._compareVersion = _compareVersion;

/***/ })

},[221]);
});