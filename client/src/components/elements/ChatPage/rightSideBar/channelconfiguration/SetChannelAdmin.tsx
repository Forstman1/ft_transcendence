import React, { useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import AddToChannel from '../../../../../../assets/icons/AddToChannel.svg'



function Componenent({ onClose }: any) {




    return (
    <div>
        <h1 className=' font-thin text-xl text-red-700 pt-3'>
            Are you sure you want to set this user as an administrator
        </h1>
        

        <ModalFooter>
        <Button
            colorScheme="red"
            variant="outline"
            mr={10}
            onClick={onClose}
        >
            Close
        </Button>
        <Button
            colorScheme="green"
            variant="outline"
            ml={10}
            onClick={() => {

            }}
        >
            Confirm
        </Button>
    </ModalFooter></div>)
}


export default function SetChannelAdmin() {


    const toast = useToast()
    const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.chat.userId)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data = { src: AddToChannel, alt: "Set New Channel Administrateur" }


    return (<Box className='flex items-center gap-6 w-[220px]'
        key={data.alt}
    >
        <Image src={data.src} width={30} height={30} alt={data.alt} />
        <Text className='text-2xl cursor-pointer'
            onClick={() => { onOpen(); setImageAlt(data.alt) }}
        >
            {data.alt}
        </Text>
        <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={Componenent} />

    </Box>)
}
