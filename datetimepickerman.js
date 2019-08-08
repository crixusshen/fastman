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
return webpackJsonpfastman([24],{

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _picker = __webpack_require__(30);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var today = new Date(); /**
                         * Created by linyiqing on 2017/6/26.
                         */


var getDays = function getDays(max) {
    var days = [];
    for (var i = 1; i <= (max || 31); i++) {
        days.push(i < 10 ? "0" + i : i);
    }
    return days;
};

var getDaysByMonthAndYear = function getDaysByMonthAndYear(month, year) {
    var int_d = new Date(year, parseInt(month) + 1 - 1, 1);
    var d = new Date(int_d - 1);
    return getDays(d.getDate());
};

var formatNumber = function formatNumber(n) {
    return n < 10 ? "0" + n : n;
};

var initMonthes = '01 02 03 04 05 06 07 08 09 10 11 12'.split(' ');

var initYears = function () {
    var arr = [];
    for (var i = 1950; i <= 2030; i++) {
        arr.push(i);
    }
    return arr;
}();

var defaults = {

    rotateEffect: false, //为了性能

    value: [today.getFullYear(), formatNumber(today.getMonth() + 1), formatNumber(today.getDate()), today.getHours(), formatNumber(today.getMinutes())],

    onChange: function onChange(picker, values, displayValues) {
        var days = getDaysByMonthAndYear(picker.cols[1].value, picker.cols[0].value);
        var currentValue = picker.cols[2].value;
        if (currentValue > days.length) currentValue = days.length;
        picker.cols[2].setValue(currentValue);
    },

    formatValue: function formatValue(p, values, displayValues) {
        return displayValues[0] + '-' + values[1] + '-' + values[2] + ' ' + values[3] + ':' + values[4];
    },

    cols: [
    // Years
    {
        values: initYears
    },
    // Months
    {
        values: initMonthes
    },
    // Days
    {
        values: getDays()
    },

    // Space divider
    {
        divider: true,
        content: '  '
    },
    // Hours
    {
        values: function () {
            var arr = [];
            for (var i = 0; i <= 23; i++) {
                arr.push(i);
            }
            return arr;
        }()
    },
    // Divider
    {
        divider: true,
        content: ':'
    },
    // Minutes
    {
        values: function () {
            var arr = [];
            for (var i = 0; i <= 59; i++) {
                arr.push(i < 10 ? '0' + i : i);
            }
            return arr;
        }()
    }]
};

var defaults_notime = {

    rotateEffect: false, //为了性能

    value: [today.getFullYear(), formatNumber(today.getMonth() + 1), formatNumber(today.getDate())],

    onChange: function onChange(picker, values, displayValues) {
        var days = getDaysByMonthAndYear(picker.cols[1].value, picker.cols[0].value);
        var currentValue = picker.cols[2].value;
        if (currentValue > days.length) currentValue = days.length;
        picker.cols[2].setValue(currentValue);
    },

    formatValue: function formatValue(p, values, displayValues) {
        return displayValues[0] + '-' + values[1] + '-' + values[2];
    },

    cols: [
    // Years
    {
        values: initYears
    },
    // Months
    {
        values: initMonthes
    },
    // Days
    {
        values: getDays()
    }]
};

//needTime是否需要时间（不定义默认带时间）

exports.default = function (id, params, needTime) {
    return $(id).each(function () {
        console.log($(this));
        if ($(this).length == 0) return;
        var p = $.extend(needTime === false ? defaults_notime : defaults, params);
        (0, _picker2.default)(id, p);
        if (params.value) $(this).val(p.formatValue(p, p.value, p.value));
    });
};

/***/ })

},[205]);
});