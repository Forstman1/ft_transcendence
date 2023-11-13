"use client";

import { SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Icon, useDisclosure, Modal, background, useToast } from '@chakra-ui/react';
import React, { useEffect, useState, useRef, use } from 'react'
import Newchannel from './newchannel';
import Hashtag from './hatshtag';
import Newmessage from './newmessage';
import Search from './search';
import { Channel, ChannelMember } from '@/utils/types/chat/ChatTypes';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/utils/types/chat/ChatTypes';
import { Box, Flex } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { RootState } from '@/redux/store/store';
import { setChannel, setChannelMember, setChannels, setMessages, setNewChannel, setTheUser, setUserDms } from '@/redux/slices/chat/ChatSlice';
import { useQuery, useQueryClient } from "react-query";
import { useAppSelector } from '@/redux/store/store';
import axios from 'axios';

function Usercard(props: any) {

  const { user } = useSelector((state: any) => state.socket.userID)
  const socket = useSelector((state: any) => state.socket.socket)
  const scroolToRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch();


  const onSubmited = () => {
    
    dispatch(setTheUser(props.data));
    
};

  
  return (
  
  <Box ref={scroolToRef} className='flex justify-between items-center cursor-pointer m-2 ml-0 p-2 rounded-md active:bg-zinc-300'
    onClick={() => onSubmited()}
  {...(user === props.data.id ? scroolToRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' }) && {bg: 'bg-zinc-300'} : {})}

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

  const socket = useSelector((state: any) => state.socket.socket)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ChannelOrUser, setChannelOrUser] = useState(false)
  const channels = useSelector((state: any) => state.chat.channels)
  
  const selected = useSelector((state: any) => state.chat.selectedChannelorUser)
  const userId = useSelector((state: any) => state.socket.userID);
  const Users = useSelector((state: any) => state.chat.users)
  const id = useSelector((state: any) => state.socket.userID);
  const toast = useToast()


  const { MidleClice } = useSelector((state: any) => state.mobile)
  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)

  useQuery({
    queryKey: "users",
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/users/chatlist/${id}`);
      dispatch(setUserDms(data));
    },
  })

  useEffect(() => {
    socket?.emit('getChannelsFirstTime', { userId: userId })
  }, [])


  useEffect(() => {

    socket?.on('getChannelsFirstTime', (data: any) => {
      const allchannels: Channel[] = data.channels

      allchannels.map((channel: Channel) => {
        socket?.emit('joinChannel', {
          channelId: channel.id,
          userId: userId,
        })
      });
      dispatch(setChannels(allchannels))
    })

    socket?.on('channelCreated', (data: any) => {

      if (data.message === "Channel Created") {

        console.log(data.channel, " ana hna 1")
        dispatch(setChannel(data.channel))
        console.log(data.channel.channelMember)
        if (data.channel.channelMember) {
          data.channel.channelMember.map((data1: any) => {
            if (data1.userId === userId)
              dispatch(setChannelMember(data1))
          })
        }
        dispatch(setNewChannel(data.channel))
        
        toast({
          title: data.message,
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        })
        return;
      }
      else {
        toast({
          title: data.message,
          status: "error",
          position: `bottom-right`,
          isClosable: true,
        })
        return;
      }

    })


    socket?.on('allchannels', (data: any) => {
      const allchannels: Channel[] = data.channels

      allchannels.map((channel: Channel) => {
        if (selected?.id === channel.id) {
          dispatch(setChannel(channel))
        }
      });
      dispatch(setChannels(allchannels))

    })


    socket?.on('channelEntered', async (data: any) => {


      if (data.status === "channel doesn't exist") {
        toast({
          title: data.status,
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        })
        return;
      }

      if (data.userId === userId) {
        toast({
          title: "you joined the channel",
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        })

        socket?.emit('joinChannel', {
          channelId: data.channel.id,
          userId: userId,
        })
        console.log(data.channel)

        dispatch(setChannel(data.channel))

        if (selected?.id === data.channel.id) {

          if (selected.channelMember) {
            selected.channelMember.map((data1: any) => {
              if (data1.userId === userId)
                dispatch(setChannelMember(data1))
            })
          }
        }
        socket?.emit('getChannels', { userId: userId })
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


    socket?.on('channelLeft', (data: any) => {
      if (data.userId === userId) {
        toast({
          title: "you left the channel",
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        })
        dispatch(setChannel(null))
        dispatch(setMessages([]))
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

    socket?.on('channelDeleted', (data: any) => {
      if (data.status == "You are not owner of the channel") {

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
        dispatch(setChannel(null))
      }
    })
    socket?.on('setAdministrator', (data: any) => {
      if (data.status === "This member can't be set as an administrator.") {
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
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
      if (data.member && data.member.userId === userId) {
        dispatch(setChannelMember(data.member))
      }
    })

    socket?.on('removeAdministrator', (data: any) => {
      if (data.status === "This member can't be removed as an administrator.") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
      else if (selected?.id === data.channelId) {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }

      if (data.member && data.member.userId === userId) {
        console.log(data.member)
        dispatch(setChannelMember(data.member))
      }
    })

    socket?.on('removeMember', (data: any) => {
      if (data.status === "This member can't be removed.") {
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
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
      if (data.userId === userId) {

        dispatch(setChannel(null))
      }

    })

    socket?.on('setpassword', (data: any) => {
      if (data.status === "You are not owner or admin of the channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
      else if (data.status === "Password is set. Channel is private now") {
        console.log(data)
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        socket.emit('getChannels', { userId: userId })
      }
      else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
    })

    socket?.on('removepassword', (data: any) => {

      if (data.status === "You are not owner or admin of the channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
      else if (data.status === "Password is removed. Channel is public now") {
        console.log(data)
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        socket?.emit('getChannels', { userId: userId })
      }
      else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
    })
    socket?.on('changepassword', (data: any) => {
      if (data.status === "Password is changed") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        socket?.emit('getChannels', { userId: userId })

      }
      else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
    })

    return () => {
      socket?.off('getChannelsFirstTime');
      socket?.off('channelLeft');
      socket?.off('allchannels');
      socket?.off('channelDeleted');
      socket?.off('setAdministrator');
      socket?.off('removeAdministrator');
      socket?.off('removeMember');
      socket?.off('setpassword');
      socket?.off('removepassword');
      socket?.off('changepassword');
      socket?.off('channelEntered');
      socket?.off('channelCreated');
    }
  }, [selected])



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

          if (data.name)
            return <Hashtag key={id} data={data} />
        })}

      </div>

      <div className='w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
        <div className='text-[30px] font-bold'>Direct Messages</div>
        <div onClick={() => { onOpen(), setChannelOrUser(false) }} className='cursor-pointer'><Icon boxSize={10} as={SmallAddIcon} /></div>
      </div>

        <div className=' mt-[40px] flex  h-[500px] flex-col w-full  gap-6 overflow-y-scroll'>
        { 
          Users ? (
          Users.map((userData: User, id: number) => (
            <Usercard
              key={id}
              data={userData}
            />
          ))
        ) : null
        }
  
        </div>
        {ChannelOrUser === true ? <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newchannel isOpen={isOpen}
          onClose={onClose}
          channels={channels}

        />
      </Modal> : <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newmessage isOpen={isOpen}
          onClose={onClose}
        />
      </Modal>}
    </Box>

  )
}
