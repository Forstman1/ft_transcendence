import React, { useEffect, useState } from "react";
import AddToFriendList from "../../../../../assets/icons/AddToFriendList.svg";
import Remove from "../../../../../assets/icons/remove-friend.svg";
import Block from "../../../../../assets/icons/Block.svg";
import pending from "../../../../../assets/icons/pending.svg";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useAppSelector } from "@/redux/store/store";
import Unblock from "../../../../../assets/icons/Unblock.svg";

export default function UserControls() {
  const User = useSelector((state: any) => state.chat.selectedChannelorUser);
  const socket = useSelector((state: any) => state.socket.socket);


  const selected = useSelector(
    (state: any) => state.chat.selectedChannelorUser
  );


  const allOptImages = useAppSelector(
    (state: any) => state.optImages.optImages
  );

  const [optImages, setOptImages] = useState([
    { src: AddToFriendList, alt: "Add to friend list" },
    { src: Block, alt: "Block" },
  ]);


  useEffect(() => {


    const getSelectedOpt = allOptImages.find(
      (optImage: any) => optImage.key === selected.username
    );

    if (getSelectedOpt && getSelectedOpt.optImages !== undefined) {
   
      setOptImages((prevOptImages) => {
        const newOptImages = [...prevOptImages];
        newOptImages[0] = getSelectedOpt.optImages[0];
        return newOptImages;
      });
    }
  }, [allOptImages, selected]);

  useEffect(() => {
    socket.on(`friendRequestAccepted`, (Friend: any) => {
      const newValue = { src: Remove, alt: "Remove from friend list" };

      Cookies.set(Friend.username, JSON.stringify([newValue, optImages[1]]), {
        expires: 365,
      });

      if (selected.username === Friend.username) {
          
        setOptImages((prevOptImages) => {
          const newOptImages = [...prevOptImages];
          newOptImages[0] = newValue;
          return newOptImages;
        });
      }

      });
      
    socket.on(`friendRequestRejected`, (Friend: any) => {
      const newValue = { src: AddToFriendList, alt: "Add to friend list" };
      if (selected.username === Friend.username) {

        setOptImages((prevOptImages) => {
          const newOptImages = [...prevOptImages];
          newOptImages[0] = newValue;
          return newOptImages;
        });

      }

      Cookies.set(Friend?.username, JSON.stringify([newValue, optImages[1]]), {
        expires: 365,
      });
    });

    socket.on(`userBlocked`, (Friend: any) => {

      const newValue = { src: Unblock, alt: "Unblock" };
      
      if (selected.username === Friend.username) {

        
        setOptImages((prevOptImages) => {
          const newOptImages = [...prevOptImages];
          newOptImages[1] = newValue;
          return newOptImages;
        });

      }

      Cookies.set(Friend.username, JSON.stringify([optImages[0], newValue]), {
        expires: 365,
      });
    });

    socket?.on(`userUnblocked`, (Friend: any) => {
      
      const newValue = { src: Block, alt: "Block" };
      if (selected.username === Friend.username) {
        
        setOptImages((prevOptImages) => {
          const newOptImages = [...prevOptImages];
          newOptImages[1] = newValue;
          return newOptImages;
        });
        
      }
      Cookies.set(Friend.username, JSON.stringify([optImages[0], newValue]), {
        expires: 365,
      });
     });


    socket?.on(`friendRemoved`, (Friend: any) => {
   

      const newValue = { src: AddToFriendList, alt: "Add to friend list" };

      setOptImages((prevOptImages) => {
        const newOptImages = [...prevOptImages];
        newOptImages[0] = newValue;
        return newOptImages;
      });

      Cookies.set(Friend.username, JSON.stringify([newValue, optImages[1]]), {
        expires: 365,
      });
    });

    return () => {
      socket.off(`friendRequestRejected`);
      socket.off(`friendRequestAccepted`);
      socket.off(`userBlocked`);
      socket.off(`friendRemoved`);
    };
  }, [socket, selected]);









  useEffect(() => {
    const cookies = Cookies.get(selected.username);

    if (cookies) {
      setOptImages(JSON.parse(cookies));
    } else {
      setOptImages([
        { src: AddToFriendList, alt: "Add to friend list" },
        { src: Block, alt: "Block" },
      ]);
    }
  }, [selected]);


  const handleUserControls = (option: string) => {

    if (option === "Add to friend list") {
      socket.emit(`sendFreindRequest`, { friendId: User.id });

      const newValue = { src: pending, alt: "Pending" };

      setOptImages((prevOptImages) => {
        const newOptImages = [...prevOptImages];
        newOptImages[0] = newValue;
        return newOptImages;
      });

      Cookies.set(selected.username, JSON.stringify([newValue, optImages[1]]), {
        expires: 365,
      });

    } else if (option === "Remove from friend list") {
      socket.emit(`removeFriend`, { friendId: User.id });
      const newValue = { src: AddToFriendList, alt: "Add to friend list" };
      setOptImages((prevOptImages) => {
        const newOptImages = [...prevOptImages];
        newOptImages[0] = newValue;
        return newOptImages;
      });

      Cookies.set(selected.username, JSON.stringify([newValue, optImages[1]]), {
        expires: 365,
      });

    } else if (option === "Block") {

      socket.emit(`blockUser`, { friendId: User.id });
      const newValue = { src: Unblock, alt: "Unblock" };
      setOptImages((prevOptImages) => {
        const newOptImages = [...prevOptImages];
        newOptImages[1] = newValue;
        return newOptImages;
      });

      Cookies.set(selected.username, JSON.stringify([optImages[0], newValue]), {
        expires: 365,
      });

    } else if (option === "Unblock") {
      socket.emit(`unblockUser`, { friendId: User.id });
      const newValue = { src: Block, alt: "Block" };
      setOptImages((prevOptImages) => {
        const newOptImages = [...prevOptImages];
        newOptImages[1] = newValue;
        return newOptImages;
      });
      Cookies.set(selected.username, JSON.stringify([optImages[0], newValue]), {
        expires: 365,
      });
    }
  };

  return optImages.map((image: any) => (
    <Box
      className="flex items-center gap-6 w-[220px]"
      key={image.alt}
      onClick={() => handleUserControls(image.alt)}
    >
      <Image
        src={image.src}
        priority={false}
        width={30}
        height={30}
        alt={image.alt}
        style={{
          width: "30px",
          height: "30px",
        }}
      />
      <Text className="text-2xl cursor-pointer">{image.alt}</Text>

    </Box>
  ));
}
