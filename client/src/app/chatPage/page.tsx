"use client";
import React, {useState} from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import Image from "next/image";
import { Flex, Box, Button } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/ChatPage/LeftSidebar";
import RightSidebar from "@/components/elements/ChatPage/RightSidebar";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import FooterWaves from "../../../assets/icons/wavesOpacity.svg";
import ChatList from "../../../assets/icons/ChatList.svg";
import Chat from "../../../assets/icons/Chat.svg"
import Settings from "../../../assets/icons/Settings.svg"
import MobileRightBar from "@/components/elements/ChatPage/MobileRightBar";
import MobileLeftBar from "@/components/elements/ChatPage/MobileLeftBar";





export default function ChatPage() {

  const [RightIsOpen, setRightIsOpen] = useState(false)
  const [LeftIsOpen, setLeftIsOpen] = useState(false)

  return (

    <PageWrapper>
      <Flex className="w-[100%] justify-center flex-grow h-[calc(100vh_-_170px)] md:h-[calc(100vh_-_90px)]">
        <LeftSidebar />
        <MobileLeftBar LeftIsOpen={LeftIsOpen} setLeftIsOpen={setLeftIsOpen}/> 
        <ChatWindow />
        <RightSidebar />
        <MobileRightBar RightIsOpen={RightIsOpen} setRightIsOpen={setRightIsOpen}/>
      </Flex>
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
          >
            <Image src={Settings} alt="Chat" width={35} height={35} />
            Settings
          </Button>
        </Box>
      </Box>
    </PageWrapper>

  );
}