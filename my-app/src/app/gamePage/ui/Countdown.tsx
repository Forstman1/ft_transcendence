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
        <div className="flex items-center justify-center bg-white rounded-lg p-5 w-full h-full bg-opacity-80">
          <h2 className='text-black text-3xl z-100'>
            Game starts in: <span className='text-5xl text-red-500'>{timeLeft}</span> seconds
          </h2>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-white rounded-lg p-5 w-full h-full bg-opacity-0">
          <Image src={GoStart} alt="Go Start" width={300} height={300} />
        </div>
      )}
    </>
  );
};

export default Countdown;
