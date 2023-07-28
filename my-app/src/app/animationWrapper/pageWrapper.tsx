"use client";

import React from "react";
import { motion } from "framer-motion";

export const PageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <motion.div
    initial= {{width: 0}}
    animate={{ width: "100%" }}
    exit={{x: window.innerWidth, transition: {duration: 0.5}}}
  >
    {children}
  </motion.div>
);