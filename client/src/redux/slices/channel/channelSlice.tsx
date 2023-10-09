import { Channel, Message } from "@/utils/types/chat/ChatTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";




  





type ChannelState = {
    selectedChannel: Channel | null
    channels: Channel[]
    userId: string
    messages: Message[]
  };
  
  const initialState: ChannelState = {
    selectedChannel: null,
    channels: [],
    userId: "0e40b5fd-5a06-4b05-bc21-63c796f6832e",
    messages: [],
  };
  
  const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
      setChannel: (state, action) => {
        state.selectedChannel = action.payload
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

  
export const { setChannel, addMessage, setMessages, setChannels, setNewChannel } = channelSlice.actions
export default channelSlice.reducer
