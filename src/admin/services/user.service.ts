import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/@core/services/base.service';
import { Connection, Repository } from 'typeorm';
import { Users } from '../models/users.model';

@Injectable()
export class UserService extends BaseService<Users>{
  constructor(
    @Inject('USER_REPOSITORY')
    repo:Repository<Users>
  ){
      super(repo)
  }
}

export const UserProviders = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Users),
      inject: ['DATABASE_CONNECTION'],
    },
  ];