import axios from "../lib/axios";
import Cookies from "universal-cookie";
import {useState,useEffect} from "react";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useRouter } from "next/router";

function useAuth(){
    const [user,setUser] = useState(null);
    const cookies = new Cookies();
    const token = cookies.get("token");
    const [isUserLoggedOut,setIsUserLoggedout]= useState(false);
    const router = useRouter();

    // handling login
    const login = (email:string,password:string)=>{
        axios.post("/api/login",{
            email,
            password
        }).then((res)=>{
            cookies.set("token",res.data.token,{path:"/"});
            router.push("/")
        }).catch((err)=>{
            console.log("value of err",err)
        })
    }

    // handling logout
    const logout = ()=>{
        axios.get("/api/logout",{
                headers : { Authorization: `Bearer ${token}` }
        }).then((res)=>{
            setIsUserLoggedout(true);
        })
    }

    // getting user

    const getUser:Function = ()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get("/api/user",config).then((res)=>{
            console.log("value of user",res.data)
            return res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get("/api/user",config).then((res)=>{
            setUser(res?.data);
        }).catch((err)=>{
            setUser(null);
            console.log(err);
        })
    },[isUserLoggedOut])

    return {login,logout,user}
}


export default useAuth;