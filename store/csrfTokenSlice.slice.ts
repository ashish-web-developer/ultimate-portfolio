import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import axios from "axios";
import Cookies from "universal-cookie"

axios.defaults.withCredentials = true; //

const cookies = new Cookies();


export const getCsrfToken = createAsyncThunk<void,void,{state:RootState}>(
    "csrf",
    async (_,{dispatch,rejectWithValue})=>{
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`);
            const csrfToken = cookies.get("XSRF-TOKEN");
            dispatch(updateCsrfToken(csrfToken))
            return;
        }catch(error:any){
            return rejectWithValue(error?.response?.data);
        }
    }
)


export const csrfTokenSlice = createSlice({
    name:"csrf",
    initialState:{
        value:""
    },
    reducers:{
        updateCsrfToken:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export const {updateCsrfToken} = csrfTokenSlice.actions;
export default csrfTokenSlice.reducer;