import { Game } from '../entities/game.entity';

// export class CreateGameDto extends Game {
//   ballX: number;
//   ballY: number;
//   ballRadius: number;
//   ballSpeedX: number;
//   ballSpeedY: number;
//   leftRectangleY: number;
//   rightRectangleY: number;
// }

export class GameStatic extends Game {
  isgameStarted: boolean;
  isgameEnded: boolean;
  isgAmePause: boolean;
}
