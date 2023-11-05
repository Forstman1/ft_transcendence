
import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users/users.service';
import { ChannelService } from './channel/channel.service';
import { MessageService } from './message/message.service';




@WebSocketGateway({ namespace: '/channelchat' })
export class ChatGateway2 implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {


  constructor(private messageService: MessageService, private channelService: ChannelService, private userService: UsersService) { }




  @WebSocketServer()
  private server: Server;

  private socketConnected: { [channelId: string]: [string, Socket] } = {};


  afterInit(server: Server) {
    console.log('WebSocket server initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    client.join(client.id);
    this.socketConnected[client.id] = [client.id, client];
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinChannel')
  async joinChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    const channel: any = await this.channelService.getchannelinfo(data.channelId);

    const user = await this.userService.getUser(data.userId);

    if (channel && user) {

      client.join(channel.id);
      this.server.to(channel.id).emit('joinChannel', "UserJoined " + data.channelId + "  " + user.username);
    }
  }

  @SubscribeMessage('sendMessage')
  async sendMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {


    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);

    if (channel && user) {
      const channelMessage = await this.messageService.createmessage({ content: data.message, userId: data.userId, reciverId: data.channelId });

      if (channelMessage) {
        this.server.to(`${channel.id}`).emit('receivedMessage', { channelId: data.channelId, message: channelMessage });
      }
    }

  }


  @SubscribeMessage('createChannel')
  async createChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    console.log('createChannel ', data);

    const channel: any = await this.channelService.createchannel(data);

    client.join(channel.id);

  }

  @SubscribeMessage('enterChannel')
  async enterChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {

    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);


    this.channelService.enterchannel(channel.name, data.userId);


    if (channel && user) {
      client.join(channel.id);
      this.server.to(channel.id).emit('channelEntered', { channelId: data.channelId, message: user.username + " entered the channel", userId: data.userId });
    }

  }


  @SubscribeMessage('getChannels')
  async getChannels(@ConnectedSocket() client: Socket, @MessageBody() data: any) {


    const channels = await this.channelService.getallchannels(data.userId);
    client.join(client.id);

    this.server.to(client.id).emit('allchannels', { channels: channels });

  }

  @SubscribeMessage('leaveChannel')
  async leaveChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {

    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);
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
      const user = await this.userService.getUser(data.adminId);


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
      const user = await this.userService.getUser(data.adminId);

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
      const user = await this.userService.getUser(data.memberId);

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




  // @SubscribeMessage('setpassword')
  // async setpassword(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

  //   try {

  //     const channel: any = await this.channelService.getchannelinfo(data.channelId);
  //     const user = await this.userService.getUser(data.userId);


  //   } catch (error) {

  //   }


  // }

}
