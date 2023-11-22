"use client";

import { useAppSelector } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheUser } from "@/redux/slices/chat/ChatSlice";

export default function GlobalChatListener() {
  const socket = useAppSelector((state) => state.socket.socket);
  const dispatch = useDispatch();
  useEffect(() => {
    socket?.on(`userBlockedYou`, (data) => {
      dispatch(setTheUser(null));
      socket?.emit(`removeChatUser`, { friendId: data.id });
    });

    return () => {
      socket?.off(`userBlockedYou`);
    };
  }, [socket]);

  return null;
}
