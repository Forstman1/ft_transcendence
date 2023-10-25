import React, {  } from 'react'
import { Box } from '@chakra-ui/react'
import ChangePassword from './ChangePassword'
import { useSelector } from 'react-redux'
import { Channel, ChannelMember } from '@/utils/types/chat/ChatTypes'
import RemovePassword from './RemovePassword'
import SetChannelPassword from './SetChannelPassword'
import SetChannelAdmin from './SetChannelAdmin'
import RemoveChannelAdmin from './RemoveChannelAdmin'
import AllMembers from './AllMembers'


export default function ChannelConfiguration() {

    const channelinfo: Channel = useSelector((state:any) => state.chat.selectedChannelorUser)
    const channelmember: ChannelMember = useSelector((state:any) => state.chat.ChannelMember)


    return <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>

        
        <AllMembers />
        {channelinfo.type != 'PUBLIC' && <ChangePassword />}
        {channelinfo.type != 'PUBLIC' && <RemovePassword />}
        {channelinfo.type != 'PROTECTED' && <SetChannelPassword />}
        {channelmember && (channelmember.role === "ADMIN" || channelmember.role === "OWNER") && <SetChannelAdmin />}
        {channelmember && ( channelmember.role === "OWNER") && <RemoveChannelAdmin />}

       

    </Box>
}


