/* eslint-disable react-hooks/exhaustive-deps */
"use client";

// import { Metadata } from "next";
import React, { useRef, useEffect, useState } from "react";
import { PageWrapper } from "../../animationWrapper/pageWrapper";
import Countdown from "../ui/Countdown";
import GameHeader from "../ui/GameBotHeader";
import Image from "next/image";
import { useAppSelector } from "@/redux/store/store";
import GameSideBar from "../ui/GameSideBar";
import LoadingScreen from "@/components/elements/loadingScreen/LoadingScreen";
import { motion } from "framer-motion";
import GameEndStatic from "../ui/GameEndStatic";
import { BackgroundsImg } from "@/utils/constants/game/GameConstants";
import { Text} from "@chakra-ui/react";
import {
  animate,
  appliyGameMode,
  RecSpeed,
  initialBallSpeed,
  draw,
  botMove,
  throttle,
} from "@/utils/functions/game/GameLogic";
import {
  Ball,
  tableResultProps,
  Rectangle,
} from "@/utils/types/game/GameTypes";
import {
  initialCanvasSize,
  initialLeftPaddle,
  initialRightPaddle,
  initialGameEndStatic,
} from "@/utils/constants/game/GameConstants";




export default function GameBotPage() {
  let gameSettings = useAppSelector((state) => state.gameReducer);
  appliyGameMode(gameSettings);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
  const [canvasSize, setCanvasSize] = useState(initialCanvasSize);
  const leftRectangleRef = useRef<Rectangle>(initialLeftPaddle);
  const rightRectangleRef = useRef<Rectangle>(initialRightPaddle);
  const initialBallState: Ball = {
    x: initialCanvasSize.width / 2,
    y: initialCanvasSize.height / 2,
    speedX: initialBallSpeed,
    speedY: initialBallSpeed,
    radius: Math.floor((canvasSize.width + canvasSize.height) / 160),
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
  const [gameMatches, setGameMatches] = useState<number>(gameSettings.matches);
  const [tableResults, setTableResults] = useState<tableResultProps[]>([]);
  const [botPoints, setBotPoints] = useState<number>(0);
  const [userPoints, setUserPoints] = useState<number>(0);
  const [gamePause, setGamePause] = useState<boolean>(false);

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
        radius: Math.floor((newCanvasWidth + newCanvasHeight) / 160),
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

  //---------------------------------------------------------------------------

  useEffect (() => {
    if (RoundNumber == gameSettings.rounds && gameMatches == 0) {
      if (leftScore > rightScore){
        setGameEndStatic({
          bot: "WIN",
          user: "LOSE"
        });
      }
      else if (leftScore < rightScore){
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

  }, [leftScore, rightScore]);

  //---------------------------------------------------------------------------


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
    if (!gameStarted || gameEnded || gamePause) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
        setGamePause((prevGamePause) => !prevGamePause);
      } else {
        setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: true }));
      }
    };
  
    const handleKeyUp = (event: KeyboardEvent) => {
      setKeysPressed((prevKeys) => ({ ...prevKeys, [event.key]: false }));
    };
  
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    if (!gameStarted) {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gamePause, gameEnded, ball, gameStarted]);

  //---------------------------------------------------------------------------

  useEffect(() => {
    if (gamePause || !gameStarted || gameEnded) return;
  
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

    const context = canvasRef.current?.getContext("2d");
    if (context)
      draw(canvasRef.current!, context, leftRectangle, rightRectangle, ball, gameSettings);
  
  }, [keysPressed, canvasSize, ball, gameStarted, gameEnded]);

  //---------------------------------------------------------------------------

  useEffect(() => {

    if (gamePause || !gameStarted || gameEnded) return;
    
 
      const animationFrameId = requestAnimationFrame(() => {
        animate(
          setBall,
          leftRectangle,
          rightRectangle,
          ball,
          canvasSize,
          setRightScore,
          setLeftScore,
          setGameMatches,
          setBotPoints,
          setUserPoints,
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
  }, [ball, gameStarted, canvasSize, gamePause, gameEnded]);

  //---------------------------------------------------------------------------


  return (
    <PageWrapper>
      <LoadingScreen loading={loading} setLoading={setLoading} />
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <div className="flex-col w-full">
              <div className="flex flex-row">
                <GameSideBar
                  tableResults={tableResults}
                  gamePause={gamePause}
                  setGamePause={setGamePause}
                  gameEnded={gameEnded}
                  gameStarted={gameStarted}
                  gameMode="BOT"
                />
                <div className="flex flex-col space-y-10 w-full mx-[10%] h-full justify-center items-center mt-[100px]">
                  <GameHeader leftScore={leftScore} rightScore={rightScore} />
                  <div
                    id="canvas-container"
                    className="relative flex items-center bg-background-primary rounded-lg h-[50vh] w-full max-w-[1200px]"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg z-10">
                      {gamePause && !gameEnded && (
                        <div className="flex justify-center w-full h-full bg-black opacity-50 rounded-lg z-10">
                          <Text className="text-white text-4xl font-semibold">
                            Pause
                          </Text>
                        </div>
                      )}
                      {!gameStarted && !gameEnded && (
                        <div className="w-full h-full">
                          <Countdown
                            seconds={3}
                            onCountdownEnd={handleCountdownEnd}
                            RoundNumber={RoundNumber}
                            gamePause={gamePause}
                          />
                        </div>
                      )}
                      {gameEnded && (
                        <>
                          <div className="w-full h-full">
                            <GameEndStatic
                              opponent={gameEndStatic.bot}
                              user={gameEndStatic.user}
                              isFriendMode={false}
                            />
                          </div>
                        </>
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
        </motion.div>
      )}
    </PageWrapper>
  );
}
