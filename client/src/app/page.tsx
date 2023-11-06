"use client"

import React from "react";
import GamePreviewDesktop from "../../assets/icons/pongDesktopImage.svg";
import GamePreviewMobile from "../../assets/icons/Frame 70.svg";
import Image from "next/image";
import { Box, Center, Button } from "@chakra-ui/react";
import { PageWrapper } from "./animationWrapper/pageWrapper";
import PageDivider from "../../assets/icons/wavesOpacityInversed.svg"

export function CustomButton(props: any) {
  const primaryColor = props.inverseColor ? "neutral-950" : "neutral-50";
  const secondaryColor = props.inverseColor ? "neutral-50" : "neutral-950";
  const borderColor = props.borderColor ? "neutral-950" : "neutral-50";
  return (
    <Button
      className={`
        text-xl lg:text-2xl 4xl:text-3xl
        w-20 md:w-24 lg:w-24 xl:w-28 2xl:w-36
        h-8  md:h-10 lg:h-10 xl:h-12 2xl:h-12
        border-2 border-${borderColor} text-${secondaryColor} bg-${primaryColor}
      `}
      as='a' href={props.href}
      size='lg' rounded='sm'
      boxShadow='0.4rem 0.4rem 0rem 0rem rgb(60,60,60)'
      fontWeight='semibold'
      _hover={{}}
      _active={{
        transform: 'translate(0.4rem, 0.4rem)',
        boxShadow: '0rem 0rem 0rem 0rem rgb(60,60,60)',
      }}
    >
      <Center>
        {props.children}
      </Center>
    </Button>
  )
}

// TODO add a custom cursor for the whole website
// TODO add a custom favicon

export default function Home() {
  return (
    <PageWrapper>
      <div
        className="flex flex-col xl:flex-row 
        w-full min-h-fit
        px-10 xl:px-30 2xl:px-40 3xl:px-50 4xl:px-60 5xl:px-70 6xl:px-80
        pt-[6rem] md:pt-[10rem] xl:pt-[16rem] pb-[4rem] md:pb-[10rem]
        justify-evenly justify-items-center
        content-center items-center"
      >
        <div
          className="h-full w-full flex-1 hidden xl:flex 
          justify-evenly justify-items-center
          content-center items-center"
        >
          <Image
            className="h-full w-full object-cover
            p-10 xl:p-20 2xl:p-30 "
            src={GamePreviewDesktop}
            alt="Pong Game Preview"
          />
        </div>
        <div
          className="h-full flex flex-col flex-1
          justify-evenly justify-items-center
          content-center items-center
          gap-8 2xl:gap-110 3xl:gap-12 4xl:gap-14 5xl:gap-16 6xl:gap-20"
        >
          <div>
            <p
              className="text-neutral-950 text-center
              text-3xl sm:text-6xl 
              xl:text-5xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl"
            >
              The Legacy PONG Game
            </p>
            <p
              className="text-neutral-600 text-center
              text-xl sm:text-2xl md:text-4xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl 6xl:text-7xl"
            >
              as never seen before
            </p>
          </div>
          <div
            className="block xl:hidden max-w-lg"
          >
            <Image src={GamePreviewDesktop} alt="Homepage Image" />
          </div>
          <p
            className="text-neutral-500 text-center
            max-w-xl xl:max-w-fit
            text-xl md:text-2xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl"
          >
            Pong is a vintage arcade game that revolutionized the<br className="hidden xl:block" /> world of video gaming.
            Released in 1972, it emulates a<br className="hidden xl:block" /> virtual table tennis match. Players control
            rectangular<br className="hidden xl:block" /> paddles situated on opposite sides of the screen, tasked<br className="hidden xl:block" /> with
            deflecting a small ball and preventing it from<br className="hidden xl:block" /> breaching their territory.
          </p>
          <div className="flex flex-row justify-evenly gap-6">
            <CustomButton href="#0" inverseColor={true} borderColor={true}>
              Play!
            </CustomButton>
            <CustomButton href="#0" inverseColor={false} borderColor={true}>
              Sign Up
            </CustomButton>
          </div>
        </div>
      </div>

      <Box className="w-full h-5 md:h-10 z-10 relative">
        <Image src={PageDivider} alt="Page Divider" className="w-full h-full" />
      </Box>

      <div
        className="flex flex-col xl:flex-row image-div
        w-full min-h-fit -mt-5 md:-mt-10 z-0 relative
        px-10 xl:px-30 2xl:px-40 3xl:px-50 4xl:px-60 5xl:px-70 6xl:px-80
        pt-[6rem] md:pt-[10rem] xl:pt-[16rem] pb-[4rem] md:pb-[10rem]
        justify-evenly justify-items-center
        content-center items-center"
      >

        <div
          className="h-full flex flex-col flex-1
          justify-evenly justify-items-center
          content-center items-center
          gap-8 2xl:gap-110 3xl:gap-12 4xl:gap-14 5xl:gap-16 6xl:gap-20"
        >
          <div>
            <p
              className="text-neutral-50 text-center
              sm:text-4xl md:text-6xl 
              xl:text-5xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl"
            >
              The Legacy PONG Game
            </p>
            <p
              className="text-neutral-200 text-center
              sm:text-2xl md:text-4xl
              text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl 6xl:text-7xl"
            >
              as never seen before
            </p>
          </div>
          <div
            className="block xl:hidden max-w-[15rem]"
          >
            <Image src={GamePreviewMobile} alt="Homepage Image" />
          </div>
          <p
            className="text-neutral-400 text-center
            max-w-xl xl:max-w-fit
            text-2xl xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl"
          >
            Pong is a vintage arcade game that revolutionized the<br className="hidden xl:block" /> world of video gaming.
            Released in 1972, it emulates a<br className="hidden xl:block" /> virtual table tennis match. Players control
            rectangular<br className="hidden xl:block" /> paddles situated on opposite sides of the screen, tasked<br className="hidden xl:block" /> with
            deflecting a small ball and preventing it from<br className="hidden xl:block" /> breaching their territory.
          </p>
          <div className="flex flex-row justify-evenly gap-6">
            <CustomButton href="#0" inverseColor={false} borderColor={false}>
              Play!
            </CustomButton>
            <CustomButton href="#0" inverseColor={true} borderColor={false}>
              Sign Up
            </CustomButton>
          </div>
        </div>
        <div
          className="h-full w-full flex-1 hidden xl:flex 
          justify-evenly justify-items-center
          content-center items-center"
        >
          <Image
            className="h-full w-3/4 object-cover
            p-10 xl:p-20 2xl:p-30 "
            src={GamePreviewMobile}
            alt="Pong Game Preview"
          />
        </div>
      </div>


    </PageWrapper>
  );
}
