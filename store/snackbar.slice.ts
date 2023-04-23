import { createSlice } from '@reduxjs/toolkit'
import { AlertColor } from '@mui/material/Alert'



type snackbarInitialState = {
    isOpen:boolean,
    message:string|null,
    severity:AlertColor
}

const initialState:snackbarInitialState = {
    isOpen:false,
    message:null,
    severity:"info",
}

export const snackbarSlice = createSlice({
    name:"snackbar",
    initialState,
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