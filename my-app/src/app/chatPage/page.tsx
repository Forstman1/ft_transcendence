import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../animationWrapper/pageWrapper";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center w-[90%] mt-[-50px] bg-background-primary mx-auto p-10">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">
          Hello from Chat
        </h1>
      </div>
    </PageWrapper>
  );
}
