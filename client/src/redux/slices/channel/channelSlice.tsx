import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type ChannelValues = {
    id: string;
    channelName: string;
    type: string;
  };
  
type Messages = {
    message: string;
    sender: string;
    time: Date;
  };




type ChannelState = {
    selectedChannel: ChannelValues | null
    messages: Messages[]
  };
  
  const initialState: ChannelState = {
    selectedChannel: null,
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
      },
      addMessage: (state, action) => {
        state.messages.push(action.payload)
      },
    },
  });

  
export const { setChannel, addMessage, setMessages } = channelSlice.actions
export default channelSlice.reducer
