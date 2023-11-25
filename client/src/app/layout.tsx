"use client";

import "./globals.css";
import 'tailwindcss/tailwind.css'
import { Geo } from "next/font/google";
import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ToastProviderProps } from "@chakra-ui/react";
import Navbar from "../components/elements/Navbar/Navbar";
import ReduxProvider from "../redux/provider";
import SplashScreen from "@/components/elements/spalshScreen/SplashScreen";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from 'react-query'
import GameNotification from "./gamePage/gameNotification/page";
import { extendTheme } from '@chakra-ui/react'
import ChatNotification from "../components/elements/ChatPage/ChatNotification";
import GlobalChatListener from "@/components/elements/ChatPage/GlobalChatListener";

const breakpoints = {
  'base': '0px',
  'xs': '350px',
  'sm': '640px',
  'md': '1000px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
  '3xl': '1600px',
  '4xl': '1920px',
  '5xl': '2400px',
  '6xl': '2880px',
}

const theme = extendTheme({ breakpoints })

const geo = Geo({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isHome = path === "/";
  const [isloading, setIsLoading] = React.useState(isHome);
  return (
    <html lang="en">
      <body className={`${geo.className}`}>
        <ReduxProvider>
          <CacheProvider>
            <QueryClientProvider client={queryClient}>
              <ChakraProvider theme={theme}>
                {isloading ? <SplashScreen finishLoading={() => setIsLoading(false)} /> :
                  <>
                    <GlobalChatListener />
                    <ChatNotification />
                    <GameNotification />
                    <Navbar />

                    {children}
                  </>
                }
              </ChakraProvider>
            </QueryClientProvider>
          </CacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
