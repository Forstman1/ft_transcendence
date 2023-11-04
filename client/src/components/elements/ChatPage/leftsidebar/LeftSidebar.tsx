"use client";

import { SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Icon, useDisclosure, Modal, background, useToast } from '@chakra-ui/react';
import React, { useEffect, useState, useRef, use } from 'react'
import Newchannel from './newchannel';
import Hashtag from './hatshtag';
import Newmessage from './newmessage';
import Search from './search';
import { Channel } from '@/utils/types/chat/ChatTypes';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/utils/types/chat/ChatTypes';
import { Box, Flex } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ChatSocketState } from '@/redux/slices/socket/chatSocketSlice';
import { RootState } from '@/redux/store/store';
import { setChannels, setTheUser } from '@/redux/slices/chat/ChatSlice';


function Usercard(props: any) {

  const { user } = useSelector((state: any) => state.userID)
  const socket = useSelector((state: RootState) => state.socket.socket)

  const dispatch = useDispatch()

  const scroolToRef = useRef<HTMLDivElement>(null)



  const onSubmited = () => {
    socket?.emit('message', 'hello')
    dispatch(setTheUser(props.data))
  }


  let pathname: string = '';



  return (

    <Box ref={scroolToRef} className='flex justify-between items-center cursor-pointer m-2 ml-0 p-2 rounded-md active:bg-zinc-300'
      onClick={() => onSubmited()}
      {...(user === props.data.id ? scroolToRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' }) && { bg: 'bg-zinc-300' } : {})}

    >
      <div>
        <Avatar className='custom-shadow border-[1px] border-black' boxSize={14} src={props.data.avatar}>
          <AvatarBadge className='custom-shadow border-[1px] border-black' boxSize={4} bg='green.500' />
        </Avatar>

      </div>

      <div className='ml-[7px] flex flex-col  text-left w-[60%] justify-around'>
        <div className='text-[22px] font-bold'>{props.data.username} </div>
        <div className='text-gray-400 text-[12px] font-medium	'>ok, see you tomorrow </div>
      </div>

      <div className='flex flex-col items-center text-center '>
        <div className='text-[13px] text-gray-400'>06:49 pm </div>
        <div className='rounded-full bg-black w-5 h-5 flex items-center justify-center text-[20px] text-white'>3 </div>
      </div>

    </Box>)
}



export default function LeftSidebar() {




  let [users, setNewUsers]: any = useState([])
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ChannelOrUser, setChannelOrUser] = useState(false)
  const channels = useSelector((state: any) => state.chat.channels)
  const selected = useSelector((state: any) => state.chat.selectedChannelorUser)
  const userId = useSelector((state: any) => state.userID.user);
  const toast = useToast()


  const { MidleClice } = useSelector((state: any) => state.mobile)
  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)

  const socket = useSelector((state: any) => state.channelChatSocket.socket)


  useEffect(() => {


    socket.emit('getChannels', { userId: userId })



    socket.on('allchannels', (data: any) => {
      console.log(data)
      const allchannels: Channel[] = data.channels

      allchannels.map((channel: Channel) => {
        socket.emit('joinChannel', {
          channelId: channel.id,
          userId: userId,
        })
      });

      dispatch(setChannels(allchannels))

    })

    
    socket.on('channelLeft', (data: any) => {
      console.log(data)
      if (data.userId === userId) {
        toast({
          title: "you left the channel",
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        })
      }
      else {
        toast({
          title: data.message,
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        })
      }
    })

    socket.on('channelDeleted', (data: any) => {
      if (data.status == "you are not owner of the channel") {

        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
      else {
        toast({
          title: "Channel has been deleted",
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        dispatch(setChannels(null))
      }
    })

    
    return () => {
      socket.off('channelLeft');
      socket.off('allchannels');
      socket.off('channelDeleted');
    }
  }, [])



  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {

      width: 0,
      clipPath: `circle(0px at 10% 90%)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };



  return (

    <Box className='LeftSideBar place-items-center grid w-[375px] absolute  h-full overflow-y-auto border-r-[3px] border-r-black  md:static md:w-[400px] backdrop-blur-xl z-10'
      as={motion.div}
      initial={false}
      animate={LeftClice.LeftValue ? "open" : "closed"}
      variants={sidebar}
    >
      <Search />

      <div className='w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
        <div className='text-[30px] font-bold'>Channels</div>
        <div onClick={() => { onOpen(), setChannelOrUser(true) }} className='cursor-pointer' ><Icon boxSize={10} as={SmallAddIcon} /></div>
      </div>

      <div className='flex h-[400px] flex-col w-full mt-[30px] items-center gap-6 overflow-y-scroll'>

        {channels && channels.length != 0 && channels.map((data: Channel, id: number) => {
          // console.log(data)
          if (data.name)
            return <Hashtag key={id} data={data} />
        })}

      </div>

      <div className='w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
        <div className='text-[30px] font-bold'>Direct Messages</div>
        <div onClick={() => { onOpen(), setChannelOrUser(false) }} className='cursor-pointer'><Icon boxSize={10} as={SmallAddIcon} /></div>
      </div>

      <div className=' mt-[40px] flex  h-[500px] flex-col w-full  gap-6 overflow-y-scroll'>

        {users.map((data: User) => {
          return <Usercard
            key={data.username}
            data={data}
          />
        })}

      </div>
      {ChannelOrUser === true ? <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newchannel isOpen={isOpen}
          onClose={onClose}
          channels={channels}

        />
      </Modal> : <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newmessage isOpen={isOpen}
          onClose={onClose}
          setNewUsers={setNewUsers}
          users={users}
        />
      </Modal>}
    </Box>

  )
}
