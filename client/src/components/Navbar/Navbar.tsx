"use client";

import { Box, Flex, Button, ButtonGroup, Spacer, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Logo from "../../../assets/icons/Logo.svg";
import WavesDivider from "../../../assets/icons/wavesOpacity.svg";
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link";


const MyButton: React.FC<{
  color: string,
  bg: string,
  href: string,
  children: React.ReactNode,
}> = ({ color, bg, href, children }) => {
  return (
    <motion.div>
      <Button
        className="mx-2 border-slate-50 border font-semibold"
        size={"md"}
        as={"a"}
        w={"6rem"}
        fontSize={"2xl"}
        boxShadow={"4px 4px 0px 0px var(--text-primary)"}

        _hover={{
          transform: 'translate(-2px, -2px)',
          boxShadow: "6px 6px 0px 0px var(--text-primary)",
        }}
        _active={{
          transform: 'translate(4px, 4px)',
          boxShadow: "0px 0px 0px 0px var(--text-primary)",
        }}

        href={href}
        color={color}
        bg={bg}
      >
        {children}
      </Button>
    </motion.div>
  )
}

const NavbarAuthButtons: React.FC = () => {
  return (
    <ButtonGroup className={'my-5 mx-10'} gap='2'>
      {NAVBAR_BUTTONS.map((item, index) => {
        return (
          <MyButton
            key={item.text + '-' + index}
            color={item.color}
            bg={item.bg}
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
      <Flex color={'white'}>
        <Wrap>
          {NAVBAR_ITEMS.map((item, index) => {
            return (
              <WrapItem>
                <Center w='90px'>
                  <Link href={item.href} key={item.text + '-' + index}>
                    <Text className="text-xl font-semibold">
                      {item.text}
                    </Text>
                  </Link>
                </Center>
              </WrapItem>
            )
          })}
        </Wrap>
      </Flex>
    </motion.div>
  )
}

const Navbar: React.FC = () => {
  return (
    <Box>
      <Flex minWidth='max-content' alignItems='center' gap='2' bg={"var(--background-primary)"}>
        <Box p='2'>
          <Link href={'#'}>
            <Image className={'my-5 mx-10'} src={Logo} alt={"Logo"} width={150} height={150} />
          </Link>
        </Box>
        <NavbarLinks />
        <Spacer />
        <Box p='2'>
          <NavbarAuthButtons />
        </Box>
      </Flex>
      <Image src={WavesDivider} alt="wavesDivider" className={"w-screen h-12"} />
    </Box>
  )
}

let NAVBAR_BUTTONS: Array<{
  text: string,
  href: string,
  color: string,
  bg: string
}> = [
    {
      text: "Log In",
      href: "#",
      color: "white",
      bg: "var(--background-primary)"
    },
    {
      text: "Sign Up",
      href: "#",
      color: "var(--background-primary)",
      bg: "white",
    },
  ];

let NAVBAR_ITEMS: Array<{
  text: string,
  href: string
}> = [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Game",
      href: "#"
    },
    {
      text: "Chat",
      href: "#"
    }
  ];

export default Navbar;
