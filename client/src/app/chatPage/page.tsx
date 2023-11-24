"use client";

import {
  Box,
} from "@chakra-ui/react";

import RightSidebar from "@/components/elements/ChatPage/rightSideBar/RightSidebar";
import RightSidebarChannel from "@/components/elements/ChatPage/rightSideBar/RightSideBarChannel";
import { Channel, User } from "@/utils/types/chat/ChatTypes";
import { setLeft, setMidle, setRight } from "@/redux/slices/chat/MobileSlice";
import { motion } from "framer-motion";
import ChatWindow from "@/components/elements/ChatPage/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import RestrictedRoute from "@/components/RestrictedRoute";







export default function ChatPage() {
  const { RightClice } = useSelector((state: any) => state.mobile);
  const dispatch = useDispatch();
  const selected: Channel | User | null = useSelector(
    (state: any) => state.chat.selectedChannelorUser
  );


  const handleWindowResize = () => {

    if (window.innerWidth < 1024) {

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
  open: {
    x: 0,
    transition: {
      type: "Tween",
      stiffness: 100,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "Tween",
      stiffness: 100,
    },
  },
};



  return (
    <RestrictedRoute>
      <div className="Chat_sub_div2 flex w-full ">
      <LeftSidebar />
      <ChatWindow />
      {selected !== null  && selected !== undefined && "username" in selected ? (
        <RightSidebar />
      ) : selected !== null  && selected !== undefined && "type" in selected ? (
        <RightSidebarChannel />
      ) : (
        <Box className='UserRightSideBar items-center w-[20%] max-xl:w-[30%] max-md:w-[50%] max-sm:w-[80%] absolute md:block bg-opacity-80 max-md:backdrop-blur-xl md:static h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0 pt-[150px]'
          as={motion.div}
          initial={false}
          animate={RightClice.RightValue ? "open" : "closed"}
          variants={sidebar}
        ></Box>
      )
      }
    </div>
    </RestrictedRoute>
  );
}
