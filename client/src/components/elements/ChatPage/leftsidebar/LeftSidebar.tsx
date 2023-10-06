"use client";

import { SmallAddIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge,  Icon,  useDisclosure, Modal } from '@chakra-ui/react';
import React, {  useEffect, useState } from 'react'
import Newchannel from './newchannel';


import Hashtag from './hatshtag';
import Newmessage from './newmessage';
import Search from './search';




type ChannelValues = {
  id:  string
  channelName: string
  type: string
}


type UserValues = {
  userName: string
  id: string
  onlineStatus: string
}






function Usercard(props: any) {

  return (<div className='flex justify-between items-center  cursor-pointer m-2 ml-0 p-2  rounded-md'
  onClick={() => console.log("ana hna")}>

    <div> 
      <Avatar className='custom-shadow border-[1px] border-black' boxSize={14}>
        <AvatarBadge className='custom-shadow border-[1px] border-black' boxSize={4} bg='green.500' />
      </Avatar>

    </div>

    <div className='ml-[7px] flex flex-col  text-left w-[60%] justify-around'>
      <div className='text-[22px] font-bold'>{props.data.userName}</div>
      <div className='text-gray-400 text-[12px] font-medium	'>ok, see you tomorrow</div>
    </div>

    <div className='flex flex-col items-center text-center '>
      <div className='text-[13px] text-gray-400'>06:49 pm</div>
      <div className='rounded-full bg-black w-5 h-5 flex items-center justify-center text-[20px] text-white'>3</div>
    </div>

  </div>)
}



export default function LeftSidebar() {



  let [channels, setNewChannels]: any = useState([])

  let [users, setNewUsers]: any = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ChannelOrUser, setChannelOrUser] = useState(false)

  const userId = "2c7606fc-ac43-4df7-87e4-91ae82e8863e";


  useEffect(() => {
    console.log("ana hna")
    const fetchData = async () => {
      const fetchChannels = await fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId)
      const response = await fetchChannels.json()
      if (response.length > 0)
      {
        const allchannels: ChannelValues[] = response.map((data: any) => ({
          id: data.id,
          channelName:data.name,
          type: data.type
        })
  
        )
        console.log(allchannels)
        setNewChannels(allchannels)
        return allchannels;
      }

    }
    fetchData()
  }, [])


  return (

      <div className='hidden  md:flex justify-center w-[350px]  flex-col items-center xl:w-[465px] '>
        <Search
          channels={channels}
          users={users}
        />

        <div className='w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[30px] font-bold'>Channels</div>
          <div onClick={() => { onOpen(), setChannelOrUser(true) }} className='cursor-pointer' ><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        <div className='flex h-[400px] flex-col w-full mt-[30px] items-center gap-6 overflow-y-scroll'>

          {channels.map((data: ChannelValues) => {
            if (data.channelName)
              return <Hashtag data={data} />
          })}

        </div>

        <div className='w-[90%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[30px] font-bold'>Direct Messages</div>
          <div onClick={() => { onOpen(), setChannelOrUser(false) }} className='cursor-pointer'><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        <div className=' mt-[40px] flex  h-[500px] flex-col w-full  gap-6 overflow-y-scroll'>

          {users.map((data: UserValues) => {
            return <Usercard data={data} />
          })}

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
      </div>

  )
}
