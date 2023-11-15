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
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";
import { Search2Icon } from "@chakra-ui/icons";
import animationData from "../../../../assets/animations/animation3.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { setGameMatchState } from "@/redux/slices/game/gameMatchSlice";
import { useAppSelector } from "@/redux/store/store";
import { useState, useEffect } from "react";

type Props = {
  onClose: () => void;
};

export default function GameSearchFriend({ onClose }: Props) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const socket = useAppSelector((state) => state.globalSocketReducer);
  const [socketRoomId, setSocketRoomId] = useState<string>("");
  const [friendId, setFriendId] = useState<string>("");
  const modalData = useAppSelector((state) => state.gameReducer);
  const [myFriends, setMyFriends] = useState<any[]>([]);
  const [friendInviteIData, setFriendInviteIData] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  //-------------------playGame------------------------

  socket.socket?.on("playGame", () => {
    router.push("/gamePage/gameFriendPage");
  });

  //---------------------------------------------------

  socket.socket?.on("friendDenyInvitation", (friendId: string) => {
    setFriendInviteIData((prev) => {
      return prev.map((friend) => {
        if (friend.id === friendId) {
          friend.isInvited = false;
        }
        return friend;
      });
    });
  });

  //---------------------------------------------------

  useEffect(() => {
    socket.socket?.emit("GetMyFriends", (data: any) => {
      data.friends.map((friend: any) => {
        setFriendInviteIData((prev) => [
          ...prev,
          { id: friend.id, isInvited: false },
        ]);
      }
      );
      setMyFriends(data.friends);
    });
  }, []);

  useEffect(() => {
    if (socketRoomId !== "") {
      inviteFriend();
    }
  }, [socketRoomId]);

  //-----------------------------------------------

  const createRoom = async (friendId: string) => {
    await socket.socket?.emit("createRoom", (RoomId: any) => {
      setFriendId(friendId);
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
      setGameMatchState({
        isOwner: true,
        roomId: RoomId,
        opponentId: friendId,
      })
    );
    setSocketRoomId(RoomId);
  };

  //-----------------------------------------------

  const handleInviteClick = async (friendId: string) => {
    await createRoom(friendId);
    setFriendInviteIData((prev) =>
      prev.map((friend) => {
        if (friend.id === friendId) {
          friend.isInvited = true;
        }
        return friend;
      })
    );

      setTimeout(() => {
        setFriendInviteIData((prev) => 
          prev.map((friend) => {
            if (friend.id === friendId) {
              friend.isInvited = false;
            }
            return friend;
          })
        );
        socket.socket?.emit("leaveRoom", socketRoomId);
      }, 10000);
  };

  const handleSearchClick = () => {
    if (searchInput !== "") {
      socket.socket?.emit("SearchFriend", {username: searchInput}, (data: any) => {
        setMyFriends(data.friends);
      });
    }
  }

  const handelSearchInputChange = (e: any) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      socket.socket?.emit("GetMyFriends", (data: any) => {
        setMyFriends(data.friends);
      });
    }
  }

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
            onChange={(e) => handelSearchInputChange(e)}
          />
        </InputGroup>
        <div className="flex w-full h-[300px]  flex-col  overflow-y-scroll">
          {myFriends.length > 0 ? (
            myFriends.map((friend, index) => (
              <Box
                key={friend.id}
                className="flex w-[95%] p-2 flex-row justify-between items-center border-2 border-gray-300 rounded-lg  mt-5"
              >
                <div className="flex flex-row items-center space-x-5">
                  <Avatar size="md" src={friend.avatar} />
                  <h1 className="text-lg font-bold">{friend.username}</h1>
                </div>
                {!friendInviteIData[index].isInvited ? (
                  <Button
                    key={friend.id}
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
                    onClick={() => handleInviteClick(friend.id)}
                  >
                    Invite
                  </Button>
                ) : (
                  <Spinner key={friend.id} color="green" emptyColor="gray.200" />
                )}
              </Box>
            ))
          ) : (
            <div className="flex w-full h-[300px] justify-center items-center no-scrollbar">
              <h1 className="text-lg font-bold">No Friends</h1>
            </div>
          )}
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
