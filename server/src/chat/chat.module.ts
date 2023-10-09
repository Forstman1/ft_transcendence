import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel/channel.module';
import { MessageModule } from './message/message.module';


@Module({
    imports: [ChannelModule, MessageModule],
  })
export class ChatModule {}
