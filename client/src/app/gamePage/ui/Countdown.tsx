import React, { useState, useEffect } from "react";
import GoStart from "../../../../assets/icons/go-svg.svg";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { useAppSelector } from "@/redux/store/store";
import { getTextColor2 } from "@/utils/functions/game/GetGameColor";
import { motion } from "framer-motion";


type Props = {
  seconds: number;
  onCountdownEnd: () => void;
  RoundNumber: number;
  gamePause: boolean;
};

const Countdown = ({
  seconds,
  onCountdownEnd,
  RoundNumber,
  gamePause,
}: Props) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isCountdownVisible, setIsCountdownVisible] = useState(true);
  const gameSettings = useAppSelector((state) => state.gameReducer);

  useEffect(() => {
    if (gamePause) return;
    if (timeLeft <= 0) {
      setIsCountdownVisible(false);
      setTimeout(() => {
        onCountdownEnd();
      }, 1000);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onCountdownEnd, gamePause]);

  return (
    <>
      {isCountdownVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center bg-red-500 rounded-lg p-5 w-full h-full bg-opacity-0 ">
            <div className="flex flex-row items-center justify-center space-x-5">
              <Text
                className={`text-[100px] font-bold opacity-90 ${getTextColor2(
                  gameSettings
                )}`}
              >
                ROUND
              </Text>
              <Text
                className={`text-[100px] font-bold opacity-90 ${getTextColor2(
                  gameSettings
                )}`}
              >
                {RoundNumber}
              </Text>
            </div>
            <Text

              className={` text-[100px] font-bold opacity-90 -mt-[100px] ${getTextColor2(
                gameSettings
              )}`}
            >
              {timeLeft}
            </Text>
          </div>
        </motion.div>
      ) : (
        <div className="flex items-center justify-center bg-white rounded-lg p-5 w-full h-full bg-opacity-0 ">
          <Image
            src={GoStart}
            alt="Go Start"
            width={200}
            height={200}
            className={`opacity-90`}
          />
        </div>
      )}
    </>
  );
};

export default Countdown;
