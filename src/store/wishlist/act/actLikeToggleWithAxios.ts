import { RootState } from "@/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk("wishlist/actLikeToggle",async(id:number, thunkAPI)=>{
    const{rejectWithValue , getState} = thunkAPI;
    const {auth} = getState() as RootState;
    try {
        const isRecordExist = await axios.get(`/wishlist?userId=${auth.user?.id}&productId=${id}`);
        if(isRecordExist.data.length){
            await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
            return{type:"remove" , id};
        }
        else{
            await axios.post(`/wishlist` , {userId:auth.user?.id , productId: id});
            return {type: "add" , id};
        }
        
    } catch (error) {
        return rejectWithValue(error);
    }
});
export default actLikeToggle;