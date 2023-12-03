// import { Module } from '@nestjs/common';
// import { MessageController } from './message.controller';
// import { MessageService } from './message.service';
// import { UsersService } from '../users/users.service';
// import { UsersModule } from '../users/users.module';

// @Module({
//     imports: [],
//     controllers: [MessageController],
//     providers: [MessageService, UsersService],
//     exports: [MessageService],

// })
// export class MessageModule {}


import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [],
    controllers: [MessageController],
    providers: [MessageService, UserService],
    exports: [MessageService],

})
export class MessageModule {}
