import { createSlice } from '@reduxjs/toolkit';


type SignupLoginState = {
    open:boolean
}

const initialState:SignupLoginState = {
    open:false
}

export const signupLoginSlice = createSlice({
    "name":"signuplogin",
    initialState,
    reducers:{
        handleToggle:(state,action)=>{
            state.open = action.payload
        }
    }
})


export const {handleToggle} = signupLoginSlice.actions;

export default signupLoginSlice.reducer;