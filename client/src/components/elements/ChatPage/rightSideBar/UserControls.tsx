
"use client";
import React, { use, useEffect, useState } from "react";
import AddToFriendList from "../../../../../assets/icons/AddToFriendList.svg";
import Remove from "../../../../../assets/icons/remove-friend.svg";
import Block from "../../../../../assets/icons/Block.svg";
import pending from "../../../../../assets/icons/pending.svg";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Unblock from "../../../../../assets/icons/Unblock.svg";
import accept from "../../../../../assets/icons/acceptFriend.svg"
import NotificationModal from "../../Notification/NotificationModal";
import { useDisclosure } from "@chakra-ui/react";
import { set } from "animejs";





export default function UserControls() {
  const OptImages = useSelector((state: any) => state.optImages.optImages);
  const Selected = useSelector((state: any) => state.chat.selectedChannelorUser);
  const socket = useSelector((state: any) => state.socket.socket);
 
  const [Modal, setModal] = useState(false);

  const getSelectedOpt = OptImages.find((optImage: any) => optImage.key === Selected.username);

  const [optImages, setOptImages] = useState(getSelectedOpt ? getSelectedOpt : [
    { src: AddToFriendList, alt: "Add to friend list" },
    { src: Block, alt: "Block" },
  ]);


  useEffect(() => {

    socket?.emit(`AskFriendshipStatus`, { friendId: Selected.id });
    socket?.on(`FriendshipStatus`, (Friend: any) => {
      console.log(`here `, Friend[0]);
      if (Friend[0] === Selected.username) {
        setOptImages([
          { src: Friend[1] === "accept" ? accept : Friend[1] === "Pending" ? pending : Friend[1] === "accepted" ? Remove : AddToFriendList, alt: Friend[1] === "accept" ? "accept friend request" : Friend[1] === "Pending" ? "Pending" : Friend[1] === "accepted" ? "Remove from friend list" : "Add to friend list" },
          { src: Friend[2] === "Block" ? Block : Unblock, alt: Friend[2] === "Block" ? "Block" : "Unblock" },
        ]);
      }
      });
    return () => {
        
      socket.off(`FriendshipStatus`)

    }

   }, [Selected, socket])


  const handleUserControls = (option: string) => {
    if (option === "Add to friend list")
      socket.emit(`sendFriendRequest`, { friendId: Selected.id });
    else if (option === "Remove from friend list")
      socket.emit(`removeFriend`, { friendId: Selected.id});
    else if (option === "accept friend request") {
      setModal(true);
    }
      // socket.emit(`acceptFriendRequest`, { friendId: Selected.id });
    else if (option === "Block") socket.emit(`blockUser`, { friendId: Selected.id });
    else if (option === "Unblock") socket.emit(`unblockUser`, { friendId: Selected.id });
  };

  return optImages.map((image: any) => (
    <Box
      className="flex items-center gap-6 w-[220px]"
      key={image.alt}
      onClick={() => handleUserControls(image.alt)}
    >
      <Image
        src={image.src}
        priority={false}
        width={30}
        height={30}
        alt={image.alt}
        style={{
          width: "30px",
          height: "30px",
        }}
      />
      <Text className="text-2xl cursor-pointer">{image.alt}</Text>
      <NotificationModal 
      isOpen={Modal}
      onClose={() => setModal(false)}
      Friend={Selected}
      />
    </Box>
  ));
}
