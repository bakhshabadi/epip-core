import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/@core/controllers/base.controller';
import { User } from '../models/users.model';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController extends BaseController<User>{
  constructor(private readonly appService: UserService) {
    super(appService)
  }
}
