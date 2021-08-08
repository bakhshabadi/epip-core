import { Controller, Get } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { IPaginatedPhoto, Photo } from './users.model';

@Controller('users')
@ApiExtraModels(Photo)
export class UserController{
  constructor(
    private service: UserService
  ) {
    
  }

  @Get("/")
  @ApiOkResponse({
    type: IPaginatedPhoto,
    description: 'get All recoreds'
  })
  public async getAll(): Promise<Photo[]> {
    // var [lst,err] = await to(this.repo.find());
    return this.service.findAll();
  }

}
