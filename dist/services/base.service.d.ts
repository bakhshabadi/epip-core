import { Repository } from 'typeorm';
import { IResponse } from '../types';
export declare class BaseService<T> {
    private repo;
    constructor(repo: Repository<T>);
    getAll(): Promise<IResponse<T>>;
}
//# sourceMappingURL=base.service.d.ts.map