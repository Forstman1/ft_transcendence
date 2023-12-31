"use client";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { User } from "@/utils/types/chat/ChatTypes";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store/store";
import { motion } from "framer-motion";
import { Button, useToast, Alert } from "@chakra-ui/react";

export default function ChatNotification() {
  const socket = useAppSelector((state: any) => state.socket.socket);
  const toast = useToast();

  useEffect(() => {
    const handleFreindRequest = (Friend: User) => {
      toast({
        position: "top-right",
        duration: 3000,
        isClosable: true,
        render: ({ onClose }) => (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between w-full p-2 space-x-2 bg-green-700 rounded-md flex-col"
          >
            <Alert
              status="success"
              variant="solid"
              className="w-full bg-transparent"
            >
              {Friend.username} sent you a friend request
            </Alert>
            <div className="flex items-center justify-between w-full space-x-2 pt-3">
              <Button
                onClick={() => {
                  socket?.emit(
                    `acceptFreindRequest`,
                    { friendId: Friend.id },
                    () => {
                      socket.emit(`AskFriendshipStatus`, {
                        friendId: Friend.id,
                      });
                    }
                  );
                  onClose();
                }}
                className="flex items-center justify-center w-full p-2 space-x-2 bg-green-500 rounded-md"
              >
                <CheckIcon />
                <p>Accept</p>
              </Button>
              <Button
                onClick={() => {
                  socket?.emit(`rejectFreindRequest`, { friendId: Friend.id });
                  onClose();
                }}
                className="flex items-center justify-center w-full p-2 space-x-2 bg-red-600 rounded-md"
              >
                <CloseIcon />
                <p>Deny</p>
              </Button>
            </div>
          </motion.div>
        ),
      });
    };

    socket?.on(`receivedFreindRequest`, (Friend: any) => {
      handleFreindRequest(Friend);
    });

    return () => {
      socket?.off(`receivedFreindRequest`);
    };
  }, [socket, toast]);
  return null;
}
