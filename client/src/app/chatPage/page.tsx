"use client";
import React, { useState, useEffect } from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import Image from "next/image";
import { Flex, Box, Button } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
// client/src/components/elements/ChatPage/leftsidebar/LeftSidebar.tsx
import RightSidebar from "@/components/elements/ChatPage/rightSideBar/RightSidebar";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import MobileLeftBar from "@/components/elements/ChatPage/Mobile/MobileLeftBar";
import MobileRightBar from "@/components/elements/ChatPage/Mobile/MobileRightBar";
import MobileFooter from "@/components/elements/ChatPage/Mobile/MobileFooter";
import { useSelector, useDispatch } from 'react-redux'





export default function ChatPage() {

  const [RightIsOpen, setRightIsOpen] = useState(false)
  const [LeftIsOpen, setLeftIsOpen] = useState(false)

  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)
  const { MidleClice } = useSelector((state: any) => state.mobile)
  
  return (
    <div className="Chat_sub_div2 flex flex-grow w-full ">
        <ChatWindow />
        <RightSidebar />
    </div>

    
  );
}