import {
  Switch, FormControl, FormLabel, Modal, Stack, HStack, PinInput, PinInputField,
  ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, Button, useDisclosure, Center, useToast
} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMutation } from 'react-query';
import { enable2FA, disable2FA } from '@/utils/functions/auth/fetchingUserData';
import { useSelector } from 'react-redux';
import { UserState } from '@/redux/slices/authUser/authUserSlice';
import { makeToast } from '@/utils/functions/auth/fetchingUserData';
import { generateTwoFaData, verifyTwoFaPin } from '@/utils/functions/auth/fetchingUserData';
import { placeholderImage } from '@/utils/constants/auth/AuthConstants';

/* ------------------------------------------------------------------------------------------------------------------ */

function EnableTwoFactorAuthModel(props: { toast: any, user: UserState, close: () => void }) {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [twoFaData, setTwoFaData] = useState({ secret: '', otpUrl: '', qrcode: '' });
  if (isFirstRender) {
    generateTwoFaData(props.user)
      .then((data) => {
        setTwoFaData(data);
      })
      .catch((error) => {
        makeToast(
          props.toast,
          'Error',
          error?.message ? error?.message : 'Try again later',
          'error',
          'toast-error-qrcode'
        );
      });
    setIsFirstRender(false);
  }
  const [disabled, setDisabled] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [otp, setOtp] = useState('');
  const { mutate } = useMutation({
    mutationKey: ['enable2FA'],
    mutationFn: enable2FA,
    onError: (error: any) => {
      makeToast(
        props.toast,
        'Error',
        error?.response.data ? error?.response.data : 'Try again later',
        'error',
        'toast-error-qrcode'
      );
    },
    onSuccess: (response: any) => {
      makeToast(
        props.toast,
        'Success',
        response?.data ? response?.data : '2FA Enabled Successfully',
        'success',
        'toast-success-qrcode'
      );
      setDisabled(true);
      props.close();
    }
  });
  useEffect(() => {
    if (submit) {
      const isValid = verifyTwoFaPin(otp, twoFaData.secret);
      if (!isValid) {
        makeToast(
          props.toast,
          'Error',
          'Invalid 2FA Code',
          'error',
          'toast-error-qrcode'
        );
      } else {
        mutate(twoFaData.secret);
      }
      setSubmit(false);
    }
  }, [submit])
  return (
    <>
      <div>
        <Center className="text-xl text-gray-800 dark:text-gray-400">
          Scan this QR Code
        </Center>
        <Center>
          <Image alt='QR Code for the 2FA activation'
            src={twoFaData.qrcode ? twoFaData.qrcode : placeholderImage}
            width={200} height={200}
          />
        </Center>
      </div>
      <Stack spacing={4} w={'full'} maxW={'lg'} bg={'white'} rounded={'xl'} p={6} my={10}>
        <Center className="text-xl text-gray-800 dark:text-gray-400">
          Type in the 8-digit Pin from your 2FA App
        </Center>
        <FormControl isRequired>
          <Center>
            <HStack>
              <PinInput otp size='lg' onChange={(value) => setOtp(value)}>
                <PinInputField id="pin-input-field-0" key="pin-input-field-0" />
                <PinInputField id="pin-input-field-1" key="pin-input-field-1" />
                <PinInputField id="pin-input-field-2" key="pin-input-field-2" />
                <PinInputField id="pin-input-field-3" key="pin-input-field-3" />
                <PinInputField id="pin-input-field-4" key="pin-input-field-4" />
                <PinInputField id="pin-input-field-5" key="pin-input-field-5" />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={4}>
          <Button
            isDisabled={disabled ? disabled : otp.length !== 6}
            onClick={() => setSubmit(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

function DisableTwoFactorAuthModel(props: { toast: any, user: UserState, close: () => void  }) {
  const [submit, setSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [otp, setOtp] = useState('');
  const { mutate } = useMutation({
    mutationKey: ['disable2FA'],
    mutationFn: disable2FA,
    onError: (error: any) => {
      makeToast(
        props.toast,
        'Error',
        error?.response.data ? error?.response.data : 'Try again later',
        'error',
        'toast-error-qrcode'
      );
    },
    onSuccess: (response: any) => {
      makeToast(
        props.toast,
        'Success',
        response?.data ? response?.data : '2FA Disabled Successfully',
        'success',
        'toast-success-qrcode'
      );
      setDisabled(true);
      props.close();
    }
  });
  useEffect(() => {
    if (submit) {
      mutate(otp);
      setSubmit(false);
    }
  }, [submit])
  return (
    <>
      <Stack spacing={4} w={'full'} maxW={'lg'} bg={'white'} rounded={'xl'} p={6} my={10}>
        <Center className="text-xl text-gray-800 dark:text-gray-400">
          Type in the 8-digit Pin from your 2FA App
        </Center>
        <FormControl isRequired>
          <Center>
            <HStack>
              <PinInput otp size='lg' onChange={(value) => setOtp(value)}>
                <PinInputField id="pin-input-field-0" key="pin-input-field-0" />
                <PinInputField id="pin-input-field-1" key="pin-input-field-1" />
                <PinInputField id="pin-input-field-2" key="pin-input-field-2" />
                <PinInputField id="pin-input-field-3" key="pin-input-field-3" />
                <PinInputField id="pin-input-field-4" key="pin-input-field-4" />
                <PinInputField id="pin-input-field-5" key="pin-input-field-5" />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={4}>
          <Button
            isDisabled={disabled ? disabled : otp.length !== 6}
            onClick={() => setSubmit(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

/* ------------------------------------------------------------------------------------------------------------------ */

function QRCodeModal() {
  const toast = useToast();
  const user = useSelector((state: { authUser: UserState }) => state.authUser);

  const [switchClicked, setSwitchClicked] = useState(false);
  const [switchDisabled, setSwitchDisabled] = useState(true);

  const { onOpen, onClose, isOpen } = useDisclosure();

  const [isChecked, setChecked] = useState(user.twoFactorEnabled);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (user.isOnline && firstRender) {
      setChecked(user.twoFactorEnabled);
      setFirstRender(false);
    } else if (user.isOnline && !firstRender && !isOpen && switchClicked && isChecked) {
      setSwitchClicked(false);
      onOpen();
    } else if (user.isOnline && !firstRender && !isOpen && switchClicked && !isChecked) {
      setSwitchClicked(false);
      onOpen();
    }
    setSwitchDisabled(!user.isOnline);
  }, [isChecked, user.twoFactorEnabled, user.isOnline, firstRender, switchClicked, isOpen])


  return (
    <>
      {/* ---------------------------------------------------------------------------------------------------------- */}

      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='2fa-enable-disable' mb='0'>
          Enable 2FA
        </FormLabel>
        <Switch
          id='2fa-enable-disable' isChecked={isChecked}
          onChange={(e) => {
            setSwitchClicked(true);
            setChecked(e.target.checked)
          }}
          isDisabled={switchDisabled}
        />
      </FormControl>

      {/* ---------------------------------------------------------------------------------------------------------- */}

      <Modal isOpen={isOpen} onClose={() => {
          // if (!success && !firstRender) {
            // setFirstRender(true);
            setChecked(!isChecked);
          // }
          // setSuccess(false);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isChecked ? 'Enable' : 'Disable'} Two Factor Authentication</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            {
              isChecked ?
                <EnableTwoFactorAuthModel toast={toast} user={user} close={onClose}/> :
                <DisableTwoFactorAuthModel toast={toast} user={user} close={onClose}/>
            }

          </ModalBody>
          {/* <ModalFooter>
            <Button
              onClick={() => {
                if (!success && !firstRender) {
                  setFirstRender(true);
                  setChecked(!isChecked);
                }
                setSuccess(false);
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>

      {/* ---------------------------------------------------------------------------------------------------------- */}

      {/* <Modal onClose={disableModal.onClose} isOpen={disableModal.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Disable Two Factor Authentication</ModalHeader>
          <ModalCloseButton />
          <ModalBody>


          </ModalBody>
          <ModalFooter>
            <Button onClick={disableModal.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {/* ---------------------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default QRCodeModal;
