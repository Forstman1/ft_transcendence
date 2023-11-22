"use client";

import { FC, ReactNode } from "react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import MobileFooter from "@/components/elements/ChatPage/Mobile/MobileFooter";
import { Flex } from "@chakra-ui/react";



export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {

    return(
        <>
            <Flex className="w-full h-[calc(100vh_-_90px)] md:h-screen overflow-y-auto overflow-x-auto">
                    {children}
            </Flex >
            <MobileFooter />
        </>

    )
}

export default Layout;
