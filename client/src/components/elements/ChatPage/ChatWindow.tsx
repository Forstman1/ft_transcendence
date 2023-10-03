"use client";

import { Avatar, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../../../client/assets/animations/animation_typing.json';
import arrow from "../../../../../client/assets/icons/arrow.svg";
import Image from 'next/image';
import { useForm } from "react-hook-form";


type Messages = {
  message: string
  sender: string
  time: Date
};



function Message_other({ message, sender, time }: Messages) {

  return (<div className='w-full flex gap-[5px]  items-baseline  pl-[15px] z-0'>
    <Avatar className='custom-shadow' boxSize={12} />

    <div className='bg-white border-2 border-black rounded-2xl custom-shadow  rounded-tl-none pl-[10px] w-[50%]'>
      <div className='text-[#B4B4B4]'>{sender}</div>
      <div>{message}</div>
    </div>
  </div>)
}



function Own_Message({ message, sender, time }: Messages) {

  return (<div className='w-full flex gap-[5px]   justify-end pr-[15px] items-baseline z-0'>
    <div className='bg-black border-2 border-black rounded-2xl custom-shadow text-white rounded-tr-none justify-start pl-[10px] w-[50%]'>
      <div className='text-[#B4B4B4]'>{sender}</div>
      <div>{message}</div>
    </div>
    <Avatar className='custom-shadow' boxSize={12} />
  </div>)
}



export default function ChatWindow() {

  let yerstday = new Date("2023-09-16")
  let today = new Date()
  const { handleSubmit, register, reset } = useForm<any>();
  const chatContainer = useRef<any>(null);
  const [messages, setMessages]: any = useState([])

  let fakemessages: Messages[] = [{ message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "haitkadi", time: today },
  { message: "ana hna o lheh hihihi", sender: "rel-fagr", time: yerstday },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "ana hna o lheh", sender: "rel-fagr", time: today }, { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "ana hna :)", sender: "houazzan", time: today },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "ana hna o lheh", sender: "rel-fagr", time: today }, { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "ana hna :)", sender: "houazzan", time: today },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "ana hna o lheh", sender: "rel-fagr", time: today }, { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
  { message: "ana hna :)", sender: "houazzan", time: today }]


  useEffect(() => {
    setMessages(fakemessages, ...messages)

  }, [])



  const scrollToBottom = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
      console.log(chatContainer.current.scrollTop)
    }
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  messages.sort((a: Messages, b: Messages) => a.time.getTime() - b.time.getTime());

  const handelNewMessage = (data: any) => {

    if (!data.newmessage)
      return;
    const date = new Date()

    let message: Messages = {
      message: data.newmessage,
      sender: "sahafid",
      time: date,
    }
    setMessages([message, ...messages])
    reset({ newmessage: '' });

    scrollToBottom();
  }


  useEffect(() => {
    scrollToBottom();
  }, []);




  return (
    <div className='flex-grow flex justify-between border-l-[3px] border-black flex-col gap-[10px] z-0'>
      <div className=' flex flex-col gap-[10px] overflow-y-scroll z-0 h-[90%] ' ref={chatContainer}>


        {messages.map((message: Messages, index: number) => {
          if (message.sender === "sahafid") {
            return <Own_Message key={index} message={message.message} sender={message.sender} time={message.time} />
          }
          return <Message_other key={index} message={message.message} sender={message.sender} time={message.time} />
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
      <form onSubmit={handleSubmit(handelNewMessage)} className='h-[55px] mb-[15px] flex w-[100%] justify-around items-center  '>
        <Input {...register("newmessage")} className='bg-[#D9D9D9] border-2 rounded-ld w-[90%] border-black h-[100%]' placeholder='Type your message here ...' />
        <button type='submit' className='bg-black w-[50px] rounded-md cursor-pointer flex justify-start items-center h-[100%]'>
          <Image className=' w-[40px] ' src={arrow} alt='arrow' />
        </button>
      </form>
    </div>
  )
}



