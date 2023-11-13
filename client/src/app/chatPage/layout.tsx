"use client";

import { FC, ReactNode, useEffect, useState} from "react";
import LeftSidebar from "@/components/elements/ChatPage/leftsidebar/LeftSidebar";
import { Flex } from "@chakra-ui/react";
import MobileFooter from "@/components/elements/ChatPage/Mobile/MobileFooter";
import axios from "axios";
import { User } from '@/utils/types/chat/ChatTypes';
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";


export interface LayoutProps{

    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {

    // const [User, setUser] = useState()
    // const router = useRouter();
    // const id = `1da63ba9-7bb7-4d49-86a9-db17bbec6c49`
    // const {data} = useQuery({
    //     queryKey: ["userData"],
    //     queryFn: async () => {
    //         const {data} = await axios.get(`http://localhost:3001/users/${id}`)
    //         return data as User
    //     }
    // })
    return(
        <>
            <Flex className="w-full  h-full">
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