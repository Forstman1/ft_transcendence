"use client";

/* ------------------------------------------------ Remote Components ----------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Box,
  Flex,
  Button,
  Center,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
} from '@chakra-ui/react';

/* ------------------------------------------------------ Hooks ----------------------------------------------------- */
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@chakra-ui/react';

/* ------------------------------------------------------ Types ----------------------------------------------------- */
import { IconType } from "react-icons";

/* -------------------------------------------------- Remote Assets ------------------------------------------------- */
import { HamburgerIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';

/* -------------------------------------------------- Local Assets -------------------------------------------------- */
import WavesDivider from 'assets/icons/wavesOpacity.svg';
import Logo from '../../../../assets/icons/Logo.svg';
import IntraLogo from '../../../../assets/icons/42Logo.svg';


/* --------------------------------------------------- Header Logo -------------------------------------------------- */
const HeaderLogo = () => {
  return (
    <>
      <Link href="/">
        <Image src={Logo} alt="Website Logo" width={150} height={150} />
      </Link>,
    </>
  )
}

/* --------------------------------------------------- AuthButtons -------------------------------------------------- */
interface AuthButtonObj {
  text: string;
  href: string;
  borderClr: string;
  bgClr: string;
  clr: string;
  icon: IconType;
}

const AuthButonsList: Array<AuthButtonObj> = [
  {
    text: 'Send to 42 Intra',
    href: '#0',
    borderClr: 'teal.500',
    bgClr: 'teal.500',
    clr: 'white',
    icon: FaGithub,
  },
  {
    text: 'Sign in with Google',
    href: '#0',
    borderClr: 'blue.600',
    bgClr: 'transparent',
    clr: 'blue.600',
    icon: FcGoogle,
  },
  {
    text: 'Continue with Github',
    href: '#0',
    borderClr: 'gray.900',
    bgClr: 'gray.900',
    clr: 'white',
    icon: FaGithub,
  },
]

const AuthButtons = () => {
  return (
    <>
      <Center className='p-8'>
        <Stack className='w-full' spacing={3} align={'center'} maxW={'md'}>
          {AuthButonsList.map((
            button: AuthButtonObj, index: number) => {
            return (
              <Button
                key={index}
                as='a' href={button.href}
                size='sm' w='full' h='3rem'
                backgroundColor={button.bgClr} color={button.clr}
                border='2px' borderColor={button.borderClr} rounded='sm'
                boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
                fontWeight='semibold' fontSize='xl'
                _hover={{}}
                _active={{
                  transform: 'translate(0.2rem, 0.2rem)',
                  boxShadow: '0rem 0rem 0rem 0rem rgb(20,20,20)',
                }}
                leftIcon={<button.icon />}
              >
                <Center>
                  <Text>{button.text}</Text>
                </Center>
              </Button>
            )
          })}
        </Stack>
      </Center>
    </>
  )
}

/* --------------------------------------------------- LoginButton -------------------------------------------------- */
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
        <Button
          as='a'
          className='w-16 h-6 text-xl md:w-24 md:h-10 md:text-2xl'
          backgroundColor='whiteAlpha.900' color='blackAlpha.900'
          border='1px' borderColor='whiteAlpha.900' rounded='sm'
          boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
          fontWeight='semibold'
          _hover={{}}
          _active={{
            transform: 'translate(0.2rem, 0.2rem)',
            boxShadow: '0rem 0rem 0rem 0rem rgb(20,20,20)',
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
            <ModalHeader>
              <Text fontSize='2xl'>
                Pong - Log In
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AuthButtons />
            </ModalBody>
            <ModalFooter>
              <Text m='auto'>
                Don&apos;t Worry, we won&apos;t collect any private informations!
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </motion.div>
    </>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

const NAVBAR_ITEMS: Array<{
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

const HeaderButtonRoutes: React.FC = () => {
  let path = usePathname();
  const GameRouter = ["/gamePage/gameFriendPage", "/gamePage/gameBotPage"]
  path = GameRouter.includes(path) ? "/gamePage" : path;
  return (
    <nav className='hidden md:block'>
      <motion.div>
        <Flex color='white' className="grid-cols-3 w-full h-full items-center justify-start space-x-8">
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
    </nav>
  )
}

const HeaderMenuRoutes: React.FC = () => {
  return (
    <Flex className='block md:hidden'
    justifyContent='center'
    justifyItems='center'
    alignItems='center'>
      <Menu>
        <MenuButton
          as={IconButton}
          backgroundColor='white' color='gray.900'
          className='bg-neutral-50'
          variant='solid'
          aria-label='Options'
          icon={<HamburgerIcon w={5} h={5} />}
          height={6} width={10} rounded='sm'
          boxShadow={"0.2rem 0.2rem 0rem 0rem rgb(150,150,150)"}
          _hover={{}}
          _active={{
            transform: 'translate(0.2rem, 0.2rem)',
            boxShadow: "0rem 0rem 0rem 0rem rgb(20,20,20)",
          }}
        />
        <MenuList margin='0' padding='0' rounded='md' className="border-none border-neutral-50 bg-neutral-900">
          {NAVBAR_ITEMS.map((item: {
            text: string,
            href: string
          }, index: number) => {
            return (
              <>
                <MenuItem key={index} rounded='md' className='bg-neutral-900 text-neutral-50 border-neutral-950' as={"a"} href={item.href}>
                  <Text className="text-xl font-semibold">
                    {item.text}
                  </Text>
                </MenuItem>
                {index != NAVBAR_ITEMS.length - 1 ? <hr className="w-full bg-neutral-300"></hr> : null}
              </>
            )
          })}
        </MenuList>
      </Menu>
    </Flex>

  )
}

const HeaderRoutes: React.FC = () => {
  return (
    <>
      <HeaderMenuRoutes />
      <HeaderButtonRoutes />
    </>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */
interface HeaderComponents {
  name: string;
  component: React.FC<{}>
}

const HEADER_ITEMS: Array<HeaderComponents> = [
  {
    name: 'HeaderRoutes',
    component: HeaderRoutes
  },
  {
    name: 'HeaderLogo',
    component: HeaderLogo
  },
  {
    name: 'LoginButton',
    component: LoginButton
  }
];

const Navbar: React.FC = () => {
  return (
    <header className='w-screen h-16 md:h-24 bg-neutral-950'>

      <Flex
        className='grid-cols-3 justify-around md:justify-between
        '
        width='full' height='full'
        alignItems='center'
        flexDirection='row'
      >
        {
          HEADER_ITEMS.map((item: HeaderComponents, index: number) => {
            let customClasses: string;
            if (item.name == 'HeaderRoutes'){
              customClasses = 'order-1 md:order-2 w-1/3 md:w-72 md:mr-auto';
            } else if (item.name == 'HeaderLogo') {
              customClasses = 'order-2 md:order-1 w-1/3 md:w-56';
            } else if (item.name == 'LoginButton') {
              customClasses = 'order-last w-1/3 md:w-56';
            } else {
              customClasses = ' '
            }
            return (
              <Flex
                key={index}
                className={`h-full col-span-1 ${customClasses}`}
                justifyContent='center'
                alignItems='center'
              >
                <item.component />
              </Flex>
            )
          })
        }
      </Flex>

      <Image src={WavesDivider} alt='Header Decoration' className='w-full h-5' />

    </header>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

export default Navbar;
