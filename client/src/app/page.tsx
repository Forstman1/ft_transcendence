"use client"

import React  from "react";
import DesktopGamePreview from "../../assets/icons/pongDesktopImage.svg";

import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import { PageWrapper } from "./animationWrapper/pageWrapper";
import { Text } from "@chakra-ui/react";
import PageDivider from "../../assets/icons/wavesOpacityInversed.svg"
import BlackBackground from "../../assets/icons/blackBackground.svg"

export default function Home() {
  return (
    <PageWrapper>
      <Box className='h-screen w-screen mt-24'>
        <Flex className="flex-col lg:flex-row grid-rows-2 lg:grid-cols-2 justify-center items-center content-center justify-items-center gap-y-10">
          <Flex className="row-span-1 lg:col-span-1 order-1 lg:order-2 flex-col justify-evenly content-center justify-items-center items-center gap-y-8 basis-1/2">
            <Box className="mt-5">
              <Text className="text-neutral-950 text-4xl md:text-5xl text-center mx-8 ">The Legacy PONG Game</Text>
              <Text className="text-neutral-600 text-3xl md:text-4xl text-center mx-8 ">as never seen before</Text>
            </Box>
            <Box className="block lg:hidden mx-10">
              <Image src={DesktopGamePreview} alt="Game Preview" />
            </Box>
            <Text className="text-neutral-500 text-lg md:text-2xl text-center mx-8 ">
              Pong is a vintage arcade game that revolutionized the world of video gaming.
              Released in 1972, it emulates a virtual table tennis match. Players control
              rectangular paddles situated on opposite sides of the screen, tasked with
              deflecting a small ball and preventing it from breaching their territory.
            </Text>
            <Box>

            </Box>
          </Flex>
          <Box className="row-span-1 lg:col-span-1 order-2 lg:order-1 basis-1/2 hidden lg:block ">
            <Image className="m-auto p-auto" src={DesktopGamePreview} alt="Game Preview" />
          </Box>
        </Flex>
      </Box>
      <Box className='h-screen w-screen'>
        <Image className="w-screen h-5 z-10" src={PageDivider} alt="Page Decor" />
        <Image className="h-screen w-screen object-cover relative -top-5 z-0" src={BlackBackground} alt="Page Decor" />
        
      </Box>
    </PageWrapper>
  );
}
