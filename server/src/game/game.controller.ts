import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('game')
export class GameController {
  @Get()
  getGame() {
    return 'Game';
  }
}
