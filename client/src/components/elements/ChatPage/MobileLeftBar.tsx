import React, { useState } from 'react'
import { Avatar, AvatarBadge, Box, Icon, Modal, useDisclosure } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import Search from './leftsidebar/search'
import Hashtag from './leftsidebar/hatshtag'
import Newchannel from './leftsidebar/newchannel'
import Newmessage from './leftsidebar/newmessage'
import { SmallAddIcon } from '@chakra-ui/icons'

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
      <Avatar boxSize={12}>
        <AvatarBadge boxSize={4} bg='green' />
      </Avatar>

    </div>

    <div className='flex flex-col items-center justify-around'>
      <div className='text-[20px]'>{props.data.userName}</div>
      <div className='text-gray-400'>ok, see you tomorrow</div>
    </div>

    <div className='flex flex-col items-center'>
      <div>06:49 pm</div>
      <div className='rounded-full bg-black w-7 h-7 flex items-center justify-center text-[25px] text-white'>3</div>
    </div>

  </div>)
}

export default function MobileLeftBar({LeftIsOpen, setLeftIsOpen}: any) {

    const ref = React.useRef(null)
    const inView = useInView(ref)

    let [channels, setNewChannels]: any = useState([])

    let [users, setNewUsers]: any = useState([])
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ChannelOrUser, setChannelOrUser] = useState(false)
  
  
    
  if (!inView) {
    setLeftIsOpen(false)
  }

    const sidebar = {
        open: (height = 1000) => ({
          width: "300px",
          clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          width: 0,
          clipPath: `circle(30px at 10% 90%)`,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };


  return (
    <Box ref={ref} className='h-screen bg-opacity-30 bg-black w-[300px]  overflow-y-scroll   gap-10 pt-6 z-0 sm:[300] md:hidden '
    as={motion.div}
    initial={false}
    animate={LeftIsOpen ? "open" : "closed"}
    variants={sidebar}
    >
      
      <Search
          channels={channels}
          users={users}
        />

        <div className='w-[90%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[30px] font-bold w-full'>Channels</div>
          <div onClick={() => { onOpen(), setChannelOrUser(true) }} className='cursor-pointer' ><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        <div className='flex h-[200px] flex-col mt-[30px]  gap-6 overflow-y-scroll'>

          {channels.map((data: ChannelValues) => {
            if (data.channelName)
              return <Hashtag data={data} />
          })}

        </div>

        <div className='w-[90%] flex justify-between items-center border-b-black border-b-2 mt-[20px]'>
          <div className='text-[30px] font-bold w-full'>Direct Messages</div>
          <div onClick={() => { onOpen(), setChannelOrUser(false) }} className='cursor-pointer'><Icon boxSize={10} as={SmallAddIcon} /></div>
        </div>

        {/* <div className=' mt-[50px] flex  h-[300px] flex-col gap-6 overflow-y-scroll'> */}

          {users.map((data: UserValues) => {
            return <Usercard data={data} />
          })}

        {/* </div> */}




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


    </Box>
  )
}
