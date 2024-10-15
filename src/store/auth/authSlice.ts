import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState{
    user: {
        id: string;
        email: string;
        username: string;
      } | null;
    accessToken: string | null;
}
const initialState :IAuthState ={
    user: null,
    accessToken: null,
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken
    },
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;