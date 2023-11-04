import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import { Channel } from '@/utils/types/chat/ChatTypes'
import { setChannels } from '@/redux/slices/chat/ChatSlice'
import leavechannel from "../../../../../../assets/icons/leavechannel.svg"
import Ban from "../../../../../../assets/icons/Ban.svg"




function Componenent({ onClose }: any) {


    const channel = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.userID.user)
    const toast = useToast()
    const dispatch = useDispatch()

    const socket = useSelector((state: any) => state.channelChatSocket.socket)
    

    // const deleteChannel = useMutation<any, Error, any>((variables) => fetch('http://127.0.0.1:3001/channel/deleteChannel', {
    //     method: 'DELETE',
    //     body: JSON.stringify(variables),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then((response) => {
    //     return response.json()
    // }).catch((error) => {
    //     return error
    // }))


    // const fetchData = async () => {
    //     const fetchChannels = await fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId)
    //     const response = await fetchChannels.json()
    //     if (response.length > 0) {
    //         const allchannels: Channel[] = response
    //         dispatch(setChannels(allchannels))
    //         return allchannels;
    //     }

    // }

    const onSubmit = async () => {

        socket.emit('deleteChannel', {
            channelName: channel.name,
            userId: userId,
        });
        
        onClose()


        // dispatch(setChannel(null))
        // toast({
        //     title: "You have left the channel",
        //     status: "success",
        //     position: `bottom-right`,
        //     isClosable: true,
        // })
        // const response = await deleteChannel.mutateAsync({
        //     channelName: channelName.name,
        //     userId: userId
        // })
        // if (response.status == "you are not owner of the channel") {
        //     toast({
        //         title: response.status,
        //         position: `bottom-right`,
        //         status: "error",
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     onClose()
        // }
        // else {
        //     toast({
        //         title: "Channel has been deleted",
        //         position: `bottom-right`,
        //         status: "success",
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     fetchData()
        //     onClose()
        // }


        // channelDeleted


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
