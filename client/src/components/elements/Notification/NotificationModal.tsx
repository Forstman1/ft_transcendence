
import React from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useSelector } from "react-redux";



export default function NotificationModal({isOpen, onClose, Friend}: any) {

const socket = useSelector((state: any) => state.socket.socket);

const Denie = () => {
    socket?.emit("rejectFreindRequest", { friendId: Friend.id });
    onClose();
};

const Accept = () => {
    socket.emit("acceptFreindRequest", {friendId: Friend.id });
    onClose();
}

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        />
        <ModalContent
          bg={`rgba(255, 255, 255, 0.95)`}
          className="relative  duration-500 ease-in-out rounded-2xl shadow-2xl border-1 border-black flex justify-center items-center bg-gray-100"
        >
  
          <ModalHeader>Accept frienf request</ModalHeader>
  
          <ModalBody className='w-full'>
            <h1 className=' font-bold text-2xl  pt-3 w-full flex justify-center items-center'>
             Do you want to accept  friend request?
            </h1>
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
  
            <Button
              colorScheme="red"
              variant="outline"
              mr={10}
              onClick={Denie}
            >
              DENIE
            </Button>
            <Button
              colorScheme="green"
              variant="outline"
              ml={10}
              onClick={Accept}
            >
              ACCEPT
            </Button>
          </ModalFooter>
          
        </ModalContent>
          </Modal>
    )
}