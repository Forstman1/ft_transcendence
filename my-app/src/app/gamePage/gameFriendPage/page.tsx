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
      <div className="absolute inset-0 flex justify-center items-center h-screen w-screen">
        <div className="relative w-full h-full">
          <Image
            src={ImgBackground}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" absolute justify-center items-center">
            <h1 className="text-5xl text-text-primary font-bold">Game with a friend</h1>
        </div>
      </div>
    </PageWrapper>
  );
}