import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';

@Injectable()
export class AppService {
  constructor(private openaiService: OpenAIService) {}
  
}
