import React from "react"


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import {  Button, FormControl, FormLabel, Icon, Input, Select } from '@chakra-ui/react';
import { useForm } from "react-hook-form";



export default function Hashtag(props: any) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { handleSubmit, register } = useForm<any>();


    const handleClick = () => {
        if (props.data.type === "Protected") {
            onOpen()
        }
    }

    const onSubmit = async (data: any) => {
        if (data.password === props.data.password)
        {
            onClose();
        }  
        console.log("data")

    };

    return (<>
        <div className='flex items-center cursor-pointer' onClick={handleClick}>
            <div className='h-[20px] text-[40px] mr-3'>#</div>
            <div className='h-[20px] text-[30px]'>{props.data.channelName}</div>
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
                            <Input required {...register("password")} type="password" placeholder='passowrd' />
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