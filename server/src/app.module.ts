import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ChatModule, PrismaModule, GameModule, AuthModule, ProfileModule],
  controllers: [],
  providers: [],
})

export class AppModule {}

