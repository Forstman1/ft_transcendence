import React from "react";
import { Avatar, Text } from "@chakra-ui/react";
import { useAppSelector } from "@/redux/store/store";
import { getTextColor } from "@/utils/functions/game/GetGameColor";

const GameFriendHeader = ({
  leftScore,
  rightScore,
}: {
  leftScore: number;
  rightScore: number;
}) => {
  const gameSettings = useAppSelector((state) => state.gameReducer);
  const socketState = useAppSelector((state) => state.globalSocketReducer);
  const balColor = gameSettings.playgroundtheme.balColor;

  return (
    <>
      {socketState.isOwner ? (
        <div
          className={`flex items-center justify-between h-[100px] mx-auto rounded-lg p-10 drop-shadow-2xl w-full max-w-[1200px] ${balColor}`}
        >
          <div className="flex flex-row items-center space-x-5">
<<<<<<< HEAD
            <Avatar size="lg" />
            <Text
              className={`font-bold text-2xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              Friend
            </Text>
=======
            <Text
              className={`font-bold text-2xl ${getTextColor(
                gameSettings
                )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-xl:hidden`}
            >
              Friend
            </Text>
              <Avatar size="lg" />
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
          </div>
          <div className="flex flex-row items-center space-x-10">
            <Text
              className={`font-bold text-6xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              {leftScore}
            </Text>
            <Text
              className={`font-bold text-6xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              --
            </Text>
            <Text
              className={`font-bold text-6xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              {rightScore}
            </Text>
          </div>
          <div className="flex flex-row items-center space-x-5">
<<<<<<< HEAD
            <Text
              className={`font-bold text-2xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              UserName
            </Text>
            <Avatar size="lg" />
=======
            <Avatar size="lg" />
            <Text
              className={`font-bold text-2xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-xl:hidden`}
            >
              UserName
            </Text>
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
          </div>
        </div>
      ) : (
        <div
          className={`flex items-center justify-between h-[100px] mx-auto rounded-lg p-10 drop-shadow-2xl w-full max-w-[1200px] ${balColor}`}
        >
          <div className="flex flex-row items-center space-x-5">
            <Text
              className={`font-bold text-2xl ${getTextColor(
                gameSettings
<<<<<<< HEAD
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
=======
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-xl:hidden`}
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
            >
              UserName
            </Text>
            <Avatar size="lg" />
          </div>
          <div className="flex flex-row items-center space-x-10">
            <Text
              className={`font-bold text-6xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              {leftScore}
            </Text>
            <Text
              className={`font-bold text-6xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              --
            </Text>
            <Text
              className={`font-bold text-6xl ${getTextColor(
                gameSettings
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
            >
              {rightScore}
            </Text>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <Avatar size="lg" />
            <Text
              className={`font-bold text-2xl ${getTextColor(
                gameSettings
<<<<<<< HEAD
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
=======
              )} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-xl:hidden`}
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
            >
              Friend
            </Text>
          </div>
        </div>
      )}
    </>
  );
};

export default GameFriendHeader;
