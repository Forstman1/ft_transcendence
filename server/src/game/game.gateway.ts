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

  // ---------------- addClient

  @SubscribeMessage('addClient')
  addClient(
    @ConnectedSocket() client: Socket,
    @Body() data: { userId: string },
  ): void {
    try {
      console.log('addClient', client.id);
      console.log('addClient', JSON.stringify(data));
      const userId = data.userId;
      this.connectedUsers[userId] = client;
    } catch (error) {
      console.error('Error in addClient:', error);
    }
  }

  // ---------------- createRoom
  //async
  @SubscribeMessage('createRoom')
  createRoom(@ConnectedSocket() client: Socket): string {
    try {
      const clientUserId = client.id;
      // console.log('clientUserId1', clientUserId);
      const roomId = this.gameService.createRoom(clientUserId);
      // console.log('getRoom1', this.gameService.getRoom(roomId));
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
      const clientUserId = client.id;
      console.log('clientUserId2', clientUserId);
      const roomId = data.roomId;
      console.log('inviteFriendroomId', roomId);
      console.log('getRoom2', this.gameService.getRoom(roomId));
      const friendUserId = data.friendId;

      // Check if the client is the owner of the room
      if (this.gameService.isRoomOwner(clientUserId, roomId)) {
        if (this.gameService.canAddPlayerToRoom(roomId)) {
          // Notify the friend about the room invitation
          const friendSocket = this.connectedUsers[friendUserId];
          if (friendSocket) {
            friendSocket.emit('room-invitation', { roomId }, (response) => {
              if (response.status === 'ok') {
                this.gameService.addPlayerToRoom(roomId, friendUserId);
                friendSocket.join(roomId);
              }
            });
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
}
