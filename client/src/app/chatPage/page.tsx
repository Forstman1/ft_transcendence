
"use client";

import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "../animationWrapper/pageWrapper";
import ImgBackground from "../../../assets/icons/background.svg";
import Image from "next/image";
import LeftBar from "@/components/chat/LeftBar";
import { Container } from "@chakra-ui/react";


export default function ChatPage() {
  return (
    <PageWrapper>
      <Container className="bg-slate-500">
        hello from container
      </Container>
    </PageWrapper>
  );
}
