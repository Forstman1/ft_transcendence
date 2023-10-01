"use client";

import { SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Button, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Select, useToast } from '@chakra-ui/react';
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
    const [dup, setDup] = useState(false);
    const toast = useToast()


    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)



    const onSubmit = async (data: ChannelValues) => {

        let exists: any = channels.map((allChannelsNames: ChannelValues) => {
            return allChannelsNames.channelName
        })


        if (exists.includes(data.channelName)) {
          toast({
            title: "Channel name Already Exists",
            position: `bottom-right`,
            status: 'error',
            duration: 1000,
            containerStyle: {
              width: 300,
              height: 100,
            }
          })  
            setDup(true)
            return 0;
        }


        toast({
          title: "Channel Created",
          position: `bottom-right`,
          status: 'success',
          duration: 1000,
          containerStyle: {
            width: 300,
            height: 100,
          }
        })
        setNewChannels([...channels, data]);
        onClose();

    };

    const selectedType = watch('type', '');



    return (<div>
        {/* <ModalOverlay />
        <ModalContent>
            <ModalHeader>Create Channel</ModalHeader>
            <ModalCloseButton />

            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <FormControl>

                        <FormLabel>Channel Name</FormLabel>
                        <Input required {...register("channelName")} placeholder='Channel Name' />
                        {dup && <div>Already exists this channel name</div>}

                    </FormControl>


                    <FormControl mt={6}>
                        <FormLabel >Channel Type</FormLabel>
                        <Select required {...register("type")} placeholder="Select type">
                            <option value="Public">Public</option>
                            <option value="Protected">Protected</option>
                            <option value="Private">Private</option>
                        </Select>
                    </FormControl>

                    {selectedType === "Protected" ?

                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    required
                                    {...register("password")}
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl> :
                        <div></div>}

                </ModalBody>

                <ModalFooter>
                    <Button type='submit' variant='ghost' colorScheme='blue'>Create</Button>

                </ModalFooter>
            </form>
        </ModalContent> */}
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

        <ModalHeader>Create Channel</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>

        <ModalBody>
        <FormControl>

          <FormLabel>Channel Name</FormLabel>
          <Input required {...register("channelName")} placeholder='Channel Name' />
          {dup && <div>Already exists this channel name</div>}

          </FormControl>


          <FormControl mt={6}>
          <FormLabel >Channel Type</FormLabel>
          <Select required {...register("type")} placeholder="Select type">
              <option value="Public">Public</option>
              <option value="Protected">Protected</option>
              <option value="Private">Private</option>
          </Select>
          </FormControl>

          {selectedType === "Protected" ?

          <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                  <Input
                      required
                      {...register("password")}
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                      </Button>
                  </InputRightElement>
              </InputGroup>
          </FormControl> :
          <div></div>}
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
            type='submit'
            ml={10}
          >
            Create
          </Button>
        </ModalFooter>
          </form>
      </ModalContent>
    </div>)
}