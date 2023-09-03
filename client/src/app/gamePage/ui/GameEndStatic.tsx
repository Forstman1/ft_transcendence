import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { PageWrapper } from '@/app/animationWrapper/pageWrapper';
import Image from 'next/image';
import closeIcon from '../../../../assets/icons/closeIcon.svg';
import restartIcon from '../../../../assets/icons/restartIcon.svg';
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import ggAnimation from "../../../../assets/animations/ggAnimation.json";

type GameStaticProps = {
    bot: string;
    user: string;
}

const GameEndStatic = ({bot, user}: GameStaticProps) => {
    const botColor = bot === 'LOSE' ? 'red' : 'green';
    const userColor = user === 'LOSE' ? 'red' : 'green';
    const router = useRouter();

    const handleExitClick = () => {
        router.push('/gamePage');
    }

  
    return (
      <PageWrapper>
        <div className=" flex flex-col items-center justify-center  p-5 w-full h-full bg-opacity-0">
          <div className="flex flex-row items-center justify-center space-x-60">
            <div className="flex flex-col items-center justify-center">
              <Text
                fontSize="6xl"
                fontWeight="bold"
                color={botColor}
                className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                {bot}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Text
                fontSize="6xl"
                fontWeight="bold"
                color={userColor}
                className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                {user}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center bg-white rounded-xl space-x-10 p-2 mt-10 opacity-90">
            <Lottie
              animationData={ggAnimation}
              className=" inset-0 border-2 border-white rounded-[100%] w-[80px] h-[80px] "
            />
            <Button 
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image src={restartIcon} alt="restartIcon" width={25} height={25} />
              }
            >
              Restart
            </Button>
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
        </div>
      </PageWrapper>
    );
}
 
export default GameEndStatic;