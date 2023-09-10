"use client";

import { SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Button, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
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

};




function Usercard(props: any) {
    
    
    const { text, selectedOption, onOptionChange } = props;
    
    const handleChange = () => {
        onOptionChange(text);
      };


    return (<div onClick={handleChange} className='flex justify-around items-center border-1 border-black  cursor-pointer m-2 ml-0 p-2  rounded-md  '>

        <div>
            <Avatar boxSize={12}>
                <AvatarBadge boxSize={6} bg='green' />
            </Avatar>

        </div>

        <div className='flex flex-col items-center justify-around'>
            <div className='text-[30px]'>{text}</div>
        </div>
        <Radio
          className='w-[30px] h-[30px]  rounded-sm'
          value={text}
          onChange={handleChange}
          isChecked={selectedOption === text} 
        >
        </Radio>

    </div>)
}



export default function Newmessage({ isOpen, onClose }: Props) {


    let users = ["General1", "General2", "General3", "General4", "General5", "General6"]
    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (newValue: any) => {
        console.log(newValue)
        setSelectedOption(newValue);
      };

    return (<div>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader >Find Friend</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <div className=' h-[65px] mt-5 border-2 border-black rounded-sm flex justify-between items-center shadow-md shadow-black'>
                    <div className='ml-5 text-gray-200 text-[30px]'>Search...</div>
                    <div className='w-[75px] h-[63px] bg-black flex items-center justify-center cursor-pointer'><Icon boxSize={8} color="white" as={SearchIcon} /></div>
                </div>

                <div className=' mt-[20px] flex  justify-between h-[500px] flex-col w-full   gap-6 overflow-y-scroll'>

                    {users.map((data: any) => {
                        return <Usercard
                         text={data}
                         selectedOption={selectedOption}
                         onOptionChange={handleOptionChange}
                         />
                    })}

                </div>



            </ModalBody>

            <ModalFooter>
                <Button onClick={onClose} variant='ghost' colorScheme='blue'>GO TO DM</Button>

            </ModalFooter>
        </ModalContent>
    </div>)
}