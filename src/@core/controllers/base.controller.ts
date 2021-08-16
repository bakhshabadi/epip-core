import { Get } from "@nestjs/common";
import { BaseService } from "../services/base.service";

export class BaseController<T> {
  constructor(private readonly service: BaseService<T>) {}

  @Get("/")
  public async getAll(): Promise<any> {
    return { data: await this.service.getAll(), port: process.env.DB_PORT,qwe:123 };
  }
}
