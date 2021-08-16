import { Repository } from 'typeorm';

export class BaseService<T> {
  constructor(private repo:Repository<T>){}
  getAll(): Promise<T[]> {
    return this.repo.find({});
  }
}
