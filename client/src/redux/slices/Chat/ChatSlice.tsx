import { Channel, Message, User } from "@/utils/types/chat/ChatTypes";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";




type ChatState = {
    selectedChannelorUser: Channel  | User | null
    channels: Channel[]
    userId: string
    messages: Message[]
  };
  
  const initialState: ChatState = {
    selectedChannelorUser: null,
    channels: [],
    userId: "0d299b7d-cb87-4a18-8788-27bcd4744987",
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
      },
      addMessage: (state, action) => {
        state.messages.push(action.payload)
      },
 
    },
  });

  
export const { setChannel, addMessage, setMessages, setChannels, setNewChannel, setUser } = chatSlice.actions
export default chatSlice.reducer
