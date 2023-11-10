import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel.module';
import { MessageModule } from './message/message.module';
import { ChatGateway } from './chat.gateway';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageService } from './message/message.service';


@Module({
  imports: [UsersModule, ChannelModule, MessageModule],
  controllers: [],
  providers: [ChatGateway],
})
export class ChatModule {}
