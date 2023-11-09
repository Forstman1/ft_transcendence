import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel.module';
import { MessageModule } from './message/message.module';
import { ChatGateway } from './chat.gateway';
import { UsersModule } from './users/users.module';
import { ChatGateway2 } from './channel.gateway';
import { UsersService } from './users/users.service';
import { ChannelService } from './channel/channel.service';
import { MessageService } from './message/message.service';


@Module({
  imports: [UsersModule, ChannelModule, MessageModule],
  controllers: [],
  providers: [ChatGateway, ChatGateway2],
})
export class ChatModule {}
