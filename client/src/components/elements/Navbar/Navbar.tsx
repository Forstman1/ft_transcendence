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
      href: "#0",
    },
    {
      text: "Sign Up",
      href: "#",
      color: "text-neutral-950",
      backgroundColor: "bg-neutral-50",
    },
  ];

let NAVBAR_ITEMS: Array<{
  text: string,
  href: string
}> = [
    {
      text: "Home",
      href: "#0"
    },
    {
      text: "Game",
      href: "#0"
    },
    {
      text: "Chat",
      href: "#0"
    },
    {
      text: "About Us",
      href: "#0"
    }
  ];

const MyButton: React.FC<{
  color: string,
  backgroundColor: string,
  href: string,
  children: React.ReactNode,
}> = ({ color, backgroundColor, href, children }) => {
  return (
    <motion.div>
      <Button as={"a"} href={href} size='sm'
        className={`
          ${backgroundColor}
          ${color}
          border-neutral-50 
          text-xl rounded 
          border 
          border-current 
          font-semibold
        `}
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

const NavbarAuthButtons: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });
  return (
    <ButtonGroup className="flex flex-row justify-center space-x-5">
      {NAVBAR_BUTTONS.map((item: {
        text: string,
        color: string,
        backgroundColor: string,
        href: string
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

const NavbarLinks: React.FC = () => {
  return (
    <motion.div>
      <Flex color={'white'} className="w-full h-full items-center justify-start space-x-10">
        {NAVBAR_ITEMS.map((item: {
          text: string,
          href: string
        }, index: number) => {
          return (
            <Box key={index}>
              <Center>
                <Link href={item.href}>
                  <Text className="text-xl font-semibold">
                    {item.text}
                  </Text>
                </Link>
              </Center>
            </Box>
          )
        })}
      </Flex>
    </motion.div>
  )
}
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
      <MenuList className="bg-neutral-950 text-neutral-50 border-neutral-950 
          text-xl rounded border border-current font-semibold">
        <MenuItem >
          Home
        </MenuItem>
        <hr className="border-neutral-600" />
        <MenuItem >
          Game
        </MenuItem>
        <hr className="border-neutral-600" />
        <MenuItem >
          Chat
        </MenuItem>
        <hr className="border-neutral-600" />
        <MenuItem >
          About Us
        </MenuItem>
      </MenuList>
    </Menu>
  )
}


const Navbar: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  if (breakpoint === "base") {
    return (
      <Box className="w-full h-20 bg-neutral-950">
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
      <Box className="w-full h-20 bg-neutral-950 p-0 m-0">
        <Flex className="w-full h-full items-center justify-between">
          <Box className="w-1/4 h-auto">
            <Center>
              <Link href="/">
                <Image src={Logo} alt="Logo" width={150} height={150} />
              </Link>
            </Center>
          </Box>
          <Box className="w-2/4 h-auto">
            <NavbarLinks />
          </Box>
          <Box className="w-1/4 h-auto">
              <NavbarAuthButtons />
          </Box>
        </Flex>
        <Image src={WavesDivider} alt="WavesDivider" className="w-full h-5" />
      </Box>
    )
  }
}

export default Navbar;
