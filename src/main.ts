import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'*',
  });
  
  
  await app.listen(3000);
}
bootstrap();