import React, { useEffect, useState } from 'react'
import { Box, Button, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import ModalWraper from '../../ModalWraper'
import {  User } from '@/utils/types/chat/ChatTypes'
import Usercard from '../channelsetting/UserCard'
import ban from '../../../../../../assets/icons/Ban.svg'



function Componenent({ onClose }: any) {

    const toast = useToast()
    const channel = useSelector((state: any) => state.chat.selectedChannelorUser)
    const socket = useSelector((state: any) => state.socket.socket)
    const [users, setUsers] = useState<any>([])
    const [selectedOption, setSelectedOption]: any = useState('');

    const handleOptionChange = (newValue: any) => {

        setSelectedOption(newValue);

    };


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/channel/getallbannedmembers/` + channel.id, { credentials: 'include' })
                const users: User[] = await usersResponse.json()
                setUsers(users);
            } catch (error) {

                toast({
                    title: 'Error fetching users and channel members',
                    position: `bottom-right`,
                    status: 'error',
                    duration: 1000,
                    containerStyle: {
                        bottom: 90,
                        right: 30,
                    },
                });
            }
        }
        fetchUsers()
    }, [])



    const onSubmit = async () => {
        socket?.emit("unbanmember", {
            channelId: channel.id,
            memberId: selectedOption.id,
        })
        onClose()
    }


    return (<div className='flex gap-5 flex-col justify-center'  >
        <h1 className=' font-thin text-xl text-red-700 pt-3'>
            Are you sure you want to unban this member
        </h1>
        <div className=' mt-[40px] flex  h-[500px] flex-col w-full  gap-6 overflow-y-scroll no-scrollbar '>

            {users.map((data: User, id: number) => {
                return <Usercard
                    key={id}
                    data={data}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                />
            })}

        </div>
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
                onClick={onSubmit}
            >
                Confirm
            </Button>
        </ModalFooter>
    </div>
    )
}



export default function UnBanMember() {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');
    const data = { src: ban, alt: "UnBan Members" }

    return (
        <Box className='flex items-center gap-6 w-[220px]'
            key={data.alt}
        >
            <Image src={data.src} width={30} height={30} alt={data.alt} />
            <Text className='text-2xl cursor-pointer'
                onClick={() => { onOpen(); setImageAlt(data.alt) }}
            >
                {data.alt}
            </Text>
            <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={() => <Componenent onClose={onClose} />} />
        </Box>
    )
}