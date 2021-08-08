import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/@core/controllers/base.service';
import { Repository } from 'typeorm';
import { Photo } from './users.model';

@Injectable()
export class UserService extends BaseService<Photo>{
  constructor(
    @InjectRepository(Photo)
    repo: Repository<Photo>
  ){
    super(repo);
  }

 
}
