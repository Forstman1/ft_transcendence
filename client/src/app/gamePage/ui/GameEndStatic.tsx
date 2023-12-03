import React from "react";
import { PageWrapper } from "@/app/animationWrapper/pageWrapper";
import { useAppSelector } from "@/redux/store/store";
import { Text } from "@chakra-ui/react";

type GameStaticProps = {
  opponent: string;
  user: string;
  isFriendMode: boolean;
};

const GameEndStatic = ({ opponent, user, isFriendMode }: GameStaticProps) => {
  const gameMatch = useAppSelector((state) => state.gameMatch);
  const isOwner = gameMatch.isOwner;
  const botColor = opponent === "LOSE" ? "red" : "green";
  const userColor = user === "LOSE" ? "red" : "green";

  return (
    <PageWrapper>
      <div className=" flex flex-col items-center justify-center  p-5 w-full h-full bg-opacity-0">
        <div className="flex flex-row items-center justify-center space-x-60">
          {!isFriendMode ? (
            <>
              <div className="flex flex-col items-center justify-center">
                <Text
                  fontSize="6xl"
                  fontWeight="bold"
                  color={userColor}
                  className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-md:text-4xl"
                >
                  YOU {user}
                </Text>
              </div>
            </>
          ) : (
            <>
              {!isOwner ? (
                <div className="flex flex-col items-center justify-center">
                  <Text
                    fontSize="6xl"
                    fontWeight="bold"
                    color={botColor}
                    className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-md:text-4xl"
                  >
                    YOU {opponent}
                  </Text>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <Text
                    fontSize="6xl"
                    fontWeight="bold"
                    color={userColor}
                    className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-md:text-4xl"
                  >
                    YOU {user}
                  </Text>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default GameEndStatic;
