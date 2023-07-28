"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar/page";
import { motion, AnimatePresence } from "framer-motion";
import ReduxProvider from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AnimatePresence mode="wait">
            <CacheProvider>
              <ChakraProvider>
                <Navbar />
                <motion.main
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: "linear" }}
                  className=""
                >
                  {children}
                </motion.main>
              </ChakraProvider>
            </CacheProvider>
          </AnimatePresence>
        </ReduxProvider>
      </body>
    </html>
  );
}
