import React, { useEffect, useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import AddToChannel from '../../../../../../assets/icons/AddToChannel.svg'
import Usercard from '../channelsetting/UserCard'
import { ChannelMember, User } from '@/utils/types/chat/ChatTypes'
import Ban from "../../../../../../assets/icons/Ban.svg"



function Componenent({ onClose }: any) {

    const [selectedOption, setSelectedOption]: any = useState('');
    const [users, setUsers] = useState<any[]>([])
    const toast = useToast()
    const userId = useSelector((state: any) => state.chat.userId)
    const channel = useSelector((state: any) => state.chat.selectedChannelorUser)
    const handleOptionChange = (newValue: any) => {

        setSelectedOption(newValue);

    };



    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const usersResponse = await fetch('http://127.0.0.1:3001/channel/getallmembers/' + channel.id)
                const users: ChannelMember[] = await usersResponse.json()
                console.log(usersResponse)


                const filteredUsers = users.filter((user: any) => {
                    return user.role !== "MEMBER" && user.role !== "OWNER";
                });

                console.log(filteredUsers)

                let listedusers: any = []


                filteredUsers.map((channelmember: ChannelMember) => {
                    listedusers.push(channelmember.userId)
                })

                // fetch users data from the array listedusers
                const usersDataPromises = listedusers.map(async (userId: string) => {
                    const userResponse = await fetch('http://127.0.0.1:3001/users/getuser/' + userId);
                    const userData = await userResponse.json();
                    return userData;
                  });
            
                  const usersData = await Promise.all(usersDataPromises);


                  setUsers(usersData);

            } catch (error) {
                console.error('Error fetching users and channel Admins:', error);
                toast({
                    title: 'Error fetching users and channel Admins',
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

    const removeAdmin  = useMutation<any, Error, any>((variables) => fetch('http://127.0.0.1:3001/channel/removeadministrator', {
        method: 'DELETE',
        body: JSON.stringify(variables),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    }))

    const onSubmit = async () => {
        try {
            const response = await removeAdmin.mutateAsync({
                channelName: channel.name, 
                userIdOwner: userId, 
                userIdadministrateur: selectedOption.id
            });
            if (response.status == "This administrator can't be removed.")
            {
                toast({
                    title: "This administrator can't be removed.",
                    position: `bottom-right`,
                    status: 'error',
                    duration: 1000,
                    containerStyle: {
                        bottom: 90,
                        right: 30,
                    },
                });
                return
            }
            toast({
                title: 'Admin removed successfully',
                position: `bottom-right`,
                status: 'success',
                duration: 1000,
                containerStyle: {
                    bottom: 90,
                    right: 30,
                },
            });
            onClose()

        } catch (error) {
        console.error('Error removing administrator:', error);
        toast({
            title: 'Error removing administrator',
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


    return (
    <div>
        <h1 className=' font-thin text-xl text-red-700 pt-3'>
            Select a Admin to remove from the channel
        </h1>
        
        <div className=' mt-[40px] flex  h-[500px] flex-col w-full  gap-6 overflow-y-scroll'>

                {users.map((data: User) => {
                    return <Usercard
                        key={data.username}
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
            onClick={() => {
                onSubmit()
            }}
        >
            Confirm
        </Button>
    </ModalFooter></div>)
}


export default function RemoveChannelAdmin() {


    const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.chat.userId)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data = { src: Ban, alt: "Remove Channel Admin" }


    return (<Box className='flex items-center gap-6 w-[220px]'
        key={data.alt}
    >
        <Image src={data.src} width={30} height={30} alt={data.alt} />
        <Text className='text-2xl cursor-pointer'
            onClick={() => { onOpen(); setImageAlt(data.alt) }}
        >
            {data.alt}
        </Text>
        <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={() => <Componenent onClose={onClose}/>} />

    </Box>)
}
