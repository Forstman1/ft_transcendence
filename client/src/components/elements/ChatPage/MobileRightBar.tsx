
import React from 'react'
import { Box, Text, Avatar, Link, useToast } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import RightSidebar from './RightSidebar'
import Profile from '../../../../assets/icons/Profile.svg'
import InviteToaGame from '../../../../assets/icons/InviteToaGame.svg'
import ChannelMemberActions from './ChannelMemberActions'
import UserControls from './UserControls'
import Image from 'next/image'



export default function MobileRightBar({RightIsOpen, setRightIsOpen}: any) {

  const ref = React.useRef(null)
  const inView = useInView(ref)
  const toast = useToast()
  
if (!inView) {
  setRightIsOpen(false)
}


  const sidebar = {
    open: (height = 1000) => ({
      width: '300px',
      clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      width: 0,
      clipPath: `circle(30px at 90% 90%)`,
      transition: {
        // delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <Box ref={ref} className='h-screen bg-opacity-30 bg-black overflow-y-scroll w-[300px] border-l-[3px] border-l-black gap-10 pt-6 z-0 sm:[300] md:hidden '
    as={motion.div}
    initial={false}
    animate={RightIsOpen ? "open" : "closed"}
    variants={sidebar}
    >
       <Box className='w-full flex flex-1 flex-col items-center justify-center my-8 gap-7 '>
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
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-8 gap-7'>
        <Box className='flex items-center gap-6 w-[220px]'>
          <Image src={Profile} width={30} height={30} alt="View Profile" />
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
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-8 gap-7 pb-32'>
        <ChannelMemberActions/>
      </Box>
    <RightSidebar/>
  </Box>
  )
}
