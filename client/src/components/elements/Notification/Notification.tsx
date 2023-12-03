import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import {
  BellIcon,
} from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/store/store";
import { formatTimeAgo } from "../ChatPage/ChatWindow";
import InviteToaGame from "../../../../assets/icons/InviteToaGame.svg";
import AddToFriendList from "../../../../assets/icons/AddToFriendList.svg";
import Image from "next/image";

export default function Notification() {
  const [notifications, setNotifications] = useState<any>([])
  const socket = useSelector((state: any) => state.socket.socket);
  const gameSocket = useAppSelector((state) => state.globalSocketReducer.socket);
  const [counter, setCounter] = useState(0);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [notification, setNotification] = useState<any>(null);


  useEffect(() => {

    socket.emit("getNotifications")

    socket.on("getNotifications", (data: any) => {
      data.sort((a: any, b: any) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      setNotifications(data);
      setCounter(0);
      data.map((notification1: any) => {
        if(notification1?.read === false) {
          setCounter((prevCounter: number) => prevCounter + 1);
        }
      })

      // setCounter(data.length);  
    });

    gameSocket?.on("newNotification", (data: any) => {
      data.sort((a: any, b: any) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      setNotifications(data);
      setCounter(0);
      data.map((notification1: any) => {
        if(notification1?.read === false) {
          setCounter((prevCounter: number) => prevCounter + 1);
        }
      })
    });
    
    return () => {
      gameSocket?.off("newNotification");
      socket.off("getNotifications");
    }
  }, [socket])

  const onSubmit = (notification: any) => {
    if (notification?.type === "friendRequest") {
      onOpen();
      setNotification(notification);
    }
  }

  const Accept = () => {
    socket.emit("acceptFreindRequest", {friendId: notification.senderId});
    onClose();
  }

  const Denie = () => {
    socket.emit("rejectFreindRequest", {friendId: notification.senderId});
    onClose();
  }
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          onClick={() => socket.emit("readNotification")}
          isRound={true}
          className="bg-black relative hover:bg-black"
          variant="solid"
          icon={<BellIcon w={8} h={8} color={"white"} />}
        />
        <div
          className={`absolute top-7 rounded-full bg-green-600 flex justify-center items-center px-1`}
        >
          <p className="text-xs text-white text-center ">{counter}</p>
        </div>
        <MenuList className="bg-white rounded-lg p-2 w-100 h-[400px]">
          <div className="flex items-center fixed top-0 w-[90%] h-8 bg-white p-2 space-x-2">
            <h1 className="text-lg font-bold">Notifications</h1>
            <Divider className="ml-auto" />
          </div>
          <div className="bg-white rounded-lg mt-5 w-full h-[95%] overflow-y-scroll no-scrollbar">
            {notifications?.map((notification: any, index: number) => (
              <MenuItem key={index} onClick={() => onSubmit(notification)}>
                <div
                  className={`flex flex-col w-full bg-gray-100 px-4 py-2 cursor-pointer  relative  overflow-hidden transition-all rounded hover:bg-white group`}
                >
                  <span className="w-0 h-0 rounded bg-background-primary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"/>
                  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    <div className="flex row w-full items-center justify-between">
                      <h1 className="text-sm font-bold">
                        {notification?.title}
                      </h1>
                      {notification?.type === "gameInvite" && (
                        <Image
                          src={InviteToaGame}
                          alt="InviteToaGame"
                          className="w-4 h-4 ml-2"
                        />
                      )}
                      {notification?.type === "friendRequest" && 
                        <Image
                          src={AddToFriendList}
                          alt="AddToFriendList"
                          className="w-4 h-4 ml-2"
                        />
                      }
                    </div>
                    <p className="text-xs">{notification?.description}</p>
                    <p className="text-xs text-gray-400">
                      {formatTimeAgo(Date.parse(notification?.createdAt))}
                    </p>
                    {index !== notifications.length - 1 && <Divider />}
                  </span>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuList>
      </Menu>

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

        <ModalHeader>Notifications</ModalHeader>

        <ModalBody className='w-full'>
          <h1 className=' font-bold text-2xl  pt-3 w-full flex justify-center items-center'>
            {notification?.description}
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
    </div>
  );
}
