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
return webpackJsonpfastman([18],{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeTip = exports.tip = undefined;

var _base = __webpack_require__(29);

// 默认模板
var _tipsTpl = '<div class="ui-poptips ui-poptips-<%=type%>">' + '<div class="ui-poptips-cnt <%=extraclass%>">' + '<%=content%>' + '</div>' + '</div>';

// 默认参数
/**
 * Created by linyiqing on 2017/3/23.
 */
var defaults = {
    content: '',
    stayTime: 1000,
    type: 'info',
    extraclass: '', // 自定义样式
    callback: function callback() {}
    // 构造函数
};var Tips = function Tips(el, option, isFromTpl) {
    var self = this;
    this.element = $(el);
    this._isFromTpl = isFromTpl;
    this.elementHeight = $(el).height();

    this.option = $.extend(defaults, option);
    $(el).css({
        "-webkit-transform": "translateY(-" + this.elementHeight + "px)"
    });
    setTimeout(function () {
        $(el).css({
            "-webkit-transition": "all .5s"
        });
        self.show();
    }, 20);
};
Tips.prototype = {
    show: function show() {
        var self = this;
        // self.option.callback("show");
        self.element.trigger($.Event("tips:show"));
        this.element.css({
            "-webkit-transform": "translateY(0px)"
        });
        if (self.option.stayTime > 0) {
            setTimeout(function () {
                self.hide();
            }, self.option.stayTime);
        }
    },
    hide: function hide() {
        var self = this;
        self.element.trigger($.Event("tips:hide"));
        this.element.css({
            "-webkit-transform": "translateY(-" + this.elementHeight + "px)"
        });
        setTimeout(function () {
            self._isFromTpl && self.element.remove();
        }, 500);
    }
};
var tip = function tip(option) {
    defaults.extraclass = '';
    return (0, _base.adaptObject)(undefined, defaults, option, _tipsTpl, Tips, "tips");
};
var closeTip = function closeTip(tip) {
    var $tip = $(tip);
    $tip.css({
        "-webkit-transform": "translateY(-" + $tip.height() + "px)"
    });
    setTimeout(function () {
        $tip.length && $tip.remove();
    }, 500);
};

exports.tip = tip;
exports.closeTip = closeTip;

/***/ })

},[211]);
});