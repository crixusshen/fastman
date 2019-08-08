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
return webpackJsonpfastman([26],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _picker = __webpack_require__(30);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取数据结构的级联层级
 * @param data 数据结构
 * @returns {number}
 */
var getCascadeLayer = function getCascadeLayer(data) {
    var layer = 0;
    // 第一层
    for (var i = 0; i < data.length; i++) {
        if (layer === 0) {
            layer = 1;
        }

        var ds = data[i].sub;
        if (ds) {
            // 第二层
            for (var j = 0; j < ds.length; j++) {
                if (layer === 1) {
                    layer = 2;
                }

                var dss = ds[j].sub;
                if (dss) {
                    // 第三层
                    for (var k = 0; k < dss.length; k++) {
                        return 3;
                    }
                }
            }
        }
    }
    return layer;
}; /**
    * 级联选择器
    * Created by dfzq on 2018/5/30.
    */

exports.default = function (seletor, params) {
    var $this = $(seletor);
    // 检查选择器是否存在
    if (!$this.length) {
        return;
    }
    // 如果没有数据则不进行组件渲染
    if (!params.data) {
        return;
    }

    // 数据源
    var raw = params.data;

    /**
     * 数据块解析函数
     * @param data  数据中的sub块
     * @param name  待解析的数据字段名
     * @returns {*}
     */
    var format = function format(data, name) {
        var result = [];
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            result.push(d[name]);
        }
        if (result.length) return result;
        return [""];
    };

    /**
     * 获取数据中的sub数据块进行解析
     * @param data  数据
     * @param name  数据字段名
     * @returns {[string]}
     */
    var sub = function sub(data, name) {
        if (!data.sub) return [""];
        return format(data.sub, name);
    };

    /**
     * 获取二级数据块
     * @param d 一级数据
     * @param name 数据字段名
     * @returns {*}
     */
    var getCities = function getCities(d, name) {
        for (var i = 0; i < raw.length; i++) {
            if (raw[i].value === d) return sub(raw[i], name);
        }
        return [""];
    };

    /**
     * 获取三级数据块
     * @param p 一级数据
     * @param c 二级数据
     * @param name 数据字段名
     * @returns {*}
     */
    var getDistricts = function getDistricts(p, c, name) {
        for (var i = 0; i < raw.length; i++) {
            if (raw[i].value === p) {
                for (var j = 0; j < raw[i].sub.length; j++) {
                    if (raw[i].sub[j].value === c) {
                        return sub(raw[i].sub[j], name);
                    }
                }
            }
        }
        return [""];
    };

    // 检查数据源有几层（共3层，空数组为0层）
    var cascadeLayer = getCascadeLayer(raw);
    if (cascadeLayer === 0) {
        return;
    }

    // 一级元素显示名列表
    var provinces = [''];
    if (cascadeLayer > 0) {
        provinces = raw.map(function (d) {
            return d.name;
        });
    }

    // 一级元素显示值列表
    // 对value值进行追加，以保证防重名的处理
    var provincesValue = [''];
    if (cascadeLayer > 0) {
        provincesValue = raw.map(function (d, i) {
            return d.value;
        });
    }

    // 初始化二级元素显示名列表
    var initCities = [''];
    if (cascadeLayer > 1) {
        initCities = sub(raw[0], 'name');
    }

    // 初始化二级元素显示值列表
    var initCitiesValue = [''];
    if (cascadeLayer > 1) {
        initCitiesValue = sub(raw[0], 'value');
    }

    // 初始化三级元素显示名列表
    var initDistricts = [""];
    // 初始化三级元素显示值列表
    var initDistrictsValue = [""];
    if (cascadeLayer > 2) {
        if (!raw[0].sub) {
            initDistricts = [""];
            initDistrictsValue = [""];
        } else {
            initDistricts = sub(raw[0].sub[0], 'name');
            initDistrictsValue = sub(raw[0].sub[0], 'value');
        }
    }

    var currentProvince = provincesValue[0];
    var currentCity = initCitiesValue[0];
    var currentDistrict = initDistrictsValue[0];

    // 默认配置
    var t;
    var defaults = {

        cssClass: "city-picker",
        rotateEffect: false, //为了性能

        onChange: function onChange(picker, values, displayValues) {
            var newProvince = picker.cols[0].value;
            var newCity;
            if (newProvince !== currentProvince) {
                // 如果Province变化，节流以提高reRender性能
                clearTimeout(t);

                t = setTimeout(function () {
                    if (cascadeLayer > 1) {
                        var newCities = getCities(newProvince, 'name');
                        var newCitiesValue = getCities(newProvince, 'value');
                        newCity = newCitiesValue[0];
                        picker.cols[1].replaceValues(newCitiesValue, newCities);
                        currentCity = newCity;
                    }

                    if (cascadeLayer > 2) {
                        var newDistricts = getDistricts(newProvince, newCity, 'name');
                        var newDistrictsValue = getDistricts(newProvince, newCity, 'value');
                        picker.cols[2].replaceValues(newDistrictsValue, newDistricts);
                    }
                    currentProvince = newProvince;
                    picker.updateValue();
                }, 200);
                return;
            }

            if (cascadeLayer === 3) {
                newCity = picker.cols[1].value;
                if (newCity !== currentCity) {
                    picker.cols[2].replaceValues(getDistricts(newProvince, newCity, 'value'), getDistricts(newProvince, newCity, 'name'));
                    currentCity = newCity;
                    picker.updateValue();
                }
            }
        },

        cols: []
    };
    if (cascadeLayer === 1) {
        defaults.cols.push({
            textAlign: 'center',
            displayValues: provinces,
            values: provincesValue,
            cssClass: "col-province"
        });
    } else if (cascadeLayer === 2) {
        defaults.cols.push({
            textAlign: 'center',
            displayValues: provinces,
            values: provincesValue,
            cssClass: "col-province"
        });
        defaults.cols.push({
            textAlign: 'center',
            displayValues: initCities,
            values: initCitiesValue,
            cssClass: "col-city"
        });
    } else if (cascadeLayer === 3) {
        defaults.cols.push({
            textAlign: 'center',
            displayValues: provinces,
            values: provincesValue,
            cssClass: "col-province"
        });
        defaults.cols.push({
            textAlign: 'center',
            displayValues: initCities,
            values: initCitiesValue,
            cssClass: "col-city"
        });
        defaults.cols.push({
            textAlign: 'center',
            displayValues: initDistricts,
            values: initDistrictsValue,
            cssClass: "col-district"
        });
    }

    return $this.each(function () {
        // 继承默认配置参数
        var p = $.extend(defaults, params);

        //计算value
        if (p.value) {
            $(this).val(p.value.join(' '));
        } else {
            var val = $(this).val();
            val && (p.value = val.split(' '));
        }

        if (p.value) {
            //p.value = val.split(" ");
            if (p.value[0]) {
                currentProvince = p.value[0];
                p.cols[1].values = getCities(p.value[0]);
            }
            if (p.value[1]) {
                currentCity = p.value[1];
                p.cols[2].values = getDistricts(p.value[0], p.value[1]);
            } else {
                p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
            }
            !p.value[2] && (p.value[2] = '');
            currentDistrict = p.value[2];
        }
        (0, _picker2.default)(seletor, p);
    });
};

/***/ })

},[203]);
});