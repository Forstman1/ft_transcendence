import React from 'react'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Button,
  useToast
} from '@chakra-ui/react'
import SelectComponent from './rightSideBar/SelectComponent'




export default function ModalWraper({ isOpen, onClose, imageAlt, Componenent }: any) {

  const toast = useToast()

  const Fedback = [
    { type: `Add to channel`, answer: `User added to your channel.` },
    { type: `Ban from channel`, answer: `User is no longer member of Gneral.` },
    { type: `Mute`, answer: `User muted.` }
  ]
  function getAnswer(Type:string) {
    return Fedback.find(comment => comment.type === Type)?.answer
    
  }

  const ShosenContent = () => {

    switch (imageAlt) {
      case `Add to channel`:
        return (
          <SelectComponent />
        );
      case `Ban from channel`:
        return (
          <>
            <SelectComponent />
            <h1 className=' font-thin text-xl text-red-700 pt-3'>
              Banning a user will prevent them from joining or viewing this channel.
            </h1>
          </>
        );
      case "Mute":
        return <p className='font-thin text-xl text-red-700 pt-5'>Are you sure you want to mute <b>USER</b> in this channel?</p>;
      default:
        break
    }
  }
  
  return (

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

        <ModalHeader>{imageAlt}</ModalHeader>
        <ModalBody>
          {Componenent &&  <Componenent />}
          <ShosenContent />
        </ModalBody>
        <ModalCloseButton />
        {!Componenent && <ModalFooter>
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
            onClick={() => {
              onClose();
               toast({
                title: getAnswer(imageAlt),
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
        </ModalFooter>}
        
      </ModalContent>
    </Modal>
  )
};