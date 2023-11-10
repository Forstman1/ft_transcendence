import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users/users.service';
import {MessageService} from './message/message.service'
import { Prisma, User } from '@prisma/client';
import { th, tr } from '@faker-js/faker';
import { ChannelService } from './channel/channel.service';



@WebSocketGateway({namespace: '/chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {


  constructor(private messageService: MessageService, private channelService: ChannelService, private userService: UsersService) { }



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
    this.logger.log (await this.userService.getRooms({ id: client.handshake.auth.id }))
    const rooms = await this.userService.getRooms({ id: client.handshake.auth.id });
    for (const room of rooms) {
      client.join(room);
    }
    this.logger.log(chatList)
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
    @MessageBody() data: {reciverId: string, message: string},
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

  @SubscribeMessage(`sendFreindRequest`)
  async sendFreindRequest(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string},
  ): Promise<any> {
    try {

      const friendSocket = this.connectedUsers[data.friendId]
      const User: Prisma.UserWhereUniqueInput = { id: client.handshake.auth.id };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const user = this.logger.log(await this.userService.sendFriendRequest(User, friend))
      if (friendSocket) {
        this.server.to(friendSocket.id).emit(`receivedFreindRequest`, { user: user });
        // friendSocket.emit(`receivedFreindRequest`, { friendId: client.handshake.auth.id });
      }
      //! send to notification room
    } catch (error) {
      console.error(`Error in sending freind request`, error);
    }
   }
  


   




















   

   @SubscribeMessage('joinChannel')
  async joinChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    const channel: any = await this.channelService.getchannelinfo(data.channelId);

    const user: any = await this.userService.getUser(data.userId);

    if (channel && user) {

      client.join(channel.id);
      this.server.to(channel.id).emit('joinChannel', "UserJoined " + data.channelId + "  " + user.username);
    }
  }

  @SubscribeMessage('sendMessage')
  async sendMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {

    console.log(data.message)
    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);

    if (channel && user) {
      const channelMessage = await this.messageService.createmessage({ content: data.message, userId: data.userId, reciverId: data.channelId });

      if (channelMessage) {
        this.server.to(channel.id).emit('receivedMessage', { channelId: data.channelId, message: channelMessage });
      }
    }

  }


  @SubscribeMessage('createChannel')
  async createChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    console.log('createChannel ', data);

    try {

    const user = await this.userService.getUser(data.userId);

    const channel: any = await this.channelService.createchannel(data);

    if (channel.status === "channel created") {
      
      client.join(channel.channel.id);
      this.server.to(channel.channel.id).emit('channelCreated', { channelId: channel.id, message: "Channel Created", userId: data.userId, channel: channel.channel });
    }
    else {
      this.server.to(client.id).emit('channelCreated', { channelId: data.channelId, message: channel.status });
    }

    } catch (error)
    {
      this.server.to(client.id).emit('channelCreated', { channelId: data.channelId, message: "channel doesn't exist" });
      console.log(error);
    }
  }

  @SubscribeMessage('enterChannel')
  async enterChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {

    let channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user: any = await this.userService.getUser(data.userId);


    
    
    if (channel && user) {
      channel = await this.channelService.enterchannel(channel.name, data.userId);
      client.join(channel.id);
      this.server.to(channel.id).emit('channelEntered', { channelId: data.channelId, message: user.username + " entered the channel", userId: data.userId, channel: channel });
    }
    else {
      this.server.to(client.id).emit('channelEntered', { channelId: data.channelId, message: "channel doesn't exist" });
    }

  }


  @SubscribeMessage('getChannels')
  async getChannels(@ConnectedSocket() client: Socket, @MessageBody() data: any) {


    const channels = await this.channelService.getallchannels(data.userId);
    client.join(client.id);

    this.server.to(client.id).emit('allchannels', { channels: channels });

  }


  @SubscribeMessage('getChannelsFirstTime')
  async   getChannelsFirstTime(@ConnectedSocket() client: Socket, @MessageBody() data: any) {


    const channels = await this.channelService.getallchannels(data.userId);
    client.join(client.id);

    this.server.to(client.id).emit('getChannelsFirstTime', { channels: channels });

  }
  // getChannelsFirstTime



  @SubscribeMessage('leaveChannel')
  async leaveChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {

    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user: any = await this.userService.getUser(data.userId);
    await this.channelService.leaveChannel(channel.name, data.userId);

    const channels = await this.channelService.getallchannels(data.userId);

    this.server.to(channel.id).emit('channelLeft', { channelId: data.channelId, message: user.username + " left the channel", userId: data.userId });

    const members = await this.channelService.getallmembers(data.channelId);
    this.server.to(channel.id).emit('allmembers', { members: members });

    this.server.to(client.id).emit('allchannels', { channels: channels });

    client.leave(channel.id);


  }


  @SubscribeMessage('deleteChannel')
  async deleteChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    const channel = await this.channelService.deleteChannel(data.channelName, data.userId);
    if (channel.status == "You are not the owner of the channel") {
      this.server.to(client.id).emit('channelDeleted', { status: "You are not owner of the channel" });
    }
    else {
      this.server.to(client.id).emit('channelDeleted', { status: "Channel is deleted" });
    }
  }

  @SubscribeMessage('getmembers')
  async getmembers(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    const members = await this.channelService.getallmembers(data.channelId);
    this.server.to(client.id).emit('allmembers', { members: members });
  }


  @SubscribeMessage('setadministrator')
  async setAdministrator(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    try {


      const channel: any = await this.channelService.getchannelinfo(data.channelId);
      const admin: any = await this.channelService.setAdministrator(data.channelId, data.userId, data.adminId);
      const user: any = await this.userService.getUser(data.adminId);


      console.log("channel ", " " + admin.channelmember);
      if (admin.status === "This member can't be set as an administrator.") {

        this.server.to(client.id).emit('setAdministrator', { status: "This member can't be set as an administrator." });
      }
      else {
        this.server.to(channel.id).emit('setAdministrator', { member: admin.channelmember, status: user.username + " is now an administrator." });
      }

    } catch (error) {
      console.log(error);
      this.server.to(client.id).emit('setAdministrator', { status: "This member can't be set as an administrator." });
    }
  }



  @SubscribeMessage('removeadministrator')
  async removeAdministrator(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    try {

      const channel: any = await this.channelService.getchannelinfo(data.channelId);
      const member: any = await this.channelService.removeAdministrator(data.channelId, data.userId, data.adminId);
      const user: any = await this.userService.getUser(data.adminId);

      if (member.status === "This administrator can't be removed.") {
        this.server.to(client.id).emit('removeAdministrator', { status: "This member can't be removed as an administrator." });

      }
      else {
        this.server.to(channel.id).emit('removeAdministrator', { member: member.channelmember, status: user.username + " is no longer an administrator." });
      }
     

    } catch (error) {
      console.log(error);
      this.server.to(client.id).emit('setAdministrator', { status: "This member can't be set as an administrator1." });
    }


  }


  @SubscribeMessage('removemember')
  async removemember(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    try {

      const channel: any = await this.channelService.getchannelinfo(data.channelId);
      const member: any = await this.channelService.removeMember(data.channelId, data.userId, data.memberId);
      const user: any = await this.userService.getUser(data.memberId);

      if (member.status === "This member can't be removed.") {
        this.server.to(client.id).emit('removeMember', { status: "This member can't be removed." });

      }
      else {
        this.server.to(channel.id).emit('removeMember', { member: member.channelmember, status: user.username + " is no longer a member." });
      }

    } catch (error) {
      console.log(error);
      this.server.to(client.id).emit('removeMember', { status: "This member can't be removed." });
    }
  }




  @SubscribeMessage('setpassword')
  async setpassword(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    try {

      const channel: any = await this.channelService.getchannelinfo(data.channelId);
      const user = await this.userService.getUser(data.userId);

      if (channel && user) {
        const newchannel: any = await this.channelService.setpassword(data.channelId, data.userId, data.password)

        if (newchannel.status == "Password is set. Channel is private now") {
          this.server.to(channel.id).emit('setpassword', { status: "Password is set. Channel is private now" , channel: newchannel.channel});
          

        }
        else if (newchannel.status === "You are not the owner of the channel") {
          this.server.to(client.id).emit('setpassword', { status: "channel is already protected" });
        }
        else
          this.server.to(client.id).emit('setpassword', { status: "You are not owner or admin of the channel" });

      }


    } catch (error) {
      console.log(error);
      this.server.to(client.id).emit('setpassword', { status: "password can't be set" }); 
    }

  }

  @SubscribeMessage('removepassword')
  async removepassword(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    try {

      const channel: any = await this.channelService.getchannelinfo(data.channelId);
      const user = await this.userService.getUser(data.userId);

      if (channel && user) {
        const newchannel: any = await this.channelService.removepassword(data.channelId, data.userId)

        if (newchannel.status === "Password is removed. Channel is public now") {
          this.server.to(channel.id).emit('removepassword', { status: "Password is removed. Channel is public now" , channel: newchannel.channel});
          

        }
        else if (newchannel.status === "You are not the owner of the channel") {
          this.server.to(client.id).emit('removepassword', { status: "channel is already public" });
        }
        else
          this.server.to(client.id).emit('removepassword', { status: "You are not owner or admin of the channel" });

      }
    } catch (error) {
      console.log(error);
      this.server.to(client.id).emit('removepassword', { status: "password can't be removed" }); 
    }

  }


  @SubscribeMessage('changepassword')
  async changepassword(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    try {
        
        const channel: any = await this.channelService.getchannelinfo(data.channelId);
        const user = await this.userService.getUser(data.userId);
  
        if (channel && user) {
          const newchannel: any = await this.channelService.changepassword(data.channelId, data.userId, data.currentpassword, data.newpassword)
  
          if (newchannel.status === "Password is changed") {
            this.server.to(channel.id).emit('changepassword', { status: "Password is changed" , channel: newchannel.channel});
            
  
          }
          else if (newchannel.status === "You are not the owner of the channel") {
            this.server.to(client.id).emit('changepassword', { status: "You are not the owner of the channel" });
          }
          else if (newchannel.status === "Current password is wrong") {
            this.server.to(client.id).emit('changepassword', { status: "Current password is wrong" });
          }
          else
            this.server.to(client.id).emit('changepassword', { status: "You are not authorized" });
  
        }
    } catch (error) {
      console.log(error);
      this.server.to(client.id).emit('changepassword', { status: "password can't be changed" }); 
    }
  }
}
