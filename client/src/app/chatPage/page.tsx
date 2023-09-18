"use client";
import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../animationWrapper/pageWrapper";
// import ImgBackground from "../../../assets/icons/background.svg";
import Image from "next/image";
import { Flex, Box, Button } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
// client/src/components/elements/ChatPage/leftsidebar/LeftSidebar.tsx
import RightSidebar from "@/components/elements/ChatPage/RightSidebar";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import FooterWaves from "../../../assets/icons/wavesOpacity.svg";
import ChatList from "../../../assets/icons/image-12_2.svg";



// export const metadata: Metadata = {
//   title: "Chat",
// };

export default function ChatPage() {
  return (
    <PageWrapper>
      <Flex className="w-[100%] justify-center flex-grow h-[calc(100vh_-_150px)] md:h-[calc(100vh_-_90px)]">
        <LeftSidebar />
        <ChatWindow />
        <RightSidebar />
      </Flex>
      <Image src={FooterWaves} alt="FooterWave" className="w-full rotate-180 h-[17px]"  />
      <Box className="w-full h-[60px] bg-neutral-950 sticky top-0 z-100 flex justify-between items-center">
        <Button className="h-14 w-24 rounded-3xl">
          <Image src={ChatList} alt="ChatList" className="fill-white"/>
        </Button>
        <Button className='bg-white h-14 w-24 rounded-3xl'></Button>
        <Button className="bg-white h-14 w-24 rounded-3xl"></Button>
      </Box>
    </PageWrapper>

  );
}
