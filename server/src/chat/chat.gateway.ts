import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users/users.service';
import {MessageService} from './message/message.service'
import { Prisma } from '@prisma/client';



@WebSocketGateway({namespace: '/chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {
  constructor( private userService: UsersService) { }
  @WebSocketServer()
  server: Server;

  private readonly connectedUsers: { [userID: string]: Socket } = {}; 
  private logger: Logger = new Logger(`ChatGateway`);
  
  afterInit() {
      this.logger.log(`Initialized`)
  }

  async handleConnection(client: Socket, ...args: any[]){

    this.logger.log(`Socket connected: ${client.handshake.auth.id}`)
    const chatList = await this.userService.getChatList(client.handshake.auth.id);
    this.logger.log(`user Id is ` + client.handshake.auth.id)
    const rooms = await this.userService.getRooms({ id: client.handshake.auth.id });
    for (const room of rooms) {
      client.join(room);
    }
    if (chatList)
      client.emit(`updateChatList`, chatList);
  }

  async handleDisconnect(socket: Socket) {
    // await this.userService.removeFromAllRooms(socket.id)
    this.logger.log(`Socket disconnected: ${socket.id}`)
  }

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
  ): Promise<any> { 

    await this.userService.addToChat(client.handshake.auth.id, friendID);
    this.logger.log(`updateChatList`)
    const friedList = await this.userService.getChatList(client.handshake.auth.id);
    this.logger.log(`updateChatList2`) 
    client.emit(`updateChatList`, friedList);
  }

  @SubscribeMessage(`sendPrivateMessage`)
  async sendPrivateMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { reciverId: string, message: string },
  ): Promise<any> {
    try {
      this.logger.log(`sendPrivateMessage`)
      const room = await this.userService.getRoom(client.handshake.auth.id, data.reciverId);
      const message = await this.userService.createMessage({ authorName: client.handshake.auth.id, reciverID: room, content: data.message })
      this.server.to(room).emit(`receivedPrivateMessage`, { message });
      this.logger.log(`Message sent to room `)
    } catch (error) {

      console.error(`Error in sending private message`, error);

    }
  }
  @SubscribeMessage(`getPrivateMessages`)
  async getPrivateMessages(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: {reciverId: string},
   ) : Promise < any > {
    try {
        
        const Messages = await this.userService.getMessages(client.handshake.auth.id, data.reciverId);
      
    }
      catch(error) { }
  }
  

  //!---------------Frien Request------------------------!//

  @SubscribeMessage(`sendFreindRequest`)
  async sendFreindRequest(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string},
  ): Promise<any> {
    try {

      const friendSocket = this.connectedUsers[data.friendId]
      const User: Prisma.UserWhereUniqueInput = { id: client.handshake.auth.id };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const user = await this.userService.sendFriendRequest(User, friend)
      if (friendSocket) {
        this.server.to(friendSocket.id).emit(`receivedFreindRequest`, { user: user });
        // friendSocket.emit(`receivedFreindRequest`, { friendId: client.handshake.auth.id });
      }
      //! send to notification room
    } catch (error) {
      console.error(`Error in sending freind request`, error);
    }
   }
  
}
