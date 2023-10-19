"use client";
import React, { useState, useEffect } from "react";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import Image from "next/image";
import { Flex, Box, Button } from "@chakra-ui/react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import RightSidebar from "@/components/elements/ChatPage/rightSideBar/RightSidebar";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";

import RightSidebarChannel from "@/components/elements/ChatPage/rightSideBar/RightSideBarChannel";







export default function ChatPage() {
  
  return (
    <div className="Chat_sub_div2 flex flex-grow w-full">
        <ChatWindow />
        <RightSidebar />
        {/* <RightSidebarChannel /> */}

    </div>

    
  );
}