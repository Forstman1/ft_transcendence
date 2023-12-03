import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Text,
  Radio,
  RadioGroup,
  useToast,
} from "@chakra-ui/react";
import StartGame from "../../../../assets/icons/startIcon.svg";
import closeIcon from "../../../../assets/icons/closeIcon.svg";
import inviteFriend from "../../../../assets/icons/inviteFriendIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { setModal } from "@/redux/slices/game/gameModalSlice";
import {
  Modes,
  Rounds,
  Matches,
  PlaygroundTheme,
} from "@/utils/constants/game/GameConstants";
import Lottie from "lottie-react";
import animationData from "../../../../assets/animations/animation1.json";
import levelEasy from "../../../../assets/icons/levelEasy.svg";
import levelMedium from "../../../../assets/icons/levelMedium.svg";
import levelHard from "../../../../assets/icons/levelHard.svg";
import { BackgroundsImg } from "@/utils/constants/game/GameConstants";
import GameSearchFriend from "./GameSearchFriend";
import { useAppSelector } from "@/redux/store/store";
import { setGameMatchState } from "@/redux/slices/game/gameMatchSlice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  gameType: string;
  friend?: any;
};

const getIcon = (mode: string) => {
  switch (mode) {
    case "EASY":
      return levelEasy;
    case "MEDIUM":
      return levelMedium;
    case "HARD":
      return levelHard;
    default:
      return levelEasy;
  }
};

const GameModesModal = ({ isOpen, onClose, gameType, friend }: Props) => {
  const [modeValue, setmodeValue] = useState<string>(Modes[0]);
  const [Playground, setPlayground] = useState(PlaygroundTheme[0]);
  const [rounds, setRounds] = useState<number>(1);
  const [matchesSelected, setMatchesSelected] = useState<number>(1);
  const [canvasBgImg, setCanvasBgImg] = useState<number>(-1);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(
    gameType === "friend"
  );
  
  const toast = useToast();
  const socket = useAppSelector((state) => state.globalSocketReducer);
  const modalData = useAppSelector((state) => state.gameReducer);
  const [friendId, setFriendId] = useState<string>(gameType === "chatGame" ? friend.id : "");
  const [socketRoomId, setSocketRoomId] = useState<string>("");

  //-------------------chatGameLogic------------------------
  useEffect(() => {
    if (socketRoomId !== "") {
      inviteFriendReq();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketRoomId]);

  const inviteFriendReq = async () => {
    await socket.socket?.emit("inviteFriend", {
      roomId: socketRoomId,
      friendId: friendId,
      modalData: modalData,
    });
  };

  socket.socket?.on("playGame", () => {
    router.push("/gamePage/gameFriendPage");
  });

  // socket.socket?.on("friendDenyInvitation", () => {
  //   toast({
  //     title: "Your friend deny your invitation",
  //     description: "Please try again",
  //     status: "error",
  //     duration: 5000,
  //     isClosable: true,
  //   });
  // });

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

  const createRoom = async (friendId: string) => {
    await socket.socket?.emit("createRoom", (RoomId: any ) => {
      if (RoomId !== "uAreInGame") {
        setFriendId(friendId);
        dispatchData(RoomId);
      }
    });
  };

  const handleInviteClick = async (friendId: string, isInGame: string, friendName: string) => {
    if (isInGame === "true") {
      toast({
        title: "Your friend " + friendName + " is in game",
        description: "Please wait until he finish",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    await createRoom(friendId);
  };
  //-------------------chatGameLogic------------------------

  const handleModeChange = (mode: string) => {
    setmodeValue(mode);
  };

  const handelStartGame = () => {
    dispatch(
      setModal({
        mode: modeValue,
        playgroundtheme: Playground,
        rounds: rounds,
        matches: matchesSelected,
        backgroundImg: canvasBgImg,
      })
    );

    if (gameType === "chatGame") {
      handleInviteClick(friend.id, friend.isInGame, friend.name);
    }
    else if (gameType === "friend") {
      setIsSearchModalOpen(true);
    } else if (gameType === "bot") {
      router.push("/gamePage/gameBotPage");
    }
  };

  const handleRadioChange = (id: string) => {
    const selectedTheme =
      PlaygroundTheme.find((theme) => theme.id === Number(id)) ||
      PlaygroundTheme[0];
    setPlayground(selectedTheme);
  };

  const handleBackgroundSelect = (id: number) => {
    setCanvasBgImg(id);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="xl"
      onCloseComplete={() => setIsSearchModalOpen(false)}
    >
      <ModalOverlay
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(5px)",
        }}
      />
      <ModalOverlay />
      {!isSearchModalOpen ? (
        <ModalContent
          bg={`rgba(255, 255, 255, 0.95)`}
          className="relative w-full duration-500 ease-in-out rounded-2xl shadow-2xl border-1 border-black flex justify-between items-center bg-gray-100 "
        >
          <Lottie
            animationData={animationData}
            className="absolute inset-0 border-2 border-white rounded-[100%] w-full h-full z-[-1] opacity-10 bg-white"
          />
          <ModalHeader>Game Modes</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex w-full justify-between items-center ">
            <div className="flex w-full flex-col space-y-5">
              <div className="flex flex-row w-full justify-between items-center space-x-5">
                {Modes.map((mode: string) => (
                  <Button
                    key={mode}
                    colorScheme="green"
                    onClick={() => handleModeChange(mode)}
                    className={`rounded-full shadow-xl ${
                      modeValue === mode ? "text-white" : "text-black"
                    } ${modeValue === mode ? "bg-green-500" : "bg-gray-200"}`}
                    variant="solid"
                    leftIcon={
                      <Image
                        src={getIcon(mode)}
                        alt="levelIcon"
                        className="w-5"
                      />
                    }
                  >
                    {mode}
                  </Button>
                ))}
              </div>
              <div className="flex flex-col space-y-5 ">
                <Select
                  placeholder="Select game Rounds"
                  onChange={(e) => setRounds(Number(e.target.value))}
                >
                  {Rounds.map((round) => (
                    <option key={round} value={round}>
                      {round}
                    </option>
                  ))}
                </Select>
                <Select
                  placeholder="Select game Matches for each round"
                  onChange={(e) => setMatchesSelected(Number(e.target.value))}
                >
                  {Matches.map((match) => (
                    <option key={match} value={match}>
                      {match}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col w-full justify-center items-center space-y-2">
                <Text className="text-center">Playground Theme</Text>
                <RadioGroup
                  value={Playground.id.toString()}
                  onChange={(id) => handleRadioChange(id)}
                >
                  <div className="flex flex-row w-full justify-center items-center space-x-7">
                    {PlaygroundTheme.map((theme) => (
                      <Radio key={theme.id} value={theme.id.toString()}>
                        <div className="relative w-6 h-6">
                          <div
                            className={`w-full h-full rounded-full absolute border-1 border-black ${theme.playgroundColor}`}
                          />
                          <div
                            className={`w-6 h-6 rounded-full absolute top-1/2 left-5 transform -translate-y-1/2 border-1 border-black ${theme.balColor}`}
                          />
                        </div>
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <Text className="text-center">Playground Background</Text>
                <div className="flex flex-wrap flex-row w-full items-center justify-center max-w-[320px] mx-auto ">
                  {BackgroundsImg.map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() => handleBackgroundSelect(bg.id)}
                      className={`relative w-16 h-10 rounded-lg border-2 mb-2 mr-2 ${
                        canvasBgImg === bg.id
                          ? "bg-green-500 border-green-500"
                          : "border-white"
                      } `}
                    >
                      <Image
                        src={bg.src}
                        alt="background"
                        className={`rounded-lg w-full h-full`}
                      />
                    </button>
                  ))}
                  <button
                    onClick={() => handleBackgroundSelect(-1)}
                    className={`relative w-16 h-10 rounded-lg border-2 text-black ${
                      canvasBgImg === -1 ? "border-green-500" : "border-white"
                    } `}
                  >
                    None
                  </button>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="outline"
              mr={3}
              onClick={onClose}
              leftIcon={<Image src={closeIcon} alt="closeIcon" width={25} />}
            >
              Close
            </Button>
            {gameType === "bot" || gameType === "chatGame" ? (
              <Button
                colorScheme="teal"
                variant="outline"
                leftIcon={<Image src={StartGame} alt="StartGame" width={25} />}
                onClick={handelStartGame}
              >
                Start
              </Button>
            ) : (
              <Button
                colorScheme="teal"
                variant="outline"
                leftIcon={
                  <Image src={inviteFriend} alt="StartGame" width={25} />
                }
                onClick={handelStartGame}
              >
                Invite Friend
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      ) : (
        <GameSearchFriend onClose={onClose} />
      )}
    </Modal>
  );
};

export default GameModesModal;
