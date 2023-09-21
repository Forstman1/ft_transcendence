"use client";
import React, {useState} from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import Image from "next/image";
import { Flex, Box, Button } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/ChatPage/LeftSidebar";
import RightSidebar from "@/components/elements/ChatPage/RightSidebar";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import MobileRightBar from "@/components/elements/ChatPage/MobileRightBar";
import MobileLeftBar from "@/components/elements/ChatPage/MobileLeftBar";
import MobileFooter from "@/components/elements/ChatPage/MobileFooter";





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
      <MobileFooter  LeftIsOpen={LeftIsOpen} setLeftIsOpen={setLeftIsOpen} 
      RightIsOpen={RightIsOpen} setRightIsOpen={setRightIsOpen}
      />
    </PageWrapper>

  );
}