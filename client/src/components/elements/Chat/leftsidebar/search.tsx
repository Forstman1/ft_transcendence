import { SearchIcon } from "@chakra-ui/icons";
import { Button, Icon, Input, Modal, useDisclosure } from "@chakra-ui/react";
import { Modak } from "next/font/google";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { Avatar, AvatarBadge, FormControl, FormLabel, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import Hashtag from "./hatshtag";






type ChannelValues = {
    channelName: string
    password: string
    type: string
}



type Props = {
    channels: ChannelValues[];
};



export default function Search({ channels }: Props) {


    const [search, setSearch] = useState('');
    const [allSearch, setAllSearch]: any = useState([])
    const { handleSubmit, register } = useForm<{ search: string }>();
    const { isOpen, onOpen, onClose } = useDisclosure()




    const findMatches = (wordToMatch: string, ChannelsOrUsers: string[]) => {


        return ChannelsOrUsers.filter((word: string) => {
            const regex = new RegExp(wordToMatch, 'gi')
            return word.match(regex)

        })
    }

    const onSubmit = async (data: any) => {

        console.log(data.search)

        let allChannelsnames: any = channels.map((channel: ChannelValues) => {
            return channel.channelName
        })
        let content: string[] = findMatches(search, allChannelsnames)


        let searcharray: any = channels.map((channel: ChannelValues) => {
            for (let i: number = 0; i < content.length; i++) {
                if (channel.channelName === content[i])
                    return channel
            }
        })
        
        searcharray = searcharray.filter((channel: ChannelValues) => {
            return channel !== undefined
        })

        setAllSearch(searcharray)
        setSearch("")
        onOpen()
    };



    const handleChange = async (data: any) => {

        setSearch(data.target.value)
    };

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className=' w-[350px] h-[65px] mt-5 border-2 border-black rounded-sm flex justify-between items-center shadow-md shadow-black'>
            <Input
                {...register("search")}
                className='border-none w-full h-full text-black text-[30px]'
                placeholder='Search...'
                value={search}
                onChange={handleChange}
                type='text'
            />
            <Button type='submit' className='rounded-none w-[75px] h-[63px] bg-black active:bg-black  flex items-center justify-center cursor-pointer'><Icon boxSize={8} color="white" as={SearchIcon} /></Button>
        </form>




        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Search</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <ModalHeader className="text-[30px] border-b-1 border-black ">Channels</ModalHeader>


                    <div className='flex h-[250px] flex-col  border-2  gap-6 overflow-y-scroll'>

                        {allSearch.map((data: ChannelValues, index: number) => {

                            return <Hashtag key={index} data={data} />

                        })}

                    </div>


                    <ModalHeader className="text-[30px] border-b-1 border-black ">Users</ModalHeader>
                    <div className='flex h-[250px] flex-col  border-2  gap-6 overflow-y-scroll'>

                        {allSearch.map((data: ChannelValues, index: number) => {

                            return <Hashtag key={index} data={data} />

                        })}

                    </div>
                    {/* {allSearch.map((data: any) => {
                        return <div>{data}</div>
                    })} */}
                </ModalBody>

                <ModalFooter>
                    <Button type='submit' variant='ghost' colorScheme='blue'>Create</Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    </>)
}