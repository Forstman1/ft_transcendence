"use client"

import React, { useState } from 'react'
import { Text, Avatar, Box, useDisclosure, Alert, AlertTitle, AlertIcon, Drawer } from '@chakra-ui/react'
import Image from 'next/image'
import Profile from '../../../../assets/icons/Profile.svg'
import InviteToaGame from '../../../../assets/icons/InviteToaGame.svg'
import AddToFriendList from '../../../../assets/icons/AddToFriendList.svg'
import Block from '../../../../assets/icons/Block.svg'
import AddToChannel from '../../../../assets/icons/AddToChannel.svg'
import Mute from '../../../../assets/icons/Mute.svg'
import Ban from '../../../../assets/icons/Ban.svg'
import ModalWraper from './ModalWraper'
import Link from 'next/link'
import { useToast } from '@chakra-ui/react'




export default function RightSidebar() {


  const toast = useToast();

  const OptImages = [
    // { src: Profile, alt: "View profile" },
    // { src: InviteToaGame, alt: "Invite to a Game" },
    { src: AddToFriendList, alt: "Add to friend list" },
    { src: Block, alt: "Block" },
  ]

  const CtrlImages = [
    { src: AddToChannel, alt: "Add to channel" },
    { src: Ban, alt: "Ban from channel" },
    { src: Mute, alt: "Mute" },
  ]



  /*****************************************************************************************************************/
  /*****************************************************************************************************************/


  const { isOpen, onOpen, onClose } = useDisclosure()


  const Options = OptImages.map((image) =>
    // <Text className='flex items-center gap-6 text-2xl w-[220px]'>
    //   <Image src={image.src} width={30} height={30} alt={image.alt} />
    //   {image.alt}
    // </Text>

    <Box className='flex items-center gap-6 w-[220px]'>
      <Image src={image.src} width={30} height={30} alt={image.alt} />
      <Text className='text-2xl cursor-pointer'>
        {image.alt}
      </Text>
      <ModalWraper isOpen={isOpen} onClose={onClose} />
    </Box>
  )


  /*****************************************************************************************************************/
  /*****************************************************************************************************************/

  const [imageAlt, setImageAlt] = useState('');

  const Control = CtrlImages.map((image) =>

    // <Text className='flex items-center gap-6 text-2xl w-[220px] cursor-pointer'>  //! in case it was better if even the icon has a pointer effect
    //  <Image src={image.src} width={30} height={30} alt={image.alt} />
    //   {image.alt}
    // </Text>

    <Box className='flex items-center gap-6 w-[220px]'>
      <Image src={image.src} width={30} height={30} alt={image.alt} />
      <Text className='text-2xl cursor-pointer'
        onClick={() => { onOpen(); setImageAlt(image.alt) }}
      >
        {image.alt}
      </Text>
      <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} />
    </Box>

  )

  /*****************************************************************************************************************/
  /*****************************************************************************************************************/


  return (
    
    <Box className='Main-Box w-[300px] overflow-y-auto border-l-[3px] border-l-black gap-10 pt-6 xl:w-[465px]'>
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
        <Text className='flex text-black text-4xl drop-shadow-[2px_2px_0_rgba(18,18,18,.0.50)]'>
          user_455013
        </Text>
        <Avatar className='m-7 h-[130px] w-[130px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)] -z-10'/>
        <Box className='bg-black justify-start flex items-center rounded text-white w-[200px] h-[45px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)]'>
          <Box className='AvatarBadge w-[25px] h-[25px] rounded-full bg-green-600 mx-5' />
          <Text className='text-3xl'>Available</Text>
        </Box>
      </Box>
      <hr className='bg-black h-[2px] mx-10 str' />
      <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
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
        {Options}
      </Box>
      <hr className='bg-black h-[2px] mx-10 str' />
         <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>
         {Control}
       </Box>
    </Box>
  )
}
