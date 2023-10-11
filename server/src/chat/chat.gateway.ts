import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {


  @WebSocketServer() wss: Server

  private logger: Logger = new Logger('ChatGateway');

  afterInit(server: any) {
      this.logger.log('Initialized')
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data): void {
    console.log("here")
    this.wss.emit('message', data)
  }
}
