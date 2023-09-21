import { Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import React, {useState} from 'react'
import FooterWaves from "../../../../assets/icons/wavesOpacity.svg";
// import ChatList from "../../../../assets/icons/ChatList.svg";
// import Chat from "../../../../assets/icons/Chat.svg"
// import Settings from "../../../../assets/icons/Settings.svg"
 import {HiOutlineChatBubbleLeftEllipsis} from 'react-icons/hi2'
import {HiOutlineChatBubbleLeftRight} from 'react-icons/hi2'
import {IoSettingsOutline} from 'react-icons/io5'


export default function MobileFooter({LeftIsOpen, setLeftIsOpen, RightIsOpen, setRightIsOpen}: any) {


  const [MidleButton, setMidleButton] = useState(false)

  return (

    console.log(LeftIsOpen, RightIsOpen, MidleButton),
    <Box className="Footer bottom-0 text-xl">
        <Image src={FooterWaves} alt="FooterWave" className="w-full rotate-180 h-[17px]" />
        <Box className="w-full h-[75px] bg-neutral-950 sticky top-0 z-100 flex justify-between items-center px-3">
          <Button className="h-14 w-32 gap-1  flex rounded-3xl text-lg" variant={'unstyled'}
          onClick={() => {setLeftIsOpen(true), setRightIsOpen(false), setMidleButton(false)}}
          textColor={LeftIsOpen ? "black": "white"}
          bg={"white"}
          >
            <HiOutlineChatBubbleLeftRight/>
            Chat List
          </Button>
          <Button className="h-14 w-28 gap-2 text-xl flex rounded-3xl"
          onClick={() => {setRightIsOpen(false), setLeftIsOpen(false), setMidleButton(true)}}
          textColor={MidleButton ? "black": "white"}
          >
            <HiOutlineChatBubbleLeftEllipsis/>
            Chat
          </Button>
          <Button className="h-14 w-32 gap-1 flex rounded-3xl text-lg"
            onClick={() => {setRightIsOpen(true), setLeftIsOpen(false), setMidleButton(false)}} 
            textColor={RightIsOpen ? "black": "white"}
          >
            <IoSettingsOutline />
            Settings
          </Button>
        </Box>
      </Box>
  )
}
