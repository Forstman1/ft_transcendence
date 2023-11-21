"use client"

import React from 'react'
import { Text, Avatar, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Profile from '../../../../../assets/icons/Profile.svg'
import InviteToaGame from '../../../../../assets/icons/InviteToaGame.svg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useToast } from '@chakra-ui/react'

import UserControls from './UserControls'
import { useSelector } from 'react-redux'
import AddToChannelComponent from './AddToChannelComponent'





export default function RightSidebar() {

  

  const { RightClice } = useSelector((state: any) => state.mobile)

  const toast = useToast();
  const User = useSelector((state: any) => state.chat.selectedChannelorUser)

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

    <Box  className='UserRightSideBar items-center w-[375px] absolute md:block bg-opacity-80 max-md:backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0 pt-[150px]'
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
          <Box className={`AvatarBadge w-[25px] h-[25px] rounded-full mx-5 ${User.isOnline ? `bg-green-600`: `bg-red-600`}`} />
          <Text className='text-3xl'> {User.isOnline ? `Availabel` : `Unvailable`} </Text>
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
    </Box>
  )
}
