// React
import { useState,FC } from "react";

// Mui
import {
    Button,
    Modal,
    Box
} from "@mui/material";

// Local Components
import SignupLogin from "./SignupLogin";


// redux 
import { useAppSelector,useAppDispatch} from "@/hooks/redux";
import { handleToggle } from "@/store/signupLogin.slice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  boxShadow: 24,
  border:"2px solid #e2cf52",
  py:4,
  borderRadius:"10px"
};
const SignupLoginModal:FC = ()=>{
    const open = useAppSelector((state)=>state.signupLogin.open);
    const dispatch = useAppDispatch();
    return (
        <>
        <Modal
            open = {open}
            onClose = {()=>dispatch(handleToggle(false))}
        >
            <Box sx={{ ...style, width: 600 }}>
                <SignupLogin redirect={false}/>
            </Box>
        </Modal>
        </>
    )
}

export default SignupLoginModal;