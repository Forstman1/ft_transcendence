"use client"

import React from "react";
import DesktopGamePreview from "../../assets/icons/pongDesktopImage.svg";
import MobileGamePreview from "../../assets/icons/pongMobileImage.svg";
import Image from "next/image";
import { Flex, Box, Center, Button } from "@chakra-ui/react";
import { PageWrapper } from "./animationWrapper/pageWrapper";
import { Text } from "@chakra-ui/react";
import PageDivider from "../../assets/icons/wavesOpacityInversed.svg"
import BlackBackground from "../../assets/icons/blackBackground.svg"


export function CustomButton(props: any) {
  return (
    <Button 
      className={`text-2xl w-44 h-14 max-w-xs border-2 border-${props.borderColor} text-${props.color} bg-${props.backgroundColor}`}
      as='a' href={props.href}
      size='lg' rounded='sm'
      boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
      fontWeight='semibold'
      _hover={{}}
      _active={{
        transform: 'translate(0.2rem, 0.2rem)',
        boxShadow: '0rem 0rem 0rem 0rem rgb(20,20,20)',
      }}
    >
      <Center>
        {props.children}
      </Center>
    </Button>
  )
}

export function PlaySignupButtons(props: any) {
  const primaryColor = props.inverseColor ? "neutral-950" : "neutral-50";
  const secondaryColor = props.inverseColor ? "neutral-50" : "neutral-950";
  return (
    <Flex className="flex-row justify-evenly gap-6">
      <CustomButton href="#0" backgroundColor={primaryColor} color={secondaryColor} borderColor={primaryColor}>
        Play!
      </CustomButton>
      <CustomButton href="#0" backgroundColor={secondaryColor} color={primaryColor} borderColor={primaryColor}>
        Sign Up
      </CustomButton>
    </Flex>
  )
}

export function HomepageBlackText() {
  return (
    <Flex className="flex-col justify-evenly content-center justify-items-center items-center max-w-6xl gap-6">
      <Box className="pb-10">
        <Text className="text-neutral-950 text-4xl md:text-5xl lg:text-9xl text-center">The Legacy PONG Game</Text>
        <Text className="text-neutral-600 text-3xl md:text-4xl lg:text-7xl text-center">as never seen before</Text>
      </Box>
      <Text className="text-neutral-500 text-lg md:text-2xl lg:text-3xl text-justify md:text-center max-w-2xl">
        Pong is a vintage arcade game that revolutionized the world of video gaming.
        Released in 1972, it emulates a virtual table tennis match. Players control
        rectangular paddles situated on opposite sides of the screen, tasked with
        deflecting a small ball and preventing it from breaching their territory.
      </Text>
      <Box className="pt-10">
        <PlaySignupButtons inverseColor={true} />
      </Box>
    </Flex>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <Box className='border h-full w-screen pt-24'>
        <Flex className='h-full w-3/4 justify-center items-center m-auto'>
          <Box className='h-full w-full lg:w-1/2 flex justify-center items-center'>
            <Image className='h-full w-full lg:max-w-4xl' src={DesktopGamePreview} alt="Pong Desktop Preview" />
          </Box>
          <Box className='h-full w-full lg:w-1/2 flex justify-center items-center'>
            <HomepageBlackText />
          </Box>
        </Flex>
      </Box>
    </PageWrapper>
  );
}
