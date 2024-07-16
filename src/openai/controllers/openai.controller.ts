import { Controller, Post, Body } from "@nestjs/common";
import { OpenAIService } from "../services/openai.service";
import { apiRequestDTO } from "../dto/apiRequest.dto";
// import { GuideResponseDTO } from "../dto/guideResponse.dto";

@Controller("openai")
export class OpenAIController {
    constructor(private readonly openaiService: OpenAIService) {}

    @Post("generate-guide")
    async generateGuide(@Body() chat: apiRequestDTO): Promise<string> {
        const guide = await this.openaiService.generateGuide(chat);
        return guide;
    }
}