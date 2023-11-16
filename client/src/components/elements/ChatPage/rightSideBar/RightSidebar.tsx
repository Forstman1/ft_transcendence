"use client"

import React, { useEffect } from 'react'
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
import AddToChannelComponent from './AddToChannelComponent'





export default function RightSidebar() {

  

  const { RightClice } = useSelector((state: any) => state.mobile)
  const isDesktop = useMediaQuery("(min-width: 1000px)")

  const toast = useToast();
  const dispatch = useDispatch()
  const User = useSelector((state: any) => state.chat.selectedChannelorUser)

  
  useEffect(() => {
    if (isDesktop[0]) {
      dispatch(setRight(true))
      dispatch(setMidle(true))
      dispatch(setLeft(true))
    }
  } , [isDesktop])




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

    <Box  className='RightSideBar w-[375px] absolute md:block backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0 pt-[100px]'
      as={motion.div}
      initial={false}
      animate={RightClice.RightValue ? "open" : "closed"}
      variants={sidebar}
      
    >
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7 '>
        <Text className='flex text-black text-4xl drop-shadow-[2px_2px_0_rgba(18,18,18,.0.50)]'>
          {User.username}
        </Text>
        <Avatar src={User?.avatarURL} className='m-7 h-[130px] w-[130px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)] border border-black' />
        <Box className='bg-black justify-start flex items-center rounded text-white w-[200px] h-[45px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)]'>
          <Box className='AvatarBadge w-[25px] h-[25px] rounded-full bg-green-600 mx-5' />
          <Text className='text-3xl'>{User.isOnline} </Text>
        </Box>
      </Box>
      <hr className='bg-black h-[2px] mx-10' />
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <Box className='flex items-center gap-6 w-[220px]'>
          <Image src={Profile} priority={false} width={30} height={30} alt="View Profile" 
          style={{
            width: '30px',
            height: '30px'
          }}
          />
          <Link href={'/gamePage'} className='text-2xl cursor-pointer'>
            View Profile
          </Link>
        </Box>
        <Box className='flex items-center gap-6 w-[220px]'>
          <Image src={InviteToaGame} priority={false} width={30} height={30} alt="View Profile"
          style={{
            width: '30px',
            height: '30px'
          }}
          />
          <Text className='text-2xl cursor-pointer' onClick={() => toast({
            title: 'Invitation sent',
            position: 'bottom-right',
            status: 'success',
            duration: 1000,
            containerStyle: {
              width: 300,
              height: 100,
            }
          })}
          >
            Invite to a game
          </Text>
        </Box>
        <UserControls />
      </Box>
      <hr className='bg-black h-[2px] mx-10' />
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <AddToChannelComponent />
        <ChannelMemberActions />
      </Box>
    </Box>
  )
}
