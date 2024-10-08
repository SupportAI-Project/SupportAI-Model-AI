import { Injectable, Logger } from '@nestjs/common';
import OpenAIApi from 'openai';
import { apiRequestDTO } from './dto/apiRequest.dto';
import { Message } from './dto/entities/message.interface';
import { GuideResponseDTO } from './dto/guideResponse.dto';
import {
  GPT_MODEL,
  SYSTEM_MESSAGE,
  USER_PROMPT,
  OUTPUT_INDICATOR,
  CONTEXT_EXAMPLE,
} from './constants/constants';
import { ConfigService } from '@nestjs/config';
import { Role } from './dto/entities/role.enum';

@Injectable()
export class OpenAIService {
  private readonly openai: OpenAIApi;
  private readonly configService: ConfigService;

  constructor() {
    this.configService = new ConfigService();
    this.openai = new OpenAIApi({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  formatConversation(requestDto: apiRequestDTO): Message[] {
    const username = requestDto.user.username;
    const messages = requestDto.messages;

    if (!messages) {
      throw new Error('No messages found in conversation');
    }

    const formattedMessages = messages.map((message) => {
      const { content, isSupportSender } = message;
      return {
        name: username,
        role: isSupportSender ? Role.ASSISTANT : Role.USER,
        content: content,
      };
    });
    Logger.log('formattedMessages: ', formattedMessages);
    if (!formattedMessages) {
      throw new Error('Error formatted messages');
    }
    return formattedMessages;
  }

  async generateGuide(requestDto: apiRequestDTO): Promise<GuideResponseDTO> {
    const messages = this.formatConversation(requestDto);
    Logger.log('Generating guide...');
    const response = await this.openai.chat.completions.create({
      model: GPT_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_MESSAGE },
        { role: 'user', content: USER_PROMPT },
        { role: 'system', content: OUTPUT_INDICATOR },
        { role: 'user', content: CONTEXT_EXAMPLE },
        ...messages,
      ],
    });
    const guide = this.formatGuide(response.choices[0].message.content);
    return guide;
  }

  formatGuide(guide: string): GuideResponseDTO {
    const lines = guide.split('\n');
    let title = lines.shift() || '';
    title = title.replace(/<\/?[^>]+(>|$)/g, '').replace(/\*\*/g, '');
    const formatedGuide: GuideResponseDTO = {
      title: title,
      contentHTML: lines.join('\n'),
    };
    return formatedGuide;
  }
}
