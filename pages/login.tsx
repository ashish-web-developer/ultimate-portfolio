import { NextPage } from "next";
import {useEffect, useState} from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import SignUpLogin from "../components/Login/SignupLogin";


const useStyles = makeStyles({
    container:{
        backgroundColor:"#fff",
        width:"100%",
        height:"100vh"
    }
})

const Login:NextPage = ()=>{
    const [isLoaded,setIsLoaded] = useState<Boolean>(false);
    const classes = useStyles();


    useEffect(()=>{
        setIsLoaded(true);
    },[])
    return (
        isLoaded && 
        <div className = {classes.container}>
            <Grid sx = {{height:"100%"}} container>
                <Grid item xs = {4}>
                    <SignUpLogin/>
                </Grid>
                <Grid item xs = {8}>
                    hello world
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;