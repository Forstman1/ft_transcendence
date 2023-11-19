"use client";
import { useToast, Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { setGameMatchState } from "@/redux/slices/game/gameMatchSlice";
import acceptIcon from "../../../../assets/icons/accept.svg";
import denyIcon from "../../../../assets/icons/deny.svg";
import Image from "next/image";
import { setModal, GameModalState } from "@/redux/slices/game/gameModalSlice";
import { motion } from "framer-motion";

export default function GameNotification() {
  const socket = useAppSelector((state) => state.globalSocketReducer);
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  socket.socket?.on("playGame", () => {
    router.push("/gamePage/gameFriendPage");
  });

  useEffect(() => {
    const handelfrinedIsInGame = () => {
      toast({
        position: "top-right",
        duration: 5000,
        isClosable: true,
        render: () => (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Alert
              status="success"
              variant="top-accent"
              animation={{ in: "slideInLeft", out: "slideOutRight" }}
              className=" space-x-2 border-white"
            >
              <AlertIcon />
              <Box flex="1">
                <strong>Game Notification</strong>
                <p>Your friend is in game</p>
              </Box>
            </Alert>
          </motion.div>
        ),
      });
    };
    const handelDenyInvitation = () => {
      toast({
        position: "top-right",
        duration: 5000,
        isClosable: true,
        render: () => (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Alert
              status="success"
              variant="top-accent"
              className=" space-x-2 border-white"
            >
              <AlertIcon />
              <Box flex="1">
                <strong>Game Notification</strong>
                <p>Your friend deny your invitation</p>
              </Box>
            </Alert>
          </motion.div>
        ),
      });
    };

    const friendExitGame = () => {
      toast({
        position: "top-right",
        duration: 5000,
        isClosable: true,
        render: () => (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Alert
              status="success"
              variant="top-accent"
              className=" space-x-2 border-white"
            >
              <AlertIcon />
              <Box flex="1">
                <strong>Game Notification</strong>
                <p>Your opponent is exit the game</p>
              </Box>
            </Alert>
          </motion.div>
        ),
      });
    }

    const handleRoomInvitation = (data: {
      roomId: string;
      modalData: GameModalState;
      friendId: string;
    }) => {
      toast({
        position: "top-right",
        duration: 9000,
        isClosable: true,
        render: ({ onClose }) => (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Alert
              status="success"
              variant="top-accent"
              className=" space-x-2 border-white"
            >
              <AlertIcon />
              <Box flex="1">
                <strong>Game Notification</strong>
                <p>Do you want to play with your friend?</p>
              </Box>
              <Button
                variant="outline"
                colorScheme="blue"
                onClick={() => {
                  acceptInvitation(data.roomId, data.modalData, data.friendId);
                  onClose();
                }}
                leftIcon={<Image src={acceptIcon} alt="accept" width={20} />}
              >
                ACCEPT
              </Button>
              <Button
                variant="outline"
                colorScheme="red"
                onClick={() => {
                  denyInvitation(data.roomId);
                  onClose();
                }}
                leftIcon={<Image src={denyIcon} alt="deny" width={20} />}
              >
                DENY
              </Button>
            </Alert>
          </motion.div>
        ),
      });
    };

    socket.socket?.on("room-invitation", handleRoomInvitation);
    socket.socket?.on("friendDenyInvitation", handelDenyInvitation);
    socket.socket?.on("frinedIsInGame", handelfrinedIsInGame);
    socket.socket?.on("friendExitGame2", friendExitGame);

    return () => {
      socket.socket?.off("room-invitation", handleRoomInvitation);
      socket.socket?.off("friendDenyInvitation", handelDenyInvitation);
      socket.socket?.off("frinedIsInGame", handelfrinedIsInGame);
      socket.socket?.off("friendExitGame2", friendExitGame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.socket, toast]);

  const acceptInvitation = (roomId: string, modalData: GameModalState, friendId: string) => {
    dispatch(setModal(modalData));
    dispatch(
      setGameMatchState({
        isOwner: false,
        roomId: roomId,
        opponentId: friendId,
      })
    );
    socket.socket?.emit("acceptInvitation", { roomId: roomId });
  };

  const denyInvitation = (roomId: string) => {
    socket.socket?.emit("denyInvitation", { roomId: roomId });
  };

  return null;
}
