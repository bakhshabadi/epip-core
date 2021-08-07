import { Get } from "@nestjs/common";
import { BaseService } from "../services/base.service";

export class BaseController {
  constructor(private readonly service: BaseService) {}

  @Get("/")
  public getHello(): string {
    return this.service.getHello()
  }
}
