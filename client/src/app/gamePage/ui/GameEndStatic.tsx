import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { PageWrapper } from '@/app/animationWrapper/pageWrapper';
import Image from 'next/image';
import closeIcon from '../../../../assets/icons/closeIcon.svg';
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import ggAnimation from "../../../../assets/animations/ggAnimation.json";
import { useAppSelector } from '@/redux/store/store';

type GameStaticProps = {
    opponent: string;
    user: string;
    isFriendMode: boolean;
}

const GameEndStatic = ({opponent, user, isFriendMode}: GameStaticProps) => {
    const gameMatch = useAppSelector((state) => state.gameMatch);
    const isOwner = gameMatch.isOwner;
    const botColor = opponent === 'LOSE' ? 'red' : 'green';
    const userColor = user === 'LOSE' ? 'red' : 'green';
    const userBorderColor = user === 'LOSE' ? 'border-red-500' : 'border-green-500';
    const botBorderColor = opponent === 'LOSE' ? 'border-red-500' : 'border-green-500';
    const router = useRouter();

    const handleExitClick = () => {
        router.back();
    }
  
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
          {isFriendMode ? (
          <div className={`flex flex-row items-center justify-center bg-white rounded-xl space-x-10 p-2 mt-10 opacity-90 border-2 ${isFriendMode && isOwner ? userBorderColor : botBorderColor}`}>
            <Lottie
              animationData={ggAnimation}
              className=" inset-0 border-2 border-white rounded-[100%] w-[80px] h-[80px] "
            />
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image src={closeIcon} alt="closeIcon" width={25} height={25} />
              }
              onClick={handleExitClick}
            >
              Exit
            </Button>
          </div>
          ) : (
          <div className={`flex flex-row items-center justify-center bg-white rounded-xl space-x-10 p-2 mt-10 opacity-90 border-2 ${userBorderColor}`}>
            <Lottie
              animationData={ggAnimation}
              className=" inset-0 border-2 border-white rounded-[100%] w-[80px] h-[80px] "
            />
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image src={closeIcon} alt="closeIcon" width={25} height={25} />
              }
              onClick={handleExitClick}
            >
              Exit
            </Button>
          </div>
        )}
        </div> 
      </PageWrapper>
    );
}
 
export default GameEndStatic;