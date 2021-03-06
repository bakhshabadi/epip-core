"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IResponse = exports.IResponseAll = void 0;
var swagger_1 = require("@nestjs/swagger");
var IResponseAll = (function () {
    function IResponseAll() {
        this.status = 0;
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], IResponseAll.prototype, "status", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], IResponseAll.prototype, "message", void 0);
    return IResponseAll;
}());
exports.IResponseAll = IResponseAll;
var IResponse = (function () {
    function IResponse() {
        this.status = 0;
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", Number)
    ], IResponse.prototype, "status", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        __metadata("design:type", String)
    ], IResponse.prototype, "message", void 0);
    return IResponse;
}());
exports.IResponse = IResponse;
//# sourceMappingURL=res.interface.js.map