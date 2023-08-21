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
import {
  draw,
  initialBallSpeed,
  RecSpeed,
  appliyGameMode,
  Ball,
  Rectangle,
  botMove,
  throttle,
  handleResize,
  animate,
} from "@/utils/functions/game/GameLogic";


export default function GameBotPage() {
  let gameSettings = useAppSelector((state) => state.gameReducer);
  appliyGameMode(gameSettings);
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
    speedX: initialBallSpeed,
    speedY: initialBallSpeed,
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


  useEffect(() => {
    handleResize(
      canvasRef,
      setCanvasSize,
      setLeftRectangle,
      setRightRectangle,
      setBall,
      leftRectangleRef.current,
      rightRectangleRef.current,
      initialBallState,
      gameSettings
    );

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
        y: Math.min(canvasSize.height - prev.height, prev.y + speed),
      }));
    }

    // Redraw the canvas
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
  }, [keysPressed, canvasSize, ball]);

  useEffect(() => {

    if (gameStarted) {
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
        );
        botMove(ball, leftRectangle, canvasSize.height, prevErrorRef, setLeftRectangle);
      });

      const botInterval = setInterval(() => {
        botMove(ball, leftRectangle, canvasSize.height, prevErrorRef, setLeftRectangle);
      }, 200);

      return () => {
        cancelAnimationFrame(animationFrameId);
        clearInterval(botInterval);
      };
    }
  }, [ball, gameStarted, canvasSize, gameSettings]);

  return (
    <PageWrapper>
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
              <GameSideBar />
              <div className="flex flex-col space-y-10 w-full mx-[10%] h-screen justify-center items-center ">
                <GameHeader leftScore={leftScore} rightScore={rightScore} />
                <div
                  id="canvas-container"
                  className="flex items-center bg-background-primary rounded-lg  h-[55vh] w-full max-w-[1200px]"
                >
                  <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    {!gameStarted && (
                      <Countdown
                        seconds={5}
                        onCountdownEnd={handleCountdownEnd}
                      />
                    )}
                  </div>
                  <canvas
                    ref={canvasRef}
                    width={canvasSize.width}
                    height={canvasSize.height}
                    className={`w-full h-full rounded-lg  ${gameSettings.playgroundtheme.playgroundColor}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
