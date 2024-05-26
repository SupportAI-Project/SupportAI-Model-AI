import { Injectable } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Injectable()
export class AppService {
  constructor(private openaiService: OpenAIService) {}
  async getHello(): Promise<string> {
    let word: string = 'hee'
    const result = await this.openaiService.getTroubleshootingSteps(word);
    return 'Hello World!' + word + result;
  }
}
