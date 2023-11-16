import React from 'react'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChannelMember } from '@/utils/types/chat/ChatTypes'

import InvitePeople from './invitepeople'
import LeaveChannel from './LeaveChannel'
import DeletChannel from './DeleteChannel'



export default function ChannelSetting() {


    const channelmember: ChannelMember = useSelector((state:any) => state.chat.ChannelMember)
   
    return <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>

        <InvitePeople />
        <LeaveChannel />
        {channelmember && (channelmember.role === "OWNER")  && <DeletChannel />}
    </Box>
}


