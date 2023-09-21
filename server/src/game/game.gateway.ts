import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { Server, Socket } from 'socket.io';
import { Body } from '@nestjs/common';
import { Gamedata, InitGameData } from './dto/create-game.dto';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  private interval: NodeJS.Timeout | null = null;
  private isPaused = false;
  private count = 0;

  @SubscribeMessage('sendGameData')
  sendGameData(
    @ConnectedSocket() client: Socket,
    @Body() data: InitGameData,
  ): void {
    try {
      console.log('client', client.id);
      this.gameService.resetGameDate();
      this.gameService.initGameData(data.initCanvasData);
      this.interval = setInterval(() => {
        if (!this.isPaused) {
          // console.log('setInterval: ' + this.count);
          // this.count++;
          this.gameService.updateBallPosition();
          client.emit('GetGameData', this.gameService.getUpdateData());
        }
      }, 15);
    } catch (error) {
      console.error('Error in sendGameData:', error);
    }
  }

  @SubscribeMessage('updatePaddles')
  updatePaddles(
    @ConnectedSocket() client: Socket,
    @Body() data: Gamedata,
  ): void {
    try {
      this.gameService.updatePaddles(data.canvasData);
    } catch (error) {
      console.error('Error in updatePaddles:', error);
    }
  }

  @SubscribeMessage('endGame')
  endGame(@ConnectedSocket() client: Socket): void {
    try {
      this.isPaused = true;
      clearInterval(this.interval as NodeJS.Timeout);
    } catch (error) {
      console.error('Error in endGame:', error);
    }
  }

  @SubscribeMessage('pauseGame')
  pauseGame(@ConnectedSocket() client: Socket): void {
    this.isPaused = true;
  }

  @SubscribeMessage('resumeGame')
  resumeGame(@ConnectedSocket() client: Socket): void {
    this.isPaused = false;
  }

  // @SubscribeMessage('join')
  // joinRoom(
  //   @MessageBody('name') name: string,
  //   @ConnectedSocket() client: Socket,
  // ) {
  //   // return this.gameService.identifyPlayer(name, client.id);
  // }
}
