"use client";

import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Avatar, Text } from "@chakra-ui/react";
import Commodore from "../../../assets/icons/Commodore.svg";
import FreaxLogo from "../../../assets/icons/FreaxLogo.svg";
import Image from "next/image";
import { PageWrapper } from "../animationWrapper/pageWrapper";


const canvasMiddleLineWidth = 10;

const GameHeader = ({ leftScore, rightScore }: { leftScore: number; rightScore: number }) => {
  return (
    <div className="flex items-center justify-between h-[100px] bg-black mx-auto rounded-lg p-10 drop-shadow-xl">
      <div className="flex flex-row items-center space-x-5">
        <Image src={FreaxLogo} alt="Logo" width={75} height={75} className="mt-9" />
        <Avatar size="lg" />
        <Text className="text-white font-bold text-xl">UserName</Text>
      </div>
      <div className="flex flex-row items-center space-x-10">
        <Text className="text-white font-bold text-6xl">{leftScore}</Text>
        <Text className="text-white font-bold text-6xl">--</Text>
        <Text className="text-white font-bold text-6xl">{rightScore}</Text>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <Text className="text-white font-bold text-xl">UserName</Text>
        <Avatar size="lg" />
        <Image src={Commodore} alt="Logo" width={75} height={75} className="mt-9" />
      </div>
    </div>
  );
};

const drawRoundedRectangle = (
  context: CanvasRenderingContext2D,
  rectangle: any,
  borderRadius: number
) => {
  context.fillStyle = "#FFFFFF";
  context.beginPath();
  context.moveTo(rectangle.x + borderRadius, rectangle.y);
  context.lineTo(rectangle.x + rectangle.width - borderRadius, rectangle.y);
  context.quadraticCurveTo(
    rectangle.x + rectangle.width,
    rectangle.y,
    rectangle.x + rectangle.width,
    rectangle.y + borderRadius
  );
  context.lineTo(rectangle.x + rectangle.width, rectangle.y + rectangle.height - borderRadius);
  context.quadraticCurveTo(
    rectangle.x + rectangle.width,
    rectangle.y + rectangle.height,
    rectangle.x + rectangle.width - borderRadius,
    rectangle.y + rectangle.height
  );
  context.lineTo(rectangle.x + borderRadius, rectangle.y + rectangle.height);
  context.quadraticCurveTo(rectangle.x, rectangle.y + rectangle.height, rectangle.x, rectangle.y + rectangle.height - borderRadius);
  context.lineTo(rectangle.x, rectangle.y + borderRadius);
  context.quadraticCurveTo(rectangle.x, rectangle.y, rectangle.x + borderRadius, rectangle.y);
  context.closePath();
  context.fill();
};

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
  const initialBallState = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    speedX: 5,
    speedY: 5,
    radius: 18,
  };
  const [ball, setBall] = useState(initialBallState);
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: 600,
  });

  const leftRectangleRef = useRef({
    x: 40,
    y: canvasSize.height / 2 - 250,
    width: 15,
    height: 115,
  });

  // Adjust the rightRectangleRef x position based on the canvas padding
  const rightRectangleRef = useRef({
    x: canvasSize.width - 55,
    y: canvasSize.height / 2 - 250,
    width: 15,
    height: 115,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: 600,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Recalculate the positions based on the new canvas size
    leftRectangleRef.current.y = canvasSize.height / 2 - 250;
    rightRectangleRef.current.x = canvasSize.width - 55;
    rightRectangleRef.current.y = canvasSize.height / 2 - 250;

    // Redraw the canvas with updated positions
    const context = canvasRef.current?.getContext("2d");
    if (context) draw(canvasRef.current!, context);
  }, [canvasSize]);
  

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef?.current;
    canvas.width = window.innerWidth;
    canvas.height = 600;
    const context = canvas.getContext("2d");
    if (!context) return;

    draw(canvas, context);
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    // Update the positions based on the keys pressed
    const speed = 15;
    const leftRectangle = leftRectangleRef.current;
    const rightRectangle = rightRectangleRef.current;
    // const middleX = canvasRef?.current!.width / 2;

    if (keysPressed['ArrowUp']) {
      rightRectangle.y = Math.max(0, rightRectangle.y - speed);
    }
    if (keysPressed['ArrowDown']) {
      rightRectangle.y = Math.min(canvasRef?.current!.height - rightRectangle.height, rightRectangle.y + speed);
    }

    if (keysPressed['w']) {
      leftRectangle.y = Math.max(0, leftRectangle.y - speed);
    }
    if (keysPressed['s']) {
      leftRectangle.y = Math.min(canvasRef?.current!.height - leftRectangle.height, leftRectangle.y + speed);
    }

    // Force re-render by updating the refs
    leftRectangleRef.current = { ...leftRectangle };
    rightRectangleRef.current = { ...rightRectangle };

    // Redraw the canvas
    const context = canvasRef?.current?.getContext("2d");
    if (context) draw(canvasRef?.current!, context);
  }, [keysPressed]);

  useEffect(() => {
    const animate = () => {
      // Update ball position
      let newBallX = ball.x + ball.speedX;
      let newBallY = ball.y + ball.speedY;
      const canvasWidth = window.innerWidth;
      const canvasHeight = canvasRef?.current?.height || 600;
  
      // Wrap the ball around when it exceeds the left or right side of the canvas
      if (newBallX + ball.radius <= 0 || newBallX - ball.radius >= canvasWidth) {
        if (newBallX + ball.radius <= 0) {
          setRightScore((prevScore) => prevScore + 1);
        } else {
          setLeftScore((prevScore) => prevScore + 1);
        }
        newBallX = canvasWidth / 2;
        newBallY = canvasHeight / 2;
      }
  
      // Check for collisions with the canvas boundaries
      if (newBallY - ball.radius <= 0 || newBallY + ball.radius >= canvasHeight) {
        // Ball hits top or bottom boundary
        setBall((prevBall) => ({ ...prevBall, speedY: -prevBall.speedY }));
      }
  
      // Check for collisions with the rectangles
      const leftRect = leftRectangleRef.current;
      const rightRect = rightRectangleRef.current;
  
      if (
        newBallX - ball.radius <= leftRect.x + leftRect.width &&
        newBallY > leftRect.y &&
        newBallY < leftRect.y + leftRect.height
      ) {
        // Ball hits left rectangle
        setBall((prevBall) => ({ ...prevBall, speedX: Math.abs(prevBall.speedX) }));
      }
  
      if (
        newBallX + ball.radius >= rightRect.x &&
        newBallY >= rightRect.y &&
        newBallY <= rightRect.y + rightRect.height
      ) {
        // Ball hits right rectangle
        setBall((prevBall) => ({ ...prevBall, speedX: -Math.abs(prevBall.speedX) }));
      }
  
      // Update ball position
      setBall((prevBall) => ({ ...prevBall, x: newBallX, y: newBallY }));
    };
  
    const animationFrameId = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationFrameId);
  }, [ball]);
  
  
  
  

  const draw = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const borderRadius = 5; // Adjust this value to change the border radius

    // Draw the leftRectangle with border radius
    drawRoundedRectangle(context, leftRectangleRef.current, borderRadius);
    drawRoundedRectangle(context, rightRectangleRef.current, borderRadius);

    // Draw the middle line
    const middleX = canvas.width / 2;
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = canvasMiddleLineWidth;
    context.setLineDash([20, 25]);
    context.beginPath();
    context.moveTo(middleX, 0);
    context.lineTo(middleX, canvas.height);
    context.stroke();
    context.setLineDash([]);

    // Draw the ball
    context.fillStyle = "#F0A03D";
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fill();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: true }));
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: false }));
  };


  return (
    <PageWrapper>
      <div className="w-[90%] mx-auto space-y-10 mt-[-50px]">
        <GameHeader leftScore={leftScore} rightScore={rightScore} />
        <div className="flex justify-center">
          <canvas ref={canvasRef} className="flex bg-black rounded-lg w-full h-[600px]" />
        </div>
      </div>
    </PageWrapper>
  );
}
