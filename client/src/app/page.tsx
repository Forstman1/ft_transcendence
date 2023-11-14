"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter as useRouterNavigation, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  Center,
  Button,
  Text,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Modal,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { PageWrapper } from "@/app/animationWrapper/pageWrapper";
import { motion } from "framer-motion";
import { AuthButtons } from "@/components/elements/Navbar/Navbar";
import LoginThumbnail from 'assets/icons/Auth/undraw_my_password_re_ydq7.svg';
import { useSelector } from "react-redux";
import { UserState } from "@/redux/slices/authUser/authUserSlice";

import GamePreviewDesktop from "assets/icons/pongDesktopImage.svg";
import GamePreviewMobile from "assets/icons/Frame 70.svg";
import PageDivider1 from "assets/icons/wavesOpacityInversed.svg";
import PageDivider2 from "assets/icons/waves.svg"
import { toast } from "react-hot-toast";


export function CustomButton(
  {
    inverseColorProp,
    borderColorProp,
    propOnClick,
    children
  }:
  {
    inverseColorProp: boolean,
    borderColorProp: boolean,
    propOnClick: () => void,
    children: React.ReactNode
  }
  ) {
  const primaryColor = inverseColorProp ? "neutral-950" : "neutral-50";
  const secondaryColor = inverseColorProp ? "neutral-50" : "neutral-950";
  const borderColor = borderColorProp ? "neutral-950" : "neutral-50";
  const shadowColor = borderColorProp ? "rgb(60,60,60)" : "rgb(195,195,195)";

  return (
    <Button
      className={`
        text-xl lg:text-2xl 4xl:text-3xl
        w-20 md:w-24 lg:w-24 xl:w-28 2xl:w-36
        h-8  md:h-10 lg:h-10 xl:h-12 2xl:h-12
        border-2 border-${borderColor} text-${secondaryColor} bg-${primaryColor}
      `}
      as='button'
      size='lg' rounded='sm'
      boxShadow={`0.4rem 0.4rem 0rem 0rem ${shadowColor}`}
      fontWeight='semibold'
      _hover={{}}
      _active={{
        transform: 'translate(0.4rem, 0.4rem)',
        boxShadow: `0rem 0rem 0rem 0rem ${shadowColor}}`,
      }}
      onClick={propOnClick}
    >
      <Center>
        {children}
      </Center>
    </Button>
  )
}

export function SignupModal (props: any) {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <>
      <motion.div>
        <CustomButton {...props} propOnClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}>
          Sign Up
        </CustomButton>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>

            <ModalHeader>
              <Stack align={'center'}>
                <Text className='text-5xl text-center font-bold'>
                  Sign up
                </Text>
                <Text className='text-lg text-center text-neutral-600'>
                  to enjoy all of our cool features ✌️
                </Text>
                <Image src={LoginThumbnail} alt='Login Thumbnail' className='hidden md:block w-full max-w-[14rem]' />
              </Stack>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody >
              <Stack spacing={3}>
                <AuthButtons />
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Text m='auto' align='center'>
                BTW, we&apos;re about 2 steal all ur creds
                <br />
                Happy Gaming 😊
              </Text>
            </ModalFooter>

          </ModalContent>
        </Modal>
      </motion.div>
    </>
  )
}

// TODO add a custom cursor for the whole website
// TODO add a custom favicon

const Footer: React.FC = () => {
  const textSize = [
    'xs', 'sm', 'md', 'lg', 'xl', 'xl', '2xl', '2xl', '2xl', '3xl', '3xl'
  ];
  return (
    <footer className="w-screen relative -mt-5 md:-mt-10 z-10">
      <Box className="w-full h-5 md:h-10">
        <Image src={PageDivider2} alt="Footer Divider" className="transform rotate-180 w-full h-full" />
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        width="full" height="full"
        className="grid-cols-3 md:justify-between h-16 md:h-24 bg-white"
      >
        <div className="h-full w-1/3 flex items-center justify-center">
          {/* Content for the first column, which is none for the moment */}
        </div>
        <div className="h-full w-1/3 flex items-center justify-center">
          <Text textAlign={"center"} fontSize={textSize}>
            Copyright © 2023 Pong Inc. All Rights Reserved
          </Text>
        </div>
        <div className="h-full w-1/3 flex items-center justify-center">
          <Text textAlign={"center"} fontSize={textSize}>
            Made with ❤️
          </Text>
        </div>
      </Flex>
    </footer>
  );
};

export function GoToProfileButton(
  {
    inverseColorProp,
    borderColorProp,
  }:
  {
    inverseColorProp: boolean,
    borderColorProp: boolean,
  })
  {
  const router = useRouterNavigation();
  const primaryColor = inverseColorProp ? "neutral-950" : "neutral-50";
  const secondaryColor = inverseColorProp ? "neutral-50" : "neutral-950";
  const borderColor = borderColorProp ? "neutral-950" : "neutral-50";
  const shadowColor = borderColorProp ? "rgb(60,60,60)" : "rgb(195,195,195)";

  return (
    <Button
      className={`
        text-xl lg:text-2xl 4xl:text-3xl
        w-20 md:w-24 lg:w-24 xl:w-28 2xl:w-36
        h-8  md:h-10 lg:h-10 xl:h-12 2xl:h-12
        border-2 border-${borderColor} text-${secondaryColor} bg-${primaryColor}
      `}
      as='button'
      size='lg' rounded='sm'
      boxShadow={`0.4rem 0.4rem 0rem 0rem ${shadowColor}`}
      fontWeight='semibold'
      _hover={{}}
      _active={{
        transform: 'translate(0.4rem, 0.4rem)',
        boxShadow: `0rem 0rem 0rem 0rem ${shadowColor}}`,
      }}
      onClick={() => router.push('/profile')}
    >
      <Center>
        Profile
      </Center>
    </Button>
  )
}

export default function Home({ searchParams }: { searchParams: any }) {
  const data = useSelector((state: { authUser: UserState }) => state.authUser);
  const router = useRouterNavigation();
  useEffect(() => {
    if (searchParams?.error === 'true') {
      toast.error('Something wrong happened, please try again later.')
    } else if (searchParams?.logged === 'true') {
      toast.success('Welcome back to Pong!')
    } else if (searchParams?.logged === 'false') {
      toast.success('You have been logged out successfully.');
    } else if (searchParams?.unauthorized === 'true') {
      toast.error('You need to be logged in to access this page.')
    }
  }, [])
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
              text-4xl sm:text-6xl 
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
            <CustomButton inverseColorProp={true} borderColorProp={true} propOnClick={() => router.push('/gamePage')}>
              Play!
            </CustomButton>
            { data.isAuthenticated ? <GoToProfileButton inverseColorProp={false} borderColorProp={true} /> : <SignupModal inverseColorProp={false} borderColorProp={true} />}
          </div>
        </div>
      </div>

      <Box className="w-full h-5 md:h-10 z-10 relative">
        <Image src={PageDivider1} alt="Page Divider" className="w-full h-full" />
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
              text-4xl sm:text-6xl 
              xl:text-5xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-9xl"
            >
              Just like the Original
            </p>
            <p
              className="text-neutral-200 text-center
              text-xl sm:text-2xl md:text-4xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl 6xl:text-7xl"
            >
              even with the same theme
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
            <CustomButton inverseColorProp={false} borderColorProp={false} propOnClick={() => router.push('/gamePage')}>
              Play!
            </CustomButton>
            { data.isAuthenticated ? <GoToProfileButton inverseColorProp={true} borderColorProp={false} /> : <SignupModal inverseColorProp={true} borderColorProp={false} />}
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

      <Footer />

    </PageWrapper>
  );
}
