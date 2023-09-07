"use client";

import React from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import { Button, Text, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Gamepad from "../../../assets/icons/gamepad.svg";
import Robot from "../../../assets/icons/robot.svg";
import ImgBackground from "../../../assets/icons/background.svg";
import Lottie from "lottie-react";
import animationData from "../../../assets/animations/animation3.json";
import GameModesModal from "./ui/GameModesModal";
import { motion } from "framer-motion";

export default function GamePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameType, setGameType] = React.useState("");
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  const handleBotClick = () => {
    setGameType("bot");
    onOpen();
  };

  const handleFriendClick = () => {
    setGameType("friend");
    onOpen();
  };

  return (
    <PageWrapper>
      <div className="flex flex-row justify-center items-center mx-[10%] mt-[100px] z-0">
        <div className={`${breakpoint === "base" ? "absolute" : "flex"} flex-col justify-center items-center  P-20 space-y-6 z-10`}>
          <Text className=" flex text-emerald-300 font-bold text-2xl">
            EXPLORE THE GAME
          </Text>
          <Text className=" flex text-black font-bold text-6xl">
            It&apos;s time to enjoy the game
          </Text>
          <div className={`flex flex-col justify-center items-center  space-y-6  mx-auto w-[400px] h-[300px] p-10`}>
            <Button
              colorScheme="teal"
              variant="outline"
              bg="white"
              size="lg"
              leftIcon={
                <Image src={Gamepad} alt="Gamepad" width={25} height={25} />
              }
              onClick={handleFriendClick}
            >
              Play with a friend
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              size="lg"
              leftIcon={
                <Image src={Robot} alt="Robot" width={25} height={25} />
              }
              onClick={handleBotClick}
            >
              Play with a robot
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Lottie
            animationData={animationData}
            className={`w-full h-[900px] border-2 border-white rounded-[100%] shadow-xl min-w-[370px] ${breakpoint === "base" ? "opacity-20" : ""}`} 
          />
        </motion.div>
      </div>
      <GameModesModal
        isOpen={isOpen}
        onClose={onClose}
        gameType={gameType as "bot" | "friend"}
      />
    </PageWrapper>
  );
}
