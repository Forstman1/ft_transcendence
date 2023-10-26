

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

  type leftPaddle = {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  type rightPaddle = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  
  export type GameUpdateData = {
    ball: Ball;
    leftScore: number;
    rightScore: number;
    leftPaddle: leftPaddle;
    rightPaddle: rightPaddle;
<<<<<<< HEAD
=======
  };

  export type throttleProps = {
    // eslint-disable-next-line no-unused-vars
    func: (...args: any) => void;
    delay: number;
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
  };