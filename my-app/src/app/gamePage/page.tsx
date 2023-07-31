"use client";

import React, { useRef, useEffect } from "react";
import { Avatar, Text } from "@chakra-ui/react";
import Commodore from "../../../assets/icons/Commodore.svg";
import FreaxLogo from "../../../assets/icons/FreaxLogo.svg";
import Image from "next/image";
import { PageWrapper } from "../animationWrapper/pageWrapper";

const GameHeader = () => {
  return (
    <div className="flex items-center justify-between h-[100px] bg-black mx-auto rounded-lg p-10 drop-shadow-xl">
      <div className="flex flex-row items-center space-x-5">
        <Image src={FreaxLogo} alt="Logo" width={75} height={75} className="mt-9" />
        <Avatar size="lg" />
        <Text className="text-white font-bold">UserName</Text>
      </div>
      <div className="flex flex-row items-center space-x-10">
        <Text className="text-white font-bold text-6xl">50</Text>
        <Text className="text-white font-bold text-6xl">--</Text>
        <Text className="text-white font-bold text-6xl">55</Text>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <Text className="text-white font-bold">UserName</Text>
        <Avatar size="lg" />
        <Image src={Commodore} alt="Logo" width={75} height={75} className="mt-9" />
      </div>
    </div>
  );
};

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leftRectangleRef = useRef({
    x: 40,
    y: 220,
    width: 15,
    height: 115,
  });
  const rightRectangleRef = useRef({
    x: window.innerWidth - 55,
    y: 220,
    width: 15,
    height: 115,
  });

  const canvasMiddleLineWidth = 10;

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = 600;
    const context = canvas.getContext("2d");
    if (!context) return;

    draw(canvas, context);
  });

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext("2d");
    if (!context) return;

    draw(canvas, context);
  }, [leftRectangleRef, rightRectangleRef]);

  // Draw a rounded rectangle with a specified border radius
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

  // Draw a semicircle
  // const drawSemicircle = (
  //   context: CanvasRenderingContext2D,
  //   x: number,
  //   y: number,
  //   radius: number,
  //   direction: "left" | "right"
  // ) => {
  //   context.beginPath();
  //   if (direction === "left") {
  //     context.arc(x, y, radius, 0.5 * Math.PI, 1.5 * Math.PI);
  //   } else if (direction === "right") {
  //     context.arc(x, y, radius, 1.5 * Math.PI, 0.5 * Math.PI);
  //   }
  //   context.stroke();
  //   context.fill();
  // };

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
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const speed = 20;
    const leftRectangle = leftRectangleRef.current;
    const rightRectangle = rightRectangleRef.current;
    const middleX = canvasRef.current!.width / 2;

    switch (event.key) {
      case 'ArrowUp':
        rightRectangle.y = Math.max(0, rightRectangle.y - speed);
        break;
      case 'ArrowDown':
        rightRectangle.y = Math.min(canvasRef.current!.height - rightRectangle.height, rightRectangle.y + speed);
        break;
      case 'ArrowLeft':
        rightRectangle.x = Math.max(middleX + 10, rightRectangle.x - speed);
        break;
      case 'ArrowRight':
        rightRectangle.x = Math.min(canvasRef.current!.width - rightRectangle.width, rightRectangle.x + speed);
        break;
      case 'w':
        leftRectangle.y = Math.max(0, leftRectangle.y - speed);
        break;
      case 's':
        leftRectangle.y = Math.min(canvasRef.current!.height - leftRectangle.height, leftRectangle.y + speed);
        break;
      case 'a':
        leftRectangle.x = Math.max(0, leftRectangle.x - speed);
        break;
      case 'd':
        leftRectangle.x = Math.min(middleX - canvasMiddleLineWidth - leftRectangle.width, leftRectangle.x + speed);
        break;
      default:
        break;
    }

    // Force re-render by updating the refs
    leftRectangleRef.current = { ...leftRectangle };
    rightRectangleRef.current = { ...rightRectangle };

    // Redraw the canvas
    const context = canvasRef.current?.getContext("2d");
    if (context) draw(canvasRef.current!, context);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <PageWrapper>
      <div className="w-[90%] mx-auto space-y-10 mt-[-50px]">
        <GameHeader />
        <div className="flex justify-center">
          <canvas ref={canvasRef} className="bg-black rounded-lg w-full h-[600px]" />
        </div>
      </div>
    </PageWrapper>
  );
}
