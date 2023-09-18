"use client";

import { Avatar } from '@chakra-ui/react';
import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../../../client/assets/animations/animation_typing.json';


type Messages = {
  message: string
  sender: string
  time: Date
};



function Message_other({ message, sender, time }: Messages) {

  return (<div className='w-full flex gap-[5px]  items-baseline  pl-[15px]'>
    <Avatar className='custom-shadow' boxSize={12} />

    <div className='bg-white border-2 border-black rounded-2xl custom-shadow  rounded-tl-none pl-[10px] w-[35%]'>
      <div className='text-[#B4B4B4]'>{sender}</div>
      <div>{message}</div>
    </div>
  </div>)
}



function Own_Message({ message, sender, time }: Messages) {

  return (<div className='w-full flex gap-[5px]   justify-end pr-[15px] items-baseline '>
    <div className='bg-black border-2 border-black rounded-2xl custom-shadow text-white rounded-tr-none justify-start pl-[10px] w-[35%]'>
      <div className='text-[#B4B4B4]'>{sender}</div>
      <div>{message}</div>
    </div>
    <Avatar className='custom-shadow' boxSize={12} />
  </div>)
}



export default function ChatWindow() {

  let yerstday = new Date("2023-09-16")
  let today = new Date()


  let messages: Messages[] = [{ message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
                              { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "haitkadi", time: today },
                              { message: "ana hna o lheh hihihi", sender: "rel-fagr", time: yerstday },
                              { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
                              { message: "ana hna o lheh", sender: "rel-fagr", time: today }, { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", sender: "sahafid", time: today },
                              { message: "ana hna :)", sender: "houazzan", time: today }]

  messages.sort((a, b) => a.time.getTime() - b.time.getTime());


  return (
    <div className='flex-grow flex  border-l-4 border-black flex-col gap-[10px] overflow-y-scroll '>
      {messages.map((message: Messages) => {
        console.log(message.time)
        if (message.sender === "sahafid") {
          return <Own_Message message={message.message} sender={message.sender} time={message.time} />
        }
        return <Message_other message={message.message} sender={message.sender} time={message.time} />
      })}


      <div className='w-full flex   items-baseline gap-[5px]  pl-[15px] h-[100px]'>
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
  )
}
