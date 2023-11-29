'use client';

import React, { useEffect, useState } from "react";
import AddToFriendList from '@/../assets/icons/AddToFriendList.svg'
import Remove from "@/../assets/icons/remove-friend.svg";
import pending from "@/../assets/icons/pending.svg";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";






type userProfileData = {
    id: string;
    username: string;
    fullname: string;
    email: string;
    avatarURL: string;
    coalitionName: string;
    isOnline: boolean;
    isInGame: boolean;
    userGamesXp: number;
}




export default function AddFriend({ userData }: { userData: userProfileData }) {
  const socket = useSelector((state: any) => state.socket.socket);


  const [optImages, setOptImages] = useState([
    { src: AddToFriendList, alt: "Add friend" }
  ]);


  useEffect(() => {
    socket.on(`friendRequestAccepted`, (Friend: any) => {
      const newValue = [{ src: Remove, alt: "Unfriend" }];
      setOptImages(newValue);

      Cookies.set(Friend.username, JSON.stringify([newValue]), {
        expires: 365,
      })
    })

    socket.on(`friendRequestRejected`, (Friend: any) => {
      const newValue = [{ src: AddToFriendList, alt: "Add friend" }];
    
    setOptImages(newValue)
      Cookies.set(Friend.username, JSON.stringify([newValue]), {
        expires: 365,
      });
    });

    socket?.on(`friendRemoved`, (Friend: any) => {

      const newValue = [{ src: AddToFriendList, alt: "Add friend" }];
        
      setOptImages(newValue);

      Cookies.set(Friend.username, JSON.stringify([newValue]), {
        expires: 365,
      });
    });

    return () => {
      socket.off(`friendRequestRejected`);
      socket.off(`friendRequestAccepted`);
      socket.off(`friendRemoved`);
    };
  }, [socket]);

  useEffect(() => {
    const cookies = Cookies.get(userData.username);
   

    if (cookies) {
      setOptImages(JSON.parse(cookies));
    } else {
      setOptImages([
        { src: AddToFriendList, alt: "Add friend" },
      ]);
    }
  }, [Cookies]);

  const handleUserControls = (option: string) => {

    if (option === "Add friend") {
      socket.emit(`sendFreindRequest`, { friendId: userData.id });

      const newValue = [{ src: pending, alt: "Pending" }];

      setOptImages(newValue)

      Cookies.set(userData.username, JSON.stringify([newValue]), {
        expires: 365,
      });

    } else if (option === "Unfriend") {
      socket.emit(`removeFriend`, { friendId: userData.id });
      const newValue = [{ src: AddToFriendList, alt: "Add friend" }];
      setOptImages(newValue)

      Cookies.set(userData.username, JSON.stringify([newValue]), {
        expires: 365,
      });
    }
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
    </Box>
  ));
}
