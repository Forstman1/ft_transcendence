"use client"

import React from 'react'
import { Text, Box } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import ChannelConfiguration from './channelconfiguration/ChannelConfiguration'
import { Channel } from '@/utils/types/chat/ChatTypes'
import ChannelSetting from './channelsetting/ChannelSetting'





export default function RightSidebarChannel() {

  

  const { RightClice } = useSelector((state: any) => state.mobile)
  const channel: Channel = useSelector((state:any) => state.chat.selectedChannelorUser)



const sidebar = {
  open: {
    x: 0,
    transition: {
      type: "Tween",
      stiffness: 100,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "Tween",
      stiffness: 100,
    },
  },
};


  return (
   
      <Box className='UserRightSideBar items-center w-[20%] max-xl:w-[30%] max-md:w-[50%] max-sm:w-[80%] absolute md:block bg-opacity-80 max-md:backdrop-blur-xl md:static h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0 pt-[150px]'
      as={motion.div}
      initial={false}
      animate={RightClice.RightValue ? "open" : "closed"}
      variants={sidebar}
      
    >
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <Text className='flex text-black text-4xl drop-shadow-[2px_2px_0_rgba(18,18,18,.0.50)]'>
          # {channel.name}
        </Text>
        <Text className='flex text-black text-xl '>
          {channel.type}
        </Text>

      </Box>
      <hr className='bg-black h-[2px] mx-10' />

        <ChannelConfiguration />
        
      <hr className='bg-black h-[2px] mx-10' />

        <ChannelSetting />

    </Box>
  )
}
