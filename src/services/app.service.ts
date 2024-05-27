import { Injectable } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { OpenAiDTO } from "../dto/openai.dto";

@Injectable()
export class AppService {
  constructor(private openaiService: OpenAIService) {}
  
  async getGuide(openAIDto: OpenAiDTO): Promise<string> {
    const result = await this.openaiService.getGuide(openAIDto);
    return 'Hello World!' + result;
  }
}
