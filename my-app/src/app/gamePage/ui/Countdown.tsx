import React, { useState, useEffect } from 'react';
import GoStart from '../../../../assets/icons/go-svg.svg';
import Image from 'next/image';

const Countdown = ({ seconds, onCountdownEnd }: { seconds: number, onCountdownEnd: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isCountdownVisible, setIsCountdownVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsCountdownVisible(false); // Hide the countdown
      setTimeout(() => {
        onCountdownEnd(); // Execute onCountdownEnd after 1 second
      }, 1000);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onCountdownEnd]);

  return (
    <>
      {isCountdownVisible ? (
        <div className="flex items-center justify-center bg-white rounded-lg p-5 w-full h-full bg-opacity-0">
          <h2 className='text-white text-[200px] z-100 font-bold '>
            {timeLeft}
          </h2>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-white rounded-lg p-5 w-full h-full bg-opacity-0">
          <Image src={GoStart} alt="Go Start" width={200} height={200} />
        </div>
      )}
    </>
  );
};

export default Countdown;
