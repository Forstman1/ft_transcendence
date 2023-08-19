"use client";

import React from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import { Button, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Gamepad from "../../../assets/icons/gamepad.svg";
import Robot from "../../../assets/icons/robot.svg";
import ImgBackground from "../../../assets/icons/background.svg";
import Lottie from "lottie-react";
import animationData from "../../../assets/animations/animation2.json";
import GameModesModal from "./ui/GameModesModal";


export default function GamePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [gameType, setGameType] = React.useState("");

  const handleBotClick = () => {
    setGameType("bot");
    onOpen()
  };

  const handleFriendClick = () => {
    setGameType("friend");
    onOpen()
  };

  return (
    <PageWrapper>
      <div className="absolute inset-0 flex justify-center items-center h-screen w-screen ">
        <div className="relative w-full h-full">
          <Image
            src={ImgBackground}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-row justify-center items-center absolute top-0 left-0 w-full h-full">
          <div className=" absolute justify-center items-center ">
            <div className="flex flex-row justify-center items-center mx-[100px]">
              <div className="flex flex-col justify-center  P-20 space-y-6">
                <Text className=" flex text-emerald-300 font-bold text-2xl">
                  EXPLORE THE GAME
                </Text>
                <Text className=" flex text-black font-bold text-6xl">
                  It&apos;s time to enjoy the game
                </Text>
                <div
                  className="flex flex-col justify-center items-center  space-y-6  mx-auto w-[400px] h-[300px] p-10"
                >
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    bg="white"
                    size='lg'
                    leftIcon={
                      <Image
                        src={Gamepad}
                        alt="Gamepad"
                        width={25}
                        height={25}
                      />
                    }
                    onClick={handleFriendClick}
                  >
                    Play with a friend
                  </Button>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    bg="white"
                    size='lg'
                    leftIcon={
                      <Image src={Robot} alt="Robot" width={25} height={25} />
                    }
                    onClick={handleBotClick}
                  >
                    Play with a robot
                  </Button>
                </div>
              </div>
              <Lottie
                animationData={animationData}
                className="w-full h-[900px] border-2 border-white rounded-[100%] shadow-xl min-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      <GameModesModal isOpen={isOpen} onClose={onClose} gameType={gameType as "bot" | "friend"} />
    </PageWrapper>
  );
}
