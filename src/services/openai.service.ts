import { Injectable  } from "@nestjs/common";
import Configuration from "openai";
import OpenAIApi  from "openai";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class OpenAIService {
    private openai: OpenAIApi;
    
    constructor() {
          this.openai = new OpenAIApi();
    }

    async getTroubleshootingSteps(supportNote: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: `you are a support troubleshooting guide creator that breaks it to troubleshooting steps based on notes received that a support specialist wrote from start of troubleshooting to end when resolved. Also make the steps general and not with specific ids or specific cases` },
                { role: 'user', content: supportNote }
            ],
        });
        console.log(response.choices[0]);
        return response.choices[0].message.content;
    }
    
}
