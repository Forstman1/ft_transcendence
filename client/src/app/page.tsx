"use client"

import React from "react";
import DesktopGamePreview from "../../assets/icons/previewImageHorizontal.svg";
import MobileGamePreview from "../../assets/icons/pongMobileImage.svg";
import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import { PageWrapper } from "./animationWrapper/pageWrapper";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <PageWrapper>
      <Flex className="w-screen flex-col justify-center content-center justify-items-center items-center grid-cols-2">
        <Flex className="mt-10 col-span-1 flex-col justify-evenly content-center justify-items-center items-center">
          <Text className="text-neutral-950 text-4xl text-center w-3/4 ">The Legacy PONG Game</Text>
          <Text className="text-neutral-600 text-3xl text-center w-3/4 ">as never seen before</Text>
          <br />
          <Text className="text-neutral-500 text-xl text-justify w-3/4 ">
            Pong is a vintage arcade game that revolutionized the world of video gaming.
            Released in 1972, it emulates a virtual table tennis match. Players control
            rectangular paddles situated on opposite sides of the screen, tasked with
            deflecting a small ball and preventing it from breaching their territory.
          </Text>
          <br />
          <br />
        <Box className="col-span-1">
          <Image className="hidden lg:block m-auto p-auto w-3/4" src={DesktopGamePreview} alt="Game Preview" />
        </Box>
        </Flex>
      </Flex>

    </PageWrapper>
  );
}
