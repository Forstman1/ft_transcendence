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
    useToast,
} from '@chakra-ui/react'
import { Button, FormControl, FormLabel, Icon, Input } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { LockIcon } from "@chakra-ui/icons";
import { useMutation } from "react-query";
import { setChannel, setChannelMember, setMessages } from "@/redux/slices/chat/ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { Channel } from "@/utils/types/chat/ChatTypes";





export default function Hashtag(props: any) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { handleSubmit, register, reset } = useForm<any>();
    const [wrongpassowrd, setWrongpassowrd] = useState(false);
    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)

    let { name, type }: Channel = props.data;
    let data: Channel = props.data;
    const userId = useSelector((state: any) => state.socket.userID)

    const dispatch = useDispatch()
    const toast = useToast()


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
        
    const handleClick = async () => {
       
        if (props.data.type === 'PROTECTED') {
            setWrongpassowrd(false)
            onOpen()
        }
        else {
            dispatch(setChannel(data))
            if (data.channelMember)
            {
                data.channelMember.map((data) => {
                    if (data.userId === userId)
                        dispatch(setChannelMember(data))
                })
            }
        }
    }


    const onSubmit = async (info: any) => {

        const check = await checkpassword.mutateAsync({
            channelName: name,
            password: info.password
        })
        
        if (check.status === "wrong password") {
            setWrongpassowrd(true)
            return;
        }
        dispatch(setChannel(data))
        if (data.channelMember)
        {
            data.channelMember.map((data1) => {
                if (data1.userId === userId)
                    dispatch(setChannelMember(data1))
            })
        }
        toast({
            title: name,
            position: `bottom-right`,
            status: 'success',
            duration: 1000,
            containerStyle: {
                width: 300,
                height: 100,
            }
        })
        info.password = "";
        reset({ password: "" })
        onClose();

    };

    let channelname = name.substring(0, 8)
    if (name.length > 8)
        channelname += ".."

    return (
        <>
            <div className="flex justify-between items-center  w-full h-full"
                onClick={() => { handleClick() }}
            >
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
                    <ModalHeader>Channel Name [{name}]</ModalHeader>
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
                            {wrongpassowrd && <div>Wrong passowrd</div>}
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