// react
import {FC,memo} from "react";
import Link from "next/link";


// material ui

import {
    Grid,
    Button,
    useTheme,
    Theme
} from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme:Theme)=>({
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
        textDecoration:"underline",
        textDecorationColor:theme.palette.primary.main,
        textDecorationThickness:"5px"
    },
    curlyBraces:{
        color:theme.palette.primary.main
    },
    ankerStyle:{
        fontFamily:"'Oswald', sans-serif",
        textTransform:"uppercase",
        cursor:"pointer"
    },
    resumeBtn:{
        "&.MuiButton-root":{
            border:"3px solid #fff",
        },
        "&.MuiButton-text":{
            color:"#fff"
        }
    }
}));


const Navbar:FC = ({scrollHandler})=>{
    const theme = useTheme();
    const classes = useStyles();
    return(
        <Grid container>
            <Grid xs = {8} item>
                <div className = {classes.logoContainer}>
                    <div className = {classes.logoCanvasContainer}>
                        {/*<Canvas>
                            <LogoSphere/>
                            <ambientLight intensity = {0.5}/>
                            <pointLight position = {[-10,10,-5]}/>
                            <spotLight intensity={0.5} position = {[0,-10,-10]}/>
                        </Canvas>*/}
                    </div>
                    <span className = {classes.logoText}><span className = {classes.curlyBraces}> &#123;</span> Ashish Prajapati <span className = {classes.curlyBraces}>&#125;</span></span>
                </div>
            </Grid>
            <Grid xs = {4} item>
                <div className = {classes.menuContainer}>
                        <a onClick = {()=>scrollHandler(1)} className = {classes.ankerStyle}>Portfolio</a>
                        <a onClick = {()=>scrollHandler(2)} className = {classes.ankerStyle}>About</a>
                        <a onClick = {()=>scrollHandler(3)} className = {classes.ankerStyle}>Contact</a>
                        <form method = "get" action = "/Resume/resume.pdf">
                            <Button type ="submit" className = {classes.resumeBtn}>
                                Resume
                            </Button>
                        </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default memo(Navbar);