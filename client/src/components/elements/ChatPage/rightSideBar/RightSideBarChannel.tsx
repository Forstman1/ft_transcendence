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
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      }
    }),
    closed: {
      width: 0,
      clipPath: `circle(0px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


  return (
   
    <Box  className='ChannelRightSideBar w-[375px] absolute md:block bg-opacity-80 max-md:backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0 pt-[100px]'
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
