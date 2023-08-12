'use client'

import React from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import { Stack, Button } from "@chakra-ui/react";
import Image from "next/image"; 
import Pingpongmensuits from "../../../assets/icons/Pingpongmensuits.svg";
import Gamepad from "../../../assets/icons/gamepad.svg";
import Robot from "../../../assets/icons/robot.svg";
import { useRouter } from 'next/navigation';

export default function GamePage() {
  const router = useRouter();

  const handleClick = () => {
   router.push("/gameBotPage");
  }

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-[50%]  flex justify-center items-center my-auto">
          <Image src={Pingpongmensuits} alt="Pingpongmensuits"  />
        </div>
        <div className="w-[50%] h-[100%] flex flex-col justify-center items-center">
          <Stack spacing={6} className="flex w-[50%]  h-[300px] bg-background-primary rounded-lg  drop-shadow-2xl justify-center items-center">
            <Button colorScheme="teal" variant='outline' bg={'white'} leftIcon={<Image src={Gamepad} alt="Gamepad" width={25} height={25}/>}>
              Play with a friend
            </Button>
            <Button colorScheme="teal" variant='outline' bg={'white'} leftIcon={<Image src={Robot} alt="Gamepad" width={25} height={25}/>} onClick={handleClick}>
              Play with a robot
            </Button>
          </Stack>
        </div>
      </div>
    </PageWrapper>
  );
}
