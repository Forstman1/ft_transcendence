import React, { useEffect, useState } from 'react'
import AddToFriendList from '../../../../../assets/icons/AddToFriendList.svg'
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
  const [control, setCotrol] = useState(false)
  const dispatch = useDispatch()

  const allOptImages = useAppSelector((state: any) => state.optImages.optImages);

  // console.log('allOptImages: ', allOptImages);
  // console.log('selectedusername : ', selected.username);

  const getSelectedOpt = allOptImages.find((optImage: any) => optImage.key === selected.username);

  console.log('getSelectedOpt: ', getSelectedOpt);
  const [OptImages, setOptImages] = useState(getSelectedOpt ? getSelectedOpt : [
    { src: AddToFriendList, alt: "Add to friend list" },
    { src: Block, alt: "Block" },
  ]);
  console.log('OptImages: ', OptImages);

//  useEffect(() => {
  
//   const optionImages = Cookies.get(selected.username);

//   if (optionImages) {
//     console.log(`here` + optionImages);
//     setOptImages(JSON.parse(optionImages));
//   }
  
// }, []);

  
  const handleUserControls = (option: string) => {
  
    if (option === "Add to friend list") {
      socket.emit(`sendFreindRequest`, { friendId: User.id });
      
      setOptImages((prevOptImages:any) => {
        return prevOptImages.map((image:any) =>
          image.alt === "Add to friend list"
            ? { src: pending, alt: "Pending" }
            : image
        );
      });

      Cookies.set(selected.username, JSON.stringify([
        { src: pending, alt: "Pending" },
        { src: Block, alt: "Block" }, 
      ]));

      const newOptImages = [...allOptImages, ...[
        { key: selected.username, optImages: [
          { src: pending, alt: "Pending" },
          { src: Block, alt: "Block" }, 
        ] }
      ]]
      dispatch(setOptAllImages(newOptImages));

    }
  }


  return (
    OptImages.map((image:any) =>

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
    ))
}
