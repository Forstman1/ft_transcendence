"use client";

import { Search2Icon,} from '@chakra-ui/icons';
import React, { Dispatch, SetStateAction, useState } from 'react'
import {
    useToast,
    InputRightElement,
    InputLeftElement,
    InputGroup,
    Input,
    Button,
    AvatarBadge,
    Avatar,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Radio
} from '@chakra-ui/react'
import { User } from '@/utils/types/chat/ChatTypes';
import { useDispatch } from 'react-redux';
import { setTheUser, } from '@/redux/slices/chat/ChatSlice';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { useAppSelector } from '@/redux/store/store';




type Props = {

    isOpen: boolean;
    onClose: () => void;
};



function Usercard(props: any) {


    const { data, selectedOption, onOptionChange } = props;

    const handleChange = () => {
    
        onOptionChange(data);
    };


    return (
        
    <div onClick={handleChange} className='flex justify-around items-center border-2   cursor-pointer m-2 ml-0 p-2  rounded-md'>
        <div>
            <Avatar boxSize={12} src={data.avatar}>
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
            isChecked={selectedOption.username === data.username}
        >
        </Radio>
    </div>)
}


export default function Newmessage({ isOpen, onClose}: Props) {
    
    const chatSocket = useAppSelector((state) => state.socket);
    const {socket} = chatSocket;
    const dispatch = useDispatch();
    const toast = useToast();
    const [selectedOption, setSelectedOption]: any = useState('');
    
    const id = `1a5a7646-7e73-46ad-9c75-d1cd16f0818a`; //! should be changed to the real user id
    
    const {data, isLoading, error} = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3001/users/friends/${id}`)
            console.log(data)
            return data
        }
    })

    const handleOptionChange = (newValue: any) => {

        setSelectedOption(newValue);

    };

    const handleSubmit = async () => {

        try { 
            socket?.emit(`updateChatList`, selectedOption.id)
            socket?.emit(`createRoom`, {userId: id, reciverId: selectedOption.id }, (data: any) => {
            })
            onClose();
        } catch (error) {
            console.error("Failed to add friend:", error);
        }
    };
    

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
                            >
                                Search
                            </Button>
                        </InputRightElement>
                        <Input
                            type="tel"
                            placeholder="Search for a friend"
                            height={12}
                            borderEndEndRadius={0}
                        />
                    </InputGroup>

                    <div className=' mt-[20px] flex md:h-[400px] h-[200px] flex-col overflow-y-scroll'>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : error ? (
                                <p>Error loading data.</p>
                            ) : data ? (
                                    data.map((userData: any) => (
                                        <Usercard
                                        key={userData.username}
                                        data={userData}
                                        selectedOption={selectedOption}
                                        onOptionChange={handleOptionChange}
                                        />
                                    ))
                        ) : null}
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
                            handleSubmit();
                            onClose(); toast({
                                title: "DM added",
                                position: `bottom-right`,
                                status: 'success',
                                duration: 900,
                                containerStyle: {
                                    width: 300,
                                    height: 100,
                                }
                            }); 
                        }}
                    >
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </div>)
}
