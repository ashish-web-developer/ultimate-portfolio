import { createSlice } from '@reduxjs/toolkit'



export const snackbarSlice = createSlice({
    name:"snackbar",
    initialState:{
        isOpen:false,
        message:null,
        severity:"info",
    },
    reducers:{
        showSnackbar:(state,action)=>{
            state.isOpen = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        hideSnackbar:(state)=>{
            state.isOpen = false;
        }
    }
})

export const {showSnackbar,hideSnackbar} = snackbarSlice.actions;
export default snackbarSlice.reducer;