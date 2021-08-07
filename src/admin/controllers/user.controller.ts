import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/@core/controllers/base.controller';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController extends BaseController{
  constructor(private readonly appService: UserService) {
    super(appService)
  }
  
}
