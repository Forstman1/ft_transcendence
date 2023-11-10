import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { Server, Socket } from 'socket.io';
import { Body } from '@nestjs/common';
import { GameModalState, GameHistory } from './dto/create-game.dto';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  private interval: NodeJS.Timeout | null = null;
  private isPaused = false;
  private readonly connectedUsers: { [userId: string]: Socket } = {};
  private readonly gameQueue: { [userId: string]: Socket } = {};
  private readonly isAllReady: { [roomId: string]: number } = {};

  handleConnection(@ConnectedSocket() client: Socket) {
    client.on('disconnect', () => {
      console.log('-----------------disconnect-----------------');
      console.log('disconnect userId:', client.handshake.auth.id);
      const roomId = this.gameService.getRoomIdByUserId(client.id);
      if (roomId) {
        this.server.sockets.in(roomId).emit('friendExitGame');
        this.gameService.resetGameDate(roomId);
        this.gameService.deleteRoom(roomId);
        this.server.in(roomId).socketsLeave(roomId);
      }
    });
  }

  // ---------------- sendGameData
  @SubscribeMessage('sendGameData')
  sendGameData(@Body() data): void {
    try {
      this.gameService.resetGameDate(data.roomId);
      this.gameService.initGameData(data.initCanvasData, data.roomId);
      this.isAllReady[data.roomId] += 1;
      if (this.isAllReady[data.roomId] === 2) {
        this.isAllReady[data.roomId] = 0;
        this.interval = setInterval(() => {
          const getRoom = this.gameService.getRoom(data.roomId);
          if (!getRoom?.isPoused) {
            this.gameService.updateBallPosition(data.roomId);
            this.server
              .to(data.roomId)
              .emit('GetGameData', this.gameService.getUpdateData(data.roomId));
          }
        }, 20);
      }
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
  endGame(@ConnectedSocket() client: Socket, @Body() roomId: string): void {
    try {
      console.log('-----------------endGame-----------------');
      this.isAllReady[roomId] += 1;
      if (this.isAllReady[roomId] === 2) {
        this.gameService.resetGameDate(roomId);
        this.gameService.setRoomPause(roomId, true);
        this.gameService.deleteRoom(roomId);
        this.server.in(roomId).socketsLeave(roomId);
      }
    } catch (error) {
      console.error('Error in endGame:', error);
    }
  }

  // ---------------- pauseGame
  @SubscribeMessage('pauseGame')
  pauseGame(@Body() roomId: string): void {
    console.log('-----------------pauseGame-----------------');
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
  @SubscribeMessage('createRoom')
  createRoom(@ConnectedSocket() client: Socket): string {
    try {
      console.log('-----------------createRoom-----------------');
      const clientUserId = client.id;
      const roomId = this.gameService.createRoom(clientUserId);
      client.join(roomId);
      this.isAllReady[roomId] = 0;
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
    @Body()
    data: {
      roomId: string;
      friendId: string;
      modalData: GameModalState;
    },
  ): Promise<void> {
    try {
      console.log('-----------------inviteFriend-----------------');
      const clientUserId = client.id;
      const roomId = data.roomId;
      const friendUserId = data.friendId;
      const room = this.server.sockets.adapter.rooms.get(roomId);
      const modalData = data.modalData;

      if (this.gameService.isRoomOwner(clientUserId, roomId)) {
        if (room && room.size < 2) {
          const friendSocket = this.connectedUsers[friendUserId];
          if (this.gameService.checkFriendIsInOtherRoom(friendUserId)) {
            client.emit('friendIsInRoom');
          } else if (friendSocket) {
            this.server
              .to(friendUserId)
              .emit('room-invitation', { roomId, modalData });
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
      const roomId = data.roomId;
      const room = this.server.sockets.adapter.rooms.get(roomId);
      if (room && room.size < 2) {
        client.join(roomId);
        this.gameService.addPlayerToRoom(roomId, client.id);
        this.server.to(roomId).emit('playGame');
      } else if (room && room.size >= 2) {
        client.emit('frinedIsInGame');
      } else {
        console.error('Room is not exist.');
      }
    } catch (error) {
      console.error('Error in acceptInvitation:', error);
    }
  }

  //-------------denyInvitation
  @SubscribeMessage('denyInvitation')
  denyInvitation(
    @ConnectedSocket() client: Socket,
    @Body() data: { roomId: string },
  ): void {
    try {
      this.server.sockets.in(data.roomId).emit('friendDenyInvitation');
      this.gameService.resetGameDate(data.roomId);
      this.gameService.deleteRoom(data.roomId);
      this.server.in(data.roomId).socketsLeave(data.roomId);
      delete this.isAllReady[data.roomId];
    } catch (error) {
      console.error('Error in denyInvitation:', error);
    }
  }

  //-------------leaveRoom
  @SubscribeMessage('leaveRoom')
  leaveRoom(@ConnectedSocket() client: Socket, @Body() roomId: string): void {
    try {
      console.log('-----------------leaveRoom-----------------');
      client.leave(roomId);
      this.gameService.deleteRoom(roomId);
    } catch (error) {
      console.error('Error in leaveRoom:', error);
    }
  }

  //-------------addPlayerToQueue
  @SubscribeMessage('addPlayerToQueue')
  addPlayerToQueue(@ConnectedSocket() client: Socket): void {
    try {
      console.log('-----------------addPlayerToQueue-----------------');
      const userId = client.handshake.auth.id;
      this.gameQueue[userId] = client;
      const queue = Object.keys(this.gameQueue);
      if (queue.length >= 2) {
        const player1 = this.gameQueue[queue[0]];
        const player2 = this.gameQueue[queue[1]];
        const roomId = this.gameService.createRoom(player1.id);
        this.isAllReady[roomId] = 0;
        player1.join(roomId);
        player2.join(roomId);
        this.gameService.addPlayerToRoom(roomId, player2.id);
        player1.emit('setIsOwner', { isOwner: true, roomId });
        player2.emit('setIsOwner', { isOwner: false, roomId });
        this.server.to(roomId).emit('playGame');
        delete this.gameQueue[queue[0]];
        delete this.gameQueue[queue[1]];
      }
    } catch (error) {
      console.error('Error in addPlayerToQueue:', error);
    }
  }

  //-------------getGameHistory
  @SubscribeMessage('CreateGameHistory')
  async postGameHistory(
    @ConnectedSocket() client: Socket,
    @Body() data: GameHistory,
  ): Promise<void> {
    try {
      console.log('-----------------CreateGameHistory-----------------');
      const userId = data.userId;
      const sockets = await this.server.in(data.roomId).fetchSockets();
      const opponentSocket = sockets.find(
        (socket) => socket.handshake.auth.id !== userId,
      );
      const opponentId = opponentSocket.handshake.auth.id;
      console.log('CreateGameHistory opponentId:', opponentId);
      console.log('CreateGameHistory userId:', userId);
      console.log('CreateGameHistory data:', data);
      return this.gameService.createGameHistory(data, opponentId);
    } catch (error) {
      console.error('Error in CreateGameHistory:', error);
    }
  }
}
