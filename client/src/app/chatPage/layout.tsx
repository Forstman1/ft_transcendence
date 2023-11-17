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
            <Flex className="w-full h-[calc(100vh_-_90px)] max-md:pb-[30px] md:h-full">
                <LeftSidebar />
                <div className="Chat_sub_div1 flex-grow flex">
                    {children}
                </div>
            </Flex >
            <MobileFooter />
        </>

    )
}

export default Layout;
