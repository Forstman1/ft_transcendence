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
import { useMutation } from '@tanstack/react-query';
import { Channel } from '@/utils/types/chat/ChatTypes';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel, setNewChannel } from '@/redux/slices/chat/ChatSlice';




type Props = {

    isOpen: boolean;
    onClose: () => void;
    channels: Channel[];
};

type ChannelValues = {
    channelName: string
    password: string
    type: string
    userId: string
}


export default function Newchannel({ isOpen, onClose, channels }: Props) {


    const { handleSubmit, register, watch } = useForm<ChannelValues>();
    const [dup, setDup] = useState(false);
    const toast = useToast()

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const dispatch = useDispatch()
    const userId = useSelector((state:any) => state.chat.userId)


    const createchannel = useMutation<any, Error, ChannelValues>((variables) => 
      fetch('http://127.0.0.1:3001/channel/createchannel', {
        method: "POST",
        body: JSON.stringify(variables),
        headers: {
          "content-type": "application/json",
        }
      }).then((response) => {
        return response.json()

      }).catch((error) => {
        return error
      })
    )

    const onSubmit = async (data: ChannelValues) => {

        data.userId = userId
        console.log(data)
        
        if (data.type === "Public")
          data.password = "123"
        let channel: Channel;
        try {
          const newchannel = await createchannel.mutateAsync({
            channelName: data.channelName,
            type: data.type,
            password: data.password,
            userId: data.userId
          })
          data.type = data.type.toUpperCase()
          if (newchannel.status)
            throw newchannel.status;
          channel = newchannel

        } catch(error) {
          console.log(error)
          toast({
            title: "couldn't create channel",
            position: `bottom-right`,
            status: 'error',
            duration: 1000,
            containerStyle: {
              width: 300,
              height: 100,
            }
          })
          return ;
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
        dispatch(setNewChannel(channel))
        dispatch(setChannel(channel))

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



