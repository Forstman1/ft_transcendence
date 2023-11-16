import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users/users.service';
import {MessageService} from './message/message.service'
import { Prisma } from '@prisma/client';
import { ChannelService } from './channel/channel.service';




@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(
    private messageService: MessageService,
    private channelService: ChannelService,
    private userService: UsersService,
  ) {}

  @WebSocketServer()
  server: Server;

  private readonly connectedUsers: { [key: string]: Socket[] } = {};
  private logger: Logger = new Logger(`ChatGateway`);

  afterInit() {
    this.logger.log(`Initialized`);
  }
  //!---------------CONNECTION------------------------!//

  async handleConnection(client: Socket) {
    this.connectedUsers[client.handshake.auth.id] = [
      ...(this.connectedUsers[client.handshake.auth.id] || []),
      client,
    ];
    this.logger.log(
      `Socket connected: ${client.handshake.auth.id}   ${client.id}`,
    );
    const chatList = await this.userService.getChatList(
      client.handshake.auth.id,
    );
    const rooms = await this.userService.getRooms({
      id: client.handshake.auth.id,
    });
    for (const room of rooms) {
      client.join(room);
    }
    if (chatList) client.emit(`updateChatList`, chatList);
  }

  //!---------------DISCONNECTION------------------------!//

  async handleDisconnect(socket: Socket) {
    // await this.userService.removeFromAllRooms(socket.id)
    // delete all sockets in connectedUsers that are associated with this socket.id
    this.logger.log(`Socket disconnected: ${socket.id}`);
  }

  //!---------------Notification room------------------------!//

  @SubscribeMessage(`createNotificationRoom`)
  createNotificationRoom(
    @ConnectedSocket() client: Socket,
    @Body() data: { userID: string },
  ): string {
    try {
      const userID = data.userID;
      client.join(userID);
      this.connectedUsers[userID] = [
        ...(this.connectedUsers[userID] || []),
        client,
      ];
      return `Notification room created`;
    } catch (error) {
      console.error(`Error in creating notification Room`, error);
    }
  }
  //!---------------CREATE ROOM------------------------!//

  @SubscribeMessage(`createRoom`)
  async createRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { frienID: string },
  ): Promise<string> {
    try {
      console.log(`--------------createRoom------------------`);
      const userId = client.handshake.auth.id;
      let room = await this.userService.getRoom(userId, data.frienID);
      console.log(`the room is ` + room);
      if (!room) {
        room = await this.userService.creatRoom(userId, data.frienID);
      }
      const freindSocket = this.connectedUsers[data.frienID];
      if (client && freindSocket) {
        client.join(room);
        freindSocket.join(room);
        console.log(`the room is ` + room);
      }
      console.log(`DMs room created` + room);
      return `DMs room created`;
    } catch (error) {
      console.error(`Error in creating Room`, error);
    }
  }
  //!---------------UPDATE CHAT LIST------------------------!//

  @SubscribeMessage(`updateChatList`)
  async updateChatList(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { frienID: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.frienID };

      await this.userService.addToChat(User, friend);

      const friedList = await this.userService.getChatList(User);

      client.emit(`updateChatList`, friedList);
    } catch (error) {
      console.error(`Error in updating chat list`, error);
    }
  }

  //!---------------PRIVATE MESSAGE------------------------!//

  @SubscribeMessage(`sendPrivateMessage`)
  async sendPrivateMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { reciverId: string; message: string },
  ): Promise<any> {
    try {
      const userId = client.handshake.auth.id;
      const room = await this.userService.getRoom(userId, data.reciverId);
      const message = await this.userService.createMessage({
        authorName: userId,
        reciverID: room,
        content: data.message,
      });

      this.server.to(room).emit(`receivedPrivateMessage`, { message });
    } catch (error) {
      console.error(`Error in sending private message`, error);
    }
  }

  //!--------------- BLOCK && UNBLOCK------------------------!//

  @SubscribeMessage(`blockUser`)
  async blockUser(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const responce = await this.userService.blockUser(User, friend);
      const userId = await this.userService.getUser(User);
      // if (responce === `User blocked`) {
      //   const friendSocket = this.connectedUsers[data.friendId];
      //   if (friendSocket) {
      //     for (const socket of friendSocket) {
      //       this.server.to(socket.id).emit(`userBlocked`, userId);
      //     }
      //   }
      // }
    }
    catch (error)
    {
      console.error(`Error in blocking user`, error);
    }
  }


  @SubscribeMessage(`unblockUser`)
  async unblockUser(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const responce = await this.userService.unblockUser(User, friend);
      const userId = await this.userService.getUser(User);
      // if (responce === `User unblocked`) {
      //   const friendSocket = this.connectedUsers[data.friendId];
      //   if (friendSocket) {
      //     for (const socket of friendSocket) {
      //       this.server.to(socket.id).emit(`userUnblocked`, userId);
      //     }
      //   }
      // }
    }
    catch (error) {
      console.error(`Error in unblocking user`, error);
    }
   }



  //!---------------Friend Request------------------------!//

  @SubscribeMessage(`sendFreindRequest`)
  async sendFreindRequest(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const friendSocket = this.connectedUsers[data.friendId];

      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const friendRequest = await this.userService.sendFriendRequest(
        User,
        friend,
      );
      //! Will use friendRequest to check if the request was sent or not or if it was sent before
      const friendId = await this.userService.getUser(User);
      if (friendSocket) {
        for (const socket of friendSocket) {
          this.server.to(socket.id).emit(`receivedFreindRequest`, friendId);
        }
      }
    } catch (error) {
      console.error(`Error in sending freind request`, error);
    }
  }

  @SubscribeMessage(`acceptFreindRequest`)
  async acceptFreindRequest(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const responce = await this.userService.acceptFriendRequest(User, friend);
      // const userId = await this.userService.getUser(User);
      if (responce === `Friend request accepted`) {
        const userSockets = this.connectedUsers[friend.id];
        if (userSockets) {
          for (const socket of userSockets) {
            this.server.to(socket.id).emit(`friendRequestAccepted`);
          }
        }
      }
    } catch (error) {
      console.error(`Error in accepting freind request`, error);
    }
  }

  @SubscribeMessage(`rejectFreindRequest`)
  async rejectFreindRequest(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const UserId = await this.userService.getUser(User);
      const userSockets = this.connectedUsers[data.friendId];
      for (const socket of userSockets) {
        this.logger.log(`here i'm sending ` + socket.id);
        this.server.to(socket.id).emit(`friendRequestRejected`, UserId);
      }
    } catch (error) {
      console.error(`Error in rejecting freind request`, error);
    }
  }

  @SubscribeMessage(`removeFriend`)
  async removeFreind(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const responce = await this.userService.removeFriend(User, friend);
      const userId = await this.userService.getUser(User);

      if (responce === `Friend removed`) {
        const friendSocket = this.connectedUsers[data.friendId];
        if (friendSocket) {
          for (const socket of friendSocket) {
            this.server.to(socket.id).emit(`friendRemoved`, userId);
          }
        }
      }
    } catch (error) {
      console.error(`Error in removing freind`, error);
    }
  }

  @SubscribeMessage(`removeChatUser`)
  async removeChatUser(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { friendId: string },
  ): Promise<any> {
    try {
      const User: Prisma.UserWhereUniqueInput = {
        id: client.handshake.auth.id,
      };
      const friend: Prisma.UserWhereUniqueInput = { id: data.friendId };
      const responce = await this.userService.removeFromChat(User, friend);
      const userId = await this.userService.getUser(User);

      if (responce === `User removed`) {
        const friendSocket = this.connectedUsers[data.friendId];
        if (friendSocket) {
          for (const socket of friendSocket) {
            this.server.to(socket.id).emit(`chatUserRemoved`, userId);
          }
        }
      }
    } catch (error) {
      console.error(`Error in removing chat user`, error);
    }
  }


  @SubscribeMessage('joinChannel')
  async joinChannel(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): Promise<any> {
    const channel: any = await this.channelService.getchannelinfo(
      data.channelId,
    );

    const user: any = await this.userService.getUser(data.userId);

    if (channel && user) {
      client.join(channel.id);
      this.server
        .to(channel.id)
        .emit(
          'joinChannel',
          'UserJoined ' + data.channelId + '  ' + user.username,
        );
    }
  }

  @SubscribeMessage('sendMessage')
  async sendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): Promise<any> {
    const channel: any = await this.channelService.getchannelinfo(
      data.channelId,
    );
    const user = await this.userService.getUser(data.userId);

    if (channel && user) {
      const channelMessage = await this.messageService.createmessage({
        content: data.message,
        userId: data.userId,
        reciverId: data.channelId,
      });

      if (channelMessage) {
        this.server
          .to(channel.id)
          .emit('receivedMessage', {
            channelId: data.channelId,
            message: channelMessage,
          });
      }
    }
  }

  @SubscribeMessage('createChannel')
  async createChannel(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): Promise<any> {
    console.log('createChannel ', data);

    try {
      const user = await this.userService.getUser(data.userId);

      const channel: any = await this.channelService.createchannel(data);

      if (channel.status === 'channel created') {
        client.join(channel.channel.id);
        this.server
          .to(channel.channel.id)
          .emit('channelCreated', {
            channelId: channel.id,
            message: 'Channel Created',
            userId: data.userId,
            channel: channel.channel,
          });
      } else {
        this.server
          .to(client.id)
          .emit('channelCreated', {
            channelId: data.channelId,
            message: channel.status,
          });
      }
    } catch (error) {
      this.server
        .to(client.id)
        .emit('channelCreated', {
          channelId: data.channelId,
          message: "channel doesn't exist",
        });
      console.log(error);
    }
  }

  @SubscribeMessage('enterChannel')
  async enterChannel(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): Promise<any> {
    let channel: any = await this.channelService.getchannelinfo(data.channelId);
    const user: any = await this.userService.getUser(data.userId);

    if (channel && user) {
      channel = await this.channelService.enterchannel(
        channel.name,
        data.userId,
      );
      client.join(channel.id);
      this.server
        .to(channel.id)
        .emit('channelEntered', {
          channelId: data.channelId,
          message: user.username + ' entered the channel',
          userId: data.userId,
          channel: channel,
        });
    } else {
      this.server
        .to(client.id)
        .emit('channelEntered', {
          channelId: data.channelId,
          message: "channel doesn't exist",
        });
    }
  }

  @SubscribeMessage('getChannels')
  async getChannels(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    const channels = await this.channelService.getallchannels(data.userId);
    client.join(client.id);

    this.server.to(client.id).emit('allchannels', { channels: channels });
  }

  @SubscribeMessage('getChannelsFirstTime')
  async getChannelsFirstTime(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    const channels = await this.channelService.getallchannels(data.userId);
    client.join(client.id);

    this.server
      .to(client.id)
      .emit('getChannelsFirstTime', { channels: channels });
  }
  // getChannelsFirstTime

  @SubscribeMessage('leaveChannel')
  async leaveChannel(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ): Promise<any> {
    const channel: any = await this.channelService.getchannelinfo(
      data.channelId,
    );
    const user: any = await this.userService.getUser(data.userId);
    await this.channelService.leaveChannel(channel.name, data.userId);

    const channels = await this.channelService.getallchannels(data.userId);

    this.server
      .to(channel.id)
      .emit('channelLeft', {
        channelId: data.channelId,
        message: user.username + ' left the channel',
        userId: data.userId,
      });

    const members = await this.channelService.getallmembers(data.channelId);
    this.server.to(channel.id).emit('allmembers', { members: members });

    this.server.to(client.id).emit('allchannels', { channels: channels });

    client.leave(channel.id);
  }

  @SubscribeMessage('deleteChannel')
  async deleteChannel(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    const channel = await this.channelService.deleteChannel(
      data.channelName,
      data.userId,
    );
    if (channel.status == 'You are not the owner of the channel') {
      this.server
        .to(client.id)
        .emit('channelDeleted', { status: 'You are not owner of the channel' });
    } else {
      this.server
        .to(client.id)
        .emit('channelDeleted', { status: 'Channel is deleted' });
    }
  }

  @SubscribeMessage('getmembers')
  async getmembers(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    const members = await this.channelService.getallmembers(data.channelId);
    this.server.to(client.id).emit('allmembers', { members: members });
  }

  @SubscribeMessage('setadministrator')
  async setAdministrator(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    try {
      const channel: any = await this.channelService.getchannelinfo(
        data.channelId,
      );
      const admin: any = await this.channelService.setAdministrator(
        data.channelId,
        data.userId,
        data.adminId,
      );
      const user: any = await this.userService.getUser(data.adminId);

      console.log('channel ', ' ' + admin.channelmember);
      if (admin.status === "This member can't be set as an administrator.") {
        this.server
          .to(client.id)
          .emit('setAdministrator', {
            status: "This member can't be set as an administrator.",
          });
      } else {
        this.server
          .to(channel.id)
          .emit('setAdministrator', {
            member: admin.channelmember,
            status: user.username + ' is now an administrator.',
          });
      }
    } catch (error) {
      console.log(error);
      this.server
        .to(client.id)
        .emit('setAdministrator', {
          status: "This member can't be set as an administrator.",
        });
    }
  }

  @SubscribeMessage('removeadministrator')
  async removeAdministrator(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    try {
      const channel: any = await this.channelService.getchannelinfo(
        data.channelId,
      );
      const member: any = await this.channelService.removeAdministrator(
        data.channelId,
        data.userId,
        data.adminId,
      );
      const user: any = await this.userService.getUser(data.adminId);

      if (member.status === "This administrator can't be removed.") {
        this.server
          .to(client.id)
          .emit('removeAdministrator', {
            status: "This member can't be removed as an administrator.",
          });
      } else {
        this.server
          .to(channel.id)
          .emit('removeAdministrator', {
            member: member.channelmember,
            status: user.username + ' is no longer an administrator.',
          });
      }
    } catch (error) {
      console.log(error);
      this.server
        .to(client.id)
        .emit('setAdministrator', {
          status: "This member can't be set as an administrator1.",
        });
    }
  }

  @SubscribeMessage('removemember')
  async removemember(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    try {
      const channel: any = await this.channelService.getchannelinfo(
        data.channelId,
      );
      const member: any = await this.channelService.removeMember(
        data.channelId,
        data.userId,
        data.memberId,
      );
      const user: any = await this.userService.getUser(data.memberId);

      if (member.status === "This member can't be removed.") {
        this.server
          .to(client.id)
          .emit('removeMember', { status: "This member can't be removed." });
      } else {
        this.server
          .to(channel.id)
          .emit('removeMember', {
            member: member.channelmember,
            status: user.username + ' is no longer a member.',
          });
      }
    } catch (error) {
      console.log(error);
      this.server
        .to(client.id)
        .emit('removeMember', { status: "This member can't be removed." });
    }
  }

  @SubscribeMessage('setpassword')
  async setpassword(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    try {
      const channel: any = await this.channelService.getchannelinfo(
        data.channelId,
      );
      const user = await this.userService.getUser(data.userId);

      if (channel && user) {
        const newchannel: any = await this.channelService.setpassword(
          data.channelId,
          data.userId,
          data.password,
        );

        if (newchannel.status == 'Password is set. Channel is private now') {
          this.server
            .to(channel.id)
            .emit('setpassword', {
              status: 'Password is set. Channel is private now',
              channel: newchannel.channel,
            });
        } else if (
          newchannel.status === 'You are not the owner of the channel'
        ) {
          this.server
            .to(client.id)
            .emit('setpassword', { status: 'channel is already protected' });
        } else
          this.server
            .to(client.id)
            .emit('setpassword', {
              status: 'You are not owner or admin of the channel',
            });
      }
    } catch (error) {
      console.log(error);
      this.server
        .to(client.id)
        .emit('setpassword', { status: "password can't be set" });
    }
  }

  @SubscribeMessage('removepassword')
  async removepassword(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    try {
      const channel: any = await this.channelService.getchannelinfo(
        data.channelId,
      );
      const user = await this.userService.getUser(data.userId);

      if (channel && user) {
        const newchannel: any = await this.channelService.removepassword(
          data.channelId,
          data.userId,
        );

        if (
          newchannel.status === 'Password is removed. Channel is public now'
        ) {
          this.server
            .to(channel.id)
            .emit('removepassword', {
              status: 'Password is removed. Channel is public now',
              channel: newchannel.channel,
            });
        } else if (
          newchannel.status === 'You are not the owner of the channel'
        ) {
          this.server
            .to(client.id)
            .emit('removepassword', { status: 'channel is already public' });
        } else
          this.server
            .to(client.id)
            .emit('removepassword', {
              status: 'You are not owner or admin of the channel',
            });
      }
    } catch (error) {
      console.log(error);
      this.server
        .to(client.id)
        .emit('removepassword', { status: "password can't be removed" });
    }
  }

  @SubscribeMessage('changepassword')
  async changepassword(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    try {
      const channel: any = await this.channelService.getchannelinfo(
        data.channelId,
      );
      const user = await this.userService.getUser(data.userId);

      if (channel && user) {
        const newchannel: any = await this.channelService.changepassword(
          data.channelId,
          data.userId,
          data.currentpassword,
          data.newpassword,
        );

        if (newchannel.status === 'Password is changed') {
          this.server
            .to(channel.id)
            .emit('changepassword', {
              status: 'Password is changed',
              channel: newchannel.channel,
            });
        } else if (
          newchannel.status === 'You are not the owner of the channel'
        ) {
          this.server
            .to(client.id)
            .emit('changepassword', {
              status: 'You are not the owner of the channel',
            });
        } else if (newchannel.status === 'Current password is wrong') {
          this.server
            .to(client.id)
            .emit('changepassword', { status: 'Current password is wrong' });
        } else
          this.server
            .to(client.id)
            .emit('changepassword', { status: 'You are not authorized' });
      }
    } catch (error) {
      console.log(error);
      this.server
        .to(client.id)
        .emit('changepassword', { status: "password can't be changed" });
    }
  }
}
