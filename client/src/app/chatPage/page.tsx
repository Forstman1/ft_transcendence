"use client";

import {
  Box,
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







export default function ChatPage() {
  const { RightClice } = useSelector((state: any) => state.mobile);
  const dispatch = useDispatch();
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


  return (
    <div className="Chat_sub_div2 flex flex-grow w-full ">
      <ChatWindow />

      {selected !== null  && selected !== undefined && "username" in selected ? (
        <RightSidebar />
      ) : selected !== null  && selected !== undefined && "type" in selected ? (
        <RightSidebarChannel />
      ) : (
        <Box
          className="RightSideBar w-[375px] absolute md:block bg-opacity-80 max-md:backdrop-blur-xl md:static md:w-[465px] h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0"
          as={motion.div}
          initial={false}
          animate={RightClice.RightValue ? "open" : "closed"}
          variants={sidebar}
        ></Box>
      )}
    </div>
  );
}
