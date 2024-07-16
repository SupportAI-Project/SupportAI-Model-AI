import { Injectable, Logger  } from "@nestjs/common";
import OpenAIApi  from "openai";
import { apiRequestDTO } from "../dto/apiRequest.dto";
import { GuideResponseDTO} from "../dto/guideResponse.dto";
import {MESSAGES, GPT_MODEL, SYSTEM_MESSAGE, USER_PROMPT, OUTPUT_INDICATOR, CONTEXT_GUIDE} from "../constants/constants";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class OpenAIService {
    private readonly openai: OpenAIApi;
    private readonly configService: ConfigService;
    
    private readonly conversationMessages: string;
    private readonly userPrompt: string;
    private readonly outputIndicator: string;
    private readonly contextGuide: string;
    
    constructor() {
        this.configService = new ConfigService();
        this.openai = new OpenAIApi({ apiKey: this.configService.get('OPENAI_API_KEY') });
        
        this.conversationMessages = MESSAGES;
        this.userPrompt = USER_PROMPT;
        this.outputIndicator = OUTPUT_INDICATOR;
        this.contextGuide = CONTEXT_GUIDE;
    }


    formatConversation (chatConversation: string): any[] {
        const messages = chatConversation;
        // Logger.log("messages: ", messages);
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
        // console.log("messages: ", messages);
        Logger.log('Generating guide...');
        const response = await this.openai.chat.completions.create({
            model: GPT_MODEL,
            messages: [
                { role: 'system', content: SYSTEM_MESSAGE },
                { role: 'user', content: this.userPrompt },
                { role: 'system', content: this.outputIndicator },
                { role: 'system', content: this.contextGuide },
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
        // Logger.log('Guide generated', guide);
        //{
        //  1.  [1st step, 2nd step] : String
        //  2.
        // } 
        return formatedGuide;
    };
};