import { DeepPartial, Repository } from "typeorm";
import { IResponse, IResponseAll } from "../types";
export declare class BaseService<T> {
    private repo;
    constructor(repo: Repository<T>);
    getAll(): Promise<IResponseAll<T>>;
    get(id: number): Promise<IResponse<T>>;
    post(entity: T): Promise<IResponse<T>>;
    put(id: number, entity: T): Promise<IResponse<T>>;
    patch(id: number, entity: DeepPartial<T>): Promise<IResponse<DeepPartial<T>>>;
    delete(id: number): Promise<IResponse<DeepPartial<T>>>;
}
//# sourceMappingURL=base.service.d.ts.map