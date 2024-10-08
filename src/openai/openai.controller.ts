import { Controller, Post, Body, Get } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { apiRequestDTO } from './dto/apiRequest.dto';
import { GuideResponseDTO } from './dto/guideResponse.dto';

@Controller('openai')
export class OpenAIController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Post('generate-guide')
  async generateGuide(@Body() chat: apiRequestDTO): Promise<GuideResponseDTO> {
    const guide = await this.openaiService.generateGuide(chat);
    console.log('Guide: ', guide);
    return guide;
  }
}
