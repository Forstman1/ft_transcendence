import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ChannelModule } from './chat/channel/channel/channel.module';



@Module({
  imports: [ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
