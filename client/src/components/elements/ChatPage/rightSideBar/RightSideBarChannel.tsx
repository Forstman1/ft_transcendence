"use client"

import React, { RefObject, useEffect } from 'react'
import { Text, Avatar, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Profile from '../../../../../assets/icons/Profile.svg'
import InviteToaGame from '../../../../../assets/icons/InviteToaGame.svg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useToast } from '@chakra-ui/react'
import ChannelMemberActions from './ChannelMemberActions'
import UserControls from './UserControls'
import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from '@chakra-ui/react'

import { setLeft, setMidle, setRight } from '@/redux/slices/chat/MobileSlice'
import ChannelConfiguration from './channelconfiguration/ChannelConfiguration'
import { Channel } from '@/utils/types/chat/ChatTypes'
import ChannelSetting from './channelsetting/ChannelSetting'





export default function RightSidebarChannel() {

  
  const { MidleClice } = useSelector((state: any) => state.mobile)
  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)
  const isDesktop = useMediaQuery("(min-width: 1000px)")
  const toast = useToast();
  const dispatch = useDispatch()
  const channel: Channel = useSelector((state:any) => state.chat.selectedChannelorUser)


  // if(isDesktop[0]) {
  //   dispatch(setRight(true))
  //   dispatch(setMidle(true))
  //   dispatch(setLeft(true))
  // }

  const sidebar = {
    open: (height = 1000) => ({
      // width: "375px",
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
   
    <Box  className='RightSideBar w-[375px] absolute md:block backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0'
      as={motion.div}
      initial={false}
      animate={RightClice.RightValue ? "open" : "closed"}
      variants={sidebar}
      
    >
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7 '>
        <Text className='flex text-black text-4xl drop-shadow-[2px_2px_0_rgba(18,18,18,.0.50)]'>
          # {channel.name}
        </Text>
      </Box>
      <hr className='bg-black h-[2px] mx-10' />

        <ChannelConfiguration />
        
      <hr className='bg-black h-[2px] mx-10' />

        <ChannelSetting />
      {/* <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <ChannelMemberActions />
      </Box> */}
    </Box>
  )
}
