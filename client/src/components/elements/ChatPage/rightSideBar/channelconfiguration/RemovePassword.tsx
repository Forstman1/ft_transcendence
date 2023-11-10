import React, { useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import channelconfig from "../../../../../../assets/icons/channelconf.svg"
import Image from 'next/image'
import { setChannel, setChannels } from '@/redux/slices/chat/ChatSlice'
import { Channel } from '@/utils/types/chat/ChatTypes'




function Componenent({ onClose, RemoveButton }: any) {
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


    const toast = useToast()
    const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.chat.userId)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');
    const dispatch = useDispatch()

    const removepassword = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/channel/removepassword', {
            method: "DELETE",
            body: JSON.stringify(variables),
            headers: {
                "content-type": "application/json",
            }
        }).then((response) => {
            return response.json()

        }).catch((error) => {
            return error
        })
    )
    const fetchData = async () => {
        const fetchChannels = await fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId)
        const response = await fetchChannels.json()
        if (response.length > 0)
        {
          const allchannels: Channel[] = response
          console.log(allchannels)
          dispatch(setChannels(allchannels))
          return allchannels;
        }
  
      }
      
    const RemoveButton = async () => {
        console.log("ana hna 33")
        const channel = await removepassword.mutateAsync({
            channelName: channelName.name,
            userId
        })
        if (channel.status) {
            toast({
                title: "Your Not Authorised",
                position: `bottom-right`,
                status: 'error',
                duration: 1000,
                containerStyle: {
                    width: 300,
                    height: 100,
                }
            })
            onClose()
            return;
        }
        toast({
            title: "password removed",
            position: `bottom-right`,
            status: 'success',
            duration: 1000,
            containerStyle: {
                width: 300,
                height: 100,
            }
        })
        dispatch(setChannel(channel))
        fetchData()
        onClose()

    }

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
        <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={() => <Componenent RemoveButton={RemoveButton}/>}  />

    </Box>)
}
