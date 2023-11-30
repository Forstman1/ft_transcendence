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
    origin: process.env.CLIENT_URL,
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Credentials, Access-Control-Allow-Methods',
    credentials: true,
  });
  // app.use(cors()); // already enabled in the previous line, uncomment if the previous one doesn't work as this one
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  
  await app.listen(3001);

}

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

// }
bootstrap();
