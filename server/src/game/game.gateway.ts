import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { Server, Socket } from 'socket.io';
import { Body } from '@nestjs/common';
import { GameStatic } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  // @SubscribeMessage('createGame')
  // async create(@MessageBody() createGameDto: CreateGameDto) {
  //   const message = await this.gameService.create(createGameDto);
  //   this.server.emit('gameCreated', message);
  //   return message;
  // }

  count = 0;
  interval = null;

  @SubscribeMessage('sendGameData')
  sendGameData(
    @Body() GameStatic: GameStatic,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('GameStatic', GameStatic);
    if (GameStatic.isgameStarted) {
      setInterval(() => {
        // if (GameStatic.isgameEnded) clearInterval(this.interval);
        this.count++;
        client.emit('GetGameData', 'hello' + this.count);
      }, 1000 / 60);
    }
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('name') name: string,
    @ConnectedSocket() client: Socket,
  ) {
    return this.gameService.identifyPlayer(name, client.id);
  }
}
