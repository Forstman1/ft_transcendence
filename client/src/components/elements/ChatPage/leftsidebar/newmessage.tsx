"use client";

import { Search2Icon, SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Button, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Select, useToast } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Radio
} from '@chakra-ui/react'
import { User } from '@/utils/types/chat/ChatTypes';


type Props = {

    isOpen: boolean;
    onClose: () => void;
    setNewUsers: Dispatch<SetStateAction<User[]>>;
    users: User[]
};



function Usercard(props: any) {

    const { data, selectedOption, onOptionChange } = props;

    const handleChange = () => {
    
        onOptionChange(data);
    };


    return (
        
    <div onClick={handleChange} className='flex justify-around items-center border-2   cursor-pointer m-2 ml-0 p-2  rounded-md  '>
        <div>
            <Avatar boxSize={12}>
                <AvatarBadge boxSize={6} bg='green' />
            </Avatar>
        </div>

        <div className='flex flex-col items-center justify-around'>
            <div className='text-[20px] md:text-[30px]'>{data.username}</div>
        </div>

        <Radio
            className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-sm'
            value={data.username}
            onChange={handleChange}
            isChecked={selectedOption === data.username}
        >
        </Radio>
    </div>)
}



export default function Newmessage({ isOpen, onClose, setNewUsers, users }: Props) {

    const users1: User[] = []
    const url = 'http://localhost:3001/users';
    const [Users, setUsers]: any = useState([])
    const [selectedOption, setSelectedOption]: any = useState('');
    const toast = useToast()

    useEffect(() => {
        async function fetchData () {
            const api = await fetch(url)
            const response = await api.json()
            if (response)
            {
                setUsers(response)
            }
        }
        fetchData()
    }, [])

    const handleOptionChange = (newValue: any) => {

        setSelectedOption(newValue);

    };


    const handleSubmit = () => {

        if (!users.find(user => user.username === selectedOption.username)) {
            
            let user: User = {
                
                ...selectedOption
                
            }
            setNewUsers([user, ...users])
        }
        onClose()
    }

    function display(Users: User) {

    }

    return (

        <div>
            <ModalOverlay />

            <ModalOverlay
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                }}
            />
            <ModalContent
                bg={`rgba(255, 255, 255, 0.95)`}
                className="relative  duration-500 ease-in-out rounded-2xl shadow-2xl border-1 border-black flex justify-between  items-center bg-gray-100"
            >

                <ModalHeader>Find Friend</ModalHeader>
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
                            // onClick={handleSearchClick}
                            >
                                Search
                            </Button>
                        </InputRightElement>
                        <Input
                            type="tel"
                            placeholder="Search for a friend"
                            height={12}
                            borderEndEndRadius={0}
                        // value={search}
                        // onChange={handleChange}
                        />
                    </InputGroup>

                    <div className=' mt-[20px] flex  justify-between md:h-[400px] h-[200px] flex-col overflow-y-scroll'>
                        {Users.map((data: any) => {
                            return <Usercard
                                key={data.username}
                                data={data}
                                selectedOption={selectedOption}
                                onOptionChange={handleOptionChange}
                            />
                        })}

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
                                title: "DM added",
                                position: `bottom-right`,
                                status: 'success',
                                duration: 1000,
                                containerStyle: {
                                    width: 300,
                                    height: 100,
                                }
                            }); handleSubmit()
                        }}
                    >
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </div>)
}
