import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway({namespace: 'chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('ChatGateway');
  
  afterInit() {
      this.logger.log('Initialized')
  }

  handleConnection(client: any) {
    console.log("client ")
  }

  handleDisconnect(client: any) {
    // Handle disconnection event
  }
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    console.log(data)
    this.server.emit(data);
    return data
  }
}
