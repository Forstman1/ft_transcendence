/* eslint-disable react-hooks/exhaustive-deps */
import StartGame from "../../../../assets/icons/startIcon.svg";
import closeIcon from "../../../../assets/icons/closeIcon.svg";
import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  Avatar,
<<<<<<< HEAD
  Spinner
=======
  Spinner,
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
} from "@chakra-ui/react";
import Image from "next/image";
import { Search2Icon } from "@chakra-ui/icons";
import animationData from "../../../../assets/animations/animation3.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
<<<<<<< HEAD
import {
  setSocketState,
} from "@/redux/slices/socket/globalSocketSlice";
import { useAppSelector } from "@/redux/store/store";
import { useState, useEffect} from "react";
=======
import { setSocketState } from "@/redux/slices/socket/globalSocketSlice";
import { useAppSelector } from "@/redux/store/store";
import { useState, useEffect } from "react";
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c

type Props = {
  onClose: () => void;
};

export default function GameSearchFriend({ onClose }: Props) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const socket = useAppSelector((state) => state.globalSocketReducer);
  const [socketRoomId, setSocketRoomId] = useState<string>("");
<<<<<<< HEAD
  const friendId = socket.playerId === 1 ? 2 : 1;
=======
  const friendId =
    socket.playerId === "18717cab-8acf-412f-ae09-c1d310529c40"
      ? "ba1e3254-5201-4abf-973e-30a10c0ba527"
      : "18717cab-8acf-412f-ae09-c1d310529c40";
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
  const modalData = useAppSelector((state) => state.gameReducer);
  const [isInvited, setIsInvited] = useState<boolean>(false);

  //-------------------playGame------------------------

  socket.socket?.on("playGame", () => {
    router.push("/gamePage/gameFriendPage");
<<<<<<< HEAD
  }
  );
=======
  });
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c

  //---------------------------------------------------

  socket.socket?.on("friendDenyInvitation", () => {
    setIsInvited(false);
<<<<<<< HEAD
  }
  );
=======
  });
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c

  //---------------------------------------------------

  useEffect(() => {
<<<<<<< HEAD
    if(socketRoomId !== ""){
=======
    if (socketRoomId !== "") {
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
      inviteFriend();
    }
  }, [socketRoomId]);

  useEffect(() => {
<<<<<<< HEAD
    if(isInvited)
    {
=======
    if (isInvited) {
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
      setTimeout(() => {
        setIsInvited(false);
        socket.socket?.emit("leaveRoom", socketRoomId);
      }, 10000);
    }
  }, [isInvited]);

  //-----------------------------------------------

  const handleSearchClick = () => {
    console.log("searching for a friend");
  };

  //-----------------------------------------------

  const createRoom = async () => {
    await socket.socket?.emit("createRoom", (RoomId: any) => {
      dispatchData(RoomId);
    });
  };

  //-----------------------------------------------

  const inviteFriend = async () => {
    await socket.socket?.emit("inviteFriend", {
      roomId: socketRoomId,
      friendId: friendId,
      modalData: modalData,
    });
  };

  //-----------------------------------------------

  const dispatchData = (RoomId: string) => {
    dispatch(
      setSocketState({
        socket: socket.socket,
        socketId: socket.socketId,
        isOwner: true,
        roomId: RoomId,
      })
    );
    setSocketRoomId(RoomId);
  };

  //-----------------------------------------------

  const handleInviteClick = async () => {
    await createRoom();
    setIsInvited(true);
  };

  return (
    <ModalContent className="relative rounded-2xl">
      <Lottie
        animationData={animationData}
        className="absolute inset-0 border-2 border-white rounded-[100%] w-full h-full z-[-1] opacity-10 bg-white"
      />
      <ModalHeader>Search for a Friend</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <InputRightElement width="4.5rem" height={12}>
            <Button
              variant="outline"
              h="2rem"
              size="sm"
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </InputRightElement>
          <Input
            type="tel"
            placeholder="Search for a friend"
            height={12}
            borderEndEndRadius={0}
          />
        </InputGroup>
        <div className="flex w-full h-[300px]  flex-col  overflow-y-scroll">
          <Box className="flex w-[95%] p-2 flex-row justify-between items-center border-2 border-gray-300 rounded-lg  mt-5">
            <div className="flex flex-row items-center space-x-5">
              <Avatar size="md" />
              <h1 className="text-lg font-bold">UserName</h1>
            </div>
            {!isInvited ? (
<<<<<<< HEAD
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image src={StartGame} alt="StartGame" width={20} height={20} />
              }
              onClick={() => handleInviteClick()}
            >
              Invite
            </Button>
            ) : (
              <Spinner color='green' emptyColor='gray.200' />
            )
            }
=======
              <Button
                colorScheme="teal"
                variant="outline"
                leftIcon={
                  <Image
                    src={StartGame}
                    alt="StartGame"
                    width={20}
                    height={20}
                  />
                }
                onClick={() => handleInviteClick()}
              >
                Invite
              </Button>
            ) : (
              <Spinner color="green" emptyColor="gray.200" />
            )}
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
          </Box>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="teal"
          variant="outline"
          mr={3}
          onClick={onClose}
          leftIcon={
            <Image src={closeIcon} alt="closeIcon" width={25} height={25} />
          }
        >
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
