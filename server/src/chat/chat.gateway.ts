import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { Client } from 'socket.io/dist/client';
import { UsersService } from './users/users.service';
import {Message} from './users/dtos/user.dto'



@WebSocketGateway({namespace: '/chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {
  constructor (private readonly userService: UsersService ) {}
  @WebSocketServer()
  server: Server;

  private readonly connectedUsers: { [userId: string]: Socket } = {}; 
  private logger: Logger = new Logger(`ChatGateway`);
  
  afterInit() {
      this.logger.log(`Initialized`)
  }

  async handleConnection(socket: Socket): Promise<void> {
    this.logger.log(`Socket connected: ${socket.id}`)
  }

  async handleDisconnect(socket: Socket): Promise<void> {
    await this.userService.removeFromAllRooms(socket.id)
    this.logger.log(`Socket disconnected: ${socket.id}`)
  }

  @SubscribeMessage(`chat`)
  async handleMessage(
    @MessageBody() data: Message): Promise<Message> {
      this.server.emit(`chat`, data)
      this.logger.log(data)
      return data
    }

}
