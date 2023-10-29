import React, { useEffect } from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import AddToChannel from '../../../../../assets/icons/AddToChannel.svg'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { Channel } from '@/utils/types/chat/ChatTypes';



export default function AddToChannelComponent() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isOpened, setIsOpened] = useState(false)
  const [Chosen, setChosen] = useState("Channels")
  const userId = useSelector((state: any) => state.userID.user)
  const userSelected = useSelector((state: any) => state.chat.selectedChannelorUser)
  const [channels, setChannels]: any = useState([])
  const toast = useToast()




  useEffect(() => {

   async function fetchChannels() {

    const [api1, api2] = await Promise.all([
      fetch('http://127.0.0.1:3001/channel/getallchannels/' + userId),
      fetch('http://127.0.0.1:3001/channel/getallchannels/' + userSelected.id)
    ]);

    const [res1, res2] = await Promise.all([api1.json(), api2.json()]);
      console.log(res1, 1)

      console.log(res2, 2)
      
      const res = await res1.filter((channel: any) => {
        return !res2.some((channel2: any) => {
          return channel.name === channel2.name
        }) 
      }
      )
      console.log(res)
      setChannels(res)

    }
    setIsOpened(false)
    setChosen("Channels")
    fetchChannels()

  }, [userSelected])

  const addtochannel = useMutation<any, Error, any>((variables) => fetch('http://127.0.0.1:3001/channel/invitemember', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(variables)})
    .then(res => res.json()).catch(err => console.log(err)))

  const onSubmit = async () => {
    if (Chosen === "Channels")
      return;
    const invite = await addtochannel.mutateAsync({
      channelName: Chosen,
      userIdOwner: userId,
      userIdMember: userSelected.id
    })
    if (invite.status)
    {
      toast({
        title: invite.status,
        position: `bottom-right`,
        status: 'error',
        duration: 1000,
        containerStyle: {
          width: 300,
          height: 100,
        }
      })
      return ;
    }
    onClose();
    toast({
      title: "User added to channel",
      position: `bottom-right`,
      status: 'success',
      duration: 1000,
      containerStyle: {
        width: 300,
        height: 100,
      }
    })
    
  }

  return (
    <Box className='flex items-center gap-6 w-[220px]'
    >
      <Image src={AddToChannel} priority={false} width={30} height={30} alt="Add to channel"
        style={{
          width: '30px',
          height: '30px'
        }}
      />
      <Text className='text-2xl cursor-pointer'
        onClick={() => { onOpen(); }}
      >
        Add to channel
      </Text>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        />
        <ModalContent
          bg={`rgba(255, 255, 255, 0.95)`}
          className="relative  duration-500 ease-in-out rounded-2xl shadow-2xl border-1 border-black flex justify-between items-center bg-gray-100"
        >

          <ModalHeader>ADD TO CHANNEL</ModalHeader>
          <ModalBody>
            <motion.div
              className="flex justify-center items-center flex-col gap-8"
              initial={false}
              animate={isOpened ? "open" : "closed"}
            >
              <Button
                as={motion.button}
                size={"lg"}
                width={"300px"}
                justifyContent={"space-between"}
                onClick={() => setIsOpened(!isOpened)}
                className='bg-[#e2e8f1]'
              >
                {Chosen}
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    close: { rotate: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon
                    fontSize={"3xl"}
                  />
                </motion.div>
              </Button>
              <motion.ul
                className={`Channels py-7 flex flex-col gap-10 bg w-[300px] h-[200px] bg-[#e2e8f1] bg-opacity-80 text-white items-center overflow-y-auto scrollbar scrollbar-thumb-white scrollbar-thin`}
                variants={{
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.9
                    }
                  },
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.9,
                      delayChildren: 0.3,
                      staggerChildren: 0.05
                    }
                  },
                }}
              >
                {channels.map((channel: Channel) =>
                  <li className=' cursor-pointer text-black font-bold' onClick={() => { setChosen(channel.name); setIsOpened(false) }}>
                    {channel.name}
                  </li>
                )}
              </motion.ul>
            </motion.div>
          </ModalBody>
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
              onClick={onSubmit}
            >
              Confirm
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </Box>
  )
}
