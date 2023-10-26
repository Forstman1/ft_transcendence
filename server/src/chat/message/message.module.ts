import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [],
    controllers: [MessageController],
    providers: [MessageService, UsersService],

})
export class MessageModule {}
