import { Module } from '@nestjs/common';
import { OpenAIController } from '../controllers/openai.controller';
import { OpenAIService } from '../services/openai.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [OpenAIController],
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class OpenAIModule {}
