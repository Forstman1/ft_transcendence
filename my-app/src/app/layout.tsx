"use client";

import "./globals.css";
import { Geo } from "next/font/google";
import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar/page";
import ReduxProvider from "../redux/provider";
// import Head from "next/head";

const geo = Geo({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body className={geo.className}>
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
