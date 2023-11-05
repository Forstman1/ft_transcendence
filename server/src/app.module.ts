import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ChatModule, PrismaModule, GameModule, AuthModule],
  controllers: [],
  providers: [],
})

export class AppModule {}

