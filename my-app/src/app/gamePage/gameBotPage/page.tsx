"use client";

// import { Metadata } from "next";
import React, { useRef, useEffect, useState } from "react";
import { PageWrapper } from "../../animationWrapper/pageWrapper";
import Countdown from "../ui/Countdown";
import GameHeader from "../ui/GameBotHeader";
import Image from "next/image";
import ImgBackground from "../../../../assets/icons/background.svg";
import { useAppSelector } from "@/redux/store/store";
import GameSideBar from "../ui/GameSideBar";
import { getGameColor } from "@/utils/functions/game/GetGameColor";
import LoadingScreen from "@/components/elements/loadingScreen/LoadingScreen";
import { motion } from "framer-motion";
import GameEndStatic from "../ui/GameEndStatic";
import { BackgroundsImg } from "@/utils/constants/game/GameConstants";

const canvasMiddleLineWidth: number = 10;
let maxBallSpeed: number;
let RecSpeed: number;
let initialBallSpeed: number;

const appliyGameMode = (gameSettings: gameSettingsProps) => {
  if (gameSettings.mode === "EASY") {
    maxBallSpeed = 25;
    initialBallSpeed = 10;
    RecSpeed = 20;
  } else if (gameSettings.mode === "MEDIUM") {
    maxBallSpeed = 35;
    initialBallSpeed = 20;
    RecSpeed = 30;
  } else {
    maxBallSpeed = 40;
    initialBallSpeed = 25;
    RecSpeed = 35;
  }
};

type tableResultProps = {
  botPoints: number;
  userPoints: number;
  RoundNamber: number;
};

type gameSettingsProps = {
  mode: string;
  playgroundtheme: {
    id: number;
    playgroundColor: string;
    balColor: string;
  };
  rounds: number;
  matches: number;
};

type Ball = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
};

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type throttleProps = {
  // eslint-disable-next-line no-unused-vars
  func: (...args: any) => void;
  delay: number;
};

function throttle({ func, delay }: throttleProps) {
  let lastCall = 0;
  return function (...args: any) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}


const drawRoundedRectangle = (
  context: CanvasRenderingContext2D,
  rectangle: Rectangle,
  borderRadius: number,
  gameSettings: gameSettingsProps
) => {
  const { x, y, width, height } = rectangle;

  const { balColor } = getGameColor(gameSettings);

  context.fillStyle = balColor;
  context.beginPath();

  context.moveTo(x + borderRadius, y);
  context.lineTo(x + width - borderRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  context.lineTo(x + width, y + height - borderRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
  context.lineTo(x + borderRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  context.lineTo(x, y + borderRadius);
  context.quadraticCurveTo(x, y, x + borderRadius, y);

  context.closePath();
  context.fill();
};

const draw = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  leftRectangle: Rectangle,
  rightRectangle: Rectangle,
  ball: Ball,
  gameSettings: gameSettingsProps
) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const borderRadius = 5;
  const middleX = canvas.width / 2;
  const {balColor} = getGameColor(gameSettings);

  // Draw the middle line
  context.strokeStyle = balColor;
  context.lineWidth = canvasMiddleLineWidth;
  context.setLineDash([20, 30]);
  context.beginPath();
  context.moveTo(middleX, 0);
  context.lineTo(middleX, canvas.height);
  context.stroke();
  context.setLineDash([]);

  // Draw the ball
  context.fillStyle = balColor;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();

  // Draw the rounded rectangles
  drawRoundedRectangle(context, leftRectangle, borderRadius, gameSettings);
  drawRoundedRectangle(context, rightRectangle, borderRadius, gameSettings);
};

const animate = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  setCanvasSize: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >,
  setLeftRectangle: React.Dispatch<React.SetStateAction<Rectangle>>,
  setRightRectangle: React.Dispatch<React.SetStateAction<Rectangle>>,
  setBall: React.Dispatch<React.SetStateAction<Ball>>,
  leftRectangle: Rectangle,
  rightRectangle: Rectangle,
  ball: Ball,
  canvasSize: { width: number; height: number },
  setRightScore: React.Dispatch<React.SetStateAction<number>>,
  setLeftScore: React.Dispatch<React.SetStateAction<number>>,
  setGameMatches: React.Dispatch<React.SetStateAction<number>>,
  setBotPoints: React.Dispatch<React.SetStateAction<number>>,
  setUserPoints: React.Dispatch<React.SetStateAction<number>>
) => {
  // Update ball position
  let newBallX = ball.x + ball.speedX;
  let newBallY = ball.y + ball.speedY;
  const canvasWidth = canvasSize.width;
  const canvasHeight = canvasSize.height;
  const radius = ball.radius;

  // Wrap the ball around when it exceeds the left or right side of the canvas
  if (newBallX + ball.radius <= 0 || newBallX - ball.radius >= canvasWidth) {
    if (newBallX + ball.radius <= 0) {
      setRightScore((prevScore) => prevScore + 1);
      setGameMatches((prev) => prev - 1);
      setUserPoints((prev) => prev + 1);
      
    } else {
      setLeftScore((prevScore) => prevScore + 1);
      setGameMatches((prev) => prev - 1);
      setBotPoints((prev) => prev + 1);
    }
    newBallX = canvasWidth / 2;
    newBallY = canvasHeight / 2;
    ball.speedX = -ball.speedX;
    ball.speedY = -ball.speedY;
  }

  // Bouncing effect when the ball hits the top or bottom boundary
  if (newBallY - radius <= 0) {
    newBallY = radius; // Adjust the ball's position slightly
    setBall((prevBall) => ({
      ...prevBall,
      speedY: Math.abs(prevBall.speedY),
    }));
  } else if (newBallY + radius >= canvasHeight) {
    newBallY = canvasHeight - radius; // Adjust the ball's position slightly
    setBall((prevBall) => ({
      ...prevBall,
      speedY: -Math.abs(prevBall.speedY),
    }));
  }

  // Check for collisions with the rectangles

  if (
    newBallX - radius <= leftRectangle.x + leftRectangle.width &&
    newBallY + radius >= leftRectangle.y &&
    newBallY - radius <= leftRectangle.y + leftRectangle.height
  ) {
    // Ball hits the left rectangle, change direction and angle
    const relativeIntersectY =
      leftRectangle.y + leftRectangle.height / 2 - newBallY;
    const normalizedRelativeIntersectY =
      relativeIntersectY / (leftRectangle.height / 2);
    const bounceAngle = (normalizedRelativeIntersectY * Math.PI) / 4;
    const speed =
      Math.sqrt(ball.speedX * ball.speedX + ball.speedY * ball.speedY) * 1.05;
    setBall((prevBall) => ({
      ...prevBall,
      speedX: Math.cos(bounceAngle) * speed,
      speedY: -Math.sin(bounceAngle) * speed,
    }));
  }

  if (
    newBallX + radius >= rightRectangle.x &&
    newBallY + radius >= rightRectangle.y &&
    newBallY - radius <= rightRectangle.y + rightRectangle.height
  ) {
    // Ball hits the right rectangle, change direction and angle
    const relativeIntersectY =
      rightRectangle.y + rightRectangle.height / 2 - newBallY;
    const normalizedRelativeIntersectY =
      relativeIntersectY / (rightRectangle.height / 2);
    const bounceAngle = (normalizedRelativeIntersectY * Math.PI) / 4;
    const speed =
      Math.sqrt(ball.speedX * ball.speedX + ball.speedY * ball.speedY) * 1.05;
    setBall((prevBall) => ({
      ...prevBall,
      speedX: -Math.cos(bounceAngle) * speed,
      speedY: -Math.sin(bounceAngle) * speed,
    }));
  }

  // Calculate current speed
  const currentSpeed = Math.sqrt(
    ball.speedX * ball.speedX + ball.speedY * ball.speedY
  );

  // Limit the speed to the maximum speed
  if (currentSpeed > maxBallSpeed) {
    // Calculate the scaling factor
    const scale = maxBallSpeed / currentSpeed;

    // Scale the speed components
    ball.speedX *= scale;
    ball.speedY *= scale;
  }

  // Update ball position
  setBall((prevBall) => ({ ...prevBall, x: newBallX, y: newBallY }));
};

const initialCanvasSize = {
  width: window.innerWidth,
  height: 600,
};

const initialLeftRectangle = {
  x: 10,
  y: initialCanvasSize.height / 2,
  width: 15,
  height: initialCanvasSize.height / 5,
};

const initialRightRectangle = {
  x: initialCanvasSize.width - 25,
  y: initialCanvasSize.height / 2,
  width: 15,
  height: initialCanvasSize.height / 5,
};

const initialGameEndStatic = {
  bot: "DRAW",
  user: "DRAW",
};

const handelGameStatic = (
  setRobotScore: React.Dispatch<React.SetStateAction<number>>,
  setUserScore: React.Dispatch<React.SetStateAction<number>>,
  leftScore: number,
  rightScore: number,
  gameMatches: number
) => {

  if (gameMatches === 0){
    if (leftScore > rightScore){
      setRobotScore((prev) => prev + 1);
    }
    else if (leftScore < rightScore){
      setUserScore((prev) => prev + 1);
    }
    else {
      setRobotScore((prev) => prev + 1);
      setUserScore((prev) => prev + 1);
    }
  }
}

export default function GameBotPage() {
  let gameSettings = useAppSelector((state) => state.gameReducer);
  appliyGameMode(gameSettings);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
  const [canvasSize, setCanvasSize] = useState(initialCanvasSize);
  const leftRectangleRef = useRef<Rectangle>(initialLeftRectangle);
  const rightRectangleRef = useRef<Rectangle>(initialRightRectangle);
  const initialBallState: Ball = {
    x: initialCanvasSize.width / 2,
    y: initialCanvasSize.height / 2,
    speedX: initialBallSpeed,
    speedY: initialBallSpeed,
    radius: Math.floor(
      (initialCanvasSize.width + initialCanvasSize.height) / 150
    ),
  };
  const [ball, setBall] = useState<Ball>(initialBallState);
  const [leftScore, setLeftScore] = useState<number>(0);
  const [rightScore, setRightScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [leftRectangle, setLeftRectangle] = useState<Rectangle>(
    leftRectangleRef.current
  );
  const [rightRectangle, setRightRectangle] = useState<Rectangle>(
    rightRectangleRef.current
  );
  const prevErrorRef = useRef<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [RoundNumber, setRoundNumber] = useState<number>(1);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [gameEndStatic, setGameEndStatic] = useState(initialGameEndStatic);
  const [RobotScore, setRobotScore] = useState<number>(0);
  const [UserScore, setUserScore] = useState<number>(0);
  const [gameMatches, setGameMatches] = useState<number>(gameSettings.matches);
  const [tableResults, setTableResults] = useState<tableResultProps[]>([]);
  const [botPoints, setBotPoints] = useState<number>(0);
  const [userPoints, setUserPoints] = useState<number>(0);


  const botMove = (
    ball: Ball,
    leftRectangle: Rectangle,
    canvasHeight: number,
    prevErrorRef: React.MutableRefObject<number>
  ) => {
    const botCenterY = leftRectangle.y + leftRectangle.height / 2;
    const error = botCenterY - ball.y;
  
    // PID constants (can be tuned based on scenario)
    const Kp = 0.2; // Proportional constant
    const Ki = 0.02; // Integral constant
    const Kd = 0.08; // Derivative constant
  
    // Retrieve previous error from the ref
    const prevError = prevErrorRef.current;
  
    // Calculate PID components
    const proportional = Kp * error;
    prevErrorRef.current = error; // Update the ref
  
    // Calculate control output
    const controlOutput = proportional + Ki * error + Kd * (error - prevError);
  
    // Update bot Y position with responsiveness limits
    const maxMove = RecSpeed;
    const newLeftRectangleY = Math.max(
      0,
      Math.min(
        canvasHeight - leftRectangle.height,
        leftRectangle.y - controlOutput
      )
    );
    
    // Ensure that the movement is not too abrupt
    const movementDiff = newLeftRectangleY - leftRectangle.y;
    const limitedNewY = leftRectangle.y + Math.min(maxMove, Math.max(-maxMove, movementDiff));
  
    setLeftRectangle((prevLeftRectangle) => ({
      ...prevLeftRectangle,
      y: limitedNewY,
    }));
  };

  useEffect (() => {
    if (RoundNumber == gameSettings.rounds && gameStarted) {
      if (RobotScore > UserScore){
        setGameEndStatic({
          bot: "WIN",
          user: "LOSE"
        });
      }
      else if (RobotScore < UserScore){
        setGameEndStatic({
          bot: "LOSE",
          user: "WIN"
        });
      }
      else {
        setGameEndStatic({
          bot: "DRAW",
          user: "DRAW"
        });
      }
      setGameEnded(true);
    }
    if (gameMatches == 0){
      setTableResults((prev) => [
        ...prev,
        {
          botPoints: botPoints,
          userPoints: userPoints,
          RoundNamber: RoundNumber,
        },
      ]);
      setGameStarted(false);
      setGameMatches(gameSettings.matches);
      setRoundNumber((prev) => prev + 1);
      setBotPoints(0);
      setUserPoints(0);
    }

  }, [RobotScore, UserScore]);
  

  useEffect(() => {
    const handleResize = () => {
      const aspectRatioWidth = 16;
      const aspectRatioHeight = 9;
      const newCanvasWidth = window.innerWidth;
      const newCanvasHeight = (newCanvasWidth / aspectRatioWidth) * aspectRatioHeight;

      setCanvasSize({
        width: newCanvasWidth,
        height: newCanvasHeight,
      });

      setLeftRectangle((prev) => ({
        ...prev,
        x: 10,
        y: newCanvasHeight / 2 - newCanvasHeight / 10,
        height: newCanvasHeight / 5,
      }));

      setRightRectangle((prev) => ({
        ...prev,
        x: newCanvasWidth - 25,
        y: newCanvasHeight / 2 - newCanvasHeight / 10,
        height: newCanvasHeight / 5,
      }));

      setBall({
        x: newCanvasWidth / 2,
        y: newCanvasHeight / 2,
        speedX: initialBallSpeed,
        speedY: initialBallSpeed,
        radius: Math.floor((newCanvasWidth + newCanvasHeight) / 150),
      });

      // Redraw the canvas with updated positions
      const context = canvasRef.current?.getContext("2d");
      if (context)
        draw(
          canvasRef.current!,
          context,
          leftRectangle,
          rightRectangle,
          ball,
          gameSettings
        );
    };

    handleResize();

    const handleResizeThrottled = throttle({ func: handleResize, delay: 200 });

    window.addEventListener("resize", handleResizeThrottled);

    return () => {
      window.removeEventListener("resize", handleResizeThrottled);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    const context = canvas.getContext("2d");
    if (!context) return;

    draw(canvas, context, leftRectangle, rightRectangle, ball, gameSettings);
  }, [canvasSize, ball, loading]);

  const handleCountdownEnd = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: true }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: false }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameStarted]);

  useEffect(() => {
    // Update the positions based on the keys pressed
    const speed = RecSpeed;

    if (keysPressed["ArrowUp"]) {
      setRightRectangle((prev) => ({
        ...prev,
        y: Math.max(0, prev.y - speed),
      }));
    }
    if (keysPressed["ArrowDown"]) {
      setRightRectangle((prev) => ({
        ...prev,
        y: Math.min(
          canvasSize.height - prev.height,
          prev.y + speed
        ),
      }));
    }

    // Redraw the canvas
    const context = canvasRef.current?.getContext("2d");
    if (context)
      draw(canvasRef.current!, context, leftRectangle, rightRectangle, ball, gameSettings);
  }, [keysPressed, canvasSize, ball]);


  useEffect(() => {
    
    handelGameStatic(
      setRobotScore,
      setUserScore,
      leftScore,
      rightScore,
      gameMatches
    );
    if (gameStarted && !gameEnded) {
      const animationFrameId = requestAnimationFrame(() => {
        animate(
          canvasRef,
          setCanvasSize,
          setLeftRectangle,
          setRightRectangle,
          setBall,
          leftRectangle,
          rightRectangle,
          ball,
          canvasSize,
          setRightScore,
          setLeftScore,
          setGameMatches,
          setBotPoints,
          setUserPoints
        );
        botMove(ball, leftRectangle, canvasSize.height, prevErrorRef);
      });
  
      const botInterval = setInterval(() => {
        botMove(ball, leftRectangle, canvasSize.height, prevErrorRef);
      }, 200); // Adjust the interval as needed
  
      return () => {
        cancelAnimationFrame(animationFrameId);
        clearInterval(botInterval);
      };
    }
  }, [ball, gameStarted, canvasSize]);


  return (
    <PageWrapper>
  <LoadingScreen loading={loading} setLoading={setLoading} />
  {!loading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-row">
        <div className="absolute inset-0 flex justify-center items-center h-screen w-screen ">
          <div className="relative w-full h-full">
            <Image
              src={ImgBackground}
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute flex-col w-[100%]">
            <div className="flex flex-row">
              <GameSideBar tableResults={tableResults} />
              <div className="flex flex-col space-y-10 w-full mx-[10%] h-screen justify-center items-center ">
                <GameHeader leftScore={leftScore} rightScore={rightScore} />
                <div
                  id="canvas-container"
                  className="relative flex items-center bg-background-primary rounded-lg h-[55vh] w-full max-w-[1200px]"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg z-10">
                    {!gameStarted && !gameEnded && (
                      <div className="w-full h-full">
                        <Countdown
                          seconds={3}
                          onCountdownEnd={handleCountdownEnd}
                          RoundNumber={RoundNumber}
                        />
                      </div>
                    )}
                    {gameEnded && (
                      <div className="w-full h-full">
                        <GameEndStatic
                          bot={gameEndStatic.bot}
                          user={gameEndStatic.user}
                        />
                      </div>
                    )}
                  </div>
                  <div className="relative w-full h-full">
                    {gameSettings.backgroundImg !== -1 && (
                      <Image
                        src={BackgroundsImg[gameSettings.backgroundImg].src}
                        alt="Background"
                        className={`object-cover w-full h-full rounded-lg opacity-60 ${gameSettings.playgroundtheme.playgroundColor}}`}
                      />
                    )}
                    <canvas
                      ref={canvasRef}
                      width={canvasSize.width}
                      height={canvasSize.height}
                      className={`w-full h-full rounded-lg absolute top-0 left-0 ${
                        gameSettings.backgroundImg === -1
                          ? gameSettings.playgroundtheme.playgroundColor
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</PageWrapper>

  );
}
