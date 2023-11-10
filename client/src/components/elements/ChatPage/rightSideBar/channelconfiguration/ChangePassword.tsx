import React, { useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import ModalWraper from '../../ModalWraper'
import channelconfig from "../../../../../../assets/icons/channelconf.svg"





type Change_Password = {
  current_password: string,
  new_password: string,
  confirm_password: string
}



function Componenent({ onClose }: any) {

  const { handleSubmit, register } = useForm<Change_Password>();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()
  const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
  const userId = useSelector((state: any) => state.chat.userId)


  const reset = useMutation<any, Error, any>((variables) =>
    fetch('http://127.0.0.1:3001/channel/changepassword', {
      method: "PUT",
      body: JSON.stringify(variables),
      headers: {
        "content-type": "application/json",
      }
    }).then((response) => {
      return response.json()

    }).catch((error) => {
      return error
    })
  )

  const resetpassword = async (data: Change_Password) => {
    if (data.confirm_password === data.new_password) {
      console.log(channelName)
      const response = await reset.mutateAsync({
        channelName: channelName.name,
        userId,
        currentpassword: data.current_password,
        newpassword: data.confirm_password,
      })
      // if (response.stat)
      console.log(response)
    }
    else {
      toast({
        title: "Password must be identical",
        position: `bottom-right`,
        status: 'error',
        duration: 1000,
        containerStyle: {
          width: 300,
          height: 100,
        }
      })
    }
  }
  return (<form onSubmit={handleSubmit(resetpassword)} className='flex gap-5 flex-col' >
    <Text>Current Password</Text>
    <InputGroup size='md'>
      <Input
        required
        {...register("current_password")}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter current password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Text>New Password</Text>
    <InputGroup size='md'>
      <Input
        required
        {...register("new_password")}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter new password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Text>Confim Password</Text>
    <InputGroup size='md'>
      <Input
        required
        {...register("confirm_password")}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter new password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <ModalFooter>
      <Button
        colorScheme="red"
        variant="outline"
        mr={10}
        onClick={onClose}
      >
        Close
      </Button>
      <Button
        colorScheme="green"
        variant="outline"
        ml={10}
        type='submit'
        onClick={() => {
          toast({
            title: "Password has been changed",
            position: `bottom-right`,
            status: 'success',
            duration: 1000,
            containerStyle: {
              width: 300,
              height: 100,
            }
          })
        }}
      >
        Confirm
      </Button>
    </ModalFooter>
  </form>
  )
}



export default function ChangePassword() {



  const { isOpen, onOpen, onClose } = useDisclosure()
  const data = { src: channelconfig, alt: "Change Channel Password" }
  const [imageAlt, setImageAlt] = useState('');




  return (
    <Box className='flex items-center gap-6 w-[220px]'
      key={data.alt}
    >
      <Image src={data.src} width={30} height={30} alt={data.alt} />
      <Text className='text-2xl cursor-pointer'
        onClick={() => { onOpen(); setImageAlt(data.alt) }}
      >
        {data.alt}
      </Text>
      <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={Componenent} />
    </Box>
  )
}
