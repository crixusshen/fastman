"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelService = void 0;
/*
 * @Author: shenzhiwei
 * @Date: 2019-08-08 13:14:12
 * @Description: model获取模型
 */
var coreman_1 = require("fastman/coreman");
var ModelService = /** @class */ (function () {
    function ModelService() {
    }
    ModelService.prototype.select = function () {
        return coreman_1.ModelCenterService.CurrentModel;
    };
    return ModelService;
}());
exports.ModelService = ModelService;
