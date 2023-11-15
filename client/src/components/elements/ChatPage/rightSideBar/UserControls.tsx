import React, { use, useEffect, useState } from 'react'
import AddToFriendList from '../../../../../assets/icons/AddToFriendList.svg'
import Remove from '../../../../../assets/icons/remove-friend.svg'
import Block from '../../../../../assets/icons/Block.svg'
import pending from '../../../../../assets/icons/pending.svg'
import { Box, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import ModalWraper from '../ModalWraper'
import { useSelector } from "react-redux";
import { User } from '@/utils/types/chat/ChatTypes'
import Cookies from "js-cookie";
import { setOptAllImages } from '@/redux/slices/chat/OptImagesSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from "@/redux/store/store";






function handleUserControls(User: User) {

 

}

export default function UserControls() {


  const User = useSelector((state: any) => state.chat.selectedChannelorUser);
  const socket = useSelector((state: any) => state.socket.socket);
  const selected = useSelector((state: any) => state.chat.selectedChannelorUser);
  const { isOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const allOptImages = useAppSelector((state: any) => state.optImages.optImages);


  const getSelectedOpt = allOptImages.find((optImage: any) => optImage.key === selected.username);
  

  const [optImages, setOptImages] = useState([
      { src: AddToFriendList, alt: "Add to friend list" },
      { src: Block, alt: "Block" }, 
  ]);


  useEffect(() => { 

  
    socket.on(`friendRequestAccepted`, () => { 
      
        Cookies.set(selected.username, JSON.stringify([
          { src: Remove, alt: "Remove from frien list" },
          { src: Block, alt: "Block" },
        ]), { expires: 365 });
    
      
      console.log("friendRequestAccepted")
        setOptImages([
          { src: Remove, alt: "Remove from frien list" },
          { src: Block, alt: "Block" },
        ])
    });

  }, [socket])

  useEffect(() => {

    const cookies = Cookies.get(selected.username);

    if (cookies) {
      
      setOptImages(JSON.parse(cookies));
    }
    else {
      setOptImages([
        { src: AddToFriendList, alt: "Add to friend list"},
        { src: Block, alt: "Block" },
      ]);
    }

    
  }, [selected])

  
  const handleUserControls = (option: string) => {
  
    if (option === "Add to friend list") {

      socket.emit(`sendFreindRequest`, { friendId: User.id });

      Cookies.set(selected.username, JSON.stringify([
        { src: pending, alt: "Pending" },
        { src: Block, alt: "Block" },
      ]), { expires: 365 });
      
      const newOptImages = [...allOptImages, ...[
        {
          key: selected.username, optImages: [
            { src: pending, alt: "Pending" },
            { src: Block, alt: "Block" },
          ]
        }
      ]]
      dispatch(setOptAllImages(newOptImages));
      setOptImages([
        { src: pending, alt: "Pending" },
        { src: Block, alt: "Block" },
      ]
      )
    }
    else if (option === "Remove from frien list") {
        
        socket.emit(`removeFriend`, { friendId: User.id });
  
        Cookies.set(selected.username, JSON.stringify([
          { src: AddToFriendList, alt: "Add to friend list" },
          { src: Block, alt: "Block" },
        ]), { expires: 365 });
  
        const newOptImages = [...allOptImages, ...[
          {
            key: selected.username, optImages: [
              { src: AddToFriendList, alt: "Add to friend list" },
              { src: Block, alt: "Block" },
            ]
          }
        ]]
        dispatch(setOptAllImages(newOptImages));
        setOptImages([
          { src: AddToFriendList, alt: "Add to friend list" },
          { src: Block, alt: "Block" },
        ]
        )
     }
  }


  return (
    optImages.map((image:any) =>

      <Box className='flex items-center gap-6 w-[220px]'
        key={image.alt}
        onClick={() => handleUserControls(image.alt)}
      >
        <Image src={image.src} priority={false}  width={30} height={30} alt={image.alt}
        style={{
          width: '30px',
          height: '30px'
        }}
        />
        <Text className='text-2xl cursor-pointer'>
          {image.alt}
        </Text>
        <ModalWraper isOpen={isOpen} onClose={onClose} />
      </Box>
    )
  )
}
