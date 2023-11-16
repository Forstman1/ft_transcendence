import React from 'react'
import AddToFriendList from '../../../../../assets/icons/AddToFriendList.svg'
import Block from '../../../../../assets/icons/Block.svg'
import { Box, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import ModalWraper from '../ModalWraper'
import { useSelector } from "react-redux";
import { User } from '@/utils/types/chat/ChatTypes'




export default function UserControls() {


  const User = useSelector((state: any) => state.chat.selectedChannelorUser);
  const socket = useSelector((state: any) => state.socket.socket);
  const { isOpen, onClose } = useDisclosure()
  
  
  
  const handleUserControls = () => {

    socket.emit(`sendFreindRequest`, { friendId: User.id });
    
  }


  const OptImages = [
    { src: AddToFriendList, alt: "Add to friend list" },
    { src: Block, alt: "Block" },
  ]


  return (
    OptImages.map((image) =>

      <Box className='flex items-center gap-6 w-[220px]'
        key={image.alt}
        onClick={() => handleUserControls()}
      >
        <Image src={image.src} priority={false}  width={30} height={30} alt={image.alt}
        style={{
          width: '30px',
          height: '30px'
        }}
        />
        <Text className='text-2xl cursor-pointer'>
          {image.alt}
        </Text>
        <ModalWraper isOpen={isOpen} onClose={onClose} />
      </Box>
    ))
}
