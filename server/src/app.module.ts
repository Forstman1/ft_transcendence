import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GameModule, ChatModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
