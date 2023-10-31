import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import * as cors from 'cors';
import { config } from 'dotenv';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  // app.use(cors()); // already enabled in the previous line
  await app.listen(3001);

  // setInterval(() => {
  //   gameService.updateBallPosition();
  // }, 1000 / 60);
}

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

// }
bootstrap();

