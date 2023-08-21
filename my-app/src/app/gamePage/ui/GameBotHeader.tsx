
import React from "react";
import { Avatar, Text } from "@chakra-ui/react";
import Robot from "../../../../assets/icons/botAvatar.svg"; 
import Image from "next/image";
import { useAppSelector } from "@/redux/store/store";

type gameSettingsProps = {
  mode: string;
  playgroundtheme: {
    id: number;
    playgroundColor: string;
    balColor: string;
  };
  rounds: number;
  matches: number;
};


const getGameColor = (gameSettings: gameSettingsProps) => {
  switch (gameSettings.playgroundtheme.id) {
    case 1:
      return "text-black";
    case 2:
      return "text-lime-500";
    case 3:
      return "text-cyan-400";
    case 4:
      return "text-emerald-700";
    default:
      return "text-black";
  }
}

const GameHeader = ({
    leftScore,
    rightScore,
  }: {
    leftScore: number;
    rightScore: number;
  }) => {
    const gameSettings = useAppSelector((state) => state.gameReducer);
    
    return (
      <div className={`flex items-center justify-between h-[100px] mx-auto rounded-lg p-10 drop-shadow-2xl w-full max-w-[1200px] ${gameSettings.playgroundtheme.balColor}`}>
        <div className="flex flex-row items-center space-x-5">
          <Avatar size="lg">
            <Image src={Robot} alt="Logo" />
          </Avatar>
          <Text className={`font-bold text-2xl ${getGameColor(gameSettings)}`}>
            Robot
          </Text>
        </div>
        <div className="flex flex-row items-center space-x-10">
          <Text className={`font-bold text-6xl ${getGameColor(gameSettings)}`}>
            {leftScore}
          </Text>
          <Text className={`font-bold text-6xl ${getGameColor(gameSettings)}`}>--</Text>
          <Text className={`font-bold text-6xl ${getGameColor(gameSettings)}`}>
            {rightScore}
          </Text>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <Text className={`font-bold text-2xl ${getGameColor(gameSettings)}`}>UserName</Text>
          <Avatar size="lg" />
        </div>
      </div>
    );
  };
 
export default GameHeader;