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
return webpackJsonpfastman([30],{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(11);

var _modalTemplateTempDiv = document.createElement('div');

// 从下往上需要在Element上添加"actions-modal"样式
/**
 * Created by dfzq on 2017/3/21.
 */

exports.default = function (buttons) {
    var params = buttons;

    var modal, groupSelector, buttonSelector;
    params = params || [];

    if (params.length > 0 && !$.isArray(params[0])) {
        params = [params];
    }
    var modalHTML;
    var buttonsHTML = '';
    for (var i = 0; i < params.length; i++) {
        for (var j = 0; j < params[i].length; j++) {
            if (j === 0) buttonsHTML += '<div class="actions-modal-group">';
            var button = params[i][j];
            var buttonClass = button.label ? 'actions-modal-label' : 'actions-modal-button';
            if (button.bold) buttonClass += ' actions-modal-button-bold';
            if (button.color) buttonClass += ' color-' + button.color;
            if (button.bg) buttonClass += ' bg-' + button.bg;
            if (button.disabled) buttonClass += ' disabled';
            buttonsHTML += '<span class="' + buttonClass + '">' + button.text + '</span>';
            if (j === params[i].length - 1) buttonsHTML += '</div>';
        }
    }
    modalHTML = '<div class="actions-modal">' + buttonsHTML + '</div>';
    _modalTemplateTempDiv.innerHTML = modalHTML;
    modal = $(_modalTemplateTempDiv).children();
    $(_modal.defaults.modalContainer).append(modal[0]);
    groupSelector = '.actions-modal-group';
    buttonSelector = '.actions-modal-button';

    var groups = modal.find(groupSelector);
    groups.each(function (index, el) {
        var groupIndex = index;
        $(el).children().each(function (index, el) {
            var buttonIndex = index;
            var buttonParams = params[groupIndex][buttonIndex];
            var clickTarget;
            if ($(el).is(buttonSelector)) clickTarget = $(el);
            // if (toPopover && $(el).find(buttonSelector).length > 0) clickTarget = $(el).find(buttonSelector);

            if (clickTarget) {
                clickTarget.on('click', function (e) {
                    if (buttonParams.close !== false) (0, _modal.closeModal)(modal);
                    if (buttonParams.onClick) buttonParams.onClick(modal, e);
                });
            }
        });
    });
    (0, _modal.openModal)(modal);
    return modal[0];
};

/***/ })

},[199]);
});