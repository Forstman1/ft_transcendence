import { Channel, ChannelMember, ChannelMessage, User } from "@/utils/types/chat/ChatTypes";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";




type ChatState = {
    selectedChannelorUser: Channel  | User | null
    channels: Channel[]
    userId: string
    messages: ChannelMessage[]
    ChannelMember: ChannelMember | null
  };
  
  const initialState: ChatState = {
    selectedChannelorUser: null,
    channels: [],
    userId: "0d299b7d-cb87-4a18-8788-27bcd4744987",
    messages: [],
    ChannelMember: null
  };
  
  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      setChannel: (state, action) => {
        state.selectedChannelorUser = action.payload
        state.messages = []
      },
      setChannelMember: (state, action) => {
        state.ChannelMember = action.payload
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

  
export const { setChannel, addMessage, setMessages, setChannels, setNewChannel, setUser, setChannelMember } = chatSlice.actions
export default chatSlice.reducer
