import {axios} from "../lib/axios";
import Cookies from "universal-cookie";
import {useState,useEffect} from "react";
import { useRouter } from "next/router";
import {register,login} from "../types/login"
import User from "../types/user";

function useAuth(){
    const cookies = new Cookies();
    const token = cookies.get("token");
    const [isUserLoggedOut,setIsUserLoggedout]= useState<boolean>(false);
    const router = useRouter();
    const [user,setUser] = useState<User|null>(null);


    // register handler
    const register:register = (values,setSubmitting)=>{
        const {name,email,password} = values;
        axios.post("/api/register",{
            name,
            email,
            password
        }).then((res)=>{
            setSubmitting(false)
        }).catch((err)=>{
            setSubmitting(false);
            console.log("value of err",err);
        })
    }


    const login:login = (values,setSubmitting) =>{
        const {email,password} = values;
        axios.post("/api/login",{
            email,
            password
        }).then((res)=>{
            setSubmitting(false);
            cookies.set("token",res.data.token,{path:"/"});
            router.push("/")
        }).catch((err)=>{
            setSubmitting(false);
            console.log("value of err",err)
        })

    }


    // handling logout
    const logout = ()=>{
        axios.get("/api/logout",{
                headers : { Authorization: `Bearer ${token}` }
        }).then((res)=>{
            window.sessionStorage.removeItem('user');
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
        if(!window.sessionStorage.user){
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios.get("/api/user",config).then((res)=>{
                window.sessionStorage.setItem("user",JSON.stringify(res.data));
                setUser(JSON.parse(window.sessionStorage.user));
            }).catch((err)=>{
                setUser(null);
                console.log(err);
            })
        }else{
            setUser(JSON.parse(window.sessionStorage.user));
        }
    },[isUserLoggedOut])

    return {login,register,logout,user}
}


export default useAuth;