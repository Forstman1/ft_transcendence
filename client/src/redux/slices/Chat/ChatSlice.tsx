import { Channel, Message } from "@/utils/types/chat/ChatTypes";
import { User } from "@/utils/types/user/UserTypes";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";




  




type ChatState = {
    selectedChannelorUser: Channel  | User |null
    channels: Channel[]
    userId: string
    messages: Message[]
  };
  
  const initialState: ChatState = {
    selectedChannelorUser: null,
    channels: [],
    userId: "05ab5089-a8c5-4e7b-bde9-5e2c705d48ff",
    messages: [],
  };
  
  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      setChannel: (state, action) => {
        state.selectedChannelorUser = action.payload
        state.messages = []
      },
      setUser: (state, action) => {
        state.selectedChannelorUser = action.payload
        state.messages = []
      },
      setNewChannel: (state, action) => {
        state.channels.push(action.payload)
      },
      setChannels: (state, action) => {
        state.channels = action.payload
      },
      setMessages: (state, action) => {
        state.messages = action.payload
        console.log(state.messages)
      },
      addMessage: (state, action) => {
        state.messages.push(action.payload)
      },
    },
  });

  
export const { setChannel, addMessage, setMessages, setChannels, setNewChannel } = chatSlice.actions
export default chatSlice.reducer
