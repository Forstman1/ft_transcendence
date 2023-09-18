import { Game } from '../entities/game.entity';

export class InitGameData {
  initCanvasData: {
    ball: Ball;
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

export class Ball {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
  maxBallSpeed: number;
}
