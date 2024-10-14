import supabase from "@/services/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TFormData = {
    email: string;
    password: string;
  };

const actAuthLogin = createAsyncThunk("auth/actAuthLogin" , async(formData: TFormData,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI;
    try {
        const { data, error } = await supabase.auth.signInWithPassword(formData);
          if(error){
             throw error;
          }
        return data;
    } catch (error) {
        return(
            rejectWithValue(error)
        )
    }
});
export default actAuthLogin;