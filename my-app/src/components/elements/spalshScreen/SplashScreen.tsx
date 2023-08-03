"use client";

import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Image from "next/image";
import PingPong from "../../../../assets/icons/Logo.svg";
import { motion } from "framer-motion";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#Logo",
        duration: 500,
        easing: "easeInOutQuart",
        delay: 0,
        scale: 1,
      })
      .add({
        targets: "#Logo",
        duration: 500,
        easing: "easeInOutQuart",
        delay: 0,
        scale: 0.1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate();
    }, 10);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background-primary">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image src={PingPong} alt="" id="Logo" width={500} height={500} />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
