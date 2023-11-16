import { Avatar, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import arrow from "../../../../assets/icons/arrow.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/redux/slices/chat/ChatSlice";
import { ChannelMessage } from "@/utils/types/chat/ChatTypes";
import { useMutation } from "react-query";
import { setLeft, setRight, setMidle } from "@/redux/slices/chat/MobileSlice";
import { useAppSelector } from "@/redux/store/store";

import { setMessages } from '@/redux/slices/chat/ChatSlice';


// function Message_other({ usermessage, message, sender, time }: any) {
//   const [user, setUser]: any = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchuser = await fetch(
//         "http://127.0.0.1:3001/users/getuser/" + usermessage.authorID
//       );
//       const response = await fetchuser.json();
//       setUser(response);
//     };
//     fetchData();
//   }, []);

  function Message_other({ usermessage, message, sender, time }: any) {

    const [user, setUser]: any = useState()



    useEffect(() => {
      const fetchData = async () => {

        const fetchuser = await fetch('http://127.0.0.1:3001/users/getuser/' + usermessage.authorID)
        const response = await fetchuser.json()
        setUser(response)
      }
      fetchData()
    }, [])


    return (<div className='w-full flex gap-[5px]  items-baseline  pl-[15px] z-0'>
      <Avatar className='custom-shadow' boxSize={12} src={user?.avatar} />

      <div className="bg-white border-2 border-black rounded-2xl custom-shadow  rounded-tl-none pl-[10px] w-[50%]">
        <div className="text-[#B4B4B4]">{sender}</div>
        <div>{message}</div>
      </div>
    </div>
    );
  }



  function Own_Message({ message, user }: any) {

    return (<div className='w-full flex gap-[5px]   justify-end pr-[15px] items-baseline z-0'>
      <div className='bg-black border-2 border-black rounded-2xl custom-shadow text-white rounded-tr-none justify-start pl-[10px] w-[50%]'>
        <div className='text-[#B4B4B4]'>{user.username}</div>
        <div>{message.content}</div>
      </div>
      <Avatar className='custom-shadow' boxSize={12} src={user?.avatar} />
    </div>)
  }



  export default function ChatWindow() {




    const { handleSubmit, register, reset } = useForm<any>();
    const chatContainer = useRef<any>(null);


    const selected = useSelector((state: any) => state.chat.selectedChannelorUser);
    const messages: ChannelMessage[] = useSelector((state: any) => state.chat.messages);
    const userId = useSelector((state: any) => state.socket.userID)
    const dispatch = useDispatch();
    const { LeftClice } = useSelector((state: any) => state.mobile)
    const { RightClice } = useSelector((state: any) => state.mobile)
    const [user, setUser]: any = useState()

    const socket = useAppSelector((state) => state.socket.socket);

    // const socket = useSelector((state: any) => state.socket.socket)

    // useEffect(() => {
    //   const fetchData = async () => {

    //     const fetchuser = await fetch('http://127.0.0.1:3001/users/getuser/' + userId)
    //     const response = await fetchuser.json()
    //     setUser(response)
    //   }
    //   fetchData()
    // }, [])




    const scrollToBottom = () => {
      if (chatContainer.current) {
        chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
      }
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);




    const HideMobileSideBars = () => {
      if (window.innerWidth <= 1024) {
        dispatch(setRight(false));
        dispatch(setLeft(false));
      }
    }



    const handleNewMessage = async (data: any) => {

      if (data.newmessage.trim() === '')
        return;


        if ('name' in selected)
        {
          console.log("sifat chi7aja", selected.id, " " + selected.id)
          socket?.emit('sendMessage', {
            channelId: selected.id,
            userId: userId,
            message: data.newmessage,
          }); 
        }
        else
        {
          socket?.emit(`sendPrivateMessage`, {
            reciverId: selected.id,
            message: data.newmessage,
          });
        }

      reset({ newmessage: '' });
      scrollToBottom();
    };


    const getChannelMessages: any = useMutation<any, Error, any>((variables) =>
      fetch('http://127.0.0.1:3001/message/getmessages/' + variables.channelId).then((response) => {
        console.log("Chanellresponse", response)
        return response.json()

      }).catch((error) => {
        return error
      }))


      const getUserMessages: any = useMutation<any, Error, any>((variables) =>
        fetch('http://127.0.0.1:3001/message/getMessagesUsers/' + variables.userId + '/' + variables.reciverId).then((response) => {
        return response.json()

      }).catch((error) => {
        return error
      }))

    useEffect(() => {

      const fetchChannelMessages = async () => {
        let messages: ChannelMessage[] = await getChannelMessages.mutateAsync({
          channelId: selected?.id,
        })
        if (messages.length != 0) {
          dispatch(setMessages(messages))
        }
        else
          dispatch(setMessages([]))
      }

      const fetchUserMessages = async () => {
        let messages: ChannelMessage[] = await getUserMessages.mutateAsync({
          userId: userId,
          reciverId: selected?.id
        })
        if (messages.length != 0) {
          dispatch(setMessages(messages))
        }
        else
          dispatch(setMessages([]))
      }


      if (selected  && 'name' in selected && selected.id != null)
        fetchChannelMessages()

      if (selected && 'username' in selected && selected.id != null)
        fetchUserMessages()

      socket?.on('receivedMessage', (data: any) => {
        if (selected?.id === data.channelId) {
          dispatch(addMessage(data.message));
        }

      });
      socket?.on("receivedPrivateMessage", (data: any) => {

        console.log("waslat chi7aja", data.message);

        dispatch(addMessage(data.message));

      });

      return () => {
        socket?.off('receivedMessage');
        socket?.off('receivedPrivateMessage');
      };
    }, [selected]);




    return (
      <div className='justify-between flex-col gap-[10px] w-full h-full'>
        <div className=' flex flex-col gap-[10px] overflow-y-scroll z-0 h-[91%] ' ref={chatContainer}>


          {(messages && messages.length != 0) && (messages.map((message: ChannelMessage, index: number) => {
            if (message.authorName === user.username) {
              return <Own_Message key={index} message={message} user={user} />
            }
            return <Message_other key={index} usermessage={message} message={message.content} sender={message.authorName} time={message.createdAt} />
          }))}

          {/* 
        <div className='w-full flex   items-baseline gap-[5px]  pl-[15px] h-[100px] mb-[5px]'  >
          <Avatar className='custom-shadow' boxSize={12} />


          <div className='bg-white border-2 border-black rounded-2xl custom-shadow flex rounded-tl-none p-[5px] ' >
            <div className='h-[15px]'></div>
            <Lottie
              className=' w-[50px] h-[30px]'
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
        </div> */}
        </div>
        <form onSubmit={handleSubmit(handleNewMessage)} className='h-[55px] mb-[15px] flex justify-around items-center'>
          <Input {...register("newmessage")} className='bg-[#D9D9D9] border-2 rounded-ld w-[90%] border-black h-[100%]' placeholder='Type your message here ...'
            onClick={() => { HideMobileSideBars() }}
          />
          <button
            type="submit"
            className="bg-black w-[50px] rounded-md cursor-pointer flex justify-start items-center h-[100%]"
          >
            <Image className=" w-[40px] " src={arrow} alt="arrow" />
          </button>
        </form>
      </div>
    )
  }
