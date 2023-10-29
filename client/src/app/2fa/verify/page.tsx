'use client';

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
  PinInputField
} from '@chakra-ui/react'
import { useMutation } from "@tanstack/react-query";
import { useState } from 'react';
import { verify2FA } from "@/utils/functions/auth/fetchingUserData";

export default function TwoFactorAuthPage() {
  const [otp, setOtp] = useState('');
  const { isError, isSuccess, mutate } = useMutation({
    mutationFn: verify2FA,
    mutationKey: ['verify2FA'],
  });

  return (
    <PageWrapper>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}
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
                  <PinInputField key="pin-input-field-0" />
                  <PinInputField key="pin-input-field-1" />
                  <PinInputField key="pin-input-field-2" />
                  <PinInputField key="pin-input-field-3" />
                  <PinInputField key="pin-input-field-4" />
                  <PinInputField key="pin-input-field-5" />
                  <PinInputField key="pin-input-field-6" />
                  <PinInputField key="pin-input-field-7" />
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
