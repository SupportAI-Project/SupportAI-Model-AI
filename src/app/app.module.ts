import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import {OpenAIModule} from '../openai/modules/openai.module';


@Module({
  imports: [OpenAIModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
