"use client";

import "./globals.css";
import 'tailwindcss/tailwind.css'
import { Geo } from "next/font/google";
import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/elements/Navbar/Navbar";
import ReduxProvider from "../redux/provider";
import SplashScreen from "@/components/elements/spalshScreen/SplashScreen";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import GameNotification from "./gamePage/gameNotification/page";
import Footer from "@/components/elements/Footer/Footer";

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
      <body className={`${geo.className} `}>
        <ReduxProvider>
            <CacheProvider>
              <QueryClientProvider client={queryClient}>
              <ChakraProvider>
                {isloading ? <SplashScreen  finishLoading={() => setIsLoading(false)}/> :
                <>
                  <GameNotification />
                  <Navbar />

                  {children}
                  {/* <Footer /> */}
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
