"use client";

import React from "react";
import { PageWrapper } from "../../animationWrapper/pageWrapper";
import {
  Center,
  Button,
  FormControl,
  Flex,
  Stack,
  HStack,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useState } from "react";
import { verify2FA } from "@/utils/functions/auth/fetchingUserData";
import { redirect, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { UserState } from "@/redux/slices/authUser/authUserSlice";
import { makeToast } from "@/utils/functions/auth/fetchingUserData";

export default function TwoFactorAuthPage() {
  const router = useRouter();
  const user = useSelector((state: { authUser: UserState }) => state.authUser);
  if (user.isAuthenticated) {
    router.push('/');
  }
  const toast = useToast();
  const [otp, setOtp] = useState('');
  const { mutate } = useMutation({
    mutationFn: verify2FA,
    mutationKey: ['verify2FA'],
    onError: (error: any) => {
      makeToast(toast, 'Oopsie Whoopsie!', `${error.response.data}`, 'error', 'toast-error-3')
    },
    onSuccess: (response: any) => {
      makeToast(toast ,'Yeaaaaaaah!', `${response.data}`, 'success', 'toast-success-4');
      redirect('/?logged=true');
    }
  });
  return (
      <PageWrapper>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
        >
          <Stack
            spacing={4}
            w={'full'}
            maxW={'lg'}
            bg={'white'}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={10}
          >
            <Center>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-center mt-12">2 Factor Authentication</h1>
            </Center>
            <Center className="text-md text-gray-800 dark:text-gray-400">
              Please type in the 8 digit code from your 2FA app
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
            <Stack spacing={6}>
              <Button
                disabled={otp.length !== 6}
                onClick={() => mutate(otp)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
              >
                Verify
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </PageWrapper>
  );
}
