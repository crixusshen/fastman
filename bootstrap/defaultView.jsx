"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-06 18:00:27
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-17 09:27:42
 * @Description: 默认视图
 */
var h = require("fastman/coreman").h;
var view_1 = require("../view");
var DefaultComponent = /** @class */ (function (_super) {
    __extends(DefaultComponent, _super);
    function DefaultComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultComponent.prototype.render = function () {
        return (<div class="page" id="component_default">
        Hello Fastman2.0.
      </div>);
    };
    return DefaultComponent;
}(view_1.View));
exports.default = DefaultComponent;
