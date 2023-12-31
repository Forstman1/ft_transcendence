import React, { useEffect, useState } from 'react'
import { Avatar,  Box, Button, ModalFooter, Text, useDisclosure } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import Image from 'next/image'
import { ChannelMember } from '@/utils/types/chat/ChatTypes'
import invite from "../../../../../../assets/icons/invite.svg"



function Usercard(props: any) {

    const  data:ChannelMember  = props.data;
    const [user, setUser] = useState<any>({})

    function cutString(str: string, maxLength: number): string {
        if (str.length <= maxLength) {
          return str;
        }
      
        return str.substring(0, maxLength) + "...";
    }

    useEffect(() => {

        const fetchUser = async () => {
            const userResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/getuser/` + data.userId, { credentials: 'include' });
            let userData = await userResponse.json();
            userData.username = cutString(userData.username, 10);
            setUser(userData);
            return userData;
        };

        fetchUser()
    }, [])

   

    return (

        <div className='flex justify-around items-center border-2  w-full cursor-pointer m-2 ml-0 p-2  rounded-md '>
            <div>
                <Avatar boxSize={12} src={user?.avatarURL}>
                </Avatar>
            </div>

            <div className='flex flex-col items-center justify-around '>
                <div className='text-[20px] md:text-[30px]'>{user.username}</div>
            </div>

            <div className=''>
                {data.role}
            </div>
        </div>)
}


function Componenent({ onClose }: any) {

    const [users, setUsers] = useState<any[]>([])
    const channel = useSelector((state: any) => state.chat.selectedChannelorUser)
    const socket = useSelector((state: any) => state.socket.socket)



    useEffect(() => {
        socket.emit('getmembers', { channelId: channel.id })

        socket.on('allmembers', (data: any) => {
            setUsers(data.members);
        })
        return () => {
            socket.off('allmembers')
        }
    }, [])


    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className=' font-thin text-xl text-red-700 pt-3'>
                All Members With Roles
            </h1>

            <div className=' mt-[40px] flex  h-[500px] flex-col w-full  gap-6 overflow-y-scroll no-scrollbar '>

                {users.map((data: any, id: number) => {
                    return <Usercard
                        key={id}
                        data={data}
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
            </ModalFooter></div>)
}


export default function AllMembers() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data = { src: invite, alt: "All Members" }


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
