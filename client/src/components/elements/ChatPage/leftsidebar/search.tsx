import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Icon, Input, InputLeftElement, Modal, Radio, useDisclosure, useToast } from "@chakra-ui/react";
import { Modak } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { Avatar, AvatarBadge, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
// import Hashtag from "./hatshtag";
import Image from "next/image";
import { Channel, ChannelMember, ChannelMessage, User } from "@/utils/types/chat/ChatTypes";
import { useDispatch, useSelector } from "react-redux";
import { setChannel, setChannelMember, setMessages, setNewChannel, setTheUser } from "@/redux/slices/chat/ChatSlice";
import { useMutation } from "react-query";
import { LockIcon, SmallAddIcon } from "@chakra-ui/icons";




type Props = {
    channels: Channel[];
    users: User[];
};



function Usercard(props: any) {


    const { user, selectedOption, setSelectedOption } = props;

    const handleChange = () => {

        setSelectedOption(user);
    };



    return (

        <div onClick={handleChange} className='flex justify-between items-center border-2   cursor-pointer m-2 ml-0 p-2  rounded-md w-full'>
            <div>
                <Avatar boxSize={12} src={user.avatar}>
                    <AvatarBadge boxSize={6} bg='green' />
                </Avatar>
            </div>

            <div className='flex flex-col items-center justify-around'>
                <div className='text-[20px] md:text-[30px]'>{user.username}</div>
            </div>
            <Radio
                className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-sm'
                value={user.username}
                onChange={handleChange}
                isChecked={selectedOption?.username === user.username}
            >
            </Radio>

        </div>)
}

function Hashtag(props: any) {

    const { data, selectedOption, setSelectedOption } = props;

    const handleChange = () => {

        setSelectedOption(data);
    };


    return (

        <div className='flex items-center cursor-pointer justify-around w-full' onClick={handleChange}>
            <div className="flex h-[40px]">
                <div className='h-[20px] text-[40px] mr-3'>#</div>
                <div className='text-[20px] md:text-[30px]'>{data.name}</div>
            </div>
            {data.type === 'PROTECTED' ? <div className='cursor-pointer flex items-center justify-center'><Icon boxSize={5} as={LockIcon} /></div> : <div></div>}
            <Radio
                className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-sm'
                value={data.name}
                onChange={handleChange}
                isChecked={selectedOption?.name === data.name}
            >
            </Radio>
        </div>
    )
}



export default function Search() {


    const [search, setSearch] = useState('');
    const [allSearchChannels, setAllSearchChannels]: any = useState([])
    const [allSearchUsers, setAllSearchUsers]: any = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

    const channels = useSelector((state: any) => state.chat.channels)

    const [selectedOption, setSelectedOption]: any = useState();
    const dispatch = useDispatch()
    const toast = useToast()
    const userId = useSelector((state: any) => state.userID.user)
    const socket = useSelector((state: any) => state.channelChatSocket.socket)
    const [wrongpassowrd, setWrongpassowrd] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const { handleSubmit, register, reset } = useForm<any>();
    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)

    const getchannels = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/channel/getallchannelsapp/' + variables.tofound).then((res) => {
            console.log(variables)
            return res.json()
        }).catch((err) => console.log(err))
    )



    const getusers = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/users/getusers/' + variables.tofound).then((res) => {
            return res.json()
        }).catch((err) => console.log(err)))

    const listusers = useMutation<any, Error, any>(() =>
        fetch('http://127.0.0.1:3001/users/listusers').then((res) => {
            return res.json()
        }).catch((err) => console.log(err)))

    const listchannels = useMutation<any, Error, any>(() =>
        fetch('http://127.0.0.1:3001/channel/getallpublicandprivatechannels').then((res) => {
            return res.json()
        }).catch((err) => console.log(err)))




    const handleSearchClick = async () => {

        console.log(search)

        if (search.trim() === "") {

            const searchchannelarray = await listchannels.mutateAsync({})
            const searchuserarray = await listusers.mutateAsync({})

            setAllSearchChannels(searchchannelarray)

            setAllSearchUsers(searchuserarray)
            return;
        }

        const allchannel = await getchannels.mutateAsync({ tofound: search })
        const allusers = await getusers.mutateAsync({ tofound: search })

        setAllSearchChannels(allchannel)

        setAllSearchUsers(allusers)


        setSearch("")
        onOpen()
    };



    const handleChange = async (data: any) => {
        setSearch(data.target.value)
    };


    const getchannelmember = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/channel/getchannelmemberinfo/' + variables.channelId + '/' + variables.userId).then((response) => {
            return response.json()
        }
        ).catch((error) => {
            return error
        }))

    const getMessages = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/message/getmessages/' + variables.channelId).then((response) => {
            return response.json()

        }).catch((error) => {
            return error
        }))

    const enterChannel = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/channel/enterchannel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(variables),
        }).then((res) => {
            return res.json()
        }).catch((err) => console.log(err)))





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

    const onSubmit = async (info: any) => {

        const check = await checkpassword.mutateAsync({
            channelName: selectedOption.name,
            password: info.password
        })
        console.log(check)
        if (check.status === "wrong password") {
            setWrongpassowrd(true)
            toast({
                title: "Wrong password",
                position: `bottom-right`,
                status: 'error',
                duration: 1000,
                containerStyle: {
                    width: 300,
                    height: 100,
                }
            })
            return;
        }

        const channel = await enterChannel.mutateAsync({ channelName: selectedOption.name, userId: userId })
        setWrongpassowrd(false)
        socket.emit('joinChannel', {
            channelId: channel.id,
            userId: userId,
        });
        dispatch(setNewChannel(selectedOption))
        dispatch(setChannel(selectedOption))


        const messages = await getMessages.mutateAsync({
            channelId: selectedOption.id,
        })
        if (messages) {
            dispatch(setMessages(messages))
        }
        const channelmember: ChannelMember = await getchannelmember.mutateAsync({
            channelId: selectedOption.id,
            userId
        })
        if (channelmember) {
            dispatch(setChannelMember(channelmember))
        }
        toast({
            title: selectedOption.name,
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
        setOpenSearch(false)


    };

    const confirm = async () => {
        if ('name' in selectedOption) {

            const newchannels = channels.map((channel: any) => {
                delete channel.channelMembers
                return channel
            })

            console.log(selectedOption, newchannels, " ahna hna 1")

            if (newchannels.includes(selectedOption)) {

                console.log(selectedOption, " ahna hna 2")


                if (selectedOption.type === 'PROTECTED') {
                    setWrongpassowrd(false)
                    // onOpen()
                    onClose()
                    setOpenSearch(true)
                }
                else {
                    dispatch(setChannel(selectedOption))
                    console.log("ana hna")
                    const messages: ChannelMessage[] = await getMessages.mutateAsync({
                        channelId: selectedOption.id,
                    })
                    if (messages) {
                        dispatch(setMessages(messages))
                    }
                    const channelmember: ChannelMember = await getchannelmember.mutateAsync({
                        channelId: selectedOption.id,
                        userId
                    })
                    if (channelmember) {
                        dispatch(setChannelMember(channelmember))
                    }
                    toast({
                        title: selectedOption.name,
                        position: `bottom-right`,
                        status: 'success',
                        duration: 1000,
                        containerStyle: {
                            width: 300,
                            height: 100,
                        }
                    })
                }


                onClose();
                return;
            }
            else {
                if (selectedOption.type === 'PUBLIC') {

                    const channel = await enterChannel.mutateAsync({ channelName: selectedOption.name, userId: userId })

                    if (channel.status) {
                        toast({
                            title: channel.status,
                            position: `bottom-right`,
                            status: 'error',
                            duration: 1000,
                            containerStyle: {
                                width: 300,
                                height: 100,
                            }
                        })

                        onClose();
                        return;
                    }
                    socket.emit('joinChannel', {
                        channelId: channel.id,
                        userId: userId,
                    });
                    dispatch(setNewChannel(selectedOption))
                    dispatch(setChannel(selectedOption))



                    const messages: ChannelMessage[] = await getMessages.mutateAsync({
                        channelId: channel.id,
                    })
                    if (messages) {
                        dispatch(setMessages(messages))
                    }
                    const channelmember: ChannelMember = await getchannelmember.mutateAsync({
                        channelId: channel.id,
                        userId
                    })
                    if (channelmember) {
                        dispatch(setChannelMember(channelmember))
                    }


                    toast({
                        title: "hadi rah public",
                        position: `bottom-right`,
                        status: 'success',
                        duration: 1000,
                        containerStyle: {
                            width: 300,
                            height: 100,
                        }
                    })
                    onClose()
                }
                else {
                    setWrongpassowrd(false)
                    // onOpen()
                    onClose()
                    setOpenSearch(true)
                }
            }
        }

    }
    useEffect(() => {
        setAllSearchUsers([])
        setAllSearchChannels([])
    }, [isOpen])

    return (<>
        <div onClick={onOpen} className='w-[80%]  md:h-[65px] h-[40px] mt-5 border-2 border-black rounded-sm flex justify-between items-center custom-shadow cursor-pointer'>

            <div className='border-none w-full h-full text-gray-400 text-[30px] items-center flex ml-[10px]'>Search...</div>
            <div className='rounded-none w-[75px] md:h-[63px] h-[40px] bg-black active:bg-black  flex items-center justify-center cursor-pointer'><Icon boxSize={5} color="white" as={SearchIcon} /></div>
        </div>



        <Modal isOpen={isOpen} onClose={onClose} isCentered>

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

                <ModalHeader>Search</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Search2Icon color="gray.300" />
                        </InputLeftElement>
                        <InputRightElement width="4.5rem" height={12}>
                            <Button
                                variant="outline"
                                h="2rem"
                                size="sm"
                                onClick={handleSearchClick}
                            >
                                Search
                            </Button>
                        </InputRightElement>
                        <Input
                            type="tel"
                            placeholder="Search for a friend"
                            height={12}
                            borderEndEndRadius={0}
                            value={search}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <div className="flex w-full h-[300px]  flex-col  overflow-y-scroll ">
                        {allSearchChannels.map((channels: Channel, id: number) => {
                            return <Box key={id} className="flex  w-[95%] p-2 flex-row justify-between items-center border-2 border-gray-300 rounded-lg  mt-5">

                                <Hashtag
                                    key={id}
                                    data={channels}
                                    selectedOption={selectedOption}
                                    setSelectedOption={setSelectedOption}
                                />
                            </Box>
                            return
                        })}
                        {allSearchUsers.map((users: User, id: number) => {
                            return (<Usercard
                                key={id}
                                user={users}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                            />)
                        })}
                    </div>
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
                        ml={10}
                        onClick={confirm}
                    >
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>



        <Modal isCentered
            isOpen={openSearch}
            onClose={() => setOpenSearch(false)}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Channel Name [{selectedOption?.name}]</ModalHeader>
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



