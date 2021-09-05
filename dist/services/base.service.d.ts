import { Repository } from "typeorm";
import { IResponse, IResponseAll } from "../types";
export declare class BaseService<T> {
    private repo;
    constructor(repo: Repository<T>);
    getAll(): Promise<IResponseAll<T>>;
    get(id: number): Promise<IResponse<T>>;
    post(entity: T): Promise<IResponse<T>>;
    put(id: number, entity: T): Promise<IResponse<T>>;
    patch(id: number, entity: T): Promise<IResponse<T>>;
    delete(id: number): Promise<IResponse<T>>;
}
//# sourceMappingURL=base.service.d.ts.map