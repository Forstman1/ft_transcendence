import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import ImgBackground from "../../../assets/icons/background.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
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
      </div>
    </PageWrapper>
  );
}
