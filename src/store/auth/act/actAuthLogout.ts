import supabase from "@/services/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actAuthLogout = createAsyncThunk("auth/actAuthLogout" , async(_,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI;
    try {
        const { error } = await supabase.auth.signOut()
          
          if(error){
             throw error;
          }
          return ;
    } catch (error) {
        return(
            rejectWithValue(error)
        )
    }
});
export default actAuthLogout;