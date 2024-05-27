import { Injectable  } from "@nestjs/common";
import OpenAIApi  from "openai";
import { OpenAiDTO } from "src/dto/openai.dto";
import { SYSTEM_MESSAGE, GPT_MODEL } from "src/lib/constans";

@Injectable()
export class OpenAIService {
    private readonly openai: OpenAIApi;
    
    constructor() {
          this.openai = new OpenAIApi();
    }

    async getGuide(openAIDto: OpenAiDTO): Promise<string> {
        // const dto: OpenAiDTO = {
        //     model: GPT_MODEL,
        //     messages: [
        //         { role: 'system', content: SYSTEM_MESSAGE , name: 'system'},
        //         { role: 'user', content: supportNote, name: 'user'}
        //     ],
        // };
        const response = await this.openai.chat.completions.create(openAIDto);
        return response.choices[0].message.content;
    }
    
}
