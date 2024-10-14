import { createSlice } from "@reduxjs/toolkit";
import TLoading from "@/types/loading.type";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import { isString } from "@/types/guards";
import actAuthLogout from "./act/actAuthLogout";

export interface IAuthState{
    user: {
        id: string;
        email: string;
        username: string;
      } | null;
    accessToken: string | null;
    loading: TLoading;
    error: string | null;
}
const initialState :IAuthState ={
    user: null,
    accessToken: null,
    loading: "idle",
    error: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        resetUI:(state)=>{
            state.loading = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // register
        builder.addCase(actAuthRegister.pending , (state)=>{
                    state.loading = "pending";
                })
                .addCase(actAuthRegister.fulfilled , (state)=>{
                    state.loading = "succeed";
                })
                .addCase(actAuthRegister.rejected , (state ,action)=>{
                    state.loading = "failed";
                    if (isString(action.payload))
                        state.error = action.payload
                })
                // login
                .addCase(actAuthLogin.pending , (state)=>{
                    state.loading = "pending";
                })
                .addCase(actAuthLogin.fulfilled , (state, action)=>{
                    state.loading = "succeed";
                    state.user = {id:action.payload.session?.user.id as string, email:action.payload.session?.user.email as string, username:action.payload.session?.user.user_metadata.display_name };
                    state.accessToken = action.payload.session?.access_token as string;
                })
                .addCase(actAuthLogin.rejected , (state ,action)=>{
                    state.loading = "failed";
                    if (isString(action.payload))
                        state.error = action.payload
                })
                // logout
                .addCase(actAuthLogout.pending , (state)=>{
                    state.loading = "pending";
                })
                .addCase(actAuthLogout.fulfilled , (state)=>{
                    state.loading = "succeed";
                    state.accessToken = null;
                    state.user = null;
                })
                .addCase(actAuthLogout.rejected , (state ,action)=>{
                    state.loading = "failed";
                    if (isString(action.payload))
                        state.error = action.payload
                })
    },
});
export {actAuthRegister , actAuthLogin , actAuthLogout};
export const {resetUI} = authSlice.actions;
export default authSlice.reducer;