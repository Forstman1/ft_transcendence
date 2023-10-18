import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { config } from 'dotenv';


async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  app.use(cors());
  await app.listen(3001);

  // setInterval(() => {
  //   gameService.updateBallPosition();
  // }, 1000 / 60);
}

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

// }
bootstrap();

