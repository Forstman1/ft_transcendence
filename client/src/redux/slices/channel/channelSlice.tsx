import { Channel, Message } from "@/utils/types/chat/ChatTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ChannelState = {
    selectedChannel: Channel | null
    userId: string
    messages: Message[]
  };
  
  const initialState: ChannelState = {
    selectedChannel: null,
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
      setMessages: (state, action) => {
        state.messages = action.payload
        console.log(state.messages)
      },
      addMessage: (state, action) => {
        state.messages.push(action.payload)
      },
    },
  });

  
export const { setChannel, addMessage, setMessages } = channelSlice.actions
export default channelSlice.reducer
