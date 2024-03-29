// react
import {FC,memo} from "react";
import {useRouter} from "next/router";
import Link from "next/link";


// material ui

import {
    Grid,
    Button,
    useTheme,
    Theme
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Avatar 
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';


// Redux
import { useAppSelector ,useAppDispatch} from "@/hooks/redux";
import { logoutHandler } from "@/store/userSlice";


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
    },
    userLogoContainer:{
        display:"flex",
        alignItems:"center",
        border:"3px solid #fff",
        fontFamily:"'Oswald', sans-serif",
        textTransform:"uppercase",
        borderRadius:"25px",
        padding:"6px 8px"
    }

}));


interface Props{
    scrollHandler:(offset:Number)=>void;
}

const Navbar:FC<Props> = ({scrollHandler})=>{
    const user = useAppSelector((state)=>state.user.user);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const classes = useStyles();
    const router = useRouter();
    const resumeClickHandler = ()=>{
        router.push("/Resume/resume.pdf")
    }
    const avatar = createAvatar(lorelei, {
        seed: user?.name,
        // ... other options
    });

    console.log("value of avatar",avatar.toString());

    return(
        <Grid container>
            <Grid xs = {user?6:8} item>
                <div className = {classes.logoContainer}>
                    <div className = {classes.logoCanvasContainer}>
                        {/*<Canvas>
                            <LogoSphere/>
                            <ambientLight intensity = {0.5}/>
                            <pointLight position = {[-10,10,-5]}/>
                            <spotLight intensity={0.5} position = {[0,-10,-10]}/>
                        </Canvas>*/}
                    </div>
                    {user ? 
                        <div className = {classes.userLogoContainer}>
                            <div style = {{width:"30px",height:"30px"}} dangerouslySetInnerHTML={{ __html: avatar.toString() }} /> | {user.name}
                        </div>:
                        <span className = {classes.logoText}><span className = {classes.curlyBraces}> &#123;</span> Ashish Prajapati <span className = {classes.curlyBraces}>&#125;</span></span>
                    }
                    
                </div>
            </Grid>
            <Grid xs = {user?6:4} item>
                <div className = {classes.menuContainer}>
                    {user?
                    <Link className = {classes.ankerStyle} href = "/blogs">
                        blogs
                    </Link>:null
                    }
                    {user?
                    <Link className = {classes.ankerStyle} href = "/blog-edit">
                        write blog
                    </Link>:null
                    }
                    <a onClick = {()=>scrollHandler(1)} className = {classes.ankerStyle}>Portfolio</a>
                    <a onClick = {()=>scrollHandler(2)} className = {classes.ankerStyle}>About</a>
                    <a onClick = {()=>scrollHandler(3)} className = {classes.ankerStyle}>Contact</a>
                    <Button onClick = {()=>resumeClickHandler()} className = {classes.resumeBtn}>
                        Resume
                    </Button>
                    {
                        user?
                        <Button onClick = {()=>dispatch(logoutHandler())} className = {classes.resumeBtn}>
                            Sign Out
                        </Button>:
                        <Button onClick = {()=>router.push("/login")} className = {classes.resumeBtn}>
                            Sign In
                        </Button>

                    }
                </div>
            </Grid>
        </Grid>
    )
}


export default memo(Navbar);