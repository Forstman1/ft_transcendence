import { useToast } from '@chakra-ui/react'
import React, {useState} from "react";
import { useAppSelector } from "@/redux/store/store";

export default function GameNotification() {
    const socket = useAppSelector((state) => state.globalSocketReducer);
    const [show, setShow] = useState(false)
    const toast = useToast()

    socket.socket?.on("room-invitation", () => {
        setShow(true);
    }
    );

    return (
      <>
      {show && toast({
        position: "top-right",
        title: "Game Notification",
        description: "Your friend has joined the game",
        status: "success",
        duration: 9000,
        isClosable: true,
      })}
      </>
    )
  }