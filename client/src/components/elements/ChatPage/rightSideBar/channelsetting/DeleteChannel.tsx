import React, { useState } from 'react'
import { Box, Button, ModalFooter, Text, useDisclosure } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import Ban from "../../../../../../assets/icons/Ban.svg"




function Componenent({ onClose }: any) {


    const channel = useSelector((state: any) => state.chat.selectedChannelorUser)


    const socket = useSelector((state: any) => state.socket.socket)
    

    const onSubmit = async () => {

        socket.emit('deleteChannel', {
            channelId: channel.id,
        });
        
        onClose()

    }

    return (
        <div className='flex flex-col justify-center items-center'>


            <h1 className=' font-bold text-2xl text-red-700 pt-3'>
                Are you sure you want to delete this channel?
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
                        onSubmit()
                    }}
                >
                    Confirm
                </Button>
            </ModalFooter></div>)
}


export default function DeletChannel() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data =   { src: Ban, alt: "Delete Channel",  }





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
