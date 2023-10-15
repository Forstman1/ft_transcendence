"use client";

import { SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge,  Icon,  useDisclosure, Modal, background } from '@chakra-ui/react';
import React, {  useEffect, useState, useRef, use } from 'react'
import Newchannel from './newchannel';


import Hashtag from './hatshtag';
import Newmessage from './newmessage';
import Search from './search';
import { Channel, User } from '@/utils/types/chat/ChatTypes';
import { useSelector } from 'react-redux';
import { PrismaClient } from '@prisma/client';
import { Box, Flex } from '@chakra-ui/layout';
import { inView } from 'framer-motion';
import { motion } from 'framer-motion';


function Usercard(props: any) {

  // const { inView: boolean } = useSelector((state: any) => state.counter)
  const { user } = useSelector((state : any) => state.userID)
  
  const scroolToRef = useRef<HTMLDivElement>(null)

  let pathname : string = '';
  
  return (
  
  <Box ref={scroolToRef} className='flex justify-between items-center cursor-pointer m-2 ml-0 p-2 rounded-md active:bg-zinc-300'

  
  id={pathname === props.id ? 'active' : ''}
  onClick={() => pathname = props.data.id}
  {...(user === props.data.id ? scroolToRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' }) && {bg: 'bg-zinc-300'} : {})}
  >

    <div> 
      <Avatar className='custom-shadow border-[1px] border-black' boxSize={14}>
        <AvatarBadge className='custom-shadow border-[1px] border-black' boxSize={4} bg='green.500' />
      </Avatar>

    </div>

    <div className='ml-[7px] flex flex-col  text-left w-[60%] justify-around'>
      <div className='text-[22px] font-bold'>{props.data.username}</div>
      <div className='text-gray-400 text-[12px] font-medium	'>ok, see you tomorrow</div>
    </div>

    <div className='flex flex-col items-center text-center '>
      <div className='text-[13px] text-gray-400'>06:49 pm</div>
      <div className='rounded-full bg-black w-5 h-5 flex items-center justify-center text-[20px] text-white'>3</div>
    </div>

  </Box>)
}



export default function LeftSidebar() {

  let [channels, setNewChannels]: any = useState([])

  let [users, setNewUsers]: any = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ChannelOrUser, setChannelOrUser] = useState(false)


  const userId = useSelector((state:any) => state.channel.userId);

  useEffect(() => {
    
    const fetchData = async () => {
      // const fetchChannels = await fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId)
      // const response = await fetchChannels.json()
      // if (response.length > 0)
      // {
      //   const allchannels: Channel[] = response
      //   console.log(allchannels)
      //   setNewChannels(allchannels)
      //   return allchannels;
      // }

    }
    fetchData()
  }, [])

  const { MidleClice } = useSelector((state: any) => state.mobile)
  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)

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

    // <Box className='LeftSideBar hidden md:grid border-r-[3px] border-r-black overflow-y-scroll place-items-center '
    <Box className='LeftSideBar place-items-center grid w-[375px] absolute  h-full overflow-y-auto border-r-[3px] border-r-black  md:static md:w-[400px] '
      as={motion.div}
      initial={false}
      animate={LeftClice.LeftValue ? "open" : "closed"}
      variants={sidebar}
    >
        <Search
          channels={channels}
          users={users}
        />

        <div className='w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[30px] font-bold'>Channels</div>
          <div onClick={() => { onOpen(), setChannelOrUser(true) }} className='cursor-pointer' ><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        <div className='flex h-[400px] flex-col w-full mt-[30px] items-center gap-6 overflow-y-scroll'>

          {channels.map((data: Channel) => {
            if (data.name)
              return <Hashtag data={data} />
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
          setNewChannels={setNewChannels}
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
