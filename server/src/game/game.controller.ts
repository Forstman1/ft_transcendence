import { Controller, Get } from '@nestjs/common';

@Controller('game')
export class GameController {
  @Get()
  getGame() {
    return 'Game';
  }
}
