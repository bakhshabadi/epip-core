import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  getHello(): string {
    return 'Hello World!...';
  }
}
