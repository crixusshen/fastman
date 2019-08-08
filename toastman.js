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
return webpackJsonpfastman([17],{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeToast = exports.toast = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by linyiqing on 2017/3/21.
                                                                                                                                                                                                                                                                               */


var _modal = __webpack_require__(11);

var toast = function toast(_msg, _duration, _extraclass) {

    // 函数对象式声明
    if ((typeof _msg === 'undefined' ? 'undefined' : _typeof(_msg)) === 'object') {
        var _msg2 = _msg,
            _msg2$text = _msg2.text,
            text = _msg2$text === undefined ? '' : _msg2$text,
            _msg2$duration = _msg2.duration,
            duration = _msg2$duration === undefined ? 2000 : _msg2$duration,
            _msg2$extraclass = _msg2.extraclass,
            extraclass = _msg2$extraclass === undefined ? '' : _msg2$extraclass;

        _msg = text;
        _duration = duration;
        _extraclass = extraclass;
    }
    // 表达式声明
    else if (typeof _duration != 'number') {
            _extraclass = _duration;
            _duration = 2000;
        }

    var $toast = $('<div class="modal toast ' + (_extraclass || '') + '">' + _msg + '</div>').appendTo(document.body);
    (0, _modal.openModal)($toast, function () {
        setTimeout(function () {
            (0, _modal.closeModal)($toast);
        }, _duration || 2000);
    });
    return $toast;
};
var closeToast = function closeToast($toast) {
    (0, _modal.closeModal)($toast);
};
exports.toast = toast;
exports.closeToast = closeToast;

/***/ })

},[212]);
});