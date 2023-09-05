"use client";
import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../animationWrapper/pageWrapper";
// import ImgBackground from "../../../assets/icons/background.svg";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/Chat/LeftSidebar";
import RightSidebar from "@/components/elements/Chat/RightSidebar";
import ChatWindow from "@/components/elements/Chat/ChatWindow";



// export const metadata: Metadata = {
//   title: "Chat",
// };

export default function ChatPage() {
  return (
    <PageWrapper>
      <Flex className="mt-[40px] w-[100%] justify-center flex-grow">
        <LeftSidebar />
        <ChatWindow />
        <RightSidebar />
      </Flex>
    </PageWrapper>

  );
}
