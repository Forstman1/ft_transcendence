"use client";

import {
  Box,
  Button,
  Alert,
  Image,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import RightSidebar from "@/components/elements/ChatPage/rightSideBar/RightSidebar";
import RightSidebarChannel from "@/components/elements/ChatPage/rightSideBar/RightSideBarChannel";
import { Channel, User } from "@/utils/types/chat/ChatTypes";
import { setLeft, setMidle, setRight } from "@/redux/slices/chat/MobileSlice";
import { motion } from "framer-motion";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";
import Remove from "../../../assets/icons/remove-friend.svg";
import Block from "../../../assets/icons/Block.svg";


export default function ChatPage() {
  const { RightClice } = useSelector((state: any) => state.mobile);
  const socket = useSelector((state: any) => state.socket.socket);
  const dispatch = useDispatch();
  const toast = useToast();
  const selected: Channel | User | null = useSelector(
    (state: any) => state.chat.selectedChannelorUser
  );

  const handleWindowResize = () => {
    if (window.innerWidth <= 1024) {
      dispatch(setRight(false));
      dispatch(setMidle(false));
      dispatch(setLeft(false));
    } else {
      dispatch(setRight(true));
      dispatch(setMidle(true));
      dispatch(setLeft(true));
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const sidebar = {
    open: (height = 1000) => ({
      // width: "375px",
      clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      width: 0,
      clipPath: `circle(0px at 90% 90%)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const handleFreindRequest = (Friend: any) => {
      Cookies.set(
        Friend.username,
        JSON.stringify([
          { src: Remove, alt: "Remove from frien list" },
          { src: Block, alt: "Block" },
        ]),
        { expires: 365 }
      );

      toast({
        position: "top-right",
        duration: 9000,
        isClosable: true,
        render: ({ onClose }) => (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between w-full p-2 space-x-2 bg-green-700 rounded-md flex-col"
          >
            <Alert
              status="success"
              variant="solid"
              className="w-full bg-transparent"
            >
              {Friend.username} sent you a friend request
            </Alert>
            <div className="flex items-center justify-between w-full space-x-2 pt-3">
              <Button
                onClick={() => {
                  socket?.emit(`acceptFreindRequest`, { friendId: Friend.id });
                  onClose();
                }}
                className="flex items-center justify-center w-full p-2 space-x-2 bg-green-500 rounded-md"
              >
                <CheckIcon />
                <p>Accept</p>
              </Button>
              <Button
                onClick={() => {
                  socket?.emit(`denyFreindRequest`, Friend);
                  onClose();
                }}
                className="flex items-center justify-center w-full p-2 space-x-2 bg-red-600 rounded-md"
              >
                <CloseIcon />
                <p>Deny</p>
              </Button>
            </div>
          </motion.div>
        ),
      });
    };

    socket?.on(`receivedFreindRequest`, (Friend: any) => {
      handleFreindRequest(Friend);
    });

    return () => {
      socket?.off(`receivedFreindRequest`);
    };
  }, [socket, toast]);

  return (
    <div className="Chat_sub_div2 flex flex-grow w-full ">
      <ChatWindow />

      {selected !== null && "username" in selected ? (
        <RightSidebar />
      ) : selected !== null && "type" in selected ? (
        <RightSidebarChannel />
      ) : (
        <Box
          className="RightSideBar w-[375px] absolute md:block backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0"
          as={motion.div}
          initial={false}
          animate={RightClice.RightValue ? "open" : "closed"}
          variants={sidebar}
        ></Box>
      )}
    </div>
  );
}
