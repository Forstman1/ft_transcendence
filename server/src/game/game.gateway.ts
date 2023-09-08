import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Server, Socket } from 'socket.io';
import { Body } from '@nestjs/common';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  @SubscribeMessage('createGame')
  async create(@MessageBody() createGameDto: CreateGameDto) {
    const message = await this.gameService.create(createGameDto);
    this.server.emit('gameCreated', message);
    return message;
  }

  @SubscribeMessage('sendGameData')
  sendGameData(@Body() body: any) {
    console.log(body);
    return this.gameService.sendGameData();
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('name') name: string,
    @ConnectedSocket() client: Socket,
  ) {
    return this.gameService.identifyPlayer(name, client.id);
  }
}
