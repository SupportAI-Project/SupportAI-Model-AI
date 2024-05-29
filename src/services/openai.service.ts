import { Injectable  } from "@nestjs/common";
import OpenAIApi  from "openai";
import { OpenAiDTO, message } from "src/dto/openai.dto";
import * as constants from "src/lib/openai/constants"

@Injectable()
export class OpenAIService {
    private readonly openai: OpenAIApi;
    private readonly messagesConvo: { [key: string]: string };
    
    constructor() {
          this.openai = new OpenAIApi();
          this.messagesConvo = constants.MESSAGES;
    }

    getConversation (messagesConvo: { [key: string]: string }): OpenAiDTO {
        const model: string = constants.GPT_MODEL;
        const messages: message[] = Object.keys(messagesConvo).map((key, index) => {
            const role = index % 2 === 0 ? 'user' : 'assistant';
            const name = key.match(/(USER|REP)_MESSAGE(\d*)/)[0].toLowerCase();
            const content = messagesConvo[key];
            return { role, name, content };
        });
        return { model, messages };
    }


    async getGuide(openAIDto: OpenAiDTO): Promise<string> {
        const dTO = this.getConversation(this.messagesConvo);
        const response = await this.openai.chat.completions.create(dTO);
        return response.choices[0].message.content;
    }
    
}
