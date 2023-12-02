"use client";

import React, { useState } from 'react'
import {
    useToast,
    Button,
    Avatar,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Radio
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';





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
            <Avatar boxSize={12} src={data?.avatarURL}>
            </Avatar>
        </div>

        <div className='flex flex-col items-center justify-around'>
            <div className='text-[20px] md:text-[30px]'>{data.username}</div>
        </div>

        <Radio
            className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-sm'
            value={data.username}
            onChange={handleChange}
            isChecked={selectedOption?.username === data?.username}
        >
        </Radio>
    </div>)
}


export default function Newmessage({onClose}: Props) {
    

    const socket = useSelector((state: any) => state.socket.socket)
    const [selectedOption, setSelectedOption]: any = useState(null);
    const {data, isLoading, error} = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/friends`, { withCredentials: true },)
            return data
        }
    })

    const handleOptionChange = (newValue: any) => {
        setSelectedOption(newValue);
    };

    const handleSubmit = async () => {
      
            socket?.emit(`updateChatList`, {frienID: selectedOption?.id})
            socket?.emit(`createRoom`, {frienID: selectedOption?.id})
            onClose();
            setSelectedOption(null)
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
                <ModalBody className='w-full'>
                    
                    <div className="flex w-full h-[300px]  flex-col  no-scrollbar overflow-y-scroll ">

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
                            onClose(); 
                        }}
                    >
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </div>)
}
