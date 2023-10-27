"use client";

import { Avatar, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../../../client/assets/animations/animation_typing.json';
import arrow from "../../../../../client/assets/icons/arrow.svg";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '@/redux/slices/chat/ChatSlice';
import { ChannelMessage } from '@/utils/types/chat/ChatTypes';
import { useMutation } from 'react-query';
import MobileFooter from './Mobile/MobileFooter';
import { setLeft, setRight, setMidle } from '@/redux/slices/chat/MobileSlice';



function Message_other({ usermessage, message, sender, time }: any) {

  const [user, setUser]: any = useState()
  useEffect(() => {
    const fetchData = async () => {

      const fetchuser = await fetch('http://127.0.0.1:3001/users/getuser/' + usermessage.authorID)
      const response = await fetchuser.json()
      setUser(response)
    }
    fetchData()
  }, [])


  return (<div className='w-full flex gap-[5px]  items-baseline  pl-[15px] z-0'>
    <Avatar className='custom-shadow' boxSize={12} src={user?.avatar} />

    <div className='bg-white border-2 border-black rounded-2xl custom-shadow  rounded-tl-none pl-[10px] w-[50%]'>
      <div className='text-[#B4B4B4]'>{sender}</div>
      <div>{message}</div>
    </div>
  </div>)
}



function Own_Message({ message, user }: any) {

  return (<div className='w-full flex gap-[5px]   justify-end pr-[15px] items-baseline z-0'>
    <div className='bg-black border-2 border-black rounded-2xl custom-shadow text-white rounded-tr-none justify-start pl-[10px] w-[50%]'>
      <div className='text-[#B4B4B4]'>{user.username}</div>
      <div>{message.content}</div>
    </div>
    <Avatar className='custom-shadow' boxSize={12} src={user?.avatar} />
  </div>)
}



export default function ChatWindow() {




  const { handleSubmit, register, reset } = useForm<any>();
  const chatContainer = useRef<any>(null);


  const selectedChannel = useSelector((state: any) => state.chat.selectedChannelorUser);
  const messages: ChannelMessage[] = useSelector((state: any) => state.chat.messages);
  const userId = useSelector((state: any) => state.userID.user)
  const dispatch = useDispatch();
  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)
  const [user, setUser]: any = useState()

  useEffect(() => {
    const fetchData = async () => {

      const fetchuser = await fetch('http://127.0.0.1:3001/users/getuser/' + userId)
      const response = await fetchuser.json()
      setUser(response)
    }
    fetchData()
  }, [])


  const scrollToBottom = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
      // console.log(chatContainer.current.scrollTop)
    }
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const createMessage = useMutation<any, Error, any>((variables) =>
    fetch('http://127.0.0.1:3001/message/createmessage', {
      method: "POST",
      body: JSON.stringify(variables),
      headers: {
        "content-type": "application/json",
      }
    }).then((res) => {
      return res.json()
    }).catch((error) => {
      return error
    }))

  const handelNewMessage = async (data: any) => {

    if (!data.newmessage)
      return;
    console.log(data.newmessage, userId, selectedChannel.id)
    const message = await createMessage.mutateAsync({
      content: data.newmessage,
      userId: userId,
      reciverId: selectedChannel.id
    })
    if (message)
      dispatch(addMessage(message));

    reset({ newmessage: '' });

    scrollToBottom();
  }

  const HideMobileSideBars = () => {
    dispatch(setRight(false));
    dispatch(setLeft(false))
  };


  return (
    <div className='justify-between flex-col gap-[10px] w-full h-full'>
      <div className=' flex flex-col gap-[10px] overflow-y-scroll z-0 h-[91%] ' ref={chatContainer}>


        {messages.length != 0 && messages.map((message: ChannelMessage, index: number) => {
          if (message.authorName === user.username) {
            return <Own_Message key={index} message={message} user={user} />
          }
          return <Message_other key={index} usermessage={message} message={message.content} sender={message.authorName} time={message.createdAt} />
        })}


        <div className='w-full flex   items-baseline gap-[5px]  pl-[15px] h-[100px] mb-[5px]'  >
          <Avatar className='custom-shadow' boxSize={12} />


          <div className='bg-white border-2 border-black rounded-2xl custom-shadow flex rounded-tl-none p-[5px] ' >
            <div className='h-[15px]'></div>
            <Lottie
              className=' w-[50px] h-[30px]'
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(handelNewMessage)} className='h-[55px] mb-[15px] flex justify-around items-center'>
        <Input {...register("newmessage")} className='bg-[#D9D9D9] border-2 rounded-ld w-[90%] border-black h-[100%]' placeholder='Type your message here ...'
          onClick={() => { HideMobileSideBars() }}
        />
        <button type='submit' className='bg-black w-[50px] rounded-md cursor-pointer flex justify-start items-center h-[100%]'>
          <Image className=' w-[40px] ' src={arrow} alt='arrow' />
        </button>
      </form>
    </div>
  )
}



