"use client";

import { Search2Icon, SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Button, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Select } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useState } from 'react'
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



type Props = {

    isOpen: boolean;
    onClose: () => void;
    setNewUsers: Dispatch<SetStateAction<UserValues[]>>;
    users: UserValues[]
};


type UserValues = {
    userName: string
    id: number
    onlineStatus: string
}



function Usercard(props: any) {

    const { data, selectedOption, onOptionChange } = props;

    const handleChange = () => {
        onOptionChange(data.userName);
    };


    return (<div onClick={handleChange} className='flex justify-around items-center border-2   cursor-pointer m-2 ml-0 p-2  rounded-md  '>

        <div>
            <Avatar boxSize={12}>
                <AvatarBadge boxSize={6} bg='green' />
            </Avatar>
        </div>

        <div className='flex flex-col items-center justify-around'>
            <div className='text-[20px] md:text-[30px]'>{data.userName}</div>
        </div>

        <Radio
            className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-sm'
            value={data.userName}
            onChange={handleChange}
            isChecked={selectedOption === data.userName}
        >
        </Radio>

    </div>)
}



export default function Newmessage({ isOpen, onClose, setNewUsers, users }: Props) {


    let users1: UserValues[] = [{ userName: "sahafid", id: 1, onlineStatus: "active" },
    { userName: "houazzan", id: 2, onlineStatus: "active" },
    { userName: "rel-fagr", id: 3, onlineStatus: "active" },
    { userName: "haitkadir", id: 4, onlineStatus: "busy" },
    { userName: "mnaimi", id: 5, onlineStatus: "offline" },
    { userName: "test1", id: 5, onlineStatus: "offline" },
    { userName: "test2", id: 5, onlineStatus: "offline" },
    { userName: "test3", id: 5, onlineStatus: "offline" },
    { userName: "test4", id: 5, onlineStatus: "offline" },
    ]

    const [selectedOption, setSelectedOption]: any = useState('');


    const handleOptionChange = (newValue: any) => {
        setSelectedOption(newValue);
    };


    const handleSubmit = () => {

        let user: UserValues = {
            userName: selectedOption,
            id: 1,
            onlineStatus: "available"
        }

        setNewUsers([user, ...users])
        onClose()
    }


    return (<div>

        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Find Friend</ModalHeader>
            <ModalCloseButton />

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

                <div className=' mt-[20px] flex  justify-between md:h-[400px] h-[200px] flex-col    overflow-y-scroll'>

                    {users1.map((data: any) => {
                        return <Usercard
                            data={data}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                        />
                    })}
                </div>

            </ModalBody>

            <ModalFooter>
                <Button onClick={handleSubmit} variant='ghost' colorScheme='blue'>GO TO DM</Button>
            </ModalFooter>
        </ModalContent>

    </div>)
}
