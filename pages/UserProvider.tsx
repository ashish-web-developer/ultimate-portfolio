import {ReactNode,FC,useEffect} from "react";
// Redux
import { getUserHandler } from "@/store/userSlice";
import { useAppDispatch ,useAppSelector} from "@/hooks/redux";
import { hideSnackbar } from "@/store/snackbar.slice";
import { getCsrfToken } from "@/store/csrfTokenSlice.slice";

// Mui
import { Snackbar,Alert } from "@mui/material";


interface Props{
    children:ReactNode
}

const UserProvider:FC<Props> = ({children})=>{
    const  dispatch  = useAppDispatch();
    const user = useAppSelector((state)=>state.user.user);
    const isSnackbarOpen = useAppSelector((state)=>state.snackbar.isOpen);
    const snackbarMessage = useAppSelector((state)=>state.snackbar.message);
    const severity  = useAppSelector((state)=>state.snackbar.severity);
    useEffect(()=>{
        if(!user){
            dispatch(getUserHandler())
        }
    },[user])
    useEffect(()=>{
        dispatch(getCsrfToken());
    },[])
    return (
        <>
        <Snackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={()=>dispatch(hideSnackbar())}>
            <Alert  severity={severity} sx={{ width: '100%' }} onClose={()=>dispatch(hideSnackbar())}>
               {snackbarMessage} 
            </Alert>
        </Snackbar>

        {children}
        </>
    )
}

export default UserProvider;