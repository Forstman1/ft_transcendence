"use client";

import {
  Box, Flex, Button, ButtonGroup, Center, Text, Menu, MenuButton,
  MenuList, MenuItem, IconButton, useBreakpointValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from "../../../../assets/icons/Logo.svg";
import WavesDivider from "../../../../assets/icons/wavesOpacity.svg";
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link";
import React from 'react';
import { usePathname } from 'next/navigation';

/* ------------------------------------------------------------------------------------------------------------------ */

const GameRouter = ["/gamePage/gameFriendPage", "/gamePage/gameBotPage"]

/* ------------------------------------------------------------------------------------------------------------------ */

let NAVBAR_BUTTONS: Array<{
  text: string,
  color: string,
  backgroundColor: string,
  href: string,
}> = [
    {
      text: "Log In",
      color: "text-neutral-50",
      backgroundColor: "bg-neutral-950",
      href: "#",
    },
    {
      text: "Sign Up",
      color: "text-neutral-950",
      backgroundColor: "bg-neutral-50",
      href: "#",
    },
  ];

/* ------------------------------------------------------------------------------------------------------------------ */

let NAVBAR_ITEMS: Array<{
  text: string,
  href: string
}> = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Game",
      href: "/gamePage"
    },
    {
      text: "Chat",
      href: "/chatPage"
    }
  ];

/* ------------------------------------------------------------------------------------------------------------------ */

const MyButton: React.FC<{
  color: string,
  backgroundColor: string,
  href: string,
  children: React.ReactNode,
}> = ({ color, backgroundColor, href, children }) => {
  return (
    <motion.div>
      <Button as={"a"} href={href} size='sm'
        className={`${backgroundColor} ${color} border-neutral-50 text-xl 
          rounded border border-current font-semibold`}
        boxShadow={"0.2rem 0.2rem 0rem 0rem rgb(150,150,150)"}
        _hover={{}}
        _active={{
          transform: 'translate(0.2rem, 0.2rem)',
          boxShadow: "0rem 0rem 0rem 0rem rgb(20,20,20)",
        }}
      >
        {children}
      </Button>
    </motion.div>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

const NavbarAuthButtons: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });
  return (
    <ButtonGroup className="flex flex-row justify-center space-x-5">
      {NAVBAR_BUTTONS.map((item: {
        text: string,
        color: string,
        backgroundColor: string,
        href: string,
      }, index: number) => {
        return (
          breakpoint === "base" && index === 1 ? null : <MyButton
            key={index}
            color={item.color}
            backgroundColor={item.backgroundColor}
            href={item.href}
          >
            {item.text}
          </MyButton>
        )
      })}
    </ButtonGroup>
  );
}

/* ------------------------------------------------------------------------------------------------------------------ */

const NavbarLinks: React.FC = () => {
  let path = usePathname();

  if (GameRouter.includes(path)) {
    path = "/gamePage";
  }
  return (
    <motion.div>
      <Flex color={'white'} className={`grid-cols-${NAVBAR_ITEMS.length} w-full h-full items-center justify-start space-x-10`}>
        {NAVBAR_ITEMS.map((item: {
          text: string,
          href: string
        }, index: number) => {
          return (
            <Box key={index} className='col-span-1'>
              <Center>
                <Link href={item.href} className="w-auto">
                  <Text className="text-xl font-semibold">
                    {item.text}
                  </Text>
                  {path === item.href ? (
                    <motion.span
                      layoutId="underline"
                      className="absolute w-5 h-1 bg-white rounded-full"
                    />
                  ) : null}
                </Link>
              </Center>
            </Box>
          )
        })}
      </Flex>
    </motion.div>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

const MenuLinks: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon className="h-5 w-5" />}
        className='text-neutral-950 bg-neutral-50 h-8 w-9 rounded-md'
        boxShadow={"0.2rem 0.2rem 0rem 0rem rgb(150,150,150)"}
        _hover={{}}
        _active={{
          transform: 'translate(0.2rem, 0.2rem)',
          boxShadow: "0rem 0rem 0rem 0rem rgb(20,20,20)",
        }}
      />
      <MenuList className="bg-neutral-900 text-neutral-50 border-neutral-950 
          text-xl rounded border border-current font-semibold">
        {NAVBAR_ITEMS.map((item: {
          text: string,
          href: string
        }, index: number) => {
          return (
            <Box key={index}>
              <MenuItem className="bg-neutral-900 text-neutral-50" as={"a"} href={item.href}>
                <Text className="text-xl font-semibold">
                  {item.text}
                </Text>
              </MenuItem>
              {index != NAVBAR_ITEMS.length - 1 ? <hr className="w-full bg-neutral-50"></hr> : null}
            </Box>
          )
        })}
      </MenuList>
    </Menu>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

const Navbar: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  if (breakpoint === "base") {
    return (
      <Box className="w-full h-20 bg-neutral-950 sticky top-0 z-50">
        <Flex className="w-full h-full items-center justify-end">
          <Box className="w-1/3 h-auto">
            <Center>
              <MenuLinks />
            </Center>
          </Box>
          <Box className="w-1/3 h-auto">
            <Center>
              <Link href="/">
                <Image src={Logo} alt="Logo" width={150} height={150} />
              </Link>
            </Center>
          </Box>
          <Box className="w-1/3 h-auto">
            <Center>
              <NavbarAuthButtons />
            </Center>
          </Box>
        </Flex>
        <Image src={WavesDivider} alt="WavesDivider" className="w-full h-5" />
      </Box>
    )
  }
  else {
    return (
      <Box className="w-full h-24 bg-neutral-950 sticky top-0 z-50">
        <Flex className="w-full h-full items-center grid-cols-4">
          <Box className="col-span-1 ml-20 p-auto w-auto h-auto ">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={150} height={150} />
            </Link>
          </Box>
          <Box className="col-span-1 ml-20 w-auto h-auto">
            <NavbarLinks />
          </Box>
          <Box className="col-span-1 m-auto w-auto h-auto">

          </Box>
          <Box className="col-span-1 mr-20 w-auto h-auto">
            <NavbarAuthButtons />
          </Box>
        </Flex>
        <Image src={WavesDivider} alt="WavesDivider" className="w-full h-8" />
      </Box>
    )
  }
}

export default Navbar;
