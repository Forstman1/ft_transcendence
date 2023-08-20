import React, { useState } from "react";
import openBarIcon from "../../../../assets/icons/openBarIcon.svg";
import closeBarIcon from "../../../../assets/icons/closeBarIcon.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Text, Radio, RadioGroup } from "@chakra-ui/react";
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

type GameModalState = {
  gameSettings: {
    mode: string;
    rounds: number;
    matches: number;
    playgroundtheme: typeof PlaygroundTheme[0];
  };
};

const GameSideBar = () => {
  const [open, setOpen] = useState(true);
  const gameSettings = useAppSelector((state) => state.gameReducer);
  const [Playground, setPlayground] = useState(gameSettings.playgroundtheme);
  const dispatch = useDispatch<AppDispatch>();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  async function handleDispatchAsync() {
    await dispatch(
      setModal({
          mode: gameSettings.mode,
          rounds: gameSettings.rounds,
          matches: gameSettings.matches,
          playgroundtheme: Playground,
        })
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={` relative h-screen bg-background-primary opacity-80 ${
          open ? "w-[500px]" : "w-[50px]"
        } duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-4 absolute top-60 -right-5">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <Image
              src={open ? closeBarIcon : openBarIcon}
              alt={open ? "Close Bar" : "Open Bar"}
              width={41}
              height={41}
            />
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center items-center absolute top-32 p-10 w-full space-y-10">
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
                        height={50}
                      />
                    </div>
                  ))}
                </div>
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
                <div className="flex flex-col justify-center items-center space-y-6">
                  <Text className="text-white font-bold text-2xl">
                    playground theme
                  </Text>
                  <RadioGroup
                    value={Playground.id.toString()}
                    onChange={(id) =>
                      {
                      setPlayground(
                        PlaygroundTheme.find(
                          (theme) => theme.id === Number(id)
                        ) || PlaygroundTheme[0]
                      )
                      handleDispatchAsync()
                        }
                    }
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
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default GameSideBar;
