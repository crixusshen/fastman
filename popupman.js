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
return webpackJsonpfastman([20],{

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal2 = __webpack_require__(11);

exports.default = function (modal, removeOnClose) {
    if (typeof removeOnClose === 'undefined') removeOnClose = true;
    if (typeof modal === 'string' && modal.indexOf('<') >= 0) {
        var _modal = document.createElement('div');
        _modal.innerHTML = modal.trim();
        if (_modal.childNodes.length > 0) {
            modal = _modal.childNodes[0];
            if (removeOnClose) modal.classList.add('remove-on-close');
            $(_modal2.defaults.modalContainer).append(modal);
        } else return false; //nothing found
    }
    modal = $(modal);
    if (modal.length === 0) return false;
    modal.show();
    modal.find(".content").scroller("refresh");
    if (modal.find('.' + _modal2.defaults.viewClass).length > 0) {
        $.sizeNavbars(modal.find('.' + _modal2.defaults.viewClass)[0]);
    }
    (0, _modal2.openModal)(modal);

    return modal[0];
}; /**
    * Created by linyiqing on 2017/3/27.
    */

/***/ })

},[209]);
});