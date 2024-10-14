import supabase from "@/services/supabase";
import { RootState } from "@/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actLikeToggle = createAsyncThunk("wishlist/actLikeToggle",async(id:number, thunkAPI)=>{
    const{rejectWithValue , getState} = thunkAPI;
    const {auth} = getState() as RootState;
    try {
        // 
        const { data,error } = await supabase.from('wishlist').select('*').eq('productId', id) ;
        if (error)
          throw error
        const isRecordExist = data;
        if(isRecordExist?.length){
             const { error } = await supabase
             .from('wishlist')
             .delete()
             .eq('productId',id )
            if(error)
              throw error
            return{type:"remove" , id};
        }
        else{
            const {  error } = await supabase
            .from('wishlist')
            .insert([
              { user_id:auth.user?.id , productId: id },
            ])
            .select();
            if (error)
              throw error
            return {type: "add" , id};
        }
        
    } catch (error) {
        return rejectWithValue(error);
    }
});
export default actLikeToggle;
