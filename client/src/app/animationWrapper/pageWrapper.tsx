"use client";

import React from "react";
import { motion } from "framer-motion";

export const PageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: .5,
    }}
  >
    {children}
  </motion.div>
);