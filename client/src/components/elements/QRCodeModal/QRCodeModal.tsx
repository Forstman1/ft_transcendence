import { Flex } from "@chakra-ui/react";
import Image from "next/image";


const QRCodeModal = ({ base64QRCode }: { base64QRCode: string }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      bgColor="rgba(0,0,0,0.5)"
      position="fixed"
      top="0"
      left="0"
      zIndex="999"
    >
      <Image alt='QR Code to scan for the 2-Factor Authentiation activation' src={base64QRCode}/>
    </Flex>
  );
};

export default QRCodeModal;
