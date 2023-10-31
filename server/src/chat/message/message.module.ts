import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [],
    controllers: [MessageController],
    providers: [MessageService, UserService],

})
export class MessageModule {}
