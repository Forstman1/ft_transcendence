import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server } from 'socket.io';
import { emit } from 'process';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {


  @WebSocketServer() wss: Server

  private logger: Logger = new Logger('ChatGateway');

  afterInit(server: any) {
      this.logger.log('Initialized')
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data): void {
    this.wss.emit('message', data)
  }
}
