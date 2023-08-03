"use client";

import React, { useRef, useEffect, useState} from "react";
import { Avatar, Text } from "@chakra-ui/react";
import Commodore from "../../../assets/icons/Commodore.svg";
import FreaxLogo from "../../../assets/icons/FreaxLogo.svg";
import Image from "next/image";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import Countdown from "./ui/Countdown";

const canvasMiddleLineWidth = 10;

type Ball = {
  x: number;
  y: number;
  speedX: number
  speedY: number;
  radius: number;
};

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const GameHeader = ({
  leftScore,
  rightScore,
}: {
  leftScore: number;
  rightScore: number;
}) => {
  return (
    <div className="flex items-center justify-between h-[100px] bg-background-primary mx-auto rounded-lg p-10 drop-shadow-xl w-[100%]">
      <div className="flex flex-row items-center space-x-5">
        <Image
          src={FreaxLogo}
          alt="Logo"
          width={75}
          height={75}
          className="mt-9"
        />
        <Avatar size="lg" />
        <Text className="text-text-primary font-bold text-xl">UserName</Text>
      </div>
      <div className="flex flex-row items-center space-x-10">
        <Text className="text-text-primary font-bold text-6xl">
          {leftScore}
        </Text>
        <Text className="text-text-primary font-bold text-6xl">--</Text>
        <Text className="text-text-primary font-bold text-6xl">
          {rightScore}
        </Text>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <Text className="text-text-primary font-bold text-xl">UserName</Text>
        <Avatar size="lg" />
        <Image
          src={Commodore}
          alt="Logo"
          width={75}
          height={75}
          className="mt-9"
        />
      </div>
    </div>
  );
};

const drawRoundedRectangle = (
  context: CanvasRenderingContext2D,
  rectangle: Rectangle,
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
  context.lineTo(
    rectangle.x + rectangle.width,
    rectangle.y + rectangle.height - borderRadius
  );
  context.quadraticCurveTo(
    rectangle.x + rectangle.width,
    rectangle.y + rectangle.height,
    rectangle.x + rectangle.width - borderRadius,
    rectangle.y + rectangle.height
  );
  context.lineTo(rectangle.x + borderRadius, rectangle.y + rectangle.height);
  context.quadraticCurveTo(
    rectangle.x,
    rectangle.y + rectangle.height,
    rectangle.x,
    rectangle.y + rectangle.height - borderRadius
  );
  context.lineTo(rectangle.x, rectangle.y + borderRadius);
  context.quadraticCurveTo(
    rectangle.x,
    rectangle.y,
    rectangle.x + borderRadius,
    rectangle.y
  );
  context.closePath();
  context.fill();
};

const draw = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  leftRectangleRef: Rectangle,
  rightRectangleRef: Rectangle,
  ball: Ball
) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const borderRadius = 5;

  // Draw the middle line
  const middleX = canvas.width / 2;
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

  drawRoundedRectangle(context, leftRectangleRef, borderRadius);
  drawRoundedRectangle(context, rightRectangleRef, borderRadius);
};

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: 600,
  });
  const leftRectangleRef = useRef({
    x: 10,
    y: canvasSize.height / 2,
    width: 15,
    height: canvasSize.height / 5,
  });

  const rightRectangleRef = useRef({
    x: canvasSize.width - 25,
    y: canvasSize.height / 2,
    width: 15,
    height: canvasSize.height / 5,
  });
  const initialBallState = {
    x: canvasSize.width / 2,
    y: canvasSize.height / 2,
    speedX: 7,
    speedY: 7,
    radius: Math.floor((canvasSize.width + canvasSize.height) / 150)
  };
  const [ball, setBall] = useState(initialBallState);
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        // Calculate canvas height based on a 16:9 aspect ratio
        const aspectRatioWidth = 16;
        const aspectRatioHeight = 9;
        const newCanvasWidth = window.innerWidth;
        const newCanvasHeight = (newCanvasWidth / aspectRatioWidth) * aspectRatioHeight;
      
        setCanvasSize({
          width: newCanvasWidth,
          height: newCanvasHeight,
        });
      };
    
      handleResize(); // Initial resize
    
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);



  useEffect(() => {
    // Recalculate the positions based on the new canvas size
    leftRectangleRef.current.x = 10;
    leftRectangleRef.current.y = canvasSize.height / 2 - (canvasSize.height / 10)

    rightRectangleRef.current.x = canvasSize.width - 25;
    rightRectangleRef.current.y = canvasSize.height / 2 - (canvasSize.height / 10)

    leftRectangleRef.current.height = canvasSize.height / 5;
    rightRectangleRef.current.height = canvasSize.height / 5;

    setBall({
      x: canvasSize.width / 2,
      y: canvasSize.height / 2,
      speedX: 7,
      speedY: 7,
      radius: Math.floor((canvasSize.width + canvasSize.height) / 150)
    });

    // Redraw the canvas with updated positions
    const context = canvasRef.current?.getContext("2d");
    if (context)
      draw(
        canvasRef.current!,
        context,
        leftRectangleRef.current,
        rightRectangleRef.current,
        ball
      );
  }, [canvasSize]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef?.current;
    canvas.width = window.innerWidth;
    canvas.height = canvasSize.height;
    const context = canvas.getContext("2d");
    if (!context) return;

    draw(
      canvas,
      context,
      leftRectangleRef.current,
      rightRectangleRef.current,
      ball
    );
  });

  const handleCountdownEnd = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    // const handleStartGame = (event: KeyboardEvent) => {
    //   if (event.key === " ") setGameStarted(true);
    // };

    const handleKeyDown = (event: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: true }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: false }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    // document.addEventListener("keydown", handleStartGame);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      // document.removeEventListener("keydown", handleStartGame);
    };
  }, []);

  useEffect(() => {
    // Update the positions based on the keys pressed
    const speed = 20;
    const leftRectangle = leftRectangleRef.current;
    const rightRectangle = rightRectangleRef.current;
    // const middleX = canvasRef?.current!.width / 2;

    if (keysPressed["ArrowUp"]) {
      rightRectangle.y = Math.max(0, rightRectangle.y - speed);
    }
    if (keysPressed["ArrowDown"]) {
      rightRectangle.y = Math.min(
        canvasRef?.current!.height - rightRectangle.height,
        rightRectangle.y + speed
      );
    }

    if (keysPressed["w"]) {
      leftRectangle.y = Math.max(0, leftRectangle.y - speed);
    }
    if (keysPressed["s"]) {
      leftRectangle.y = Math.min(
        canvasRef?.current!.height - leftRectangle.height,
        leftRectangle.y + speed
      );
    }

    // Force re-render by updating the refs
    leftRectangleRef.current = { ...leftRectangle };
    rightRectangleRef.current = { ...rightRectangle };

    // Redraw the canvas
    const context = canvasRef?.current?.getContext("2d");
    if (context)
      draw(canvasRef?.current!, context, leftRectangle, rightRectangle, ball);
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
        newBallY + ball.radius >= leftRect.y &&
        newBallY - ball.radius <= leftRect.y + leftRect.height
      ) {
        // Ball hits left rectangle
        setBall((prevBall) => ({ ...prevBall, speedX: Math.abs(prevBall.speedX) }));
      }

      if (
        newBallX + ball.radius >= rightRect.x &&
        newBallY + ball.radius >= rightRect.y &&
        newBallY - ball.radius <= rightRect.y + rightRect.height
      ) {
        // Ball hits right rectangle
        setBall((prevBall) => ({ ...prevBall, speedX: -Math.abs(prevBall.speedX) }));
      }
  
      // Update ball position
      setBall((prevBall) => ({ ...prevBall, x: newBallX, y: newBallY }));
    };
  
    if (gameStarted) {
      const animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [ball, gameStarted]);

  return (
    <PageWrapper>
      <div className="flex flex-col w-[80%] mx-auto space-y-10 mt-[-50px]">
        <GameHeader leftScore={leftScore} rightScore={rightScore} />
        <div
          id="canvas-container"
          className="bg-background-primary rounded-lg w-full h-[55vh] "
        >
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          {!gameStarted &&
            <Countdown  seconds={5} onCountdownEnd={handleCountdownEnd} />
          }
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
