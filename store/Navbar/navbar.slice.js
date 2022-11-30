import { createSlice } from '@reduxjs/toolkit'



export const navbarSlice = createSlice({
    name:"navbar",
    initialState:{
        isOpen:false
    },
    reducers:{
        togglerNavbar:(state,action)=>{
            state.isOpen = action.payload
        }
    }
})

export const {togglerNavbar} = navbarSlice.actions;
export default navbarSlice.reducer;