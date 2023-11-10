"use client";

import React, { useRef, useEffect, useState, use} from "react";
import { PageWrapper } from "../../animationWrapper/pageWrapper";
import Countdown from "../ui/Countdown";
import GameHeader from "../ui/GameFriendHeader";
import Image from "next/image";
import { useAppSelector } from "@/redux/store/store";
import GameSideBar from "../ui/GameSideBar";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import LoadingScreen from "@/components/elements/loadingScreen/LoadingScreen";
=======
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
import { motion } from "framer-motion";
import GameEndStatic from "../ui/GameEndStatic";
import { BackgroundsImg } from "@/utils/constants/game/GameConstants";
import {
  appliyGameMode,
  RecSpeed,
  initialBallSpeed,
  draw,
  maxBallSpeed,
} from "@/utils/functions/game/GameLogic";
import {
  Ball,
  tableResultProps,
  Rectangle,
  CanvasData,
  GameUpdateData,
} from "@/utils/types/game/GameTypes";
import {
  initialCanvasSize,
  initialLeftPaddle,
  initialRightPaddle,
  initialGameEndStatic,
} from "@/utils/constants/game/GameConstants";

<<<<<<< HEAD
=======
<<<<<<< HEAD
// let clientId: string;
=======
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e

export default function GameFriendPage() {
  let gameSettings = useAppSelector((state) => state.gameReducer);
  //-----------------socket data -----------------------------
  const socketState = useAppSelector((state) => state.globalSocketReducer);
  const socket = socketState.socket;
  const roomId = socketState.roomId;
  //----------------------------------------------------------
  appliyGameMode(gameSettings);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});
<<<<<<< HEAD
  const [canvasSize, setCanvasSize] = useState(initialCanvasSize);
=======
<<<<<<< HEAD
  const canvasSize = initialCanvasSize;
=======
  const [canvasSize, setCanvasSize] = useState(initialCanvasSize);
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  const initialBallState: Ball = {
    x: canvasSize.width / 2,
    y: canvasSize.height / 2,
    speedX: initialBallSpeed,
    speedY: initialBallSpeed,
<<<<<<< HEAD
    radius: Math.floor(canvasSize.height / 55),
=======
<<<<<<< HEAD
    radius: Math.floor((canvasSize.width + canvasSize.height) / 150),
=======
    radius: Math.floor(canvasSize.height / 55),
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  };
  const leftPaddleRef = useRef<Rectangle>(initialLeftPaddle);
  const rightPaddleRef = useRef<Rectangle>(initialRightPaddle);
  const [ball, setBall] = useState<Ball>(initialBallState);
  const [leftScore, setLeftScore] = useState<number>(0);
  const [rightScore, setRightScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [leftPaddle, setLeftPaddle] = useState<Rectangle>(
    leftPaddleRef.current
  );
  const [rightPaddle, setRightPaddle] = useState<Rectangle>(
    rightPaddleRef.current
  );
  const [RoundNumber, setRoundNumber] = useState<number>(1);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [gameEndStatic, setGameEndStatic] = useState(initialGameEndStatic);
  const [gameMatches, setGameMatches] = useState<number>(gameSettings.matches);
  const [tableResults, setTableResults] = useState<tableResultProps[]>([]);
  const [friendPoints, setFriendPoints] = useState<number>(0);
  const [userPoints, setUserPoints] = useState<number>(0);
  const [gamePause, setGamePause] = useState<boolean>(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [mounted, setMounted] = useState(false);
  if (mounted) {
    window?.addEventListener('offline', () => {
      if (
        socket &&
        socket.io &&
        socket.io.engine &&
        socket.io.engine.transport
      ) {
        socket.io.engine.transport.close()
      }
    })
    
  }
     

  
useEffect(() => {
  setMounted(true);
}, []);

<<<<<<< HEAD
  //--------------------------------Socket Code logic-------------------------------------------


  useEffect(() => {

    if (socket !== null && roomId !== "") {
<<<<<<< HEAD
=======
      console.log("socket is not null");
=======
  window.addEventListener('offline', () => {
    if (
      socket &&
      socket.io &&
      socket.io.engine &&
      socket.io.engine.transport
    ) {
      socket.io.engine.transport.close()
    }
  })


  //--------------------------------Socket Code logic-------------------------------------------


  useEffect(() => {

    if (socket !== null && roomId !== "") {
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
      let prevLeftScore = 0;
      let prevRightScore = 0;
      
      socket.on("GetGameData", (data:GameUpdateData) => {
        setBall({
          x: (data.ball.x * canvasSize.width) / 100,
          y: (data.ball.y * canvasSize.height) / 100,
          speedX: (data.ball.speedX * canvasSize.width) / 100,
          speedY: (data.ball.speedY * canvasSize.height) / 100,
<<<<<<< HEAD
          radius: (data.ball.radius * canvasSize.height) / 100,
=======
<<<<<<< HEAD
          radius: (data.ball.radius * Math.max(canvasSize.width, canvasSize.height)) / 100,
=======
          radius: (data.ball.radius * canvasSize.height) / 100,
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
        });
        setLeftPaddle({
          x: (data.leftPaddle.x * canvasSize.width) / 100,
          y: (data.leftPaddle.y * canvasSize.height) / 100,
          width: (data.leftPaddle.width * canvasSize.width) / 100,
          height: (data.leftPaddle.height * canvasSize.height) / 100,
        });
        setRightPaddle({
          x: (data.rightPaddle.x * canvasSize.width) / 100,
          y: (data.rightPaddle.y * canvasSize.height) / 100,
          width: (data.rightPaddle.width * canvasSize.width) / 100,
          height: (data.rightPaddle.height * canvasSize.height) / 100,
        });
        if (!gameEnded) {
          setLeftScore(data.leftScore);
          setRightScore(data.rightScore);
          if (prevLeftScore < data.leftScore) {
            setGameMatches((prev) => prev - 1);
            setUserPoints((prev) => prev + 1);
          } else if (prevRightScore < data.rightScore) {
            setGameMatches((prev) => prev - 1);
            setFriendPoints((prev) => prev + 1);
          }
          prevLeftScore = data.leftScore;
          prevRightScore = data.rightScore;
        }
      });
    }

    return () => {
      if (socket && roomId !== "") {
        socket.off("GetGameData");
      }
    };
  }, [socketState]);

<<<<<<< HEAD
  //----------------------------------------------------------------------------------------------
=======
<<<<<<< HEAD
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  const closeSocketConnection = () => {
    if (socket) {
        socket.emit("endGame", roomId);
    }
  };

<<<<<<< HEAD
  //----------------------------------------------------------------------------------------------
=======
=======
  //----------------------------------------------------------------------------------------------
  const closeSocketConnection = () => {
    if (socket) {
        socket.emit("endGame", roomId);
    }
  };

  //----------------------------------------------------------------------------------------------
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  useEffect(() => {
    if (gameStarted && !hasInitialized && roomId !== "") {
      const initCanvasData = {
        ball: {
          x: 50,
          y: 50,
          speedX: (initialBallState.speedX * 100) / canvasSize.width,
          speedY: (initialBallState.speedY * 100) / canvasSize.height,
<<<<<<< HEAD
          radius: (Math.floor(canvasSize.height / 55) * 100) / canvasSize.height,
=======
<<<<<<< HEAD
          radius: (Math.floor((canvasSize.width + canvasSize.height) / 150) / Math.max(canvasSize.width, canvasSize.height)) * 100,
=======
          radius: (Math.floor(canvasSize.height / 55) * 100) / canvasSize.height,
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
          maxBallSpeed: (maxBallSpeed * 100) / canvasSize.width,
        },
        leftPaddle: {
          x: (leftPaddle.x * 100) / canvasSize.width,
          y: (leftPaddle.y * 100) / canvasSize.height,
          width: (leftPaddle.width * 100) / canvasSize.width,
          height: (leftPaddle.height * 100) / canvasSize.height,
        },
        rightPaddle: {
          x: (rightPaddle.x * 100) / canvasSize.width,
          y: (rightPaddle.y * 100) / canvasSize.height,
          width: (rightPaddle.width * 100) / canvasSize.width,
          height: (rightPaddle.height * 100) / canvasSize.height,
        },
      };
      socket?.emit("sendGameData", { initCanvasData, roomId });
      setHasInitialized(true);
    }
  }, [gameStarted, hasInitialized]);

<<<<<<< HEAD

  //-------------------------------Update Paddles----------------------------------------------
=======
<<<<<<< HEAD
=======

  //-------------------------------Update Paddles----------------------------------------------
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  useEffect(() => {
    if (roomId !== "") {
    const canvasData: CanvasData = {
      leftPaddle: {
        x: (leftPaddle.x  * 100) / canvasSize.width,
        y: (leftPaddle.y  * 100) / canvasSize.height,
        width: (leftPaddle.width  * 100) / canvasSize.width,
        height: (leftPaddle.height  * 100) / canvasSize.height,
      },
      rightPaddle: {
        x: (rightPaddle.x  * 100) / canvasSize.width,
        y: (rightPaddle.y  * 100) / canvasSize.height,
        width: (rightPaddle.width  * 100) / canvasSize.width,
        height: (rightPaddle.height  * 100) / canvasSize.height,
      },
    };
<<<<<<< HEAD
      socket?.emit("updatePaddles", {canvasData, roomId});
=======
<<<<<<< HEAD
    
    socket?.emit("updatePaddles", {canvasData, roomId});
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
    }
   }, [leftPaddle, rightPaddle]);

   //-------------------------------Post Game History----------------------------------------------

  
  const PostGameHistory = async () => {

    let userScore = 0;
    let opponentScore = 0;
    if (socketState.isOwner) {
      userScore = rightScore;
      opponentScore = leftScore;
    }
    else {
      userScore = leftScore;
      opponentScore = rightScore;
    }
    const data: any = {
      userId: socketState.playerId,
      status: socketState.isOwner ? gameEndStatic.user : gameEndStatic.bot,
      userScore: userScore,
      opponentScore: opponentScore,
      rounds: gameSettings.rounds,
      matches: gameSettings.matches,
      roomId: roomId,
    };

    await socket?.emit("CreateGameHistory", data);
  }

  //----------------------------------------------------------------------------------------------
  useEffect(() => {
    if (roomId == "") return;
    if (gameEnded) {
      PostGameHistory().then(() => {
          closeSocketConnection();
      });
    }
<<<<<<< HEAD
    if (!socketState.isOwner) return;
    if (!gameStarted && !gameEnded ) {
=======
    if (!gameStarted && !gameEnded) {
=======
      socket?.emit("updatePaddles", {canvasData, roomId});
    }
   }, [leftPaddle, rightPaddle]);

   //-------------------------------Post Game History----------------------------------------------

  
  const PostGameHistory = async () => {

    let userScore = 0;
    let opponentScore = 0;
    if (socketState.isOwner) {
      userScore = rightScore;
      opponentScore = leftScore;
    }
    else {
      userScore = leftScore;
      opponentScore = rightScore;
    }
    const data: any = {
      userId: socketState.playerId,
      status: socketState.isOwner ? gameEndStatic.user : gameEndStatic.bot,
      userScore: userScore,
      opponentScore: opponentScore,
      rounds: gameSettings.rounds,
      matches: gameSettings.matches,
      roomId: roomId,
    };

    await socket?.emit("CreateGameHistory", data);
  }

  //----------------------------------------------------------------------------------------------
  useEffect(() => {
    if (roomId == "") return;
    if (gameEnded) {
      PostGameHistory().then(() => {
          closeSocketConnection();
      });
    }
    if (!socketState.isOwner) return;
    if (!gameStarted && !gameEnded ) {
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
      socket?.emit("pauseGame", roomId);
    }
    else if (gameStarted && !gameEnded) {
      socket?.emit("resumeGame", roomId);
    }
  }, [gameEnded, gameStarted]);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  useEffect(() => {
    socket?.on("friendExitGame", () => {
      if (socketState.isOwner) {
        setGameEndStatic({
          bot: "LOSE",
          user: "WIN",
        });
      } else {
        setGameEndStatic({
          bot: "WIN",
          user: "LOSE",
        });
      }
      setGameEnded(true);
    });
    return () => {
      socket?.off("friendExitGame");
    };
  }, [socket]);
  
<<<<<<< HEAD
=======
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
  //----------------------------------end Socket code Logic-----------------------------------------

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
          botPoints: friendPoints,
          userPoints: userPoints,
          RoundNamber: RoundNumber,
        },
      ]);
      setGameStarted(false);
      setGameMatches(gameSettings.matches);
      setRoundNumber((prev) => prev + 1);
      setFriendPoints(0);
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

    draw(canvas, context, leftPaddle, rightPaddle, ball, gameSettings);
  }, [canvasSize, ball]);

  const handleCountdownEnd = () => {
    setGameStarted(true);
  };

  //---------------------------------------------------------------------------
<<<<<<< HEAD
  useEffect(() => {
    
    
    if (!gameStarted || gameEnded) return;
=======
<<<<<<< HEAD
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e

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
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
<<<<<<< HEAD
  }, [gameStarted, gameEnded, ball]);
=======
  }, [gameStarted]);
=======
  useEffect(() => {
    
    
    if (!gameStarted || gameEnded) return;

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
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameStarted, gameEnded, ball]);
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e

  //---------------------------------------------------------------------------
  

  useEffect(() => {
    
    if (gamePause || !gameStarted || gameEnded) return;
    
    
    const speed = RecSpeed;

    if (socketState.isOwner) {
      if (keysPressed["ArrowUp"]) {
        setRightPaddle((prev) => ({
          ...prev,
          y: Math.max(0, prev.y - speed),
        }));
      }
      if (keysPressed["ArrowDown"]) {
        setRightPaddle((prev) => ({
          ...prev,
          y: Math.min(canvasSize.height - prev.height, prev.y + speed),
        }));
      }
    } else {
      if (keysPressed["ArrowUp"]) {
        setLeftPaddle((prev) => ({
          ...prev,
          y: Math.max(0, prev.y - speed),
        }));
      }
      if (keysPressed["ArrowDown"]) {
        setLeftPaddle((prev) => ({
          ...prev,
          y: Math.min(canvasSize.height - prev.height, prev.y + speed),
        }));
      }
    }

    // Redraw the canvas
    const context = canvasRef.current?.getContext("2d");
    if (context)
      draw(canvasRef.current!, context, leftPaddle, rightPaddle, ball, gameSettings);
  
<<<<<<< HEAD
  }, [keysPressed, canvasSize, ball, gameStarted, gameEnded]);
=======
<<<<<<< HEAD
  }, [canvasSize, ball, gameStarted, gameEnded]);
=======
  }, [keysPressed, canvasSize, ball, gameStarted, gameEnded]);
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e

  //---------------------------------------------------------------------------


  return (
    <PageWrapper>
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
                  gameMode="FRIEND"
                />
                <div className="flex flex-col space-y-10 w-full mx-[10%] h-full justify-center items-center mt-[100px]" >
                  <GameHeader leftScore={leftScore} rightScore={rightScore} />
                  <div
                    id="canvas-container"
<<<<<<< HEAD
                    className="relative flex items-center bg-background-primary rounded-lg h-[50vh] w-full max-w-[1200px]"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg z-10">
                      {!gameStarted && !gameEnded  && (
=======
<<<<<<< HEAD
                    className="relative flex items-center bg-background-primary rounded-lg h-[55vh] w-full max-w-[1200px]"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg z-10">
                      {!gameStarted && !gameEnded && (
=======
                    className="relative flex items-center bg-background-primary rounded-lg h-[50vh] w-full max-w-[1200px]"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg z-10">
                      {!gameStarted && !gameEnded  && (
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
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
<<<<<<< HEAD
                              isFriendMode={true}
=======
<<<<<<< HEAD
=======
                              isFriendMode={true}
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
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
    </PageWrapper>
  );
}
