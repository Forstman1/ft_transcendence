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

const HomepageBlackText = () => {
  return (
    <Flex className="">
      <Box>
        <Text className="text-neutral-950 text-4xl md:text-5xl lg:text-8xl text-center">The Legacy PONG Game</Text>
        <Text className="text-neutral-600 text-3xl md:text-4xl lg:text-7xl text-center">as never seen before</Text>
      </Box>
      <Text className="text-neutral-500 text-lg md:text-2xl lg:text-4xl text-justify md:text-center">
        Pong is a vintage arcade game that revolutionized the world of video gaming.
        Released in 1972, it emulates a virtual table tennis match. Players control
        rectangular paddles situated on opposite sides of the screen, tasked with
        deflecting a small ball and preventing it from breaching their territory.
      </Text>
    </Flex>
  )
}

const MyButton = (props: any, children: any) => {
  return (
    <Button
      className='text-lg w-full'
      as='a' href={props.href}
      size='lg'
      backgroundColor={props.backgroundColor} color={props.color}
      border='2px' borderColor={props.borderColor} rounded='md'
      boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
      fontWeight='semibold'
      _hover={{}}
      _active={{
        transform: 'translate(0.2rem, 0.2rem)',
        boxShadow: '0rem 0rem 0rem 0rem rgb(20,20,20)',
      }}
      leftIcon={<props.icon />}
    >
      <Center>
        <Text>{children.text}</Text>
      </Center>
    </Button>
  )
}

const HomepageWhiteText = () => {
  return (
    <Flex className="row-span-1 lg:col-span-1 order-1 lg:order-2 flex-col justify-evenly content-center justify-items-center items-center gap-y-8 basis-1/2">
      <Box>
        <Text className="text-neutral-950 text-4xl md:text-5xl lg:text-8xl text-center mx-8 ">Just like the Original</Text>
        <Text className="text-neutral-600 text-3xl md:text-4xl lg:text-7xl text-center mx-8 ">even with the same theme</Text>
      </Box>
      <Text className="text-neutral-500 text-lg md:text-2xl lg:text-4xl text-justify md:text-center mx-12 ">
        Pong is a vintage arcade game that revolutionized the world of video gaming.
        Released in 1972, it emulates a virtual table tennis match. Players control
        rectangular paddles situated on opposite sides of the screen, tasked with
        deflecting a small ball and preventing it from breaching their territory.
      </Text>
    </Flex>
  )
}

const PlaySignupHomepageButtons = (inverseColor: Boolean) => {
  const primaryColor = inverseColor ? "bg-neutral-950" : "bg-neutral-50";
  const secondaryColor = inverseColor ? "bg-neutral-50" : "bg-neutral-950";
  return (
    <Box>
      <MyButton href="/game" backgroundColor={secondaryColor} color={primaryColor} borderColor={secondaryColor} hoverColor="">
        Play!
      </MyButton>
    </Box>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <Box className='h-screen w-screen pt-24'>
        <Flex className="md:py-72 flex-col lg:flex-row grid-rows-2 lg:grid-cols-2 justify-center items-center content-center justify-items-center gap-y-10">
          <Box className="row-span-1 lg:col-span-1 order-2 lg:order-1 basis-1/2 hidden lg:block ">
            <Image className="m-auto p-auto" src={DesktopGamePreview} alt="Game Preview" />
          </Box>
        </Flex>
      </Box>
    </PageWrapper>
  );
}
