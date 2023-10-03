import { Module } from '@nestjs/common';
import { ChannelModule } from './channel/channel/channel.module';


@Module({
    imports: [ChannelModule],
  })
export class ChatModule {}
