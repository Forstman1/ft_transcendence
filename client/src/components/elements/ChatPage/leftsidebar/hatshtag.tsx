import React, { useState } from "react"


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import {  Button, FormControl, FormLabel, Icon, Input, Select } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { LockIcon, SmallAddIcon } from "@chakra-ui/icons";
import { useMutation } from "react-query";



type ChannelValues = {
    channelName: string
    type: string
}


export default function Hashtag(props: any) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { handleSubmit, register, reset } = useForm<any>();
    const [wrongpassowrd, setWrongpassowrd] = useState(false);
    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)
    let {channelName, type}: ChannelValues = props.data;

    const checkpassword = useMutation<any, Error, any>((variables) => 
    fetch('http://127.0.0.1:3001/channel/checkpassword', {
        method: "POST",
        body: JSON.stringify(variables),
        headers: {
          "content-type": "application/json",
        }
    }).then((response) => {
        return response.json()

      }).catch((error) => {
        return error
      }))
    

    const handleClick = () => {
        if (props.data.type === 'PROTECTED') {
            setWrongpassowrd(false)
            onOpen()
        }
    }


    const onSubmit = async (data: any) => {

        const check = await checkpassword.mutateAsync({
            channelName: channelName,
            password: data.password
        })
        console.log(check)
        if (check.status === "wrong password")
        {
            setWrongpassowrd(true)
            return ;
        }
        console.log(check)
        data.password = "";
        reset({password: ""})
        onClose();

    };

    let channelname = channelName.substring(0, 8)
    if (channelName.length > 8)
        channelname += ".."

    return (<>
        <div className='flex items-center cursor-pointer justify-between w-[70%]' onClick={handleClick}>
            <div className="flex h-[40px]">
                <div className='h-[20px] text-[40px] mr-3'>#</div>
                <div className='h-[20px] text-[30px]'>{channelname}</div>
            </div>
            {type === 'PROTECTED' ? <div className='cursor-pointer flex items-center justify-center mr-2'><Icon boxSize={5} as={LockIcon} /></div> : <div></div>}
        </div>

        <Modal isCentered
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Channel Name [{channelName}]</ModalHeader>
                    <ModalHeader>Enter Password</ModalHeader>

                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
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
                                    <Button h='1.75rem' size='sm' onClick={handleShow}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {wrongpassowrd && <div>Wrong passowrd</div> }
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' mr={3}>
                            Enter
                        </Button>

                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </>)
}