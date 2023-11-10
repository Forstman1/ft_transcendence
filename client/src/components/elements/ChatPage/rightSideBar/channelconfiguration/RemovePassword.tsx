import React, { useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import channelconfig from "../../../../../../assets/icons/channelconf.svg"
import Image from 'next/image'
import { setChannel, setChannels } from '@/redux/slices/chat/ChatSlice'
import { Channel } from '@/utils/types/chat/ChatTypes'




function Componenent({ onClose }: any) {

    const channel = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.socket.userID)
    const socket = useSelector((state: any) => state.socket.socket)


    const RemoveButton = async () => {

        socket.emit('removepassword', { 
            channelId: channel.id, 
            userId 
        })
        onClose()


    }
    return (<div className='flex flex-col justify-center items-center'>
        <h1 className=' font-thin text-xl text-red-700 pt-3'>
            Are you sure you want to remove the password
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
                    RemoveButton()
                }}
            >
                Confirm
            </Button>
        </ModalFooter></div>)
}


export default function RemovePassword() {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');


    const data = { src: channelconfig, alt: "Remove Channel Password", }


    return (<Box className='flex items-center gap-6 w-[220px]'
        key={data.alt}
    >
        <Image src={data.src} width={30} height={30} alt={data.alt} />
        <Text className='text-2xl cursor-pointer'
            onClick={() => { onOpen(); setImageAlt(data.alt) }}
        >
            {data.alt}
        </Text>
        <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={() => <Componenent onClose={onClose} />} />

    </Box>)
}
