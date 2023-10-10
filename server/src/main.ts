import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);

  // setInterval(() => {
  //   gameService.updateBallPosition();
  // }, 1000 / 60);
}
bootstrap();

