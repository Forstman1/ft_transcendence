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

export class Gamedata extends Game {
  canvasData: {
    leftPaddle: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    rightPaddle: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
}
