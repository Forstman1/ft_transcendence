"use client";

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import React, { useState } from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';




type Props = {
  onClose: () => void;
};

type ChannelValues = {
  channelName: string
  password: string
  type: string
  userId: string

}


export default function Newchannel({  onClose }: Props) {


  const { handleSubmit, register, watch } = useForm<ChannelValues>();
  const [dup] = useState(false);

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const userId = useSelector((state: any) => state.socket.userID)
  const socket = useSelector((state: any) => state.socket.socket)



  const onSubmit = async (data: ChannelValues) => {

    data.userId = userId
    console.log(data)

    if (data.type === "Public")
      data.password = "123"

    socket.emit('createChannel', {
      channelName: data.channelName,
      type: data.type,
      password: data.password,
      userId: data.userId
    })
    
    onClose();


  };

  const selectedType = watch('type', '');



  return (<div>

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



