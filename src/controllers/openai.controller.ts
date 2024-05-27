import { Controller, Post, Body } from "@nestjs/common";
import { OpenAIService } from "../services/openai.service";
import { OpenAiDTO } from "../dto/openai.dto";

@Controller("openai")
export class OpenAIController {
    constructor(private readonly openaiService: OpenAIService) {}

    @Post("get-guide")
    async getGuide(@Body() openAiDTO: OpenAiDTO): Promise<string> {
        return this.openaiService.getGuide(openAiDTO);
    }
}