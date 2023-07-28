"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar/page";
import ReduxProvider from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

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
            <CacheProvider>
              <ChakraProvider>
                <Navbar />
                  {children}
              </ChakraProvider>
            </CacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
