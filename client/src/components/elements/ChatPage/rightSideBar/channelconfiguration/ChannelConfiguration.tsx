
import React from 'react'
import { Box } from '@chakra-ui/react'
import ChangePassword from './ChangePassword'
import { useSelector } from 'react-redux'
import { Channel, ChannelMember } from '@/utils/types/chat/ChatTypes'
import RemovePassword from './RemovePassword'
import SetChannelPassword from './SetChannelPassword'
import SetChannelAdmin from './SetChannelAdmin'
import RemoveChannelAdmin from './RemoveChannelAdmin'
import AllMembers from './AllMembers'
import MuteMember from './MuteMember'
import KickMember from './KickMember'
import BanMember from './BanMembers'
import UnBanMember from './UnbaneMember'


export default function ChannelConfiguration() {

    const channelinfo: Channel = useSelector((state:any) => state.chat.selectedChannelorUser)
    const channelmember: ChannelMember = useSelector((state:any) => state.chat.ChannelMember)

    return <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>

        
        <AllMembers />
        {channelinfo.type != 'PUBLIC'&& ( channelmember && (channelmember.role === "ADMIN" || channelmember.role === "OWNER")) && <ChangePassword />}
        {channelinfo.type != 'PUBLIC' && ( channelmember && (channelmember.role === "ADMIN" || channelmember.role === "OWNER")) && <RemovePassword />}
        {channelinfo.type != 'PROTECTED' && ( channelmember && (channelmember.role === "ADMIN" || channelmember.role === "OWNER")) && <SetChannelPassword />}
        {channelmember && (channelmember.role === "ADMIN" || channelmember.role === "OWNER") && <SetChannelAdmin />}
        {channelmember && ( channelmember.role === "OWNER" || channelmember.role === "ADMIN")&& <RemoveChannelAdmin />}
        {channelmember && ( channelmember.role === "OWNER" || channelmember.role === "ADMIN" ) && <MuteMember />}
        {channelmember && ( channelmember.role === "OWNER" || channelmember.role === "ADMIN" ) && <KickMember />}
        {channelmember && ( channelmember.role === "OWNER" || channelmember.role === "ADMIN" ) && <BanMember />}
        {channelmember && ( channelmember.role === "OWNER" || channelmember.role === "ADMIN" ) && <UnBanMember />}





    </Box>
}

