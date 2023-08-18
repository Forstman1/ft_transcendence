"use client";

import React from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import { Stack, Button } from "@chakra-ui/react";
import Image from "next/image";
import Gamepad from "../../../assets/icons/gamepad.svg";
import Robot from "../../../assets/icons/robot.svg";
import { useRouter } from "next/navigation";
import ImgBackground from "../../../assets/icons/background.svg";

export default function GamePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/gameBotPage");
  };

  return (
    <PageWrapper>
      <div className="absolute inset-0 flex justify-center items-center h-screen w-screen">
        <div className="relative w-full h-full">
          <Image
            src={ImgBackground}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" absolute justify-center items-center">
          <div className=" flex flex-col justify-center items-center mx-auto">
            <Stack
              spacing={6}
              className="bg-background-primary rounded-lg shadow-xl px-[200px] py-10  mx-auto opacity-90"
            >
              <Button
                colorScheme="teal"
                variant="outline"
                bg="white"
                leftIcon={
                  <Image src={Gamepad} alt="Gamepad" width={25} height={25} />
                }
              >
                Play with a friend
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                bg="white"
                leftIcon={
                  <Image src={Robot} alt="Robot" width={25} height={25} />
                }
                onClick={handleClick}
              >
                Play with a robot
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
