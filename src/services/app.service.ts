import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/services/openai.service';

@Injectable()
export class AppService {
  constructor(private openaiService: OpenAIService) {}
  
}
