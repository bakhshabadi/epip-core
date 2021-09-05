"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDelete = exports.ApiPatch = exports.ApiPut = exports.ApiPost = exports.ApiGet = exports.ApiGetAll = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var res_interface_1 = require("../types/res.interface");
var ApiGetAll = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(res_interface_1.IResponse) },
                {
                    properties: {
                        results: {
                            type: "array",
                            items: { $ref: (0, swagger_1.getSchemaPath)(model) },
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiGetAll = ApiGetAll;
var ApiGet = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiGet = ApiGet;
var ApiPost = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiPost = ApiPost;
var ApiPut = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiPut = ApiPut;
var ApiPatch = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiPatch = ApiPatch;
var ApiDelete = function (model, path) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiDelete = ApiDelete;
//# sourceMappingURL=swg-crud.decorator.js.map