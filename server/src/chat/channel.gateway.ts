
import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users/users.service';
import { ChannelService } from './channel/channel.service';
import { MessageService } from './message/message.service';




@WebSocketGateway({ namespace: '/channelchat' })
export class ChatGateway2 implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {


  constructor(private messageService: MessageService, private channelService: ChannelService, private userService: UsersService) {}

  @WebSocketServer()
  private server: Server;
  
  private channels: { [channelId: string]: { members: string[]; messages: string[] } } = {};
  

  afterInit(server: Server) {
    console.log('WebSocket server initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    client.join(client.id);
    // console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinChannel')
  async joinChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    console.log("dkholt ", data.userId)
    const channel: any = await this.channelService.getchannelinfo(data.channelId);

    const user = await this.userService.getUser(data.userId);
  
    if (channel && user) {

        client.join(channel.id);
        this.server.to(channel.id).emit('joinChannel', "UserJoined " + data.channelId + "  "+ user.username);
    } 
  }

  @SubscribeMessage('sendMessage')
  async sendMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {

    console.log('sendMessage 2 ', data, client.id);

    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);

    if (channel && user) {
      const channelMessage = await this.messageService.createmessage({content: data.message, userId: data.userId, reciverId: data.channelId});

      if (channelMessage) {
        this.server.to(`${channel.id}`).emit('receivedMessage', { channelId: data.channelId, message: channelMessage  });
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
    console.log('enterChannel ', data);

    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);
    // enter channel
    this.channelService.enterchannel(channel.name, data.userId);
    

    if (channel && user) {
      client.join(channel.id);
      this.server.to(channel.id).emit('channelEntered', { channelId: data.channelId, message: user.username + " entered the channel", userId: data.userId  });
    } 

  }

  
  @SubscribeMessage('getChannels')
  async getChannels(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    
    
    const channels = await this.channelService.getallchannels(data.userId);
    client.join(client.id);
    
    this.server.to(client.id).emit('allchannels', { channels: channels  });
    
  }
  
  @SubscribeMessage('leaveChannel')
  async leaveChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    
    const channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user = await this.userService.getUser(data.userId);
    await this.channelService.leaveChannel(channel.name, data.userId);
    
    const channels = await this.channelService.getallchannels(data.userId);

    this.server.to(channel.id).emit('channelLeft', { channelId: data.channelId, message: user.username + " left the channel", userId: data.userId  });

    const members = await this.channelService.getallmembers(data.channelId);
    this.server.to(channel.id).emit('allmembers', { members: members  });

    this.server.to(client.id).emit('allchannels', { channels: channels  });

    client.leave(channel.id);


  }


  @SubscribeMessage('deleteChannel')
  async deleteChannel(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    const channel = await this.channelService.deleteChannel(data.channelName, data.userId);
    if (channel.status == "You are not the owner of the channel") {
      this.server.to(client.id).emit('channelDeleted', { status: "You are not owner of the channel"  });
    }
    else {  
      this.server.to(client.id).emit('channelDeleted', { status: "Channel is deleted"  });
    }
  }

  @SubscribeMessage('getmembers')
  async getmembers(@ConnectedSocket() client: Socket, @MessageBody() data: any) {

    const members = await this.channelService.getallmembers(data.channelId);
    this.server.to(client.id).emit('allmembers', { members: members  });
  }

}