

export type Rectangle = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  
  export type gameSettingsProps = {
    mode: string;
    playgroundtheme: {
      id: number;
      playgroundColor: string;
      balColor: string;
    };
    rounds: number;
    matches: number;
  };
  
  export type Ball = {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    radius: number;
  };

  export type tableResultProps = {
    botPoints: number;
    userPoints: number;
    RoundNamber: number;
  };

  export type CanvasData = {
    leftPaddle: {
      x: number;
      y: number;
      width: number;
      height: number;
    },
    rightPaddle: {
      x: number;
      y: number;
      width: number;
      height: number;
    },
  };
  
  export type GameUpdateData = {
    ball: Ball;
    leftScore: number;
    rightScore: number;
  };