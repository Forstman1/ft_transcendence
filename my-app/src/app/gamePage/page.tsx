"use client";

import React from 'react'
import { Avatar, Text} from '@chakra-ui/react'
import Commodore from '../../../assets/icons/Commodore.svg'
import FreaxLogo from '../../../assets/icons/FreaxLogo.svg'
import Image from 'next/image'

// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Game',
// };


const GameHeader = () => {
  return (
    <div className=' flex items-center justify-between h-[100px] bg-black mx-auto rounded-lg p-10 drop-shadow-xl'>
      <div className='flex flex-row items-center space-x-5'>
        <Image src={FreaxLogo} alt="Logo" width={75} height={75} className='mt-9'/>
        <Avatar size='lg'/>
        <Text className="font-serif text-white	font-bold">UserName</Text>
      </div>
      <div className='flex flex-row items-center space-x-10'>
        <Text className="font-serif text-white	font-bold text-6xl">50</Text>
        <Text className="font-serif text-white	font-bold text-6xl">--</Text>
        <Text className="font-serif text-white	font-bold text-6xl">55</Text>
      </div>
      <div className='flex flex-row items-center space-x-5'>
        <Text className="font-serif text-white	font-bold">UserName</Text>
        <Avatar size='lg'/>
        <Image src={Commodore} alt="Logo" width={75} height={75} className='mt-9'/>
      </div>
    </div>
  );
}

export default function GamePage() {

  return (
    <div className=" w-[90%] mx-auto space-y-10 mt-[-50px]">
      <GameHeader/>
      <div className=' h-[600px] bg-black mx-auto rounded-lg'/>
    </div>
  )
}


