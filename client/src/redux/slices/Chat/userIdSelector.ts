"user client";

import { RootState } from '../../store/store';




export const getUserId = (state: RootState) => {
  return state.userID.user;
};