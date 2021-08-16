import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { IResponse } from "../types/IRes.interface";

@ApiExtraModels(IResponse)
export class BaseController<T> {
  constructor() {}

//   @Get("/")
//   @ApiGetAllResponse('User')
//   public async getAll(): Promise<IResponse<T>> {
//     return { 
//       status:0,
//       message: process.env.DB_PORT,
//       results: await this.service.getAll(), 
//     };
//   }
}
