"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
var await_to_js_1 = require("await-to-js");
var BaseService = (function () {
    function BaseService(repo) {
        this.repo = repo;
    }
    BaseService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, (0, await_to_js_1.to)(this.repo.find({}))];
                    case 1:
                        _a = _b.sent(), err = _a[0], results = _a[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        return [2, {
                                status: 200,
                                message: "ok",
                                results: results,
                            }];
                }
            });
        });
    };
    BaseService.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, (0, await_to_js_1.to)(this.repo.findOne({
                            where: {
                                id: id,
                            },
                        }))];
                    case 1:
                        _a = _b.sent(), err = _a[0], results = _a[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        return [2, {
                                status: 200,
                                message: "ok",
                                results: results,
                            }];
                }
            });
        });
    };
    BaseService.prototype.post = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, (0, await_to_js_1.to)(this.repo.save(entity))];
                    case 1:
                        _a = _b.sent(), err = _a[0], results = _a[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        return [2, {
                                status: 200,
                                message: "ok",
                                results: results,
                            }];
                }
            });
        });
    };
    BaseService.prototype.put = function (id, entity) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, results, data, key, element, res;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, (0, await_to_js_1.to)(this.get(id))];
                    case 1:
                        _a = _c.sent(), err = _a[0], results = _a[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        if (results === null || results === void 0 ? void 0 : results.results) {
                            data = results === null || results === void 0 ? void 0 : results.results;
                            for (key in entity) {
                                if (Object.prototype.hasOwnProperty.call(data, key)) {
                                    element = entity[key];
                                    data[key] = entity[key];
                                }
                            }
                        }
                        else {
                            return [2, {
                                    status: 404,
                                    message: "not found record",
                                }];
                        }
                        return [4, (0, await_to_js_1.to)(this.repo.save(data))];
                    case 2:
                        _b = _c.sent(), err = _b[0], res = _b[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        return [2, {
                                status: 200,
                                message: "ok",
                                results: res,
                            }];
                }
            });
        });
    };
    BaseService.prototype.patch = function (id, entity) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, results, data, key, element, res;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, (0, await_to_js_1.to)(this.get(id))];
                    case 1:
                        _a = _c.sent(), err = _a[0], results = _a[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        if (results === null || results === void 0 ? void 0 : results.results) {
                            data = results === null || results === void 0 ? void 0 : results.results;
                            for (key in entity) {
                                if (Object.prototype.hasOwnProperty.call(data, key)) {
                                    element = entity[key];
                                    data[key] = entity[key];
                                }
                            }
                        }
                        else {
                            return [2, {
                                    status: 404,
                                    message: "not found record",
                                }];
                        }
                        return [4, (0, await_to_js_1.to)(this.repo.save(data))];
                    case 2:
                        _b = _c.sent(), err = _b[0], res = _b[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        return [2, {
                                status: 200,
                                message: "ok",
                                results: res,
                            }];
                }
            });
        });
    };
    BaseService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, results, data, _b, errDelete, resultsDelete;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, (0, await_to_js_1.to)(this.get(id))];
                    case 1:
                        _a = _c.sent(), err = _a[0], results = _a[1];
                        if (err) {
                            return [2, {
                                    status: 500,
                                    message: err.message,
                                }];
                        }
                        if (!(results === null || results === void 0 ? void 0 : results.results)) return [3, 3];
                        data = results === null || results === void 0 ? void 0 : results.results;
                        return [4, (0, await_to_js_1.to)(this.repo.softDelete(data))];
                    case 2:
                        _b = _c.sent(), errDelete = _b[0], resultsDelete = _b[1];
                        if (errDelete) {
                            return [2, {
                                    status: 500,
                                    message: "not found record",
                                }];
                        }
                        else {
                            return [2, {
                                    status: 200,
                                    message: "ok",
                                    results: resultsDelete
                                }];
                        }
                        return [3, 4];
                    case 3: return [2, {
                            status: 404,
                            message: "not found record",
                        }];
                    case 4: return [2];
                }
            });
        });
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map