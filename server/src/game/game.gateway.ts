import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { Server, Socket } from 'socket.io';
import { Body } from '@nestjs/common';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  private interval: NodeJS.Timeout | null = null;
  private isPaused = false;
  private count = 0;
  private readonly connectedUsers: { [userId: string]: Socket } = {};

  // handelConnection(client: Socket): void {
  //   console.log('client connected', client);
  // }

  // ---------------- sendGameData

  @SubscribeMessage('sendGameData')
  sendGameData(@Body() data): void {
    try {
      this.gameService.initGameData(data.initCanvasData, data.roomId);
      const getRoom = this.gameService.getRoom(data.roomId);
      this.interval = setInterval(() => {
        if (!getRoom?.isPoused) {
          this.gameService.updateBallPosition(data.roomId);
          this.server
            .to(data.roomId)
            .emit('GetGameData', this.gameService.getUpdateData(data.roomId));
        }
      }, 15);
    } catch (error) {
      console.error('Error in sendGameData:', error);
    }
  }

  // ---------------- updatePaddles

  @SubscribeMessage('updatePaddles')
  updatePaddles(@Body() data): void {
    try {
      this.gameService.updatePaddles(data.canvasData, data.roomId);
    } catch (error) {
      console.error('Error in updatePaddles:', error);
    }
  }

  // ---------------- endGame

  @SubscribeMessage('endGame')
  endGame(@Body() roomId: string): void {
    try {
      this.gameService.setRoomPause(roomId, true);
      this.gameService.deleteRoom(roomId);
      this.server.socketsLeave(roomId);
      clearInterval(this.interval as NodeJS.Timeout);
    } catch (error) {
      console.error('Error in endGame:', error);
    }
  }

  // ---------------- pauseGame

  @SubscribeMessage('pauseGame')
  pauseGame(@Body() roomId: string): void {
    this.gameService.setRoomPause(roomId, true);
  }

  // ---------------- resumeGame

  @SubscribeMessage('resumeGame')
  resumeGame(@Body() roomId: string): void {
    this.gameService.setRoomPause(roomId, false);
  }

  // ---------------- createRoomNotifacaion

  @SubscribeMessage('createRoomNotification')
  createRoomNotifacation(
    @ConnectedSocket() client: Socket,
    @Body() data: { userId: string },
  ): string {
    try {
      console.log('-----------------createRoomNotifacation-----------------');
      const userId = data.userId;
      client.join(userId);
      this.connectedUsers[userId] = client;
      return 'your Notification room is ready';
    } catch (error) {
      console.error('Error in createRoomNotifacation:', error);
    }
  }

  // ---------------- createRoom
  //async
  @SubscribeMessage('createRoom')
  createRoom(@ConnectedSocket() client: Socket): string {
    try {
      console.log('-----------------createRoom-----------------');
      const clientUserId = client.id;
      const roomId = this.gameService.createRoom(clientUserId);
      client.join(roomId);
      return roomId;
    } catch (error) {
      console.error('Error in createRoom:', error);
      return 'error';
    }
  }

  // ---------------- inviteFriend

  @SubscribeMessage('inviteFriend')
  async inviteFriend(
    @ConnectedSocket() client: Socket,
    @Body() data: { roomId: string; friendId: string },
  ): Promise<void> {
    try {
      console.log('-----------------inviteFriend-----------------');
      const clientUserId = client.id;
      const roomId = data.roomId;
      const friendUserId = data.friendId;
      const room = this.server.sockets.adapter.rooms.get(roomId);
      // console.log('hello from inviteFriend');
      // console.log('inviteFriend clientUserId', clientUserId);
      // console.log('inviteFriend roomId', roomId);
      // console.log('inviteFriend friendUserId', friendUserId);
      // console.log('inviteFriend room size', room?.size);
      // console.log('----------------------------------------------');

      if (this.gameService.isRoomOwner(clientUserId, roomId)) {
        if (room && room.size < 2) {
          const friendSocket = this.connectedUsers[friendUserId];
          if (friendSocket) {
            this.server.to(friendUserId).emit('room-invitation', roomId);
          }
        } else {
          console.error('Room is full. Cannot invite more players.');
        }
      } else {
        console.error('Client is not the owner of the room.');
      }
    } catch (error) {
      console.error('Error in inviteFriend:', error);
    }
  }

  //-------------acceptInvitation
  @SubscribeMessage('acceptInvitation')
  acceptInvitation(
    @ConnectedSocket() client: Socket,
    @Body() data: { roomId: string },
  ): void {
    try {
      console.log('-----------------acceptInvitation-----------------');
      console.log('roomId', data.roomId);
      const roomId = data.roomId;
      const room = this.server.sockets.adapter.rooms.get(roomId);
      console.log('room', room);
      if (room && room.size < 2) {
        client.join(roomId);
        this.gameService.addPlayerToRoom(roomId, client.id);
        this.server.to(roomId).emit('playGame');
      } else if (room && room.size >= 2) {
        console.error('Room is full. Cannot invite more players.');
      } else {
        console.error('Room is not exist.');
      }
    } catch (error) {
      console.error('Error in acceptInvitation:', error);
    }
  }

  //-------------denyInvitation
  // @SubscribeMessage('denyInvitation')
  // denyInvitation(
  //   @ConnectedSocket() client: Socket,
  //   @Body() data: { roomId: string },
  // ): void {
  //   try {
  //   } catch (error) {
  //     console.error('Error in denyInvitation:', error);
  //   }
  // }
}
