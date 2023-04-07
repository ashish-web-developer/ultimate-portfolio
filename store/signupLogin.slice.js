import { createSlice } from '@reduxjs/toolkit';


export const signupLoginSlice = createSlice({
    "name":"signuplogin",
    initialState:{
        open:false
    },
    reducers:{
        handleToggle:(state,action)=>{
            state.open = action.payload
        }
    }
})


export const {handleToggle} = signupLoginSlice.actions;

export default signupLoginSlice.reducer;