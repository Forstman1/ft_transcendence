'use client';

import React, { useEffect, useState } from "react";
import AddToFriendList from '@/../assets/icons/AddToFriend.svg'
import Remove from "@/../assets/icons/removeFriend.svg";
import pending from "@/../assets/icons/friendPending.svg";
import Image from "next/image";
import { useSelector } from "react-redux";






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
    const OptImages = useSelector((state: any) => state.optImages.optImages);
    const socket = useSelector((state: any) => state.socket.socket);
  
  
    const getSelectedOpt = OptImages.find((optImage: any) => optImage.key === userData.username);
  
    const [optImages, setOptImages] = useState(getSelectedOpt ? getSelectedOpt : [
      { src: AddToFriendList, alt: "Add to friend list" },
    ]);
  
  
    useEffect(() => {
  
      socket?.emit(`AskFriendshipStatus`, { friendId: userData.id });
      socket?.on(`FriendshipStatus`, (Friend: any) => {
  
        if (Friend[0] === userData.username) {
          setOptImages([
            { src: Friend[1] === "Pending" ? pending : Friend[1] === "accepted" ? Remove : AddToFriendList, alt: Friend[1] === "Pending" ? "Pending" : Friend[1] === "accepted" ? "Remove from friend list" : "Add to friend list" },
          ]);
        }
        });
      return () => {
          
        socket.off(`FriendshipStatus`)
  
      }
  
     }, [socket])
  
  
    const handleUserControls = (option: string) => {
      if (option === "Add to friend list")
        socket.emit(`sendFriendRequest`, { friendId: userData.id });
      else if (option === "Remove from friend list")
        socket.emit(`removeFriend`, { friendId: userData.id});
        
        socket?.emit(`getFriendList`, userData.id);
    };
  
    return optImages.map((image: any) => (
      <button
        className="bg-black text-white px-4 rounded-bl-lg hover:bg-gray-700"
        key={image.alt}
        onClick={() => handleUserControls(image.alt)}
      >
        <Image
          src={image.src}
          priority={false}
          width={30}
          height={30}
          alt={image.alt}
          className=" inline-block mr-2"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
        {image.alt === "Add to friend list" ? 'Add friend' : (image.alt == "Pending" ? 'Pending' : 'Unfriend')}
  
      </button>
    ));
  }
  