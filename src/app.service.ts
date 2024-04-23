import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World ! First deploy ! I wish i was rich so i did not have to work';
  }
}
