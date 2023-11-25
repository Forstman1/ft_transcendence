'use client'

import { PageWrapper } from '@/app/animationWrapper/pageWrapper';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import WavesDivider from 'assets/icons/wavesOpacity.svg';
import QRCodeModal from '@/components/elements/QRCodeModal/QRCodeModal';

const Footer = () => {
  const textSize = [
    'xs', 'sm', 'md', 'lg', 'xl', 'xl', '2xl', '2xl', '2xl', '3xl', '3xl'
  ];
  return (
    <footer className="w-full fixed bottom-0 z-10">
      <Box className="w-full h-5 md:h-5">
        <Image src={WavesDivider} alt="Footer Divider" className="transform rotate-180 w-full h-5" />
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        width="full" height="full"
        className="grid-cols-3 md:justify-between h-16 md:h-24 bg-neutral-950"
      >
        <div className="h-full w-1/3 flex items-center justify-center">
          {/* Content for the first column, which is none for the moment */}
        </div>
        <div className="h-full w-1/3 flex items-center justify-center text-white">
          <Text textAlign={"center"} fontSize={textSize}>
            Copyright © 2023 Pong Inc. All Rights Reserved
          </Text>
        </div>
        <div className="h-full w-1/3 flex items-center justify-center text-neutral-100">
          <Text textAlign={"center"} fontSize={textSize}>
            Made with ❤️
          </Text>
        </div>
      </Flex>
    </footer>
  );
};

export default function CallToActionWithIllustration() {
  return (
    <PageWrapper>
      <div
        className="flex flex-col w-full min-h-fit
          px-10 xl:px-30 2xl:px-40 3xl:px-50 4xl:px-60 5xl:px-70 6xl:px-80
          pt-[6rem] md:pt-[10rem] xl:pt-[16rem] pb-[4rem] md:pb-[10rem]
          justify-evenly justify-items-center content-center items-center"
      >
        <QRCodeModal/>
      </div>
      <Footer/>
    </PageWrapper>
  )
}