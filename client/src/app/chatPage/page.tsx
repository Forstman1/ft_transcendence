"use client";

import { PageWrapper } from "../animationWrapper/pageWrapper";
import Image from "next/image";
import { Box, useMediaQuery, useToast, Alert, AlertIcon, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import RightSidebar from "@/components/elements/ChatPage/rightSideBar/RightSidebar";
import RightSidebarChannel from "@/components/elements/ChatPage/rightSideBar/RightSideBarChannel";
import { Channel, User } from "@/utils/types/chat/ChatTypes";
import { setLeft, setMidle, setRight } from "@/redux/slices/chat/MobileSlice";
import { motion } from 'framer-motion'
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import acceptIcon from "../../../assets/icons/accept.svg";
import denyIcon from "../../../assets/icons/deny.svg";







export default function ChatPage() {
  const [RightIsOpen, setRightIsOpen] = useState(false);
  const [LeftIsOpen, setLeftIsOpen] = useState(false);


  const { LeftClice } = useSelector((state: any) => state.mobile);
  const { RightClice } = useSelector((state: any) => state.mobile);
  const { MidleClice } = useSelector((state: any) => state.mobile);
  const socket = useSelector((state: any) => state.socket.socket);


  const isDesktop = useMediaQuery("(min-width: 1000px)")
  const dispatch = useDispatch()
  const selected: Channel | User | null = useSelector((state: any) => state.chat.selectedChannelorUser);
  const toast = useToast();
  useEffect(() => {
   
  if (isDesktop[0]) {
    dispatch(setRight(true));
    dispatch(setMidle(true));
    dispatch(setLeft(true));
  }
}, [isDesktop]);




  useEffect(() => {

    const handleFriendInvitation = (data: {
      user: User;
    }) => {
      toast({
  position: "top-right",
  duration: 9000,
  isClosable: true,
  render: ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0, x: "50%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Alert
        status="success"
        variant="top-accent"
        className=" space-x-2 border-white"
      >
        <AlertIcon />
        <Box flex="1">
          <strong>Friend Request Notification</strong>
          <p>Do you want to be a friend with ${data.user.fullname} </p>
        </Box>
        <Button
          variant="outline"
          colorScheme="blue"
          onClick={() => {
            // acceptInvitation(data.roomId, data.modalData);
            // onClose();
          }}
          leftIcon={
            <Image src={acceptIcon} alt="accept" width={20} />}
        >
          ACCEPT
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => {
            // denyInvitation(data.roomId);
            onClose();
          }}
          leftIcon={<Image src={denyIcon} alt="deny" width={20} />}
        >
          DENY
        </Button>
      </Alert>
    </motion.div>
  ),
});


      
     }
    
    socket.on(`receivedFreindRequest`, handleFriendInvitation);
    return () => {
      socket.off(`receivedFreindRequest`)
    }
    
  }, [socket])
  


  useEffect(() => {
    if(isDesktop[0]) {
      dispatch(setRight(true))
      dispatch(setMidle(true))
      dispatch(setLeft(true))
    }
  }, [isDesktop])

  
  
  const sidebar = {
    open: (height = 1000) => ({
      // width: "375px",
      clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      }
    }),
    closed: {
      width: 0,
      clipPath: `circle(0px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


  return (
    <div className="Chat_sub_div2 flex flex-grow w-full ">
      <ChatWindow />
      
      {selected !== null && 'username' in selected ? (
        <RightSidebar />
      ) : selected !== null && 'type' in selected ? (
        <RightSidebarChannel />
      ) : (
        <Box  className='RightSideBar w-[375px] absolute md:block backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0'
        as={motion.div}
        initial={false}
        animate={RightClice.RightValue ? "open" : "closed"}
        variants={sidebar}
        
      ></Box>
      )}
    </div>
  );
}