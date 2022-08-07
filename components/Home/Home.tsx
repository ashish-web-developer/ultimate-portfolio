import {FC,memo} from 'React';
import { makeStyles } from '@mui/styles';


//components
import Navbar from '../Navbar/Navbar';
import ProjectCube from './ProjectCube';


//material ui
import { Grid } from '@mui/material';

// icons
import {ImFacebook} from "react-icons/im";
import {BsTwitter} from "react-icons/bs";
import {GrLinkedinOption} from "react-icons/gr";
import {FaGithubAlt} from "react-icons/fa";
import {CgArrowDown} from "react-icons/cg";
import Link from "next/link"


//three js

import { SpotLight } from "@react-three/drei"
import { Canvas} from "@react-three/fiber"

const useStyles  = makeStyles({
    container:{
        position:"relative",
        width:"100%",
        height:"100vh",
        minHeight:"700px",
        padding:"3rem"
    },
    socialIconContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"150px"
    },
    scrollCtaContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    pageNumberStyle:{
        position:"absolute",
        fontFamily:"'Bungee', cursive",
        color:"#fff",
        bottom:"0px",
        fontSize:"100px",
        textDecoration:"underline"
    },
    mainText:{
        fontFamily:"'Oswald', sans-serif",
        fontSize:"40px",
        fontWeight:"700"
    },
    mainTextHeader:{
        fontSize:"100px",
        backgroundColor:"#e2cf52",
        color:"#000",
        padding:"0px 50px"
    },
    mainTextSub:{
        letterSpacing:"35px"
    }
})


const Home:FC  = ()=>{
    const classes = useStyles();
    return(
        <div className = {classes.container}>
            <Navbar/>
            <span className={classes.pageNumberStyle}>01</span>
            <Grid  sx = {{height:"100%"}} container>
                <Grid sx = {{display:"flex",alignItems:"center"}} xs = {1} item>
                    <div className = {classes.socialIconContainer}>
                        <Link href = "/">
                            <a>
                                <ImFacebook/>
                            </a>
                        </Link>
                        <Link href = "/">
                            <a>
                                <BsTwitter/>
                            </a>
                        </Link>
                        <Link href = "/">
                            <a>
                                <FaGithubAlt/>
                            </a>
                        </Link>
                        <Link href="/"> 
                            <a>
                                <GrLinkedinOption/>
                            </a>
                        </Link>

                    </div>
                </Grid>
                <Grid xs = {10} item>
                    <Grid  sx = {{height:"100%"}} container>
                        <Grid xs = {6} item>
                            <Canvas>
                                <ambientLight intensity = {0.5}/>
                                <pointLight position = {[-10,10,-5]}/>
                                <spotLight intensity={0.5} position = {[0,-10,-10]}/>
                                <ProjectCube/>
                            </Canvas>
                        </Grid>
                        <Grid sx = {{display:"flex",alignItems:"center"}} xs = {6} item>
                            <div className = {classes.mainText}>
                                <span className = {classes.mainTextHeader}>CREATIVE</span>
                                 <br/> 
                                <span className = {classes.mainTextSub}><span style = {{color:"#e2cf52"}}>DEV</span>ELOPER</span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx = {{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}} xs = {1} item>
                    <div style = {{float:"right"}}>
                        <div className = {classes.scrollCtaContainer}>
                            <span style = {{writingMode:"vertical-rl"}}>SCROLL DOWN</span>
                            <CgArrowDown size = {40}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default memo(Home);