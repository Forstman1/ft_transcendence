import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';


@WebSocketGateway({namespace: '/chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('ChatGateway');
  
  afterInit() {
      this.logger.log('Initialized')
  }

  handleConnection(client: any) {
    // console.log(client)
    // return client
  }

  handleDisconnect(client: any) {
    // Handle disconnection event
  }
  
  @SubscribeMessage('message')
  handleMessage(client: Socket, message: {sender: string, room: string, message: string}) {
    client.join('room')
    client.to(message.room).emit('message', `${client.id} joined the room`)
    // this.server.to(message.room).emit('message', message)
  }
}
