"use client";

import { Box, Flex, Button, ButtonGroup, Spacer, Center, Text } from "@chakra-ui/react";
import Logo from "../../../assets/icons/Logo.svg";
import WavesDivider from "../../../assets/icons/wavesOpacity.svg";
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link";

const WaveHeaderDivider: React.FC = () => {
  return (
    <Image src={WavesDivider} alt="wavesDivider" />
  )
}

const MyButton: React.FC<{
  color: string,
  bg: string,
  href: string,
  children: React.ReactNode,
}> = ({ color, bg, href, children }) => {
  return (
    <motion.div>
      <Button
      className={"mx-2"}
        size={"md"}
        as={"a"}
        w={"6rem"}
        fontSize={"2xl"}
        fontWeight={600}
        href={href}
        color={color}
        bg={bg}
        boxShadow={"4px 4px 0px 0px var(--text-primary)"}
        borderWidth={1}
        borderColor={"var(--text-primary)"}
        _hover={{}}
        _active={{
          transform: 'translate(4px, 4px)',
          boxShadow: "0px 0px 0px 0px var(--text-primary)",
        }}
      >
        {children}
      </Button>
    </motion.div>
  )
}

const NavbarAuthButtons: React.FC = () => {
  return (
    <ButtonGroup className={'my-5 mx-10'} gap='2'>
      <MyButton
        color="white"
        bg="var(--background-primary)"
        href="#"
      >
        Log In
      </MyButton>
      <MyButton
        color="var(--background-primary)"
        bg="white"
        href="#"
      >
        Sign Up
      </MyButton>
    </ButtonGroup>
  );
}


const NavbarLinks: React.FC = () => {
  return (
    <Flex color={'white'}>
      <Center w='90px'>
        <Link href={"#"}>
          <Text fontSize={"2xl"} fontWeight={500}>
            Home
          </Text>
        </Link>
      </Center>
      <Center w='90px'>
        <Link href={"#"}>
          <Text fontSize={"2xl"} fontWeight={500}>
            Game
          </Text>
        </Link>
      </Center>
      <Center w='90px'>
        <Link href={"#"}>
        <Text fontSize={"2xl"} fontWeight={500}>
            Chat
          </Text>
        </Link>
      </Center>
    </Flex>
  )
}



const Navbar: React.FC = () => {
  return (
      <Box>
      <Flex minWidth='max-content' alignItems='center' gap='2' bg={"var(--background-primary)"}>
        <Box p='2'>
          <Link href={'#'}>
            <Image className={'my-5 mx-10'} src={Logo} alt={"Logo"} width={150} height={150}/>
          </Link>
        </Box>
        <NavbarLinks />
        <Spacer />
        <Box p='2'>
          <NavbarAuthButtons />
        </Box>
      </Flex>
      <Image src={WavesDivider} alt="wavesDivider" className={"w-screen h-12"}/>
    </Box>
  )
}
 
export default Navbar;
