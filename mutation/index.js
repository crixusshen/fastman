"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-16 08:49:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-01 22:15:41
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
