// React
import { NextPage } from "next";
import {useEffect, useState , Suspense} from "react";
import dynamic from "next/dynamic";
// Mui
import { Grid,useMediaQuery } from "@mui/material";

// Local Component
import SignUpLogin from "../components/Login/SignupLogin";

const Model = dynamic(()=>import("../components/Login/Model"),{
    ssr:false
})

// styles
import useStyles from "../styles/login";

// React Three js
import {Loader} from "@react-three/drei";



const Login:NextPage = ()=>{
    const [isLoaded,setIsLoaded] = useState<Boolean>(false);
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:780px)');



    useEffect(()=>{
        setIsLoaded(true);
    },[])
    return (
        isLoaded && 
        <>
            <div className = {classes.container}>
                <Grid sx = {{height:"100%"}} container>
                    <Grid item xs = {12} md={5}>
                        <SignUpLogin/>
                    </Grid>
                    {
                        !isMobile &&<Grid item xs = {12} md={7}>
                            <Model classes = {classes}/>
                        </Grid>
                    }
                </Grid>
            </div>
            <Loader/>
        </>
    )
}

export default Login;