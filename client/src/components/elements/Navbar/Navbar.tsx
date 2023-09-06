"use client";

import {
  Box, Flex, Button, Center, Text,
  Menu, MenuButton, MenuList, MenuItem, IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from "../../../../assets/icons/Logo.svg";
import WavesDivider from "../../../../assets/icons/wavesOpacity.svg";
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link";
import React from 'react';
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@chakra-ui/react';



function LoginButton() {
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
        <Button as={"a"} size='sm' href="#" _hover={{}}
          className="bg-neutral-50 text-neutral-950 border-neutral-50 text-2xl 
            rounded border border-current font-semibold"
          boxShadow="0.2rem 0.2rem 0rem 0rem rgb(150,150,150)"
          _active={{
            transform: 'translate(0.2rem, 0.2rem)',
            boxShadow: "0rem 0rem 0rem 0rem rgb(20,20,20)",
          }}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Log In
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex className="justify-center items-center flex-col">
                <Button className="text-neutral-50 rounded border-2 border-teal-500 bg-teal-500">Log In with 42 Intra</Button>
                <Button className="text-sky-600 rounded border-2 border-sky-600">Log In with Google</Button>
                <Button className="text-gray-50 rounded border-2 border-gray-900 bg-gray-900">Log In with Github</Button>
              </Flex>
              <Center>
                <Text>
                  Don&apos;t Worry, we won&apos;t collect any private informations!
                </Text>
              </Center>
            </ModalBody>
            <ModalFooter>
              {/* self-explanatory */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </motion.div>
    </>
  )
}


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

const NavbarLinks: React.FC = () => {
  let path = usePathname();
  const GameRouter = ["/gamePage/gameFriendPage", "/gamePage/gameBotPage"]
  path = GameRouter.includes(path) ? "/gamePage" : path;

  return (
    <motion.div>
      <Flex color={'white'} className="grid-cols-3 w-full h-full items-center justify-start space-x-8">
        {NAVBAR_ITEMS.map((item: {
          text: string,
          href: string
        }, index: number) => {
          return (
            <Box key={index} className='col-span-1'>
              <Center>
                <Link href={item.href} className="w-auto">
                  <Text className="text-2xl font-semibold">
                    {item.text}
                  </Text>
                  {path === item.href ? (
                    <motion.span
                      layoutId="underline"
                      className="absolute w-6 h-1 bg-white rounded-full"
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

const Navbar: React.FC = () => {
  return (
    <header className="w-screen h-20 md:h-24 bg-neutral-950">

      <Flex className="w-full h-full grid-cols-3 justify-between items-center ">

        <Flex className="order-1 md:order-2 basic-1/3 md:basis-4/6 justify-center md:justify-start items-center col-span-1">
          <Box className="invisible md:visible">
            <NavbarLinks />
          </Box>
          <Box className="md:invisible">
            <MenuLinks />
          </Box>
        </Flex>

        <Flex className="order-2 md:order-1 basic-1/3 md:basis-1/6 justify-center items-center col-span-1">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={150} height={150} />
          </Link>
        </Flex>

        <Flex className="order-last basic-1/3 md:basis-1/6 justify-end md:justify-end md:pr-10 items-center col-span-1">
          <LoginButton />
        </Flex>

      </Flex>

      <Image src={WavesDivider} alt="WavesDivider" className="w-full h-5" />

    </header>
  )
}

export default Navbar;
