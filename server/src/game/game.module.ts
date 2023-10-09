import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { MyGateway } from './gateway';

@Module({
  controllers: [GameController],
  providers: [MyGateway],
})
export class GameModule {}
