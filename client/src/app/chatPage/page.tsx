"use client";
import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../animationWrapper/pageWrapper";
// import ImgBackground from "../../../assets/icons/background.svg";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/ChatPage/LeftSidebar";
import RightSidebar from "@/components/elements/ChatPage/RightSidebar";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";



// export const metadata: Metadata = {
//   title: "Chat",
// };

export default function ChatPage() {
  return (
    <PageWrapper>
      <Flex className="w-[100%] justify-center flex-grow h-[calc(100vh_-_90px)]">
        <LeftSidebar />
        <ChatWindow />
        <RightSidebar />
      </Flex>
    </PageWrapper>

  );
}
