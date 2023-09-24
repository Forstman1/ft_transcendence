"use client";

import { SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Button, Icon, Input, useDisclosure, Modal } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Newchannel from './newchannel';


import Hashtag from './hatshtag';
import Newmessage from './newmessage';
import Search from './search';




type ChannelValues = {
  channelName: string
  password: string
  type: string
}


type UserValues = {
  userName: string
  id: string
  onlineStatus: string
}






function Usercard(props: any) {

  return (<div className='flex justify-between items-center custom-shadow  cursor-pointer m-2 ml-0 p-2  rounded-md'>

    <div>
      <Avatar boxSize={16}>
        <AvatarBadge boxSize={6} bg='green' />
      </Avatar>

    </div>

    <div className='flex flex-col items-center justify-around'>
      <div className='text-[30px]'>{props.data.userName}</div>
      <div className='text-gray-400'>ok, see you tomorrow</div>
    </div>

    <div className='flex flex-col items-center'>
      <div>06:49 pm</div>
      <div className='rounded-full bg-black w-7 h-7 flex items-center justify-center text-[25px] text-white'>3</div>
    </div>

  </div>)
}



export default function LeftSidebar() {



  let [channels, setNewChannels]: any = useState([])

  let [users, setNewUsers]: any = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ChannelOrUser, setChannelOrUser] = useState(false)







  return (
    <>
      <div className='hidden  md:block justify-center w-[300px] flex-col items-center xl:w-[465px] '>
        <Search
          channels={channels}
          users={users}
        />

        <div className='w-[90%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[40px] font-bold'>Channels</div>
          <div onClick={() => { onOpen(), setChannelOrUser(true) }} className='cursor-pointer' ><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        <div className='flex h-[500px] flex-col w-[350px] mt-[30px]  gap-6 overflow-y-scroll'>

          {channels.map((data: ChannelValues) => {
            if (data.channelName)
              return <Hashtag data={data} />
          })}

        </div>

        <div className='w-[90%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[40px] font-bold'>Direct Messages</div>
          <div onClick={() => { onOpen(), setChannelOrUser(false) }} className='cursor-pointer'><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        <div className=' mt-[50px] flex  h-[500px] flex-col w-[350px]  gap-6 overflow-y-scroll'>

          {users.map((data: UserValues) => {
            return <Usercard data={data} />
          })}

        </div>
      </div>




      {ChannelOrUser === true ? <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newchannel isOpen={isOpen}
          onClose={onClose}
          setNewChannels={setNewChannels}
          channels={channels}

        />
      </Modal> : <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <Newmessage isOpen={isOpen}
          onClose={onClose}
          setNewUsers={setNewUsers}
          users={users}
        />
      </Modal>}




    </>
  )
}
