"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const await_to_js_1 = require("await-to-js");
const typeorm_1 = require("typeorm");
class BaseService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        const [err, results] = await (0, await_to_js_1.to)(this.repo.find({
            where: {
                deletedAt: (0, typeorm_1.IsNull)()
            }
        }));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        return {
            status: 200,
            message: "ok",
            results,
        };
    }
    async get(id) {
        const [err, result] = await (0, await_to_js_1.to)(this.repo.findOne({
            where: {
                id,
                deletedAt: (0, typeorm_1.IsNull)()
            },
        }));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        return {
            status: 200,
            message: "ok",
            result,
        };
    }
    async post(entity) {
        entity.insertedAt = new Date();
        const [err, result] = await (0, await_to_js_1.to)(this.repo.save(entity));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        return {
            status: 201,
            message: "ok",
            result,
        };
    }
    async put(id, entity) {
        entity.insertedAt = new Date();
        let [err, results] = await (0, await_to_js_1.to)(this.get(id));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        let data;
        if (results?.result) {
            data = results?.result;
            for (const key in entity) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element = entity[key];
                    data[key] = entity[key];
                }
            }
        }
        else {
            return {
                status: 404,
                message: "not found record",
            };
        }
        let res;
        data.updatedAt = new Date();
        [err, res] = await (0, await_to_js_1.to)(this.repo.update(id, data));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        if (res?.affected) {
            return {
                status: 200,
                message: "ok",
            };
        }
        else {
            return {
                status: 500,
                message: 'error !.',
            };
        }
    }
    async patch(id, entity) {
        let [err, results] = await (0, await_to_js_1.to)(this.get(id));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        let data;
        if (results?.result) {
            data = results?.result;
            for (const key in entity) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element = entity[key];
                    data[key] = entity[key];
                }
            }
        }
        else {
            return {
                status: 404,
                message: "not found record",
            };
        }
        let res;
        data.updatedAt = new Date();
        [err, res] = await (0, await_to_js_1.to)(this.repo.update(id, data));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        if (res?.affected) {
            return {
                status: 200,
                message: "ok",
            };
        }
        else {
            return {
                status: 500,
                message: 'error !.',
            };
        }
    }
    async delete(id) {
        let [err, results] = await (0, await_to_js_1.to)(this.get(id));
        if (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
        let data;
        if (results?.result) {
            data = results?.result;
            data.deletedAt = new Date();
            let [errDelete, resultsDelete] = await (0, await_to_js_1.to)(this.repo.update(id, data));
            if (errDelete) {
                return {
                    status: 500,
                    message: "not found record",
                };
            }
            else {
                return {
                    status: 200,
                    message: "ok",
                };
            }
        }
        else {
            return {
                status: 404,
                message: "not found record",
            };
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map