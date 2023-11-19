/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import openBarIcon from "../../../../assets/icons/openBarIcon.svg";
import Image from "next/image";
import {
  Text,
  Radio,
  RadioGroup,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Divider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useAppSelector } from "@/redux/store/store";
import {
  Modes,
  Rounds,
  Matches,
  PlaygroundTheme,
} from "@/utils/constants/game/GameConstants";
import levelEasy from "../../../../assets/icons/levelEasy.svg";
import levelMedium from "../../../../assets/icons/levelMedium.svg";
import levelHard from "../../../../assets/icons/levelHard.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { setModal } from "@/redux/slices/game/gameModalSlice";
import { BackgroundsImg } from "@/utils/constants/game/GameConstants";



type tableResultProps = {
  botPoints: number;
  userPoints: number;
  RoundNamber: number;
};

const GameSideBar = ({
  tableResults,
  gamePause,
  setGamePause,
  gameStarted,
  gameEnded,
  gameMode,
}: {
  tableResults: tableResultProps[];
  gamePause: boolean;
  setGamePause: React.Dispatch<React.SetStateAction<boolean>>;
  gameStarted: boolean;
  gameEnded: boolean;
  gameMode: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gameSettings = useAppSelector((state) => state.gameReducer);
  const socketState = useAppSelector((state) => state.globalSocketReducer);
  const [Playground, setPlayground] = useState(gameSettings.playgroundtheme);
  const [canvasBgImg, setCanvasBgImg] = useState<number>(
    gameSettings.backgroundImg
  );
  const dispatch = useDispatch<AppDispatch>();
  const btnRef = React.useRef<HTMLButtonElement>(null);


  const toggleSidebar = () => {
      onOpen();
  };

  useEffect(() => {
  if (gamePause) {
    toggleSidebar();
  }
  else {
    onClose();
  }
  }, [gamePause]);

  useEffect(() => {
    if (gameEnded && !isOpen) {
      toggleSidebar();
    }
  }, [gameEnded]);

  const handleRadioChange = (id: string) => {
    const selectedTheme =
      PlaygroundTheme.find((theme) => theme.id === Number(id)) ||
      PlaygroundTheme[0];
    setPlayground(selectedTheme);

    dispatch(
      setModal({
        mode: gameSettings.mode,
        rounds: gameSettings.rounds,
        matches: gameSettings.matches,
        playgroundtheme: selectedTheme,
        backgroundImg: canvasBgImg,
      })
    );
  };

  const handleBackgroundSelect = (id: number) => {
    setCanvasBgImg(id);
    dispatch(
      setModal({
        mode: gameSettings.mode,
        rounds: gameSettings.rounds,
        matches: gameSettings.matches,
        playgroundtheme: Playground,
        backgroundImg: id,
      })
    );
  };

  return (
    <>
      {!isOpen && (
        <div className={`absolute top-[135px] left-20`}>
          {(gameStarted || gameEnded) && (
            <button
              onClick={() => {
                if (!isOpen) {
                  if (!gamePause) {
                    setGamePause(true);
                  } else if (gamePause) {
                    onOpen();
                  }
                }
              }}
              tabIndex={0}
            >
              <Image
                src={openBarIcon}
                alt="openBar"
                width={41}
                className="cursor-pointer"
              />
            </button>
          )}
        </div>
      )}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="opacity-90">
          <DrawerCloseButton className="text-white" />
          <DrawerBody className="bg-background-primary">
            <div className={` relative h-screen w-full`}>
              <div className="flex flex-col justify-center items-center p-10 w-full space-y-10 ">
                <div className="flex flex-col justify-center items-center space-y-6">
                  <Text className="text-white font-bold text-2xl">
                    mode chosen
                  </Text>
                  <div className="flex flex-row justify-center items-center">
                    {Modes.map((mode) => (
                      <div
                        key={mode}
                        className={`flex flex-col justify-center items-center rounded-2xl shadow-xl ${
                          gameSettings.mode === mode
                            ? "bg-green-500"
                            : "bg-gray-200"
                        } p-2 m-2`}
                      >
                        <Text className="text-black font-bold text-xl">
                          {mode}
                        </Text>
                        <Image
                          src={
                            mode === "EASY"
                              ? levelEasy
                              : mode === "MEDIUM"
                              ? levelMedium
                              : levelHard
                          }
                          alt={mode}
                          width={50}
                        />
                      </div>
                    ))}
                  </div>
                  <Divider />
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <Text className="text-white font-bold text-2xl">
                      rounds chosen
                    </Text>
                    <div className="flex flex-row justify-center items-center space-x-6">
                      {Rounds.map((round) => (
                        <div
                          key={round}
                          className={`flex rounded-full ${
                            gameSettings.rounds === round
                              ? "bg-green-500"
                              : "bg-gray-200"
                          } px-2 rounded-full`}
                        >
                          <Text className="text-black font-bold text-2xl">
                            {round}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Divider />
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <Text className="text-white font-bold text-2xl">
                      matches chosen
                    </Text>
                    <div className="flex flex-row justify-center items-center space-x-6">
                      {Matches.map((match) => (
                        <div
                          key={match}
                          className={`rounded-full ${
                            gameSettings.matches === match
                              ? "bg-green-500"
                              : "bg-gray-200"
                          } px-2`}
                        >
                          <Text className="text-black font-bold text-2xl">
                            {match}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Divider />
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <Text className="text-white font-bold text-2xl">
                      playground theme
                    </Text>
                    <RadioGroup
                      value={Playground.id.toString()}
                      onChange={(id) => handleRadioChange(id)}
                    >
                      <div className="flex flex-row justify-center items-center space-x-10">
                        {PlaygroundTheme.map((theme) => (
                          <Radio key={theme.id} value={theme.id.toString()}>
                            <div className="relative w-8 h-8">
                              <div
                                className={`w-full h-full rounded-full absolute border-1 border-black ${theme.playgroundColor}`}
                              />
                              <div
                                className={`w-8 h-8 rounded-full absolute top-1/2 left-5 transform -translate-y-1/2 border-1 border-black ${theme.balColor}`}
                              />
                            </div>
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <Divider />
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <Text className="text-white font-bold text-2xl">
                      playground Background
                    </Text>
                    <div className="flex flex-wrap flex-row justify-between items-center mx-10 ">
                      {BackgroundsImg.map((bg) => (
                        <button
                          key={bg.id}
                          onClick={() => handleBackgroundSelect(bg.id)}
                          className={`relative w-16 h-10 rounded-lg border-2 mb-2 ${
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
                          {canvasBgImg === bg.id && (
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                              <Image
                                src={checkIcon}
                                alt="check"
                                width={20}
                              />
                            </div>
                          )}
                        </button>
                      ))}
                      <button
                        onClick={() => handleBackgroundSelect(-1)}
                        className={`relative w-16 h-10 rounded-lg border-2 text-white ${
                          canvasBgImg === -1
                            ? "border-green-500"
                            : "border-white"
                        } `}
                      >
                        None
                      </button>
                    </div>
                    {tableResults.length !== 0 && <Divider />}
                    <div className="flex flex-col justify-center items-center space-y-6">
                      {tableResults.length !== 0 && (
                        <>
                          <Text className="text-white font-bold text-2xl">
                            Results
                          </Text>
                          <div className="p-4 border-2 border-white rounded-lg ">
                            <TableContainer>
                              <Table
                                variant="striped"
                                colorScheme="teal"
                                maxWidth="100%"
                              >
                                <Thead>
                                  <Tr>
                                    <Th color="white" className=" font-bold">
                                      Round
                                    </Th>
                                    <Th color="white" className=" font-bold">
                                      MyScore
                                    </Th>
                                    <Th color="white" className=" font-bold">
                                      {gameMode === "BOT" ? "BotScore" : "FriendScore"}
                                    </Th>
                                  </Tr>
                                </Thead>
                                <Tbody className=" overflow-y-auto scrollbar-hide rounded-lg">
                                  {tableResults.map((result) => (
                                    <Tr key={result.RoundNamber}>
                                      <Td className="text-green-700 text-xl font-bold">
                                        {result.RoundNamber}
                                      </Td>
                                      <Td className="text-red-700 text-xl font-bold">
                                        {socketState.isOwner ? result.botPoints : result.userPoints}
                                      </Td>
                                      <Td className="text-red-700 text-xl font-bold">
                                        {socketState.isOwner ? result.userPoints : result.botPoints}
                                      </Td>
                                    </Tr>
                                  ))}
                                </Tbody>
                              </Table>
                            </TableContainer>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GameSideBar;
