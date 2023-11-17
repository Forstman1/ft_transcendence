import { Flex } from "@chakra-ui/react";
import QrCodeImage from "./Base64ToQRCode";

interface QRCodeModalProps {
  base64QRCode: string;
}

const QRCodeModal = ({ base64QRCode }: QRCodeModalProps) => {
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
      <QrCodeImage base64QRCode={base64QRCode} />
    </Flex>
  );
};