
import React from "react";
import { Avatar, Text } from "@chakra-ui/react";
import Robot from "../../../../assets/icons/botAvatar.svg"; 
import Image from "next/image";
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
    const balColor = gameSettings.playgroundtheme.balColor;
    
    return (
      <div className={`flex items-center justify-between h-[100px] mx-auto rounded-lg p-10 drop-shadow-2xl w-full max-w-[1200px] ${balColor}`}>
        <div className="flex flex-row items-center space-x-5">
          <Avatar size="lg"/>
          <Text className={`font-bold text-2xl ${getTextColor(gameSettings)} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            Friend
          </Text>
        </div>
        <div className="flex flex-row items-center space-x-10">
          <Text className={`font-bold text-6xl ${getTextColor(gameSettings)} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            {leftScore}
          </Text>
          <Text className={`font-bold text-6xl ${getTextColor(gameSettings)} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>--</Text>
          <Text className={`font-bold text-6xl ${getTextColor(gameSettings)} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            {rightScore}
          </Text>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <Text className={`font-bold text-2xl ${getTextColor(gameSettings)} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>UserName</Text>
          <Avatar size="lg" />
        </div>
      </div>
    );
  };
 
export default GameFriendHeader;