import React, {useState} from 'react'
import AddToChannel from '../../../../assets/icons/AddToChannel.svg'
import Mute from '../../../../assets/icons/Mute.svg'
import Ban from '../../../../assets/icons/Ban.svg'
import Block from '../../../../assets/icons/Block.svg'
import { Box, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import ModalWraper from './ModalWraper'

export default function ChannelMemberActions() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');

    const CtrlImages = [
        { src: AddToChannel, alt: "Add to channel" },
        { src: Ban, alt: "Ban from channel" },
        { src: Mute, alt: "Mute" },
        {src: Block, alt: " Kick out from channel"}
      ]


  return (
    CtrlImages.map((image) => 
    <Box className='flex items-center gap-6 w-[220px]'>
    <Image src={image.src} width={30} height={30} alt={image.alt} />
    <Text className='text-2xl cursor-pointer'
      onClick={() => { onOpen(); setImageAlt(image.alt) }}
    >
      {image.alt}
    </Text>
    <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} />
  </Box>
  ))
}
