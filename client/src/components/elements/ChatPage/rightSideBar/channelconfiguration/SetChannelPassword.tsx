import React, { useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import ModalWraper from '../../ModalWraper'
import channelconfig from "../../../../../../assets/icons/channelconf.svg"
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { setChannel, setChannels } from '@/redux/slices/chat/ChatSlice'
import { Channel } from '@/utils/types/chat/ChatTypes'




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
    const userId = useSelector((state: any) => state.userID.user)
    const dispatch = useDispatch()
  
    const newpassword = useMutation<any, Error, any>((variables) =>
      fetch('http://127.0.0.1:3001/channel/setpassword', {
        method: "POST",
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


    
    const fetchData = async () => {
      const fetchChannels = await fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId)
      const response = await fetchChannels.json()
      if (response.length > 0)
      {
        const allchannels: Channel[] = response
        console.log(allchannels)
        dispatch(setChannels(allchannels))
        return allchannels;
      }

    }


    const setpassword = async (data: Change_Password) => {
        
      if (data.confirm_password === data.new_password) {
        console.log(channelName)
        const response = await newpassword.mutateAsync({ channelName: channelName.name, userId, password: data.new_password })
        if (response.status === "you are not owner of the channel") {
          toast({
            title: "You are not owner of the channel",
            position: `bottom-right`,
            status: 'error',
            duration: 1000,
            containerStyle: {
              width: 300,
              height: 100,
            }
          })
        }
        else {
          toast({
            title: "Password has been set",
            position: `bottom-right`,
            status: 'success',
            duration: 1000,
            containerStyle: {
              width: 300,
              height: 100,
            }
          })
          dispatch(setChannel(response))
          fetchData()
        }

        
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
    return (<form onSubmit={handleSubmit(setpassword)} className='flex gap-5 flex-col' >
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
        >
          Confirm
        </Button>
      </ModalFooter>
    </form>
    )
  }


export default function SetChannelPassword() {


    const toast = useToast()
    const channelName = useSelector((state: any) => state.chat.selectedChannelorUser)
    const userId = useSelector((state: any) => state.userID.user)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageAlt, setImageAlt] = useState('');



    const data = { src: channelconfig, alt: "Set Channel Password" }


    return (<Box className='flex items-center gap-6 w-[220px]'
        key={data.alt}
    >
        <Image src={data.src} width={30} height={30} alt={data.alt} />
        <Text className='text-2xl cursor-pointer'
            onClick={() => { onOpen(); setImageAlt(data.alt) }}
        >
            {data.alt}
        </Text>
        <ModalWraper isOpen={isOpen} onClose={onClose} imageAlt={imageAlt} Componenent={Componenent} />

    </Box>)
}
