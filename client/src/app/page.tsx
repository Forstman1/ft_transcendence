"use client"

import React from "react";
import GamePreview from "../../assets/icons/previewImageHorizontal.svg";
import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import { PageWrapper } from "./animationWrapper/pageWrapper";
import WhiteWavesImage from "../../assets/icons/wavesOpacityInversed.svg"
import BlackBackground from "../../assets/icons/blackBackground.svg"


export default function Home() {
  return (
    <PageWrapper>
      {/* <Box className="w-screen h-screen">
        <Flex className=" lg:m-0 p-0 w-full h-5/6 lg:flex-row flex-col justify-center content-center justify-items-center items-center grid-cols-2">
          <Box className="mt-20 mx-12 col-span-1 order-2 lg:order-1 lg:w-1/2 ">
            <Image className="m-auto p-auto" width={850} src={GamePreview} alt="Game Preview" />
          </Box>
          <br className="lg:hidden"/>
          <Box className="col-span-1 order-1 lg:order-2 lg:w-1/2 w-full">
            <Flex className="mx-12 flex-col justify-evenly content-center justify-items-center items-center">
              <h1 className="text-neutral-950 text-5xl lg:text-9xl text-center">The Legacy PONG Game</h1>
              <h3 className="text-neutral-600 text-4xl lg:text-7xl text-center">as never seen before</h3>
              <br/>
              <p className="text-neutral-500 text-2xl lg:text-4xl text-center lg:w-3/5 w-full mx-10">
                Pong is a vintage arcade game that revolutionized the world of video gaming.
                Released in 1972, it emulates a virtual table tennis match. Players control
                rectangular paddles situated on opposite sides of the screen, tasked with
                deflecting a small ball and preventing it from breaching their territory.
              </p>
            </Flex>
          </Box>
        </Flex>
      </Box> */}

    </PageWrapper>
  );
}
