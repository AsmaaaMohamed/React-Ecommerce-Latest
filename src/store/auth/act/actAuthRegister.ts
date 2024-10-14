import supabase from "@/services/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TFormData = {
    username: string;
    email: string;
    password: string;
  };
const actAuthRegister = createAsyncThunk("auth/actAuthRegister" , async(formData:TFormData , thunkAPI) =>{
    const {rejectWithValue} = thunkAPI;
    try {
        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options:{data:{display_name:formData.username}}
          });
          if(error){
            throw error;
         }
        const profileInsert = await supabase.from('profiles').insert([
            { id:data.user?.id, username: data.user?.user_metadata.display_name, email: data.user?.email }
          ]).select();
        if(profileInsert.error) throw error;
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
export default actAuthRegister;