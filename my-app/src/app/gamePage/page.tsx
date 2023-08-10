"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import Countdown from "./ui/Countdown";
import GameHeader from "./ui/GameHeader";

const canvasMiddleLineWidth = 10;
const maxBallSpeed = 25;
const RecSpeed = 20;

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
  borderRadius: number
) => {
  const { x, y, width, height } = rectangle;

  context.fillStyle = "#FFFFFF";
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
  ball: Ball
) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const borderRadius = 5;
  const middleX = canvas.width / 2;

  // Draw the middle line
  context.strokeStyle = "#E4E4E4";
  context.lineWidth = canvasMiddleLineWidth;
  context.setLineDash([20, 30]);
  context.beginPath();
  context.moveTo(middleX, 0);
  context.lineTo(middleX, canvas.height);
  context.stroke();
  context.setLineDash([]);

  // Draw the ball
  context.fillStyle = "#FFFFFF";
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();

  // Draw the rounded rectangles
  drawRoundedRectangle(context, leftRectangle, borderRadius);
  drawRoundedRectangle(context, rightRectangle, borderRadius);
};


export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: 600,
  });
  const leftRectangleRef = useRef<Rectangle>({
    x: 10,
    y: canvasSize.height / 2,
    width: 15,
    height: canvasSize.height / 5,
  });

  const rightRectangleRef = useRef<Rectangle>({
    x: canvasSize.width - 25,
    y: canvasSize.height / 2,
    width: 15,
    height: canvasSize.height / 5,
  });
  const initialBallState: Ball = {
    x: canvasSize.width / 2,
    y: canvasSize.height / 2,
    speedX: 7,
    speedY: 7,
    radius: Math.floor((canvasSize.width + canvasSize.height) / 150),
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
  
    // Update bot's Y position with responsiveness limits
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
        speedX: 7,
        speedY: 7,
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
          ball
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

    draw(canvas, context, leftRectangle, rightRectangle, ball);
  }, [canvasSize, ball]);

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
      draw(canvasRef.current!, context, leftRectangle, rightRectangle, ball);
  }, [keysPressed, canvasSize, ball]);

  useEffect(() => {
    const animate = () => {
      // Update ball position
      let newBallX = ball.x + ball.speedX;
      let newBallY = ball.y + ball.speedY;
      const canvasWidth = canvasSize.width;
      const canvasHeight = canvasSize.height;
      const radius = ball.radius;
    
      // Wrap the ball around when it exceeds the left or right side of the canvas
      if (
        newBallX + ball.radius <= 0 ||
        newBallX - ball.radius >= canvasWidth
      ) {
        if (newBallX + ball.radius <= 0) {
          setRightScore((prevScore) => prevScore + 1);
        } else {
          setLeftScore((prevScore) => prevScore + 1);
        }
        newBallX = canvasWidth / 2;
        newBallY = canvasHeight / 2;
      }
    
      // Bouncing effect when the ball hits the top or bottom boundary
      if (newBallY - radius <= 0) {
        newBallY = radius; // Adjust the ball's position slightly
        setBall((prevBall) => ({ ...prevBall, speedY: Math.abs(prevBall.speedY) }));
      } else if (newBallY + radius >= canvasHeight) {
        newBallY = canvasHeight - radius; // Adjust the ball's position slightly
        setBall((prevBall) => ({ ...prevBall, speedY: -Math.abs(prevBall.speedY) }));
      }
    
      // Check for collisions with the rectangles
    
      if (
        newBallX - radius <= leftRectangle.x + leftRectangle.width &&
        newBallY + radius >= leftRectangle.y &&
        newBallY - radius <= leftRectangle.y + leftRectangle.height
      ) {
        // Ball hits the left rectangle, change direction and angle
        const relativeIntersectY = leftRectangle.y + leftRectangle.height / 2 - newBallY;
        const normalizedRelativeIntersectY = relativeIntersectY / (leftRectangle.height / 2);
        const bounceAngle = (normalizedRelativeIntersectY * Math.PI) / 4;
        const speed = Math.sqrt(ball.speedX * ball.speedX + ball.speedY * ball.speedY) * 1.05;
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
        const relativeIntersectY = rightRectangle.y + rightRectangle.height / 2 - newBallY;
        const normalizedRelativeIntersectY = relativeIntersectY / (rightRectangle.height / 2);
        const bounceAngle = (normalizedRelativeIntersectY * Math.PI) / 4;
        const speed = Math.sqrt(ball.speedX * ball.speedX + ball.speedY * ball.speedY) * 1.05;
        setBall((prevBall) => ({
          ...prevBall,
          speedX: -Math.cos(bounceAngle) * speed,
          speedY: -Math.sin(bounceAngle) * speed,
        }));
      }
    
      // Calculate current speed
      const currentSpeed = Math.sqrt(ball.speedX * ball.speedX + ball.speedY * ball.speedY);
    
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

    if (gameStarted) {
      const animationFrameId = requestAnimationFrame(() => {
        animate();
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
      <div className="flex flex-col w-[80%] mx-auto space-y-10 mt-[-50px]">
        <GameHeader leftScore={leftScore} rightScore={rightScore} />
        <div
          id="canvas-container"
          className="bg-background-primary rounded-lg w-full h-[55vh] "
        >
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {!gameStarted && (
              <Countdown seconds={5} onCountdownEnd={handleCountdownEnd} />
            )}
          </div>
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="w-full h-full"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
