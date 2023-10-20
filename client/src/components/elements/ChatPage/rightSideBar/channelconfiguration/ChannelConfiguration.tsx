import React, { useState } from 'react'
import AddToChannel from '../../../../../../assets/icons/AddToChannel.svg'
import { Box, useDisclosure } from '@chakra-ui/react'
import channelconfig from "../../../../../../assets/icons/channelconf.svg"
import ChangePassword from './ChangePassword'
import { useSelector } from 'react-redux'
import { Channel } from '@/utils/types/chat/ChatTypes'
import RemovePassword from './RemovePassword'
import SetChannelPassword from './SetChannelPassword'
import SetChannelAdmin from './SetChannelAdmin'


export default function ChannelConfiguration() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');
    const channelinfo: Channel = useSelector((state:any) => state.chat.selectedChannelorUser)

    const CtrlImages = [
        { src: channelconfig, alt: "Change Channel Password", Componenent: ChangePassword },
        { src: channelconfig, alt: "Remove Channel Password", Componenent: RemovePassword },
        { src: channelconfig, alt: "Set Channel Password", Componenent: RemovePassword },

        { src: AddToChannel, alt: "Set New Channel Administrateur", Componenent: ChangePassword },
    ]


    return <Box className='w-full flex flex-1 flex-col items-center justify-center my-14 gap-7'>

        {channelinfo.type != 'PUBLIC' && <ChangePassword />}
        {channelinfo.type != 'PUBLIC' && <RemovePassword />}
        {channelinfo.type != 'PROTECTED' && <SetChannelPassword />}
        <SetChannelAdmin />

        {/* {CtrlImages.map((data: any, id: number) => {
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


