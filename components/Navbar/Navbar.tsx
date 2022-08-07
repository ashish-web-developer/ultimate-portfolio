// react
import {FC,memo} from "react";
import Link from "next/link";


// material ui

import {Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";


// three js

import { Canvas} from "@react-three/fiber"

// component
import LogoSphere from "./LogoSphere";


const useStyles = makeStyles({
    menuContainer:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    logoContainer:{
        display:"flex",
        alignItems:"flex-start",
    },
    logoCanvasContainer:{
        width:"70px",
        height:"70px"
    },
    logoText:{
        fontFamily:"'Bungee', cursive",
        color:"#fff",
        fontSize:"20px",
        textDecoration:"underline"
    },
    ankerStyle:{
        fontFamily:"'Oswald', sans-serif",
        textTransform:"uppercase"
    }
})


const Navbar:FC = ()=>{
    const classes = useStyles();
    return(
        <Grid container>
            <Grid xs = {8} item>
                <div className = {classes.logoContainer}>
                    <div className = {classes.logoCanvasContainer}>
                        <Canvas>
                            <LogoSphere/>
                            <ambientLight intensity = {0.5}/>
                            <pointLight position = {[-10,10,-5]}/>
                            <spotLight intensity={0.5} position = {[0,-10,-10]}/>
                        </Canvas>
                    </div>
                    <span className = {classes.logoText}>Ashish Prajapati</span>
                </div>
            </Grid>
            <Grid xs = {4} item>
                <div className = {classes.menuContainer}>
                    <Link href = "/">
                        <a className = {classes.ankerStyle}>About</a>
                    </Link>
                    <Link href = "/">
                        <a className = {classes.ankerStyle}>Portfolio</a>
                    </Link>
                    <Link href = "/">
                        <a className = {classes.ankerStyle}>Contact</a>
                    </Link>
                </div>
            </Grid>
        </Grid>
    )
}

export default memo(Navbar);