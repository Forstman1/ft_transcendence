import { useToast, Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import {
  setSocketState,
} from "@/redux/slices/socket/globalSocketSlice";
import acceptIcon from "../../../../assets/icons/accept.svg";
import denyIcon from "../../../../assets/icons/deny.svg";
import Image from "next/image";
import { setModal, GameModalState } from "@/redux/slices/game/gameModalSlice";

export default function GameNotification() {
  const socket = useAppSelector((state) => state.globalSocketReducer);
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    const handleRoomInvitation = (data: {roomId: string, modalData: GameModalState}) => {
      toast({
        position: "top-right",
        duration: 9000,
        isClosable: true,
        render: ({ onClose }) => (
          <Alert
            status="success"
            variant="solid"
            className=" space-x-2 border-2 border-white"
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
                acceptInvitation(data.roomId, data.modalData);
                onClose();
              }}
              leftIcon={<Image src={acceptIcon} alt="accept" width={20}/>}
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
              leftIcon={<Image src={denyIcon} alt="deny" width={20}/>}
            >
              DENY
            </Button>
          </Alert>
        ),
      });
    };

    socket.socket?.on("room-invitation", handleRoomInvitation);

    return () => {
      socket.socket?.off("room-invitation", handleRoomInvitation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.socket, toast]);

  const acceptInvitation = (roomId: string, modalData: GameModalState) => {
    dispatch(setModal(modalData));
    dispatch(
      setSocketState({
        socket: socket.socket,
        socketId: socket.socketId,
        isOwner: false,
        roomId: roomId,
      })
    );
    socket.socket?.emit("acceptInvitation", {roomId: roomId});
  };

  const denyInvitation = (roomId: string) => {
    socket.socket?.emit("denyInvitation", {roomId: roomId});
  };

  socket.socket?.on("playGame", () => {

    router.push("/gamePage/gameFriendPage");
  });

  return null;
}
