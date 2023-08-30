import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "./animationWrapper/pageWrapper";
 
// TODO The background image shouldn't reload each time we change the route

export const metadata: Metadata = {
  title: "Home",
};


export default function Home() {
  return (
    <PageWrapper>
      <div className="absolute inset-0 flex justify-center items-center h-screen w-screen">
        <div className="relative w-full h-full">

        </div>
      </div>
    </PageWrapper>
  );
}
