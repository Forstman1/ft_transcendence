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
        {/* {CtrlImages.map((data: any) => {
            if (channelinfo.type != 'PROTECTED' && (data.alt == "Change Channel Password" || data.alt == "Remove Channel Password")){}
            else if (channelinfo.type == 'PROTECTED' && data.alt == "Set Channel Password" ){}
            else
            {
                return (
                    <Box className='flex items-center gap-6 w-[220px]'
                        key={data.alt}
                    >
                        <Image src={data.src} width={30} height={30} alt={data.alt} />
                        <Text className='text-2xl cursor-pointer'
                            onClick={() => { onOpen(); setImageAlt(data.alt) }}
                        >
                            {data.alt}
                        </Text>
                        <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={() => <data.Componenent onClose={onClose} />} />
                    </Box>)
            }
            
        }

        )
        } */}
    </Box>
}


