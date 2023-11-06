import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Icon, Input, InputLeftElement, Modal, Radio, useDisclosure, useToast } from "@chakra-ui/react";
import { Modak } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { Avatar, AvatarBadge, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import Hashtag from "./hatshtag";
import Image from "next/image";
import { Channel, User } from "@/utils/types/chat/ChatTypes";
import { useDispatch } from "react-redux";
import { setTheUser } from "@/redux/slices/chat/ChatSlice";





type Props = {
    channels: Channel[];
    users: User[];
};



function Usercard(props: any) {


    const { user } = props;


    const dispatch = useDispatch()


    return (
        
    <div onClick={() => dispatch(setTheUser(user))} className='flex justify-around items-center border-2   cursor-pointer m-2 ml-0 p-2  rounded-md'>
        <div>
            <Avatar boxSize={12} src={user.avatar}>
                <AvatarBadge boxSize={6} bg='green' />
            </Avatar>
        </div>

        <div className='flex flex-col items-center justify-around'>
            <div className='text-[20px] md:text-[30px]'>{user.username}</div>
        </div>

    </div>)
}





export default function Search({ channels, users }: Props) {


    const [search, setSearch] = useState('');
    const [allSearchChannels, setAllSearchChannels]: any = useState([])
    const [allSearchUsers, setAllSearchUsers]: any = useState([])

    // const { handleSubmit, register } = useForm<{ search: string }>();
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        setAllSearchChannels(channels)
        setAllSearchUsers(users)
    }, [channels || users])


    const findMatches = (wordToMatch: string, ChannelsOrUsers: string[]) => {

        return ChannelsOrUsers.filter((word: string) => {
            const regex = new RegExp(wordToMatch, 'gi')
            return word.match(regex)

        })
    }

    const handleSearchClick = async () => {

        console.log(search)

        let allChannelsnames: any = channels.map((channel: Channel) => {
            return channel.name
        })
        let content1: string[] = findMatches(search, allChannelsnames)


        let searcharray: any = channels.map((channel: Channel) => {
            for (let i: number = 0; i < content1.length; i++) {
                if (channel.name === content1[i])
                    return channel
            }
        })


        searcharray = searcharray.filter((channel: Channel) => {
            return (channel !== undefined)
        })


        let allUsersnames: any = users.map((user: User) => {
            return user.username
        })

        let content2: string[] = findMatches(search, allUsersnames)


        let searchuserarray: any = users.map((user: User) => {

            for (let i: number = 0; i < content2.length; i++) {
                if (user.username === content2[i])
                    return user
            }
        })





        searchuserarray = searchuserarray.filter((user: User) => {
            return user !== undefined
        })


        // setAllSearchChannels(searcharray)

        // setAllSearchUsers(searchuserarray)
        setSearch("")
        onOpen()
    };





    const handleChange = async (data: any) => {
        setSearch(data.target.value)
    };



    const toast = useToast()

    return (<>
        <div onClick={onOpen} className='w-[80%]  md:h-[65px] h-[40px] mt-5 border-2 border-black rounded-sm flex justify-between items-center custom-shadow cursor-pointer'>

            <div className='border-none w-full h-full text-gray-400 text-[30px] items-center flex ml-[10px]'>Search...</div>
            <div className='rounded-none w-[75px] md:h-[63px] h-[40px] bg-black active:bg-black  flex items-center justify-center cursor-pointer'><Icon boxSize={5} color="white" as={SearchIcon} /></div>
        </div>



        <Modal isOpen={isOpen} onClose={onClose} isCentered>

            <ModalOverlay
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                }}
            />
            <ModalContent
                bg={`rgba(255, 255, 255, 0.95)`}
                className="relative  duration-500 ease-in-out rounded-2xl shadow-2xl border-1 border-black flex justify-between items-center bg-gray-100"
            >

                <ModalHeader>Search</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Search2Icon color="gray.300" />
                        </InputLeftElement>
                        <InputRightElement width="4.5rem" height={12}>
                            <Button
                                variant="outline"
                                h="2rem"
                                size="sm"
                                onClick={handleSearchClick}
                            >
                                Search
                            </Button>
                        </InputRightElement>
                        <Input
                            type="tel"
                            placeholder="Search for a friend"
                            height={12}
                            borderEndEndRadius={0}
                            value={search}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <div className="flex w-full h-[300px]  flex-col  overflow-y-scroll ">
                        {allSearchChannels.map((channels: Channel, id: number) => {
                            return <Box key={id} className="flex  w-[95%] p-2 flex-row justify-between items-center border-2 border-gray-300 rounded-lg  mt-5">
                                <div className="flex h-[50px] " >
                                    <h1 className="text-[40px] h-[20px] mr-3">#</h1>
                                    <h1 className="text-[30px] h-[20px]"> {channels.name}</h1>
                                </div>

                            </Box>
                        })}
                        {/* {allSearchUsers.map((users: User, id: number) => {
                            return (<Usercard key={id} user={users}/>)
                        })} */}
                    </div>
                </ModalBody>
                <ModalCloseButton />
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
                            onClose(); toast({
                                title: "Searched",
                                position: `bottom-right`,
                                status: 'success',
                                duration: 1000,
                                containerStyle: {
                                    width: 300,
                                    height: 100,
                                }
                            })
                        }}
                    >
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>)
}



