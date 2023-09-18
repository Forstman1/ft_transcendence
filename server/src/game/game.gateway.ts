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

  interval = null;

  @SubscribeMessage('sendGameData')
  sendGameData(@ConnectedSocket() client: Socket, @Body() data: InitGameData) {
    console.log('client', client.id);
    this.gameService.initGameData(data.initCanvasData);
    this.interval = setInterval(() => {
      this.gameService.updateBallPosition();
      client.emit('GetGameData', this.gameService.getUpdateData());
    }, 5);
  }

  @SubscribeMessage('updatePaddles')
  updatePaddles(@ConnectedSocket() client: Socket, @Body() data: Gamedata) {
    this.gameService.updatePaddles(data.canvasData);
  }

  @SubscribeMessage('endGame')
  endGame(@ConnectedSocket() client: Socket) {
    clearInterval(this.interval);
    client.emit('GetGameData', 'end');
  }

  // @SubscribeMessage('join')
  // joinRoom(
  //   @MessageBody('name') name: string,
  //   @ConnectedSocket() client: Socket,
  // ) {
  //   // return this.gameService.identifyPlayer(name, client.id);
  // }
}

// constructor(private readonly ballService: BallService) {}
//   private players: Map<string, { x: number; y: number }> = new Map();

//   @WebSocketServer() server: Server;

//   // Handle player movement messages from clients
//   @SubscribeMessage('playerMove')
//   handlePlayerMove(client: Socket, data: { x: number; y: number }): void {
//     // Update the player's position based on the received data
//     // this.players.set(client.id, data);
//   }

//   // Initialize the game and start sending ball updates
//   handleConnection(client: Socket): void {
//     // Add the new player with an initial position
//     this.players.set(client.id, { x: 0, y: 0 });

//     // Start sending periodic ball updates to the connected client
//     const intervalId = setInterval(() => {
//       this.ballService.updateBallPosition();
//       const ballPosition = this.ballService.getBallPosition();

//       // Send both ball position and player positions to the connected client
//       this.server.to(client.id).emit('updateGame', { ball: ballPosition, players: Array.from(this.players) });
//     }, 1000 / 30); // Update the game approximately 30 times per second

//     // Clean up the interval when the client disconnects
//     client.on('disconnect', () => {
//       this.players.delete(client.id);
//       clearInterval(intervalId);
//     });
//   }
