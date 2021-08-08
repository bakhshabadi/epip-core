import { Repository } from "typeorm";

export class BaseService<T>{
    constructor(
      private repo: Repository<T>
    ){}
  
    async findAll(): Promise<T[]> {
      return await this.repo.find();
    }
  }