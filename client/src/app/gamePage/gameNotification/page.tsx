import { useToast, Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store/store";
import { useRouter } from "next/navigation";

export default function GameNotification() {
  const socket = useAppSelector((state) => state.globalSocketReducer);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const handleRoomInvitation = (roomId: string) => {
      toast({
        position: "top-right",
        duration: 9000,
        isClosable: true,
        render: ({ onClose }) => (
          <Alert
            status="success"
            variant="solid"
            className=" rounded-xl space-x-2"
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
                acceptInvitation(roomId);
                onClose();
              }}
            >
              ACCEPT
            </Button>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => {
                denyInvitation(roomId);
                onClose();
              }}
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

  const acceptInvitation = (roomId: string) => {
    
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
