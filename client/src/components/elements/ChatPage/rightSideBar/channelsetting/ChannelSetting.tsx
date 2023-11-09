import React, { useState } from 'react'
import AddToChannel from '../../../../../../assets/icons/AddToChannel.svg'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import channelconfig from "../../../../../../assets/icons/channelconf.svg"
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Channel, ChannelMember } from '@/utils/types/chat/ChatTypes'
import ModalWraper from '../../ModalWraper'
import ChangePassword from '../channelconfiguration/ChangePassword'
import leavechannel from "../../../../../../assets/icons/leavechannel.svg"
import invite from "../../../../../../assets/icons/invite.svg"
import ban from "../../../../../../assets/icons/bancopy.svg"
import Ban from "../../../../../../assets/icons/Ban.svg"
import InvitePeople from './invitepeople'
import LeaveChannel from './LeaveChannel'
import DeletChannel from './DeleteChannel'



export default function ChannelSetting() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');
    const channelinfo: Channel = useSelector((state:any) => state.chat.selectedChannelorUser)
    const CtrlImages = [
        { src: invite, alt: "Invite People", Componenent: ChangePassword },
        { src: ban, alt: "Ban People", Componenent: ChangePassword },
        { src: Ban, alt: "Delete Channel", Componenent: ChangePassword },
        { src: leavechannel, alt: "Leave Channel", Componenent: ChangePassword },

    ]
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


