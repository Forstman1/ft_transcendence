"use client";

/* ------------------------------------------------ Remote Components ----------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Box,
  Icon,
  Flex,
  Button,
  Center,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
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
import { FaTwitter } from 'react-icons/fa6';

/* -------------------------------------------------- Local Assets -------------------------------------------------- */
import WavesDivider from 'assets/icons/wavesOpacity.svg';
import Logo from '../../../../assets/icons/Logo.svg';

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
  hoverClr: string;
  icon: IconType | React.FC;
}


const IntraLogoIcon: React.FC = () => {
  return (
    <Icon
      enableBackground="new 0 0 595.3 841.9"
      viewBox="0 0 137.6 96.6"
    >
      <g transform="translate(-229.2 -372.7)" fill="#fff">
        <polygon points="229.2 443.9 279.9 443.9 279.9 469.3 305.2 469.3 305.2 423.4 254.6 423.4 305.2 372.7 279.9 372.7 229.2 423.4" />
        <polygon points="316.1 398.1 341.4 372.7 316.1 372.7" />
        <polygon points="341.4 398.1 316.1 423.4 316.1 448.7 341.4 448.7 341.4 423.4 366.8 398.1 366.8 372.7 341.4 372.7" />
        <polygon points="366.8 423.4 341.4 448.7 366.8 448.7" />
      </g>
    </Icon>
  )
};


const AuthButonsList: Array<AuthButtonObj> = [
  {
    text: 'Intra',
    href: '#0',
    borderClr: 'teal.400',
    bgClr: 'teal.400',
    clr: 'white',
    hoverClr:'teal.300',
    icon: IntraLogoIcon,
  },
  {
    text: 'Google',
    href: '#0',
    borderClr: 'blue.600',
    bgClr: 'transparent',
    clr: 'blue.600',
    hoverClr:'blue.50',
    icon: FcGoogle,
  },
  {
    text: 'Github',
    href: '#0',
    borderClr: 'gray.900',
    bgClr: 'gray.900',
    clr: 'white',
    hoverClr:'gray.700',
    icon: FaGithub,
  },
  {
    text: 'Twitter',
    href: '#0',
    borderClr: 'cyan.500',
    bgClr: 'cyan.500',
    clr: 'white',
    hoverClr:'cyan.400',
    icon: FaTwitter,
  },
]

const AuthButtons: React.FC = () => {
  return (
    <Flex className='w-full flex-row flex-wrap justify-center gap-4'>
      {AuthButonsList.map((
        button: AuthButtonObj, index: number) => {
        return (
          <Button
            key={index}
            className='text-lg w-full'
            as='a' href={button.href}
            size='lg'
            backgroundColor={button.bgClr} color={button.clr}
            border='2px' borderColor={button.borderClr} rounded='md'
            boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
            fontWeight='semibold'
            _hover={{
              bgColor: button.hoverClr,
              borderColor: `${button.borderClr === button.bgClr ? button.hoverClr : button.borderClr}`,
            }}
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
    </Flex>
  )
}

/* --------------------------------------------------- SignupButton -------------------------------------------------- */

export function SignupButton({ onClick, customClasses }: { onClick: () => void, customClasses: string }) {
  return (
    <>
      <motion.div>
        <Button
          as='a'
          className={`cursor-pointer w-16 h-6 text-xl md:w-24 md:h-10 md:text-2xl ${customClasses}`}
          backgroundColor='whiteAlpha.900' color='blackAlpha.900'
          border='1px' borderColor='whiteAlpha.900' rounded='sm'
          boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
          fontWeight='semibold'
          _hover={{}}
          _active={{
            transform: 'translate(0.2rem, 0.2rem)',
            boxShadow: '0rem 0rem 0rem 0rem rgb(20,20,20)',
          }}
          onClick={onClick}
        >
          Sign Up
        </Button>
      </motion.div>
    </>
  )
}


export function SignupForm() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  // const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <motion.div>
        <SignupButton customClasses="" onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }} />

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
              </Stack>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody >
              <Stack spacing={3}>
                {/* <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    className='bg-neutral-950 text-neutral-50'
                    loadingText="Submitting"
                    size="lg"
                    _hover={{
                      bg: 'gray.700',
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Flex
                  className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t-2 before:border-neutral-950 after:mt-0.5 after:flex-1 after:border-t-2 after:border-neutral-950">
                  <p
                    className="mx-4 mb-0 text-center font-semibold text-neutral-950 ">
                    Or you can try
                  </p>
                </Flex> */}
                <AuthButtons />
              </Stack>
            </ModalBody>

            <ModalFooter>
              {/* <Text m='auto' align='center'>
                Already a user? <Link href='#0' className='text-blue-500'>Log In</Link>
              </Text> */}
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

const HeaderNavDesktop: React.FC = () => {
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

const HeaderNavMobile: React.FC = () => {
  return (
    <Box className='block md:hidden'>
      <Menu>
        <MenuButton
          as={IconButton}
          backgroundColor='white' color='gray.900'
          className='bg-neutral-50'
          variant='solid'
          aria-label='Options'
          icon={<HamburgerIcon w={5} h={5} />}
          height={6} width={10} rounded='md'
          boxShadow={"0.2rem 0.2rem 0rem 0rem rgb(150,150,150)"}
          _hover={{}}
          _active={{
            transform: 'translate(0.2rem, 0.2rem)',
            boxShadow: "0rem 0rem 0rem 0rem rgb(20,20,20)",
          }}
        />
        <MenuList rounded='md' className="border-none border-neutral-50 bg-neutral-900">
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
                {index != NAVBAR_ITEMS.length - 1 ? <MenuDivider /> : null}
              </>
            )
          })}
        </MenuList>
      </Menu>
    </Box>

  )
}

// TODO need to change this later, i don't like it
const HeaderRoutes: React.FC = () => {
  return (
    <>
      <HeaderNavMobile />
      <HeaderNavDesktop />
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
    name: 'SignupButton',
    component: SignupForm
  }
];

const Navbar: React.FC = () => {
  return (
    <header className='w-full h-16 md:h-24 bg-neutral-950 fixed top-0 z-10'>

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
            if (item.name == 'HeaderRoutes') {
              customClasses = 'order-1 md:order-2 w-1/3 md:w-72 md:mr-auto';
            } else if (item.name == 'HeaderLogo') {
              customClasses = 'order-2 md:order-1 w-1/3 md:w-56';
            } else if (item.name == 'SignupButton') {
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
