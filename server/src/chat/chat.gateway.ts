import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users/users.service';
import {MessageService} from './message/message.service'



@WebSocketGateway({namespace: '/chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {
  constructor(private messageService: MessageService, private userService: UsersService) { }
  @WebSocketServer()
  server: Server;

  private readonly connectedUsers: { [userID: string]: Socket } = {}; 
  private logger: Logger = new Logger(`ChatGateway`);
  
  afterInit() {
      this.logger.log(`Initialized`)
  }

  async handleConnection(socket: Socket): Promise<void> {

    this.logger.log(`Socket connected: ${socket.id}`)
    const chatList = await this.userService.getChatList({ id: socket.handshake.auth.id });
    const rooms = await this.userService.getRooms({ id: socket.handshake.auth.id });
    for (const room of rooms) {
      socket.join(room);
    }
    socket.emit(`updateChatList`, chatList);
  }

  async handleDisconnect(socket: Socket): Promise<void> {
    // await this.userService.removeFromAllRooms(socket.id)
    this.logger.log(`Socket disconnected: ${socket.id}`)
  }

  // @SubscribeMessage(`chat`)
  // async handleMessage(
  //   @MessageBody()
  //   payload: Message
  // ): Promise<void> {
  //   try {
  //     const { Message } = payload;
  //     console.log(room.name)
  //     this.server.to(room.name).emit(`chat`, Message);
  //   } catch (error) {
  //     console.error(`Error in sending message`, error);
  //   }
  // }

  //!---------------Notification room------------------------!//

  @SubscribeMessage(`createNotificationRoom`)
  createNotificationRoom(
    @ConnectedSocket() client: Socket,
    @Body() data: {userID: string},
  ): string {
    try {
      console.log(`createNotifacationRoom`)
      const userID = data.userID;
      client.join(userID);
      this.connectedUsers[userID] = client;
      return (`Notification room created`)
    }
    catch (error) {
      console.error(`Error in creating notification Room`, error);
    }
  }
  //!---------------Direct Message room------------------------!//


  @SubscribeMessage(`createRoom`)
    async createRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: {reciverId: string},
  ): Promise<string> {
    try {
      console.log(`--------------createRoom------------------`)
      const userId = client.handshake.auth.id;
      const room = await this.userService.creatRoom(userId, data.reciverId)
      console.log(`at the creation roomId is ` + room);
      const freindSocket = this.connectedUsers[data.reciverId]
      if (client && freindSocket) { 
        client.join(room);
        freindSocket.join(room);
        console.log(`the room is ` + room);
      }
      return (`DMs room created`);
    }
    catch (error) {
      console.error(`Error in creating Room`, error);
    }
  }

  @SubscribeMessage(`updateChatList`)
  async updateChatList(
    @ConnectedSocket() client: Socket,
    @MessageBody() friendID: string,
  ): Promise<void> { 
    console.log(`--------------updateChatList------------------`)
    await this.userService.addToChat({ id: client.handshake.auth.id }, { id: friendID });
    const friedList = await this.userService.getChatList({ id: client.handshake.auth.id });
    client.emit(`updateChatList`, friedList);
  }

  @SubscribeMessage(`sendPrivateMessage`)
  async sendPrivateMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: {reciverId: string, message: string},
  ): Promise<void> {
    try {
      const room = await this.userService.getRoom(client.handshake.auth.id, data.reciverId);
      const message = await this.userService.createMessage({ authorName: client.handshake.auth.id, reciverID: room, content: data.message })
      this.server.to(room).emit(`receivedMessage`, {message});
      // console.log(`the message is ` + message);
    } catch (error) {
      console.error(`Error in sending private message`, error);
    }
  }
}
