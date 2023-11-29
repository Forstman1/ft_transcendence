import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel.module';
import { MessageModule } from './message/message.module';
import { ChatGateway } from './chat.gateway';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule, ChannelModule, MessageModule],
  controllers: [],
  providers: [ChatGateway],
})
export class ChatModule {}

