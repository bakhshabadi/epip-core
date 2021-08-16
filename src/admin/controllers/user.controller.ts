import { IResponse } from "src/@core/types/IRes.interface";
import { ApiGetAll } from "src/@core/decorators/swg-get-all.decorator";
import { BaseController } from "src/@core/controllers/base.controller";
import { ApiController } from "src/@core/decorators/swg-ctrl.decorator";

import { Users } from "../models/users.model";
import { UserService } from "../services/user.service";

@ApiController(Users)
export class UserController extends BaseController<Users>{
  constructor(private readonly service: UserService) {
    super();
  }

  @ApiGetAll(Users)
  public async getAll(): Promise<IResponse<Users>> {
    return await this.service.getAll();
  }
}
