import { Controller, Post, Body } from "@nestjs/common";
import { OpenAIService } from "../services/openai.service";

@Controller("openai")
export class OpenAIController {
    constructor(private readonly openaiService: OpenAIService) {}

    @Post("troubleshooting-steps")
    async getTroubleshootingSteps(@Body("supportNote") prompt: string): Promise<string> {
        return this.openaiService.getTroubleshootingSteps(prompt);
    }
}