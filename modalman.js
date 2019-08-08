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
return webpackJsonpfastman([22],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by linyiqing on 2017/3/16.
 */
var _modalTemplateTempDiv = document.createElement('div');

$.modalStack = [];

$.modalStackClearQueue = function () {
    if ($.modalStack.length) {
        $.modalStack.shift()();
    }
};
var modal = function modal(params) {
    params = params || {};
    var modalHTML = '';
    var buttonsHTML = '';
    if (params.buttons && params.buttons.length > 0) {
        for (var i = 0; i < params.buttons.length; i++) {
            buttonsHTML += '<span class="modal-button' + (params.buttons[i].bold ? ' modal-button-bold' : '') + '">' + params.buttons[i].text + '</span>';
        }
    }
    var extraClass = params.extraClass || '';
    var titleHTML = params.title ? '<div class="modal-title">' + params.title + '</div>' : '';
    var textHTML = params.text ? '<div class="modal-text">' + params.text + '</div>' : '';
    var afterTextHTML = params.afterText ? params.afterText : '';
    var noButtons = !params.buttons || params.buttons.length === 0 ? 'modal-no-buttons' : '';
    var verticalButtons = params.verticalButtons ? 'modal-buttons-vertical' : '';
    var isClose = !!params.isClose; //支持弹框是否可以关闭，目前主要用于alert
    modalHTML = '<div class="modal ' + extraClass + ' ' + noButtons + '">' + (isClose ? '<i class="modal-close">+</i>' : '') + '<div class="modal-inner">' + (titleHTML + textHTML + afterTextHTML) + '</div><div class="modal-buttons ' + verticalButtons + '">' + buttonsHTML + '</div></div>';

    _modalTemplateTempDiv.innerHTML = modalHTML;

    var modal = $(_modalTemplateTempDiv).children();

    $(defaults.modalContainer).append(modal[0]);

    // Add events on buttons
    modal.find('.modal-button').each(function (index, el) {
        $(el).on('click', function (e) {
            if (params.buttons[index].close !== false) closeModal(modal);
            if (params.buttons[index].onClick) params.buttons[index].onClick(modal, e);
            if (params.onClick) params.onClick(modal, index);
        });
    });
    // close button
    modal.find('.modal-close').on('click', function (e) {
        closeModal(modal);
    });
    openModal(modal);
    return modal[0];
};
var openModal = function openModal(modal, cb) {
    modal = $(modal);
    var isModal = modal.hasClass('modal'),
        isNotToast = !modal.hasClass('toast');
    if ($('.modal.modal-in:not(.modal-out)').length && defaults.modalStack && isModal && isNotToast) {
        $.modalStack.push(function () {
            openModal(modal, cb);
        });
        return;
    }
    var isPopup = modal.hasClass('popup-modal');
    var isLoginScreen = modal.hasClass('login-screen');
    var isPickerModal = modal.hasClass('picker-modal');
    var isToast = modal.hasClass('toast');
    var isTipModal = modal.hasClass('tip-modal');
    var isActionsModal = modal.hasClass('actions-modal');
    if (isModal) {
        modal.show();
        modal.css({
            marginTop: -Math.round(modal.outerHeight() / 2) + 'px'
        });
    }
    if (isToast) {
        modal.css({
            marginLeft: -Math.round(modal.outerWidth() / 2 / 1.185) + 'px' //1.185 是初始化时候的放大效果
        });
    }
    if (isPopup) {
        modal.show();
        modal.find(".content").scroller("refresh");
        if (modal.find('.' + defaults.viewClass).length > 0) {
            $.sizeNavbars(modal.find('.' + defaults.viewClass)[0]);
        }
    }
    if (isTipModal || isActionsModal) {
        modal.show();
    }

    var overlay;
    if (!isLoginScreen && !isPickerModal && !isToast && !isTipModal) {
        if ($('.modal-overlay').length === 0 && !isPopup) {
            $(defaults.modalContainer).append('<div class="modal-overlay"></div>');
        }
        if ($('.popup-overlay').length === 0 && isPopup) {
            $(defaults.modalContainer).append('<div class="popup-overlay"></div>');
        }
        overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
    }

    //Make sure that styles are applied, trigger relayout;
    var clientLeft = modal[0].clientLeft;

    // Trugger open event
    modal.trigger('open');

    // Picker modal body class
    if (isPickerModal) {
        $(defaults.modalContainer).addClass('with-picker-modal');
    }

    // Classes for transition in
    if (!isLoginScreen && !isPickerModal && !isToast && !isTipModal) overlay.addClass('modal-overlay-visible');
    modal.removeClass('modal-out').addClass('modal-in').transitionEnd(function (e) {
        if (modal.hasClass('modal-out')) modal.trigger('closed');else modal.trigger('opened');
    });
    // excute callback
    if (typeof cb === 'function') {
        cb.call(this);
    }
    return true;
};
var closeModal = function closeModal(modal, cb) {
    modal = $(modal || '.modal-in');
    if (typeof modal !== 'undefined' && modal.length === 0) {
        return;
    }
    var isModal = modal.hasClass('modal'),
        isPopup = modal.hasClass('popup-modal'),
        isToast = modal.hasClass('toast'),
        isLoginScreen = modal.hasClass('login-screen'),
        isPickerModal = modal.hasClass('picker-modal'),
        isTipModal = modal.hasClass('tip-modal'),
        isActionsModal = modal.hasClass('actions-modal'),
        removeOnClose = modal.hasClass('remove-on-close'),

    // removeOnClose = true,
    overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
    if (isPopup) {
        if (modal.length === $('.popup-modal.modal-in').length) {
            overlay.removeClass('modal-overlay-visible');
        }
    } else if (!(isPickerModal || isToast)) {
        overlay.removeClass('modal-overlay-visible');
    }

    modal.trigger('close');

    // Picker modal body class
    if (isPickerModal) {
        $(defaults.modalContainer).removeClass('with-picker-modal');
        $(defaults.modalContainer).addClass('picker-modal-closing');
    }

    modal.removeClass('modal-in').addClass('modal-out').transitionEnd(function (e) {
        if (modal.hasClass('modal-out')) modal.trigger('closed');else modal.trigger('opened');

        if (isPickerModal) {
            $(defaults.modalContainer).removeClass('picker-modal-closing');
        }

        // 在modal-dom移除前执行callback函数
        if (typeof cb === 'function') {
            cb.call(this);
        }

        if (isPopup || isLoginScreen || isPickerModal || isModal || isTipModal || isActionsModal) {
            modal.removeClass('modal-out').hide();
            if (removeOnClose && modal.length > 0) {
                modal.remove();
            }
        } else {
            modal.remove();
        }
    });
    if (isModal && defaults.modalStack) {
        $.modalStackClearQueue();
    }

    return true;
};
function handleClicks(e) {
    /*jshint validthis:true */
    var clicked = $(this);
    var url = clicked.attr('href');

    //Collect Clicked data- attributes
    var clickedData = clicked.dataset();

    // Popup
    /*var popup;
    if (clicked.hasClass('open-popup')) {
        if (clickedData.popup) {
            popup = clickedData.popup;
        }
        else popup = '.popup';
        $.popup(popup);
    }
    if (clicked.hasClass('close-popup')) {
        if (clickedData.popup) {
            popup = clickedData.popup;
        }
        else popup = '.popup.modal-in';
        $.closeModal(popup);
    }*/

    // Close Modal
    if (clicked.hasClass('modal-overlay')) {
        if ($('.modal.modal-in').length > 0 && defaults.modalCloseByOutside) closeModal('.modal.modal-in');
        if ($('.actions-modal.modal-in').length > 0 && defaults.actionsCloseByOutside) closeModal('.actions-modal.modal-in');
    }
    if (clicked.hasClass('popup-overlay')) {
        if ($('.popup-modal.modal-in').length > 0 && defaults.popupCloseByOutside) closeModal('.popup-modal.modal-in');
    }
}
$(document).on('click', ' .modal-overlay, .popup-overlay, .close-popup, .open-popup, .close-picker', handleClicks);
var defaults = modal.prototype.defaults = {
    modalStack: true,
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    modalPreloaderTitle: '加载中',
    modalContainer: document.body ? document.body : 'body',
    modalTitle: '',
    actionsCloseByOutside: true
};

exports.defaults = defaults;
exports.modal = modal;
exports.openModal = openModal;
exports.closeModal = closeModal;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })

},[207]);
});