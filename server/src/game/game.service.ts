import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  Game: Game[] = [{ name: 'test', text: 'test' }];
  clientToPlayer = new Map<string, string>();

  identifyPlayer(name: string, clientId: string) {
    this.clientToPlayer.set(clientId, name);
  }

  create(createGameDto: CreateGameDto) {
    const message = { ...createGameDto };
    this.Game.push(createGameDto);
    return Object.values(this.clientToPlayer);
  }

  findAll() {
    console.log(this.Game);
    return `This action returns all game`;
  }
}
