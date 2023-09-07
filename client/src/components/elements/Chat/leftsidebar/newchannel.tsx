"use client";

import { SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Button, FormControl, FormLabel, Icon, Input, Select } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"




type Props = {

    isOpen: boolean;
    onClose: () => void;
    setNewChannels: Dispatch<SetStateAction<ChannelValues[]>>;
    channels: ChannelValues[];

};

type ChannelValues = {
    channelName: string
    password: string
    type: string
  }


export default function Newchannel({ isOpen, onClose, setNewChannels, channels }: Props) {


    const { handleSubmit, register, watch } = useForm<ChannelValues>();

    
    

    const onSubmit = async (data: ChannelValues) => {

        setNewChannels([...channels, data]);


        onClose();
        
      };
    
    const selectedType = watch('type', '');


    return (<div>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Create Channel</ModalHeader>
            <ModalCloseButton />

            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Channel Name</FormLabel>
                        <Input required {...register("channelName")} placeholder='Channel Name' />
                    </FormControl>


                    <FormControl mt={6}>
                        <FormLabel >Channel Type</FormLabel>
                        <Select required {...register("type")} placeholder="Select type">
                            <option value="Public">Public</option>
                            <option value="Protected">Protected</option>
                            <option value="Private">Private</option>
                        </Select>
                    </FormControl>

                    {selectedType ===  "Protected" ? 
                    <FormControl mt={6}>
                        <FormLabel>Password</FormLabel>
                        <Input required type='password' {...register("password")} placeholder='passowrd' /> 
                    </FormControl> :
                     <div></div>}

                </ModalBody>

                <ModalFooter>
                    <Button type='submit' variant='ghost' colorScheme='blue'>Create</Button>

                </ModalFooter>
            </form>
        </ModalContent>
    </div>)
}