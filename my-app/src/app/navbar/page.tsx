import Link from "next/link";
import React from "react";
import Logo from "../../../assets/icons/Logo.svg";
import Image from "next/image";
import wave from "../../../assets/icons/wave.svg";
import { Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const GameRouter = ["/gamePage/gameFriendPage", "/gamePage/gameBotPage"]

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Game", href: "/gamePage" },
  { text: "Chat", href: "/chatPage" },
];

export default function Navbar() {
  let path = usePathname();

  if (GameRouter.includes(path)) {
    path = "/gamePage";
  }

  return (
    <div className=" h-[24vh] drop-shadow-xl relative z-10">
      <Image src={wave} alt="wave" className="object-cover w-full" fill />
      <div className="flex items-center justify-between py-6 px-28 ">
        <div className="flex items-center justify-between w-[30%]">
          <Link
            href="/"
            className="relative flex items-center flex-shrink-0 text-text-primary mr-6"
          >
            <Image src={Logo} alt="Logo" width={150} height={150} />
          </Link>
          <nav className="flex items-center flex-row space-x-52 relative">
            <ul className="flex space-x-10">
              {MENU_LIST.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="relative text-xl text-text-primary font-bold hover:text-yellow-500"
                  >
                    {path === item.href ? (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full top-6"
                      />
                    ) : null}
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center flex-row space-x-5 relative">
          <Text className="text-text-primary font-bold text-xl">UserName</Text>
          <Avatar>
            <AvatarBadge
              className="bg-green-500"
              boxSize="1.25em"
              border="none"
            />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
