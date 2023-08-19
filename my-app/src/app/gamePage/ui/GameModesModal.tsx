import React, { useState } from "react";
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
  Box,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import StartGame from "../../../../assets/icons/startIcon.svg";
import closeIcon from "../../../../assets/icons/closeIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { setModal } from "@/redux/slices/game/gameModalSlice";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  gameType: "friend" | "bot";
};

const modes = ["EASY", "MEDIUM", "HARD"];
const Rounds = [1, 2, 3, 4, 5];
const matches = [1, 2, 3, 4, 5];
const playgroundTheme = [
  {
    id: 1,
    playgroundColor: "bg-black",
    balColor: "bg-white",
  },
  {
    id: 2,
    playgroundColor: "bg-lime-500",
    balColor: "bg-red-600",
  },
  {
    id: 3,
    playgroundColor: "bg-cyan-400",
    balColor: "bg-yellow-500",
  },
];

const GameModesModal = ({ isOpen, onClose, gameType }: Props) => {
  const [value, setValue] = useState("EASY");
  const [Playground, setPlayground] = useState(playgroundTheme[0]);
  const [rounds, setRounds] = useState(1);
  const [matchesSelected, setMatchesSelected] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleModeChange = (mode: string) => {
    setValue(mode);
  };

  const handelStartGame = () => {

    dispatch(
      setModal({
        mode: value,
        playgroundtheme: Playground,
        rounds: rounds,
        matches: matchesSelected,
      })
    );
    
    if (gameType === "friend") {
      router.push("/gamePage/gameFriendPage");
    } else {
      router.push("/gamePage/gameBotPage");
    }
    onClose();
  };


  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg={`rgba(255, 255, 255, 0.95)`}>
        <ModalHeader>Game Modes</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="space-y-5">
          <div className="flex flex-row justify-between items-center space-x-5">
            {modes.map((mode) => (
              <Box key={mode}>
                <Button
                  colorScheme={mode === value ? "green" : "gray"}
                  onClick={() => handleModeChange(mode)}
                  className="border-1 border-black rounded-full shadow-xl"
                >
                  {mode}
                </Button>
              </Box>
            ))}
          </div>
          <Select placeholder="Select game Rounds" >
            {Rounds.map((round) => (
              <option key={round} value={round} onClick={() => setRounds(round)}>
                {round}
              </option>
            ))}
          </Select>
          <Select placeholder="Select game Matches for each round">
            {matches.map((match) => (
              <option key={match} value={match} onClick={() => setMatchesSelected(match)}>
                {match}
              </option>
            ))}
          </Select>
          <div className="flex flex-col justify-between space-y-2">
            <Text>Playground Theme</Text>
            <RadioGroup
              value={Playground.id.toString()}
              onChange={(id) =>
                setPlayground(
                  playgroundTheme.find((theme) => theme.id === Number(id))
                )
              }
            >
              <div className="flex flex-row justify-between items-center mx-10">
                {playgroundTheme.map((theme) => (
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
          <Button
            colorScheme="teal"
            variant="outline"
            leftIcon={
              <Image src={StartGame} alt="StartGame" width={25} height={25} />
            }
            onClick={handelStartGame}
          >
            Start
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GameModesModal;
