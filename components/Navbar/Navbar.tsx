// react
import {FC,memo} from "react";
import Link from "next/link";


// material ui

import {Grid, useMediaQuery} from "@mui/material";
import { makeStyles } from "@mui/styles";


// React icons

import {
    GiHamburgerMenu
 } from "react-icons/gi";



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
        textDecoration:"underline",
        textDecorationColor:"#e2cf52",
        textDecorationThickness:"5px",
        ['@media(max-width:780px)']:{
            fontSize:"18px",
        }
    },
    curlyBraces:{
        color:"#e2cf52"
    },
    ankerStyle:{
        fontFamily:"'Oswald', sans-serif",
        textTransform:"uppercase"
    }
})


const Navbar:FC = ()=>{
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:758px)');
    return(
        <Grid container>
            <Grid xs = {10}  md = {8} item>
                <div className = {classes.logoContainer}>
                    <span className = {classes.logoText}><span className = {classes.curlyBraces}> &#123;</span> Ashish Prajapati <span className = {classes.curlyBraces}>&#125;</span></span>
                </div>
            </Grid>
            {
            !isMobile ?<Grid xs = {4} item>
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
                    {/*<Link href = "/login">
                        <a className = {classes.ankerStyle}>Login</a>
                    </Link>*/}
                </div>
            </Grid>:
            <Grid sx = {{display:"flex",justifyContent:"flex-end"}} xs = {2} md = {4} item>
                <GiHamburgerMenu size = {30} color = "#fff"/>
            </Grid>
            }
        </Grid>
    )
}

export default memo(Navbar);