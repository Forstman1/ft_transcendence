import { Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import React, {useState} from 'react'
import FooterWaves from "../../../../assets/icons/wavesOpacity.svg";
import ChatList from "../../../../assets/icons/ChatList.svg";
import Chat from "../../../../assets/icons/Chat.svg"
import Settings from "../../../../assets/icons/Settings.svg"

export default function MobileFooter({LeftIsOpen, setLeftIsOpen, RightIsOpen, setRightIsOpen}: any) {

  return (
    <Box className="Footer bottom-0">
        <Image src={FooterWaves} alt="FooterWave" className="w-full rotate-180 h-[17px]" />
        <Box className="w-full h-[75px] bg-neutral-950 sticky top-0 z-100 flex justify-between items-center px-8">
          <Button className="h-14 w-24 gap-2 text-white text-xl flex" variant={'unstyled'}
          onClick={() => {setLeftIsOpen(!LeftIsOpen), setRightIsOpen(false)}}
          >
            <Image src={ChatList} alt="ChatList" width={35} height={35} />
            Chat List
          </Button>
          <Button className='bg-white h-14 w-24 rounded-3xl gap-2'
          onClick={() => {setRightIsOpen(false), setLeftIsOpen(false)}}
          >
            <Image src={Chat} alt="Chat" width={35} height={35} />
            Chat
          </Button>
          <Button className="h-14 w-24 gap-2 text-white text-xl flex" variant={"unstyled"}
            onClick={() => {setRightIsOpen(!RightIsOpen), setLeftIsOpen(false)}}
            bgColor={RightIsOpen ? 'white' : 'neutral.900'}
          >
            <Image src={Settings} alt="Chat" width={35} height={35} />
            Settings
          </Button>
        </Box>
      </Box>
  )
}
