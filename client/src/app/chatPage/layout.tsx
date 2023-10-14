"use client";

import { FC, ReactNode} from "react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import { Flex } from "@chakra-ui/react";
import MobileFooter from "@/components/elements/ChatPage/Mobile/MobileFooter";
import MobileLeftBar from "@/components/elements/ChatPage/Mobile/MobileLeftBar";


export interface LayoutProps{

    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Flex className="Chat_Parent h-[calc(100vh_-_170px)] md:h-[calc(100vh_-_90px)]">
                {/* <LeftSidebar /> */}
                {/* <MobileLeftBar /> */}
                <div className="Chat_sub_div1 flex-grow flex">
                    {children}
                </div>
            </Flex >
            <MobileFooter />
        </>

    )
}

export default Layout;