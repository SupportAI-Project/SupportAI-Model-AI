import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { OpenAiDTO } from "../dto/openai.dto";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getGuide(openAIDto: OpenAiDTO): Promise<string> {
    return await this.appService.getGuide(openAIDto);
  }
}
