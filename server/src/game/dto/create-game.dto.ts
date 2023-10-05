// import { Game } from '../entities/game.entity';

// export class InitGameData {
//   roomId: string;
//   initCanvasData: {
//     ball: Ball;
//     leftPaddle: {
//       x: number;
//       y: number;
//       width: number;
//       height: number;
//     };
//     rightPaddle: {
//       x: number;
//       y: number;
//       width: number;
//       height: number;
//     };
//   };
// }

// export class Gamedata extends Game {
//   roomId: string;
//   canvasData: {
//     leftPaddle: {
//       x: number;
//       y: number;
//       width: number;
//       height: number;
//     };
//     rightPaddle: {
//       x: number;
//       y: number;
//       width: number;
//       height: number;
//     };
//   };
// }

export class Ball {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
  maxBallSpeed: number;
}

export class GameServiceData {
  id: string;
  BallInitData: Ball;
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
  leftScore: number;
  rightScore: number;
}
