import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel/channel.module';
import { MessageModule } from './message/message.module';
import { ChatGateway } from './chat.gateway';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [ChatGateway, UsersService, PrismaService],
})
export class ChatModule {}
