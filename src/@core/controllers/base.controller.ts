import { Get } from "@nestjs/common";
import { BaseService } from "../services/base.service";

export class BaseController {
  constructor(private readonly service: BaseService) {}

  @Get("/")
  public getHello(): any {
    return { data: this.service.getHello(), port: process.env.DB_PORT,qwe:123 };
  }
}
