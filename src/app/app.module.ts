import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import {OpenAIModule} from '../openai/modules/openai.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [OpenAIModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
