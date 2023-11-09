import {
  Channel,
  ChannelMember,
  ChannelMessage,
  User,
} from "@/utils/types/chat/ChatTypes";
import { createSlice } from "@reduxjs/toolkit";

type ChatState = {
  selectedChannelorUser: Channel | User | null;
  channels: Channel[];
  users: User[];
  messages: ChannelMessage[];
  ChannelMember: ChannelMember | null;
};

const initialState: ChatState = {
  selectedChannelorUser: null,
  channels: [],
  users: [],
  messages: [],
  ChannelMember: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChannel: (state, action) => {
      state.selectedChannelorUser = action.payload;
      state.messages = [];
    },
    setChannelMember: (state, action) => {
      state.ChannelMember = action.payload;
    },
    setTheUser: (state, action) => {
      state.selectedChannelorUser = action.payload;
      state.messages = [];
    },
    setNewChannel: (state, action) => {
      state.channels.push(action.payload);
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setUserDms: (state, action) => {
      state.users = action.payload;
    },
    setNewUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const {
  setChannel,
  addMessage,
  setMessages,
  setChannels,
  setNewChannel,
  setChannelMember,
  setTheUser,
} = chatSlice.actions;
export default chatSlice.reducer;
