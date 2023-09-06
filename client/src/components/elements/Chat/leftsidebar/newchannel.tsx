"use client";

import { SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Button, FormControl, FormLabel, Icon, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
};




export default function Newchannel({ isOpen, onClose }: Props) {


    const [inputValue, setInputValue] = useState('');


    const initialRef = React.useRef(null)


    return (<div>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Create Channel</ModalHeader>
            <ModalCloseButton />
            <ModalBody>


                <FormControl>
                    <FormLabel>Channel Name</FormLabel>
                    <Input ref={initialRef} placeholder='Channel Name' />
                </FormControl>

            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue'>Button</Button>
            
                {/* <Button variant='ghost'>Secondary Action</Button> */}


            </ModalFooter>
        </ModalContent>
    </div>)
}