// React
import { NextPage } from "next";
import {useEffect, useState , Suspense} from "react";
// Mui
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

// Component
import SignUpLogin from "../components/Login/SignupLogin";
import PhonixBird from "../components/Login/Phoenix_bird";

// styles
import useStyles from "../styles/login";

// React Three js
import { Canvas } from "@react-three/fiber";
import {Loader} from "@react-three/drei";



const Login:NextPage = ()=>{
    const [isLoaded,setIsLoaded] = useState<Boolean>(false);
    const classes = useStyles();


    useEffect(()=>{
        setIsLoaded(true);
    },[])
    return (
        isLoaded && 
        <>
            <div className = {classes.container}>
                <Grid sx = {{height:"100%"}} container>
                    <Grid item xs = {5}>
                        <SignUpLogin/>
                    </Grid>
                    <Grid item xs = {7}>
                        <div className = {classes.loginRHS}>
                            <div className = {classes.modelContainer}>
                                <Canvas>
                                    <ambientLight intensity={0.5} />
                                    <pointLight position={[-10, 10, -5]} />
                                    <spotLight intensity={0.5} position={[0, -10, -10]} />
                                    <Suspense>
                                        <PhonixBird rotation={[0, 3.5, 0]} position={[-3,-100,-700]} />
                                    </Suspense>
                                </Canvas>
                            </div>
                            <div className = {classes.loginRHSContentContainer}>
                                <h1 className = {classes.loginRHSTitle}>Lets Expore New World</h1>
                                <div className ={classes.subtitle}>
                                    You will get unlimited access to all blog, and you can create your own personal blog free, can contact me also, for any further query.
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Loader/>
        </>
    )
}

export default Login;