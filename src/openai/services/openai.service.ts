import { Injectable, Logger  } from "@nestjs/common";
import OpenAIApi  from "openai";
import { apiRequestDTO } from "../dto/apiRequest.dto";
import { GuideResponseDTO} from "../dto/guideResponse.dto";
import {MESSAGES, GPT_MODEL, SYSTEM_MESSAGE} from "../constants/constants";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class OpenAIService {
    private readonly openai: OpenAIApi;
    private readonly conversationMessages: string;
    private readonly configService: ConfigService;
    
    constructor() {
        this.configService = new ConfigService();
        this.openai = new OpenAIApi({ apiKey: this.configService.get('OPENAI_API_KEY') });
        this.conversationMessages = MESSAGES;
    }


    formatConversation (chatConversation: string): any[] {
        const messages = chatConversation;
        console.log("messages: ", messages);
        if (!messages) {
            throw new Error('No messages found in conversation');
        }
        return [{
            name: "user",
            role: "user",
            content: chatConversation
        }];
    };

    async generateGuide(chat: apiRequestDTO): Promise<string> {
        const messages = this.formatConversation(this.conversationMessages);
        console.log("messages: ", messages);
        Logger.log('Generating guide...');
        const response = await this.openai.chat.completions.create({
            model: GPT_MODEL,
            messages: [
                { role: 'system', content: SYSTEM_MESSAGE },
                ...messages
              ],
        });
        return response.choices[0].message.content;
    };

    formatGuide(guide: string): GuideResponseDTO {
        const formatedGuide: GuideResponseDTO = {
            guide: {
                key: 1,
                step: guide
            }
        };
        Logger.log('Guide generated', guide);
        return formatedGuide;
    };
};