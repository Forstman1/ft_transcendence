import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel/channel.module';
import { MessageModule } from './message/message.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [],
  providers: [ChatGateway],
})
export class ChatModule {}
