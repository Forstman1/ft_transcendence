"use client";

/* ------------------------------------------------ Remote Components ----------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MenuButton, MenuList, MenuItem, MenuDivider,
  IconButton, Modal, ModalOverlay, ModalContent,
  Stack, Avatar, AvatarBadge,
  Box, Flex, Button, Center, Text, Menu,
  ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
/* ------------------------------------------------------ Hooks ----------------------------------------------------- */
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchUserProfile } from '@/utils/functions/auth/fetchingUserData';
import {
  AuthButtonsList, NAVBAR_ITEMS, AuthButtonObj
} from '@/utils/constants/auth/AuthConstants';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '@/redux/slices/authUser/authUserSlice';
import { useAppSelector } from '@/redux/store/store';

/* -------------------------------------------------- Remote Assets ------------------------------------------------- */
import { HamburgerIcon } from '@chakra-ui/icons';

/* -------------------------------------------------- Local Assets -------------------------------------------------- */
import WavesDivider from 'assets/icons/wavesOpacity.svg';
import Logo from 'assets/icons/Logo.svg';
import LoginThumbnail from 'assets/icons/Auth/undraw_my_password_re_ydq7.svg';
import { io } from "socket.io-client";
import { setSocketState } from "@/redux/slices/socket/globalSocketSlice";
import { initialState as DefaultUserStoreData, UserState } from "@/redux/slices/authUser/authUserSlice";
import { setChatSocketState } from '@/redux/slices/socket/chatSocketSlice';
import Notification from '../Notification/Notification';



const CreatGameGlobalSocket = (user: any) => {
  const socket = io(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001', {
    transports: ["websocket"],
    upgrade: false,
    auth: {
      id: user.userId,
    },
  });
  socket.emit("createRoomNotification", { userId: user.userId });
  return socket;
}

const CreatChatGlobalSocket = (user: any) => {

  const socket = io(process.env.NEXT_PUBLIC_SERVER_URL + 'chat' || 'http://localhost:3001/chat', {
    transports: ["websocket"],
    upgrade: false,
    auth: {
      id: user.userId,
    },
  });
  return socket;
}


/* --------------------------------------------------- AuthButtons -------------------------------------------------- */
// loginWithService

export function AuthButtons() {
  return (
    <Flex className='w-full flex-row flex-wrap justify-center gap-4'>
      {AuthButtonsList.map((button: AuthButtonObj, index: number) => {
        return (
          <Button
            key={index} className='text-xl w-full max-w-[18rem]'
            as='a' href={`${process.env.NEXT_PUBLIC_SERVER_URL}auth/${button.name}/login`}
            target='_self'
            backgroundColor={button.bgClr} color={button.clr}
            border='2px' borderColor={button.borderClr}
            size='lg' rounded='md' fontWeight='semibold'
            boxShadow='0.2rem 0.2rem 0rem 0rem rgb(150,150,150)'
            _hover={{
              bgColor: button.hoverClr,
              borderColor: `${button.borderClr === button.bgClr ? button.hoverClr : button.borderClr
                }`,
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
        );
      })}
    </Flex>
  );
}

/* --------------------------------------------------- SignupButton -------------------------------------------------- */

export function SignupButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div>
      <Button
        as='a'
        className={`cursor-pointer w-16 h-6 text-xl md:w-24 md:h-10 md:text-2xl`}
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
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

export function UserProfileNavbarBadge() {
  const data = useSelector((state: { authUser: UserState }) => state.authUser);
  return (
    <Flex alignItems='center' gap={5} flexDirection='row-reverse'>
      <Box flexShrink={0}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar size={['md', 'md', 'md', 'lg']} src={data.avatarUrl}>
              <AvatarBadge
                boxSize='1em'
                borderColor={data.isOnline ? 'green.100' : 'red.100'}
                bg={data.isOnline ? 'green.500' : 'red.500'}
              />
            </Avatar>
          </MenuButton>
          <MenuList alignItems={'center'}>
            <br />
            <Center>
              <Avatar size={'2xl'} src={data.avatarUrl}>
                <AvatarBadge
                  boxSize='1em'
                  borderColor={data.isOnline ? 'green.100' : 'red.100'}
                  bg={data.isOnline ? 'green.500' : 'red.500'}
                />
              </Avatar>
            </Center>
            <br />
            <Center>
              <p className='text-2xl font-bold'>{data.username}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem as='a' href='/userPage'>Profile</MenuItem>
            <MenuItem as='a' href='/settings'>Settings</MenuItem>
            <MenuDivider />
            <MenuItem
              color={'red.500'} as='a'
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}auth/logout`}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

/* ------------------------------------------------------------------------------------------------------------------ */

export function SignupModal() {
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
        <SignupButton onClick={() => {
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

/* ------------------------------------------------------------------------------------------------------------------ */


const HeaderNavDesktop: React.FC = () => {
  let path = usePathname();
  const user = useSelector((state: { authUser: UserState }) => state.authUser);
  const GameRouter = ["/gamePage/gameFriendPage", "/gamePage/gameBotPage"]
  path = GameRouter.includes(path) ? "/gamePage" : path;

  return (
    <nav className='hidden md:block'>
      <motion.div>
        <Flex color='white' className="grid-cols-3 w-full h-full items-center justify-between space-x-8">
          {NAVBAR_ITEMS.map((item: {
            text: string,
            href: string
          }, index: number) => {
            return (
              <Box key={index} className='col-span-1'>
                <Center>
                  {item.href === "/" && (
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
                  )}
                  {item.href !== "/" &&  user.isAuthenticated && (
                    <Link href={item.href} className="w-auto">
                      <Text className="text-2xl font-semibold">
                        {item.text}
                      </Text>
                      {path.includes(item.href) ? (
                        <motion.span
                          layoutId="underline"
                          className="absolute w-6 h-1 bg-white rounded-full"
                        />
                      ) : null}
                    </Link>
                  )}
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
  const user = useSelector((state: { authUser: UserState }) => state.authUser);
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
              <Link href={item.href} key={`mobile-navbar-menu-link-${index}`}>
                { item.href === "/" && (
                <MenuItem
                  key={`mobile-navbar-menu-item-${index}`} rounded='md' as={"button"}
                  className={`bg-neutral-900 text-neutral-50 border-neutral-950`}
                >
                  <Text className="text-xl font-semibold">
                    {item.text}
                  </Text>
                  {index != NAVBAR_ITEMS.length - 1 ? <MenuDivider /> : null}
                </MenuItem>
                )}
                { item.href !== "/" && user.isAuthenticated && (
                  <MenuItem
                    key={`mobile-navbar-menu-item-${index}`} rounded='md' as={"button"}
                    className={`bg-neutral-900 text-neutral-50 border-neutral-950`}
                  >
                    <Text className="text-xl font-semibold">
                      {item.text}
                    </Text>
                    {index != NAVBAR_ITEMS.length - 1 ? <MenuDivider /> : null}
                  </MenuItem>
                )}
              </Link>
            )
          })}
        </MenuList>
      </Menu>
    </Box>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: { authUser: UserState }) => state.authUser);
  const socketState = useAppSelector((state) => state.globalSocketReducer);
  const ChatsocketState = useAppSelector((state) => state.socket);
  const [userAuthenticated, setUserAuthenticated] = useState(user.isAuthenticated);
  useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    refetchInterval: 5000,
    useErrorBoundary: false,
    onError: () => {
      setUserAuthenticated(false);
      dispatch(updateUser(DefaultUserStoreData));
    },
    onSuccess: (response: any) => {
      setUserAuthenticated(true);
      dispatch(updateUser({ isAuthenticated: true, ...response.data }));
      if(!socketState.socket){
        const gameSocket = CreatGameGlobalSocket(response.data);
        dispatch(setSocketState({
          socket: gameSocket,
        }));
      }
      if(!ChatsocketState.socket){
        const chatSocket = CreatChatGlobalSocket(response.data);
        dispatch(setChatSocketState({
          socket: chatSocket,
          userID: response.data.userId,
        }));
      }
      // const chatSocket = CreatChatGlobalSocket(response.data);
      // dispatch(setChatSocketState({
      //   socket: chatSocket,
      //   userID: response.data.userId,
      // }));
    },
  });


  return (
    <header className="w-full h-16 md:h-24 bg-neutral-950 fixed top-0 z-50">
      <Flex
        className="grid-cols-3 px-[10%]"
        width="full"
        height="full"
        alignItems="center"
        flexDirection="row"
      >
        <div className='flex w-full flex-row'>
          <Flex
            key="navbar-menu-item-1"
            className="h-full col-span-1 order-1 md:order-2 w-1/3 md:w-72 md:mr-auto"
            justifyContent="center"
            alignItems="center"
          >
            <HeaderNavMobile />
            <HeaderNavDesktop />
          </Flex>
          <Flex
            key="navbar-menu-item-2"
            className="h-full col-span-1 order-2 md:order-1 w-1/3 md:w-56 max-md:hidden"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="/">
              <Image src={Logo} alt="Website Logo" width={150} height={150} />
            </Link>
            ,
          </Flex>
        </div>
        <Flex
          key="navbar-menu-item-3"
          className="h-full col-span-1 order-last w-1/3 md:w-72"
          justifyContent="center"
          alignItems="center"
        >
          {userAuthenticated == true ? (
            <div className="flex flex-row gap-6 items-center justify-center">
              <Notification />
              <UserProfileNavbarBadge />
            </div>
          ) : (
            <SignupModal />
          )}
        </Flex>
      </Flex>

      <Image
        src={WavesDivider}
        alt="Header Decoration"
        className="w-full h-5 -mt-[1px]"
      />
    </header>
  );
}
