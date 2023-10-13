import { getGameColor } from "./GetGameColor";
import React from "react";
import { Rectangle, gameSettingsProps, Ball } from "@/utils/types/game/GameTypes";


export const canvasMiddleLineWidth = 10;
export let maxBallSpeed: number;
export let initialBallSpeed: number;
export let RecSpeed: number;

export const drawRoundedRectangle = (
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
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - borderRadius,
    y + height
  );
  context.lineTo(x + borderRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  context.lineTo(x, y + borderRadius);
  context.quadraticCurveTo(x, y, x + borderRadius, y);

  context.closePath();
  context.fill();
};

export const appliyGameMode = (gameSettings: gameSettingsProps) => {
  if (gameSettings.mode === "EASY") {
    maxBallSpeed = 20;
    initialBallSpeed = 10;
    RecSpeed = 15;
  } else if (gameSettings.mode === "MEDIUM") {
    maxBallSpeed = 25;
    initialBallSpeed = 15;
    RecSpeed = 20;
  } else {
    maxBallSpeed = 30;
    initialBallSpeed = 20;
    RecSpeed = 25;
  }
};

export const draw = (
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
  const { balColor } = getGameColor(gameSettings);

  // Draw the middle line
  context.strokeStyle = balColor;
  context.lineWidth = canvasMiddleLineWidth;
  context.setLineDash([20, 30]);
  context.beginPath();
  context.moveTo(middleX, 0);
  context.lineTo(middleX, canvas.height);
  context.stroke();
  context.setLineDash([]);

  const aspectRatio = canvas.width / canvas.height;
  const scaledRadius = ball.radius * Math.sqrt(aspectRatio);

  // Draw the ball
  context.fillStyle = balColor;
  context.beginPath();
  context.ellipse(ball.x, ball.y, scaledRadius, ball.radius, 0, 0, Math.PI * 2);
  context.fill();

  // Draw the rounded rectangles
  drawRoundedRectangle(context, leftRectangle, borderRadius, gameSettings);
  drawRoundedRectangle(context, rightRectangle, borderRadius, gameSettings);
};

export const botMove = (
  ball: Ball,
  leftRectangle: Rectangle,
  canvasHeight: number,
  prevErrorRef: React.MutableRefObject<number>,
  setLeftRectangle: React.Dispatch<React.SetStateAction<Rectangle>>
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
  const limitedNewY =
    leftRectangle.y + Math.min(maxMove, Math.max(-maxMove, movementDiff));

  setLeftRectangle((prevLeftRectangle) => ({
    ...prevLeftRectangle,
    y: limitedNewY,
  }));
};

export const animate = (
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

// export const handelGameStatic = (
//   setRobotScore: React.Dispatch<React.SetStateAction<number>>,
//   setUserScore: React.Dispatch<React.SetStateAction<number>>,
//   leftScore: number,
//   rightScore: number,
//   gameMatches: number
// ) => {

//   if (gameMatches === 0){
//     if (leftScore > rightScore){
//       setRobotScore((prev) => prev + 1);
//     }
//     else if (leftScore < rightScore){
//       setUserScore((prev) => prev + 1);
//     }
//     else {
//       setRobotScore((prev) => prev + 1);
//       setUserScore((prev) => prev + 1);
//     }
//   }
// }