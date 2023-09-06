"use client";

import { SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Button, Icon, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import Newchannel from './newchannel';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function Hashtag(props: any) {
  return (<div className='flex items-center cursor-pointer'>
    <div className='h-[20px] text-[40px] mr-3'>#</div>
    <div className='h-[20px] text-[30px]'>{props.text}</div>
  </div>)
}


function Usercard(props: any) {
  return (<div className='flex justify-between items-center border-1 border-black shadow-lg shadow-gray-400 cursor-pointer m-2 ml-0 p-2  rounded-md'>

    <div>
      <Avatar boxSize={16}>
        <AvatarBadge boxSize={6} bg='green' />
      </Avatar>

    </div>

    <div className='flex flex-col items-center justify-around'>
      <div className='text-[30px]'>user_69420</div>
      <div className='text-gray-400'>ok, see you tomorrow</div>
    </div>

    <div className='flex flex-col items-center'>
        <div>06:49 pm</div>
        <div className='rounded-full bg-black w-7 h-7 flex items-center justify-center text-[25px] text-white'>3</div>
    </div>

  </div>)
}









export default function LeftSidebar() {

  let Channels = ["General", "Random", "Music", "Anime", "Manga"]

  let users = ["General", "General", "General", "General", "General", "General", "General", "General", "General", "General", "General"]

  let [channels, setNewChannels] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handelNewChannels = (data: any) => {
    
  }



  return (
    <div>
    <div className=' w-[465px]   flex flex-col items-center   '>

      <div className=' w-[350px] h-[65px] mt-5 border-2 border-black rounded-sm flex justify-between items-center shadow-md shadow-black'>
        <div className='ml-5 text-gray-200 text-[30px]'>Search...</div>
        <div className='w-[75px] h-[63px] bg-black flex items-center justify-center cursor-pointer'><Icon boxSize={8} color="white" as={SearchIcon} /></div>
      </div>

      <div className='w-[350px] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
        <div className='text-[40px] font-bold'>Channels</div>
        <div onClick={onOpen} className='cursor-pointer' ><Icon boxSize={10} as={SmallAddIcon} /></div>
      </div>

      <div className='flex h-[500px] flex-col w-[350px]  gap-6 overflow-y-scroll'>

        {Channels.map((data: any) => {
          return <Hashtag text={data} />
        })}

      </div>

      <div className='w-[350px] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
        <div className='text-[40px] font-bold'>Direct Messages</div>
        <div className='cursor-pointer'><Icon boxSize={10} as={SmallAddIcon} /></div>
      </div>

      <div className=' mt-[50px] flex  justify-between h-[500px] flex-col w-[350px]  gap-6 overflow-y-scroll'>

        {users.map((data: any) => {
          return <Usercard text={data} />
        })}

      </div>
    </div>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newchannel isOpen={isOpen}
        onClose={onClose}
          /> 
      </Modal>
    
    </div>
  )
}
