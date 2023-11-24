import {
  Switch, FormControl, FormLabel, Modal,
  ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, Button, useDisclosure, Center
} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMutation } from 'react-query';
import { enable2FA, disable2FA } from '@/utils/functions/auth/fetchingUserData';
import toast from 'react-hot-toast';


const QRCodeModal = () => {
  const [isFirstRender, setFirstRender] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChecked, setChecked] = useState(false);
  const [isManuallySet, setManuallySet] = useState(false);
  const [qrcode, setQrcode] = useState('');
  const enable2fa = useMutation({
    mutationFn: enable2FA,
    mutationKey: ['enable2FA'],
    onError: (error: any) => {
      setManuallySet(true);
      setChecked(false);
      toast.error(error.message);
    },
    onSuccess: (response: any) => {
      setQrcode(response.data.qrcode);
      onOpen();
    }
  });
  const disable2fa = useMutation({
    mutationFn: disable2FA,
    mutationKey: ['disable2FA'],
    onError: (error: any) => {
      setManuallySet(true);
      setChecked(true);
      toast.error(error.message);
    },
    onSuccess: (response: any) => {
      toast.success(response.data.message);
    }
  });

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
      return;
    } else if (!isFirstRender && isChecked && !isManuallySet) {
      enable2fa.mutate();
    } else if (!isFirstRender && !isChecked && !isManuallySet) {
      disable2fa.mutate();
    }
    setManuallySet(false);
  }, [isChecked]);
  return (
    <>
      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='2fa-enable-disable' mb='0'>
          Enable 2FA
        </FormLabel>
        <Switch id='2fa-enable-disable' isChecked={isChecked} onChange={(e) => setChecked(e.target.checked)} />
      </FormControl>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Scan this QR code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image alt='QR Code for the 2FA activation' src={qrcode} width={200} height={200} />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QRCodeModal;
