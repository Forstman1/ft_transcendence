import React, { useEffect, useRef, useState } from 'react'
import { Avatar, AvatarBadge, Box, Button, ModalFooter, Radio, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import invite from "../../../../../../assets/icons/invite.svg"
import { User } from '@/utils/types/chat/ChatTypes'
import Usercard from './UserCard'



function Componenent({ onClose }: any) {

    const [users, setUsers] = useState<any[]>([])

    const [selectedOption, setSelectedOption]: any = useState('');
    const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.chat.userId)
    const toast = useToast()


    const handleOptionChange = (newValue: any) => {

        setSelectedOption(newValue);

    };



    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const [usersResponse, membersResponse] = await Promise.all([
              fetch('http://127.0.0.1:3001/users/listusers').then((api) => api.json()),
              fetch(`http://127.0.0.1:3001/channel/getallmembers/${channelName.id}`).then((api) => api.json())
            ]);
      
            // Extract the member userIds to improve filtering efficiency
            const memberUserIds = membersResponse.map((member: any) => member.userId);
      
            // Filter users who are not the current user and are not already members of the channel
            const filteredUsers = usersResponse.filter((user: any) => {
              return user.id !== userId && !memberUserIds.includes(user.id);
            });
      
            setUsers(filteredUsers);
          } catch (error) {
            console.error('Error fetching users and channel members:', error);
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
        };
      
        fetchUsers();
      }, []);
    const Invite = useMutation<any, Error, any>((variables) => fetch('http://127.0.0.1:3001/channel/invitemember', { 
        method: "POST",
        body: JSON.stringify(variables),
        headers: {
            "content-type": "application/json",
        }
    }).then((response) => {
        return response.json()
    }).catch((error) => {
        return error
    }))



    async function   onInvite() {


        const response = await Invite.mutateAsync({
            channelName: channelName.name, 
            userIdOwner: userId,
            userIdMember: selectedOption.id
        })
        console.log(response)
        if (response.status) {
            toast({
                title: response.status,
                position: `bottom-right`,
                status: 'error',
                duration: 1000,
                containerStyle: {
                    bottom: 90,
                    right: 30,
                },
            })
            onClose()
            return;     
        }
        toast({
            title: "User has been invited",
            position: `bottom-right`,
            status: 'success',
            duration: 1000,
            containerStyle: {
                bottom: 90,
                right: 30,
            },
        })
        onClose()
    }

    return (
        <div>

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
                        onInvite()
                    }}
                >
                    Confirm
                </Button>
            </ModalFooter></div>)
}


export default function InvitePeople() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data = { src: invite, alt: "Invite People" }



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
