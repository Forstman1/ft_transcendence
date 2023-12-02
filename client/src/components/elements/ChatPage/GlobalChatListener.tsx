"use client";

import { useAppSelector } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages, setTheUser } from "@/redux/slices/chat/ChatSlice";
import Cookies from "js-cookie";
import Remove from "../../../../assets/icons/remove-friend.svg"





export default function GlobalChatListener() {
  const socket = useAppSelector((state) => state.socket.socket);
  const selected = useSelector(
    (state: any) => state.chat.selectedChannelorUser
  );

  const dispatch = useDispatch();

  useEffect(() => {


    socket?.on(`userBlockedYou`, (data) => {
      socket?.emit(`removeChatUser`, { friendId: data.id });
      if (selected?.id === data?.id) {
        dispatch(setTheUser(null));
        dispatch(setMessages([])) 
      }
    });

    socket?.on(`updateFriendRequest`, (data) => { 

      for (const user of data) {

        const oldOptImages = Cookies.get(user.username) ?? "";
        if (oldOptImages !== '') {

          const parsedOldOptImages = JSON.parse(oldOptImages);
          const newValue = { src: Remove, alt: "Remove from friend list" };
          Cookies.set(user.username, JSON.stringify([newValue, parsedOldOptImages[1]]));

        }
      }

    });
    
    return () => {
      socket?.off(`updateFriendRequest`);
      socket?.off(`userBlockedYou`);
    };
  }, [socket, selected]);

  return null;
}
