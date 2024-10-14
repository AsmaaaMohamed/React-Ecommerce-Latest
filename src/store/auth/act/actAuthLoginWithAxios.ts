import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TFormData = {
    email: string;
    password: string;
  };
type TResponse = {
    user:{
        id:number;
        username:string;
        email:string;
    };
    accessToken:string;
}
const actAuthLogin = createAsyncThunk("auth/actAuthLogin" , async(formData: TFormData,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post<TResponse>('/login', formData);
        return res.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});
export default actAuthLogin;