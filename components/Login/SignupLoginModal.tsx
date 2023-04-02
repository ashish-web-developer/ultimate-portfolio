// React
import { useState,FC } from "react";

// Mui
import {
    Button,
    Modal,
    Box,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
// Local Components
import SignupLogin from "./SignupLogin";


// redux 
import { useAppSelector,useAppDispatch} from "@/hooks/redux";
import { handleToggle } from "@/store/signupLogin.slice";



const useStyles = makeStyles({
    container:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        width:"600px",
        backgroundColor:"#000",
        border:"2px solid #e2cf52",
        padding:"40px 0px",
        borderRadius:"10px",
        ['@media(max-width:780px)']:{
            width:"100%"
        }
    }
})
const SignupLoginModal:FC = ()=>{
    const classes = useStyles();
    const open = useAppSelector((state)=>state.signupLogin.open);
    const dispatch = useAppDispatch();
    return (
        <>
        <Modal
            open = {open}
            onClose = {()=>dispatch(handleToggle(false))}
        >
            <div className = {classes.container}>
                <SignupLogin redirect={false}/>
            </div>
        </Modal>
        </>
    )
}

export default SignupLoginModal;