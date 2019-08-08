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
return webpackJsonpfastman([27],{

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blankPage = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _base = __webpack_require__(29);

// 删除当前容器内的一些不必要的DOM
function init(container) {

    // 对当前container中所有子集隐藏
    if (container.children()) container.children().hide();

    // 对当前container中已声明的blankPage进行去重
    container.find('section.ui-notice').remove();
}

// 默认模板
var _blankPageTpl = '<section <% if(container != "body"){ %> style="position:relative;" <% }else{ %> style="height:100%;" <% } %> class="ui-notice">' + '<i class="<%=font%>-icon animate-<%=icon%> icon-<%=icon%>" <% if(!title){%>style="margin-bottom:0;"<%} %>></i>' + '<% if(title) { %> <p style="font-size: <%=props.tipFontSize%>rem"><%=title%></p> <% } %>' + '<div data-role="button" class="ui-notice-btn" style="font-size: <%=props.tipFontSize%>rem"><%=buttonText%></div>' + '</section>';

// 默认参数
var defaults = {
    title: '正在加载...',
    icon: 'loading',
    buttonText: '重新载入',
    button: false,
    type: 'click',
    font: 'fontello', // 所使用的字体，目前支持fontello和ui
    container: 'body',
    fontScale: 1, // 文字尺寸，默认为1
    iconScale: 1, // 图标尺寸，默认为1
    props: { // 自有属性，不参与组件配置，实现内部逻辑用，单位px
        iconFontSize: 65, // 图标大小，iphone6尺寸在以65px作为基准值
        tipFontSize: 28 // 文字大小，iphone6尺寸在以28px作为基准值
        // containerHeight: 667,      // 容器高度大小，iphone6尺寸在以667px作为基准值，这也是i6的高度
    }
};

/**
 * 深复制实现
 * @returns {Object}
 */
function copy(obj1, obj2) {
    var obj2 = obj2 || {}; //最初的时候给它一个初始值=它自己或者是一个json
    for (var name in obj1) {
        if (_typeof(obj1[name]) === "object") {
            //先判断一下obj[name]是不是一个对象
            obj2[name] = obj1[name].constructor === Array ? [] : {}; //我们让要复制的对象的name项=数组或者是json
            copy(obj1[name], obj2[name]); //然后来无限调用函数自己 递归思想
        } else {
            obj2[name] = obj1[name]; //如果不是对象，直接等于即可，不会发生引用。
        }
    }
    return obj2; //然后在把复制好的对象给return出去
}

function Plugin(option) {
    var options = $.extend({}, defaults, option);
    var container = $(options.container);

    /**
     * px转化为rem单位
     * @param originVal 原始px值
     */
    var px2rem = function px2rem(originVal) {
        // 获取实际容器大小
        var $scale = window.document.documentElement.getAttribute('data-scale') || 1;
        // 当前容器相对值
        var containerRelativeVal = container.height() * $scale < container.width() * $scale ? container.height() * $scale : container.width() * $scale;
        // 计算原始容器的基准fontSize
        var originFontSize = window.document.documentElement.getBoundingClientRect().width * $scale / 16;
        // // 计算当前容器的基准fontSize
        // let fontSize = containerRelativeVal / 16
        return containerRelativeVal * originVal / (window.document.documentElement.getBoundingClientRect().width * $scale) / originFontSize;
    };

    // 获取原始单位的相对容器大小（换算后）
    var proxyOptions = {};
    proxyOptions = copy(options, proxyOptions);
    proxyOptions.props.iconFontSize = px2rem(proxyOptions.props.iconFontSize * proxyOptions.iconScale);
    // 计算如果还未结束documentContentLoaded，是计算不出外层容器的尺寸的，因此给予默认容错处理
    proxyOptions.props.iconFontSize = proxyOptions.props.iconFontSize == 0 ? 'inherit' : proxyOptions.props.iconFontSize;
    proxyOptions.props.tipFontSize = px2rem(proxyOptions.props.tipFontSize * proxyOptions.fontScale);
    proxyOptions.props.tipFontSize = proxyOptions.props.tipFontSize == 0 ? 'inherit' : proxyOptions.props.tipFontSize;
    //proxyOptions.props.containerHeight = px2rem(proxyOptions.props.containerHeight)

    // 根据外层容器大小动态改变图标和字体大小
    $('<style>' + proxyOptions.container + ' .ui-notice > i:before{font-size: ' + proxyOptions.props.iconFontSize + 'rem</style>').appendTo('head');

    // 初始化容器
    init(container);

    // 开始构建组件
    var plugin = (0, _base.adaptObject)(this, defaults, proxyOptions, _blankPageTpl, BlankPage, "blankPage");

    // 摧毁事件
    plugin.destory = function () {
        plugin.remove();

        if (container.children()) container.children().show();

        container = null;
    };

    return plugin;
}

// 构造函数
var BlankPage = function BlankPage(el, option, isFromTpl) {
    this.option = $.extend({}, defaults, option);
    this.button = $(el).find('[data-role="button"]');
    // 当前_blankPageTpl对应的DOM
    this.element = $(el);

    this._bindEvent();
};

BlankPage.prototype = {
    _bindEvent: function _bindEvent() {
        var self = this;

        if (this.option.button) {
            self.button.on(this.option.type, function (ex) {
                var index = $(self.button).index($(this));
                // 使用AOP的思想注入事件
                var e = $.Event("blankPage:action");
                e.index = index;
                self.element.trigger(e);
                ex.stopPropagation();
            });
        } else {
            // 彻底清除按钮的所在层
            self.button.remove();
        }
    }
};

exports.blankPage = Plugin;

/***/ })

},[202]);
});