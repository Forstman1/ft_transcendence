"use client";

import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Icon,
  useDisclosure,
  Modal,
  useToast,
  CloseButton,
  background,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef, use } from "react";
import Newchannel from "./newchannel";
import Hashtag from "./hatshtag";
import Newmessage from "./newmessage";
import Search from "./search";
import { Channel } from "@/utils/types/chat/ChatTypes";
import { useDispatch, useSelector } from "react-redux";
import { User } from "@/utils/types/chat/ChatTypes";
import { Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import {
  setChannel,
  setChannelMember,
  setChannels,
  setMessages,
  setNewChannel,
  setTheUser,
  setUserDms,
} from "@/redux/slices/chat/ChatSlice";
import { useAppSelector } from "@/redux/store/store";


function Usercard(props: any) {
  const socket = useSelector((state: any) => state.socket.socket);
  const scroolToRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div>
        <Avatar
          className="custom-shadow border-[1px] border-black"
          boxSize={14}
          src={props.data.avatarURL}
        >
          <AvatarBadge
            className="custom-shadow border-[1px] border-black"
            boxSize={4}
            bg={props.data.isOnline ? "green.500" : "red.500"}
          />
        </Avatar>
      </div>
      <div className="ml-[7px] flex flex-col  text-left w-[40%] justify-around">
        <div className="text-[22px] font-bold truncate">
          {props.data.username}{" "}
        </div>
      </div>
      <div className="flex flex-col items-center text-center ">
      </div>
      <Icon
        as={CloseButton}
        h={10}
        className="opacity-0 group-hover:opacity-100"
        onClick={() => {
          socket?.emit(`removeChatUser`, { friendId: props.data.id });
          console.log("ana hna");
        }}
      />
    </>
  );
}

export default function LeftSidebar() {
  const socket = useAppSelector((state) => state.socket.socket);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ChannelOrUser, setChannelOrUser] = useState(false);
  const channels = useSelector((state: any) => state.chat.channels);
  const [ranFirstEffect, setRanFirstEffect] = useState(false);

useEffect(() => {
  socket?.on(`updateChatList`, async (Users: any) => {

    dispatch(setUserDms(Users));
    dispatch(setTheUser(Users[0]));
    setRanFirstEffect(!ranFirstEffect); 
  });
}, [socket]);

useEffect(() => {
  if (ranFirstEffect) {
    dispatch(setTheUser(Users[0]));
  }
}, [ranFirstEffect]);


  const selected = useSelector(
    (state: any) => state.chat.selectedChannelorUser
  );
  const userId = useSelector((state: any) => state.socket.userID);
  const Users = useSelector((state: any) => state.chat.users);
  const toast = useToast();
  const { LeftClice } = useSelector((state: any) => state.mobile);

  useEffect(() => {
    socket?.emit("getChannelsFirstTime", { userId: userId });
    socket?.emit(`getChatList`);
  }, []);

  useEffect(() => {
    socket?.on("getChannelsFirstTime", (data: any) => {
      const allchannels: Channel[] = data.channels;

      allchannels.map((channel: Channel) => {
        socket?.emit("joinChannel", {
          channelId: channel.id,
        });
      });
      dispatch(setChannels(allchannels));

      socket?.on(`getChatList`, (Users: any) => {
        dispatch(setTheUser(Users[0]));
        dispatch(setUserDms(Users));
      });
    });

    socket?.on("channelCreated", (data: any) => {
      if (data.message === "Channel Created") {
        console.log(data.channel, " ana hna 1");
        dispatch(setChannel(data.channel));
        console.log(data.channel.channelMember);
        if (data.channel.channelMember) {
          data.channel.channelMember.map((data1: any) => {
            if (data1.userId === userId) dispatch(setChannelMember(data1));
          });
        }
        dispatch(setNewChannel(data.channel));

        toast({
          title: data.message,
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        });
        return;
      } else {
        toast({
          title: data.message,
          status: "error",
          position: `bottom-right`,
          isClosable: true,
        });
        return;
      }
    });

    socket?.on("allchannels", (data: any) => {
      const allchannels: Channel[] = data.channels;

      allchannels.map((channel: Channel) => {
        if (selected?.id === channel.id) {
          dispatch(setChannel(channel));
        }
      });
      dispatch(setChannels(allchannels));
    });

    socket?.on("channelEntered", async (data: any) => {
      if (data.status === "channel doesn't exist") {
        toast({
          title: data.status,
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        });
        return;
      }

      if (data.userId === userId) {
        toast({
          title: "you joined the channel",
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        });

        socket?.emit("joinChannel", {
          channelId: data.channel.id,
          userId: userId,
        });
        console.log(data.channel);

        dispatch(setChannel(data.channel));

        if (selected?.id === data.channel.id) {
          if (selected?.channelMember) {
            selected.channelMember.map((data1: any) => {
              if (data1.userId === userId) dispatch(setChannelMember(data1));
            });
          }
        }
        socket?.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.message,
          status: "error",
          position: `bottom-right`,
          isClosable: true,
        });
      }
    });

    socket?.on("channelLeft", (data: any) => {
      if (data.userId === userId) {
        toast({
          title: "you left the channel",
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        });
        dispatch(setChannel(null));
        dispatch(setMessages([]));
      } else {
        toast({
          title: data.message,
          status: "success",
          position: `bottom-right`,
          isClosable: true,
        });
      }
    });

    socket?.on("channelDeleted", (data: any) => {
      if (data.status == "You are not owner of the channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Channel has been deleted",
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        dispatch(setChannel(null));
        dispatch(setMessages([]));
        socket?.emit("getChannels", { userId: userId });
      }
    });
    socket?.on("setAdministrator", (data: any) => {
      if (data.status === "This member can't be set as an administrator.") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      if (data.member && data.member.userId === userId) {
        dispatch(setChannelMember(data.member));
      }
    });

    socket?.on("removeAdministrator", (data: any) => {
      if (data.status === "This member can't be removed as an administrator.") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (selected?.id === data.channelId) {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }

      if (data.member && data.member.userId === userId) {
        console.log(data.member);
        dispatch(setChannelMember(data.member));
      }
    });

    socket?.on("setpassword", (data: any) => {
      if (data.status === "You are not owner or admin of the channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (data.status === "Password is set. Channel is private now") {
        console.log(data);
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        socket.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    socket?.on("removepassword", (data: any) => {
      if (data.status === "You are not owner or admin of the channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (data.status === "Password is removed. Channel is public now") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        socket?.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
    socket?.on("changepassword", (data: any) => {
      if (data.status === "Password is changed") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        socket?.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
    socket?.on("mutemember", (data: any) => {
      if (data.status === "you have been muted from channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    socket?.on("kickmember", (data: any) => {
      if (data.status === "you have been kicked from channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(setChannel(null));
        dispatch(setMessages([]));
        dispatch(setChannelMember(null));
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
    socket?.on("banmember", (data: any) => {
      if (data.status === "you have been banned from channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        dispatch(setChannel(null));
        dispatch(setMessages([]));
        dispatch(setChannelMember(null));
        socket?.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });

    socket?.on("unbanmember", (data: any) => {
      if (data.status === "you have been unbanned from channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        socket?.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
    socket?.on("inviteMember", (data: any) => {
      if (data.status === "you have been invited to channel") {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        socket?.emit("joinChannel", {
          channelId: data.channel.id,
        });

        socket?.emit("getChannels", { userId: userId });
      } else {
        toast({
          title: data.status,
          position: `bottom-right`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        socket?.emit("getChannels", { userId: userId });
      }
    });

    return () => {
      socket?.off("getChannelsFirstTime");
      socket?.off("channelLeft");
      socket?.off("allchannels");
      socket?.off("channelDeleted");
      socket?.off("setAdministrator");
      socket?.off("removeAdministrator");
      socket?.off("setpassword");
      socket?.off("removepassword");
      socket?.off("changepassword");
      socket?.off("channelEntered");
      socket?.off("channelCreated");
      socket?.off("mutemember");
      socket?.off("kickmember");
      socket?.off("banmember");
      socket?.off("unbanmember");
      socket?.off("inviteMember");
    };
  }, [selected, userId]);

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
      clipPath: `circle(0px at 10% 90%)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  
  const onSubmited = (userData: User) => {
    dispatch(setTheUser(userData));
  };
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const handelClick = (id: number) => {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  };
  return (
    <Box
      className="LeftSideBar place-items-center grid w-[375px] absolute h-full overflow-y-auto border-r-[3px] border-r-black  md:static md:w-[400px] bg-opacity-80 max-md:backdrop-blur-xl z-10 pt-[100px] "
      as={motion.div}
      initial={false}
      animate={LeftClice.LeftValue ? "open" : "closed"}
      variants={sidebar}
    >
      <Search />

      <div className="w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]">
        <div className="text-[30px] font-bold">Channels</div>
        <div
          onClick={() => {
            onOpen(), setChannelOrUser(true);
          }}
          className="cursor-pointer"
        >
          <Icon boxSize={10} as={SmallAddIcon} />
        </div>
      </div>

      <div className="flex h-[400px] flex-col w-full mt-[30px] items-center gap-6 overflow-y-scroll">
        {channels &&
          channels.length != 0 &&
          channels.map((data: Channel, id: number) => {
            if (data.name) return <Hashtag key={id} data={data} />;
          })}
      </div>

      <div className="w-[80%] flex justify-between items-center border-b-black border-b-2 mt-[20px]">
        <div className="text-[30px] font-bold">Direct Messages</div>
        <div
          onClick={() => {
            onOpen(), setChannelOrUser(false);
          }}
          className="cursor-pointer"
        >
          <Icon boxSize={10} as={SmallAddIcon} />
        </div>
      </div>

      <div className=" mt-[40px] flex h-[500px] flex-col w-full  gap-1 overflow-y-scroll">
        {Users.map((userData: User, id: number) => (
          <Box
            className="group flex justify-between items-center cursor-pointer h-20 m-2  p-2 rounded-md hover:bg-zinc-300"
            key={id}
            onClick={() => { handelClick(id); onSubmited(userData) }}
            style={{
              backgroundColor: selectedCard === id ? "#d4d4d8" : "",
            }}
          >
            <Usercard data={userData} />
          </Box>
        ))}
      </div>
      {ChannelOrUser === true ? (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <Newchannel onClose={onClose} />
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <Newmessage isOpen={isOpen} onClose={onClose} />
        </Modal>
      )}
    </Box>
  );
}
