'use client';

import React, { useEffect } from "react";
import { PageWrapper } from "../../animationWrapper/pageWrapper";
import {
  Center,
  Button,
  FormControl,
  Flex,
  Stack,
  HStack,
  PinInput,
  PinInputField
} from '@chakra-ui/react'
import { useMutation } from "react-query";
import { useState } from 'react';
import { verify2FA } from "@/utils/functions/auth/fetchingUserData";

export default function TwoFactorAuthPage() {
  const [otp, setOtp] = useState('');
  const { isError, isSuccess, mutate } = useMutation({
    mutationFn: verify2FA,
    mutationKey: ['verify2FA'],
  });
  useEffect(() => {
    if (isSuccess) {
      console.log('2FA verified');
    }
  }, [isSuccess]);
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
                <PinInput otp mask size='lg' onChange={(value) => setOtp(value)}>
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
              onClick={() => mutate(otp)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
            >
              Verify
            </Button>
            {isError && <div className="text-red-600">Verification failed. Please try again.</div>}
            {isSuccess && <div className="text-green-600">Verification successful!</div>}
          </Stack>
        </Stack>
      </Flex>
    </PageWrapper>
  );
}
