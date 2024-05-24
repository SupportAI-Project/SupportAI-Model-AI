import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let word: string = 'hee'
    return 'Hello World!' + word;
  }
}
