"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAppSelector } from "@/redux/store/store";

let prevPathname = '';

export function RouteChangeListener() {
    const socketState = useAppSelector((state) => state.globalSocketReducer);
    const socket = socketState.socket;
    const pathname = usePathname();

  useEffect(() => {
    if (prevPathname === "/gamePage/gameFriendPage" && pathname !== "/gamePage/gameFriendPage") {
      socket?.emit("userLeaveGameRoom");
    }

    prevPathname = pathname;
  }, [pathname]);

  return <></>;
}
