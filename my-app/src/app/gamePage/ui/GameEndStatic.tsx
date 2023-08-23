import React from 'react';
import { Text } from '@chakra-ui/react';
// import Lottie from "lottie-react";
// import win from "../../../../assets/animations/win.json";
import { PageWrapper } from '@/app/animationWrapper/pageWrapper';

type GameStaticProps = {
    bot: string;
    user: string;
}

const GameEndStatic = ({bot, user}: GameStaticProps) => {
    const botColor = bot === 'LOSE' ? 'red' : 'green';
    const userColor = user === 'LOSE' ? 'red' : 'green';
    return (
      <PageWrapper>
        <div className=" flex flex-col items-center justify-center bg-white rounded-lg p-5 w-full h-full z-100 bg-opacity-0 z-10">
          <div className="flex flex-row items-center justify-center space-x-60">
            <div className="flex flex-col items-center justify-center">
                {/* {bot !== 'LOSE' && <Lottie animationData={win} />} */}
              <Text fontSize="6xl" fontWeight="bold" color={botColor} className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                {bot}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center">
              {/* {user !== 'LOSE' && <Lottie animationData={win} />} */}
              <Text fontSize="6xl" fontWeight="bold" color={userColor} className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                {user}
              </Text>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
}
 
export default GameEndStatic;