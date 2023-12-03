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

export class GameModalState {
  mode: string;
  playgroundtheme: {
    id: number;
    playgroundColor: string;
    balColor: string;
  };
  rounds: number;
  matches: number;
  backgroundImg: number;
}

export class GameHistory {
  userId: string;
  status: string;
  userScore: number;
  opponentScore: number;
  rounds: number;
  matches: number;
  roomId: string;
  xp: number;
}
