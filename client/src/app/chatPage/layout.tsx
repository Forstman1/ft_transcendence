"use client";

import { FC, ReactNode, use, useEffect, useState} from "react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import { Flex } from "@chakra-ui/react";
import MobileFooter from "@/components/elements/ChatPage/Mobile/MobileFooter";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import { ChatSocketState } from "@/redux/slices/socket/chatSocketSlice";
import axios from "axios";




export interface LayoutProps{

    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {

    // async function getUserByName(`Mohammed92`) {
    //     try {
    //       const response = await axios.get(``);
    //       return response.data; // Assuming the response contains the user data
    //     } catch (error) {
    //       // Handle the error
    //       console.error('Error:', error);
    //       throw error; // You can choose to rethrow the error or handle it as needed
    //     }
    //   }
    return(
        <>
            <Flex className="Chat_Parent h-[calc(100vh_-_170px)] md:h-[calc(100vh_-_90px)]">
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