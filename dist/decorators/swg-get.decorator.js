"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDelete = exports.ApiPut = exports.ApiPost = exports.ApiGet = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var ApiGet = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || '/'), (0, swagger_1.ApiOkResponse)({
        type: model
    }));
};
exports.ApiGet = ApiGet;
var ApiPost = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || '/'), (0, swagger_1.ApiOkResponse)({
        type: model
    }));
};
exports.ApiPost = ApiPost;
var ApiPut = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || '/'), (0, swagger_1.ApiOkResponse)({
        type: model
    }));
};
exports.ApiPut = ApiPut;
var ApiDelete = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || '/'), (0, swagger_1.ApiOkResponse)({
        type: model
    }));
};
exports.ApiDelete = ApiDelete;
//# sourceMappingURL=swg-get.decorator.js.map