import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import IntraLogoIcon from "../../../components/elements/Images/IntraLogo";

export interface AuthButtonObj {
  text: string;
  name: string,
  href: string;
  borderClr: string;
  bgClr: string;
  clr: string;
  hoverClr: string;
  icon: IconType | React.FC;
}

export const AuthButtonsList: Array<AuthButtonObj> = [
  {
    text: 'Intra',
    name: 'intra',
    href: 'auth/login/intra',
    borderClr: 'teal.400',
    bgClr: 'teal.400',
    clr: 'white',
    hoverClr: 'teal.300',
    icon: IntraLogoIcon,
  },
  {
    text: 'Google',
    name: 'google',
    href: 'auth/login/google',
    borderClr: 'blue.600',
    bgClr: 'transparent',
    clr: 'blue.600',
    hoverClr: 'blue.50',
    icon: FcGoogle,
  },
  {
    text: 'Github',
    name: 'github',
    href: 'auth/login/github',
    borderClr: 'gray.900',
    bgClr: 'gray.900',
    clr: 'white',
    hoverClr: 'gray.700',
    icon: FaGithub,
  },
]

export const NAVBAR_ITEMS: Array<{
  text: string,
  href: string
}> = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Game",
      href: "/gamePage"
    },
    {
      text: "Chat",
      href: "/chatPage"
    }
  ];
