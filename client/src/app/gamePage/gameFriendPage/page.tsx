import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../../animationWrapper/pageWrapper";
import ImgBackground from "../../../../assets/icons/background.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Game with Friend",
};

export default function GameFriendPage() {
  return (
    <PageWrapper>
      <div className=" flex justify-center items-center h-full w-full mt-[100px]">
        <div className=" justify-center items-center">
            <h1 className="text-5xl text-text-primary font-bold">Game with a friend</h1>
        </div>
      </div>
    </PageWrapper>
  );
}