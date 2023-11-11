import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameGateway } from './game.gateway';
// import { PrismaService } from '../prisma.service';

@Module({
  providers: [GameGateway, GameService],
})
export class GameModule {}
