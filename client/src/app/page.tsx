"use client"

import React from "react";
import GamePreview from "../../assets/icons/previewImageHorizontal.svg";
import Image from "next/image";
import { Flex, Box, Center } from "@chakra-ui/react";

/* ------------------------------------------------------------------------------------------------------------------ */

export default function Home() {
  return (
    <Box className="w-screen">
      <Flex className="w-screen flex-row justify-center content-center justify-items-center items-center grid-cols-2">
        <Box className="col-span-1 w-1/2 ">
          <Image className="m-auto p-auto" width={680} src={GamePreview} alt="Game Preview" />
        </Box>
        <Box className="col-span-1 w-1/2">
          <Flex className="flex-col justify-evenly content-center justify-items-center items-center">
            <h1 className="text-neutral-950 text-8xl text-center">The Legacy PONG Game</h1>
            <h3 className="text-neutral-600 text-6xl text-center">as never seen before</h3>
            <br />
            <p className="text-neutral-500 text-4xl text-center w-1/2">
              Pong is a vintage arcade game that revolutionized the world of video gaming.
              Released in 1972, it emulates a virtual table tennis match. Players control
              rectangular paddles situated on opposite sides of the screen, tasked with
              deflecting a small ball and preventing it from breaching their territory.
            </p>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
