import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/@core/services/base.service';
import { Connection, Repository } from 'typeorm';
import { User } from '../models/users.model';

@Injectable()
export class UserService extends BaseService<User>{
  constructor(
    @Inject('USER_REPOSITORY')
    repo:Repository<User>
  ){
      super(repo)
  }
}

export const UserProviders = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: ['DATABASE_CONNECTION'],
    },
  ];