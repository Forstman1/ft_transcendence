import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto';

@Controller('message')
export class MessageController {

    constructor(private messageService: MessageService) {}

    @Post('/createmessage')
    createchannel(@Body() MessageInfo: CreateMessageDto) {
        return this.messageService.createmessage(MessageInfo)
    }

    @Get('/getmessages/:id')
    getMessages(@Param('id') id: string) {
        return this.messageService.getMessages(id)
    }

}
