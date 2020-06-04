"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationService = void 0;
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-16 08:49:38
 * @Description: mutation声明注解，用来约束函数的声明结构和参数、返回值类型
 */
var coreman_1 = require("fastman/coreman");
var MutationService = /** @class */ (function () {
    function MutationService() {
    }
    MutationService.prototype.select = function () {
        return coreman_1.ActionService.AllMutationActions;
    };
    return MutationService;
}());
exports.MutationService = MutationService;
