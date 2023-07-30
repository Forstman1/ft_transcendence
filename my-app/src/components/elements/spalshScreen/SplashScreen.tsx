"use client";

import React from 'react';
import anime from 'animejs';
import Image from 'next/image';

const SplashScreen = ({finishLoading}) => {
    const [isMounted, setIsMounted] = React.useState(false);


    const animate = () => {
        anime.timeline({

        })
        .add({

        })
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-black">
            <h1 className="text-4xl font-bold mb-4 text-white">Splash Screen</h1>
        </div>
    );
}
 
export default SplashScreen;