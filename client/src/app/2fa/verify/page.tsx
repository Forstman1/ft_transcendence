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
import { useMutation } from "react-query";
import { useState } from 'react';
import { verify2FA } from "@/utils/functions/auth/fetchingUserData";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";


export default function TwoFactorAuthPage() {
  const route = useRouter();
  const [otp, setOtp] = useState('');
  const { mutate } = useMutation({
    mutationFn: verify2FA,
    mutationKey: ['verify2FA'],
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (response) => {
      toast.success(response.data);
      setTimeout(() => {
        route.push('/');
      }, 2000);
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
