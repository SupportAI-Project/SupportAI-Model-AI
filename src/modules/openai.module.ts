import { Module } from "@nestjs/common";
import { OpenAIService } from "../services/openai.service";
import { OpenAIController } from "../controllers/openai.controller";

@Module({
    controllers: [OpenAIController],
    providers: [OpenAIService],
    exports: [OpenAIService]
})
export class OpenAIModule {}