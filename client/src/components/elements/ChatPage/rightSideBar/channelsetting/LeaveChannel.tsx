import React, { useState } from 'react'
import { Box, Button, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import invite from "../../../../../../assets/icons/invite.svg"
import { Channel } from '@/utils/types/chat/ChatTypes'
import { setChannels } from '@/redux/slices/chat/ChatSlice'
import leavechannel from "../../../../../../assets/icons/leavechannel.svg"




function Componenent({ onClose }: any) {


    const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.userID.user)
    const toast = useToast()
    const dispatch = useDispatch()



    const leave = useMutation<any, Error, any>((variables) => fetch('http://127.0.0.1:3001/channel/leavechannel', {
        method: 'DELETE',
        body: JSON.stringify(variables),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).catch((error) => {
        return error
    }))


    const fetchData = async () => {
        const fetchChannels = await fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId)
        const response = await fetchChannels.json()
        if (response.length > 0) {
            const allchannels: Channel[] = response
            dispatch(setChannels(allchannels))
            return allchannels;
        }

    }


    const onSubmit = async () => {
        const leaves = await leave.mutateAsync({ 
            channelName: channelName.name, 
            userId: userId 
        })
        console.log(leaves.status)

        if (leaves.status == "you are owner of the channel") {
            toast({
                title: leaves.status,
                position: `bottom-right`,
                status: "error",
                isClosable: true,
            })
            onClose()
            return
        }
        toast({
            title: leaves.status,
            description: "You have left the channel",
            position: `bottom-right`,
            status: "success",
            isClosable: true,
        })
        fetchData()
        onClose()
    }



    return (
        <div className='flex flex-col justify-center items-center'>

            <h1 className=' font-thin text-xl text-red-700 pt-3'>
                Are you sure you want to leave this channel
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


export default function LeaveChannel() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data =  { src: leavechannel, alt: "Leave Channel" }




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
