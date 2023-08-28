"use client";

import "./globals.css";
import 'tailwindcss/tailwind.css'
import { Geo } from "next/font/google";
import * as React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar/page";
import ReduxProvider from "../redux/provider";
import SplashScreen from "@/components/elements/spalshScreen/SplashScreen";
import { usePathname } from "next/navigation";

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

  const path = usePathname();
  const isHome = path === "/";
  const [isloading, setIsLoading] = React.useState(isHome);

  return (
    <html lang="en">
      <body className={`${geo.className} body-class`}>
        <ReduxProvider>
            <CacheProvider>
              <ChakraProvider>
                {isloading ? <SplashScreen  finishLoading={() => setIsLoading(false)}/> :
                <>
                  <Navbar />
                  {children}
                </>
                }
              </ChakraProvider>
            </CacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
