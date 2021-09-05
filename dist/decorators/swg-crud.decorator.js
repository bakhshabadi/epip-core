"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDelete = exports.ApiPatch = exports.ApiPut = exports.ApiPost = exports.ApiGet = exports.ApiGetAll = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const res_interface_1 = require("../types/res.interface");
const ApiGetAll = (model, path) => {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/"), (0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(res_interface_1.IResponseAll) },
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
const ApiGet = (model, path) => {
    return (0, common_1.applyDecorators)((0, common_1.Get)(path || "/:id"), (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiGet = ApiGet;
const ApiPost = (model, path) => {
    return (0, common_1.applyDecorators)((0, common_1.Post)(path || "/"), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiPost = ApiPost;
const ApiPut = (model, path) => {
    return (0, common_1.applyDecorators)((0, common_1.Put)(path || "/:id"), (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiPut = ApiPut;
const ApiPatch = (model, path) => {
    return (0, common_1.applyDecorators)((0, common_1.Patch)(path || "/:id"), (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiPatch = ApiPatch;
const ApiDelete = (model, path) => {
    return (0, common_1.applyDecorators)((0, common_1.Delete)(path || "/:id"), (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }), (0, swagger_1.ApiOkResponse)({
        type: model,
    }));
};
exports.ApiDelete = ApiDelete;
//# sourceMappingURL=swg-crud.decorator.js.map