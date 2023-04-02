import {ReactNode,FC,useEffect} from "react";
// Redux
import { getUserHandler } from "@/store/userSlice";
import { useAppDispatch ,useAppSelector} from "@/hooks/redux";


interface Props{
    children:ReactNode
}

const UserProvider:FC<Props> = ({children})=>{
    const  dispatch  = useAppDispatch();
    const user = useAppSelector((state)=>state.user.user);
    useEffect(()=>{
        if(!user){
            dispatch(getUserHandler())
        }
    },[user])
    return (
        <>
        {children}
        </>
    )
}

export default UserProvider;