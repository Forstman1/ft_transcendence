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



export default function Hashtag(props: any) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { handleSubmit, register, watch } = useForm<any>();
    const [wrongpassowrd, setWrongpassowrd] = useState(false);
    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)


    
    const handleClick = () => {
        if (props.data.type === "Protected") {

            setWrongpassowrd(false)
            onOpen()
        }
    }

    const onSubmit = async (data: any) => {
        if (data.password === props.data.password)
        {
            data.password = "";
            onClose();
        }
        data.password = "";
        setWrongpassowrd(true)
        console.log("data")

    };


    return (<>
        <div className='flex items-center cursor-pointer justify-between' onClick={handleClick}>
            <div className="flex h-[40px]">
                <div className='h-[20px] text-[40px] mr-3'>#</div>
                <div className='h-[20px] text-[30px]'>{props.data.channelName}</div>
            </div>
            {props.data.type === "Protected" ? <div className='cursor-pointer flex items-center justify-center mr-2'><Icon boxSize={5} as={LockIcon} /></div> : <div></div>}
        </div>

        <Modal isCentered
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Enter Password</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            {/* <Input required {...register("password")} type="password" placeholder='passowrd' /> */}
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