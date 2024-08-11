import { Injectable, Logger  } from "@nestjs/common";
import OpenAIApi  from "openai";
import { apiRequestDTO } from "../dto/apiRequest.dto";
import { GuideResponseDTO} from "../dto/guideResponse.dto";
import {
    MESSAGES, 
    GPT_MODEL, 
    SYSTEM_MESSAGE, 
    USER_PROMPT, 
    OUTPUT_INDICATOR, 
    CONTEXT_GUIDE, 
    VALID_ROLES,
} from "../constants/constants";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class OpenAIService {
    private readonly openai: OpenAIApi;
    private readonly configService: ConfigService;
    
    constructor() {
        this.configService = new ConfigService();
        this.openai = new OpenAIApi({ apiKey: this.configService.get('OPENAI_API_KEY') });
    }


    formatConversation (chatConversation: string): any[] {
        const messages = chatConversation.trim();
        Logger.log("messages: ", messages);
        if (!messages) {
            throw new Error('No messages found in conversation');
        }
        const lines = messages.split('\n');
        const formattedMessages = lines.map(line => {
            const [role, ...messageParts] = line.replace('\r', '').split(': ');
            const message = messageParts.join(': ');
            return {name: role, role: role, content: message};
        })
        .filter(message => VALID_ROLES.includes(message.role) && message.content.trim() !== '');
        return formattedMessages;
    };

    async generateGuide(chat: apiRequestDTO): Promise<string> {
        const messages = this.formatConversation(MESSAGES);
        console.log("messages: ", messages);
        Logger.log('Generating guide...');
        const response = await this.openai.chat.completions.create({
            model: GPT_MODEL,
            messages: [
                { role: 'system', content: SYSTEM_MESSAGE },
                { role: 'user', content: USER_PROMPT },
                { role: 'system', content: OUTPUT_INDICATOR },
                { role: 'system', content: CONTEXT_GUIDE },
                ...messages
              ],
        });
        Logger.log('Guide generated: ', response.choices[0].message.content);
        return response.choices[0].message.content;
    };

    formatGuide(guide: string): GuideResponseDTO {
        const steps = guide.split('\n');
        const formatedGuide: GuideResponseDTO = {
            steps: steps
        };
        return formatedGuide;
    };
};