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
return webpackJsonpfastman([29],{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by linyiqing on 2017/3/21.
                                                                                                                                                                                                                                                                               */


var _modal = __webpack_require__(11);

exports.default = function (_text, title, callbackOk, allowClose) {
    // 表达式声明
    if (typeof title === 'function') {
        callbackOk = title;
        title = undefined;
    }
    // 函数对象式声明
    else if ((typeof _text === 'undefined' ? 'undefined' : _typeof(_text)) === 'object') {
            var _text$text = _text.text,
                text = _text$text === undefined ? '' : _text$text,
                _text$title = _text.title,
                _title = _text$title === undefined ? _modal.defaults.modalTitle : _text$title,
                _text$allowClose = _text.allowClose,
                _allowClose = _text$allowClose === undefined ? false : _text$allowClose,
                onClick = _text.onClick;

            return (0, _modal.modal)({
                text: text,
                title: _title,
                buttons: [{ text: _modal.defaults.modalButtonOk, bold: true, onClick: onClick }],
                isClose: _allowClose,
                extraClass: 'remove-on-close'
            });
        }

    return (0, _modal.modal)({
        text: _text || '',
        title: typeof title === 'undefined' ? _modal.defaults.modalTitle : title,
        buttons: [{ text: _modal.defaults.modalButtonOk, bold: true, onClick: callbackOk }],
        isClose: allowClose || false,
        extraClass: 'remove-on-close'
    });
};

/***/ })

},[200]);
});