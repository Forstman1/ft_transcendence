"use client";

import React from "react";
import { Text, Avatar, Box } from "@chakra-ui/react";
import Image from "next/image";
import Profile from "../../../../../assets/icons/Profile.svg";
import InviteToaGame from "../../../../../assets/icons/InviteToaGame.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import GameModesModal from "@/app/gamePage/ui/GameModesModal";
import { useDisclosure } from "@chakra-ui/react";

import UserControls from "./UserControls";
import { useSelector } from "react-redux";


export default function RightSidebar() {
  const { RightClice } = useSelector((state: any) => state.mobile);
  const friend = useSelector((state: any) => state.chat.selectedChannelorUser);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const User = useSelector((state: any) => state.chat.selectedChannelorUser);

  const sidebar = {
    open: {
      x: 0,
      transition: {
        type: "Tween",
        stiffness: 100,
      },
    },
    closed: {
      x: "+100%",
      transition: {
        type: "Tween",
        stiffness: 100,
      },
    },
  };

  const handelInviteGame = () => {
    onOpen();
    // toast({
    //   title: "Invitation sent",
    //   position: "bottom-right",
    //   status: "success",
    //   duration: 1000,
    //   containerStyle: {
    //     width: 300,
    //     height: 100,
    //   },
    // });
  };

  return (
    <Box
      className="UserRightSideBar items-center w-[20%] max-xl:w-[30%] max-md:w-[50%] max-sm:w-[80%] fixed md:block bg-opacity-80 max-md:backdrop-blur-xl md:static h-full overflow-y-auto border-l-[3px] border-l-black pb-28 right-0 pt-[150px]"
      as={motion.div}
      initial={false}
      animate={RightClice.RightValue ? "open" : "closed"}
      variants={sidebar}
    >
      <Box className="w-full flex flex-1 flex-col items-center justify-center my-14 gap-7 ">
        <Text className="flex text-black text-4xl drop-shadow-[2px_2px_0_rgba(18,18,18,.0.50)]">
          {User.username}
        </Text>
        <Avatar
          src={User?.avatarURL}
          className="m-7 h-[130px] w-[130px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)] border border-black"
        />
        <Box className="bg-black justify-start flex items-center rounded text-white w-[200px] h-[45px] drop-shadow-[2px_2px_0_rgba(18,18,18,0.50)]">
          <Box
            className={`AvatarBadge w-[25px] h-[25px] rounded-full mx-5 ${
              User.isOnline ? `bg-green-600` : `bg-red-600`
            }`}
          />
          <Text className="text-3xl">
            {" "}
            {User.isOnline ? `Availabel` : `Unvailable`}{" "}
          </Text>
        </Box>
      </Box>
      <hr className="bg-black h-[2px] mx-10" />
      <Box className="w-full flex flex-1 flex-col items-center justify-center my-14 gap-7">
        <Box className="flex items-center gap-6 w-[220px]">
          <Image
            src={Profile}
            priority={false}
            width={30}
            height={30}
            alt="View Profile"
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          <Link href={"/gamePage"} className="text-2xl cursor-pointer">
            View Profile
          </Link>
        </Box>
        <Box className="flex items-center gap-6 w-[220px]">
          <Image
            src={InviteToaGame}
            priority={false}
            width={30}
            height={30}
            alt="View Profile"
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          <Text
            className="text-2xl cursor-pointer"
            onClick={() => handelInviteGame()}
          >
            Invite to a game
          </Text>
        </Box>
        <UserControls />
      </Box>
      <GameModesModal
          isOpen={isOpen}
          onClose={onClose}
          gameType="chatGame"
          friend={friend}
        />
    </Box>
  );
}
