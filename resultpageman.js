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
return webpackJsonpfastman([11],{

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tag, data) {
  var canConcat, oldCanConcat;

  children = [];
  i = arguments.length;

  while (i-- > 2) {
    stack.push(arguments[i]);
  }

  while (stack.length) {
    if (Array.isArray(node = stack.pop())) {
      i = node.length;

      while (i--) {
        stack.push(node[i]);
      }
    } else if (node != null && node !== true && node !== false) {
      // Ignore nulls and booleans; this is conditional rendering.

      if (typeof node === "number") {
        node = node + "";
      }

      // Concatenate contiguous number/string nodes into one string.
      // The idea is to avoid creating unnecessary text nodes.

      canConcat = typeof node === "string";

      if (canConcat && oldCanConcat) {
        children[children.length - 1] += node;
      } else {
        children.push(node);
        oldCanConcat = canConcat;
      }
    }
  }

  if (typeof tag === "function") {
    var _class = new tag(data, children);
    if (_class['render']) {
      return new tag(data, children).render();
    } else {
      throw new Error("view class must define render function.");
    }
  }

  return {
    tag: tag,
    data: data || {},
    children: children
  };
};

var i,
    node,
    children,
    stack = [];

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResultPage = undefined;

var _h = __webpack_require__(32);

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultPage = function ResultPage(_ref) {
    var _ref$text = _ref.text,
        text = _ref$text === undefined ? '暂无信息' : _ref$text,
        subtext = _ref.subtext,
        imgurl = _ref.imgurl,
        buttons = _ref.buttons;

    // 是否buttons是数组且有成员
    var isArrayOrMembers = Object.prototype.toString.call(buttons) == '[object Array]' && buttons.length > 0;
    return (0, _h2.default)(
        'div',
        { 'class': 'ui-result-page' },
        !!imgurl ? (0, _h2.default)('img', { src: imgurl, 'class': 'ui-result-page-img' }) : undefined,
        (0, _h2.default)(
            'div',
            { 'class': 'text' },
            text
        ),
        !!subtext ? (0, _h2.default)(
            'div',
            { 'class': 'subtext' },
            subtext
        ) : undefined,
        isArrayOrMembers ? (0, _h2.default)(
            'div',
            { 'class': 'ui-btn-wrap' },
            buttons.map(function (item, index) {
                return (0, _h2.default)(
                    'button',
                    { 'class': item.type ? "ui-btn " + item.type : "ui-btn", onclick: item.handler },
                    item.text || '确定'
                );
            })
        ) : undefined
    );
}; /**
    * Created by dfzq on 2018/5/16.
    */
exports.ResultPage = ResultPage;

/***/ })

},[198]);
});