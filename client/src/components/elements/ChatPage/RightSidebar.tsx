"use client"

import React from 'react'
import { Text, Avatar, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Profile from '../../../../assets/icons/Profile.svg'
import InviteToaGame from '../../../../assets/icons/InviteToaGame.svg'
import Link from 'next/link'
import { useToast } from '@chakra-ui/react'
import ChannelMemberActions from './ChannelMemberActions'
import UserControls from './UserControls'




export default function RightSidebar() {


  const toast = useToast();

  return (
    <Box className='Main-Box hidden md:block h-full w-[300px] overflow-y-auto border-l-[3px] border-l-black gap-10 pt-6 xl:w-[465px]'>
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7 '>
        <Text className='flex text-black text-4xl drop-shadow-[2px_2px_0_rgba(18,18,18,.0.50)]'>
          user_455013
        </Text>
        <Avatar className='m-7 h-[130px] w-[130px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)]' />
        <Box className='bg-black justify-start flex items-center rounded text-white w-[200px] h-[45px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)]'>
          <Box className='AvatarBadge w-[25px] h-[25px] rounded-full bg-green-600 mx-5' />
          <Text className='text-3xl'>Available</Text>
        </Box>
      </Box>
      <hr className='bg-black h-[2px] mx-10' />
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <Box className='flex items-center gap-6 w-[220px]'>
          <Image src={Profile} width={30} height={30} alt="View Profile"/>
          <Link href={'/gamePage'} className='text-2xl cursor-pointer'>
            View Profile
          </Link>
        </Box>
        <Box className='flex items-center gap-6 w-[220px]'>
          <Image src={InviteToaGame} width={30} height={30} alt="View Profile" />
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
        <UserControls/>
      </Box>
      <hr className='bg-black h-[2px] mx-10' />
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <ChannelMemberActions/>
      </Box>
    </Box>
  )
}
