import {useEffect, useState} from "react";
import Link from "next/link";


import { makeStyles } from "@mui/styles";
import {
    Theme,
    Grid,
    Input
} from "@mui/material";


import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { CgArrowDown } from "react-icons/cg";



import Blocks from 'editorjs-blocks-react-renderer';


const useStyles = makeStyles({
    blogContainer:{
      padding:"50px 160px 0px 160px"
    },
    imageContainer:{
        width:"100%",
        margin:"0px",
        "& img":{
            width:"100%"
        }
    },
    headerContainer:{
        fontFamily: "'Oswald', sans-serif",
    },
    paraContainer:{
        fontFamily:"'Allerta Stencil', sans-serif"
    },
    header:{
      fontFamily:"'Oswald', sans-serif;",
      textTransform:"capitalize",
    },
    headerTitle:{
        fontFamily: "'Bungee', cursive",
        color: "rgb(255, 200, 124)",
        bottom: "0px",
        fontSize: "24px",
        textDecoration: "underline",
        backgroundImage: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent"
    },
    blogsSubtitleContainer:{
        display:"flex",
        alignItems:"center"
    },
    blogTitleContainer:{
        fontSize:"2rem",
        fontFamily: "'Bungee', cursive",
        color:"#e2cf52"
    },
    blogImageContainer:{
        width:"100%"
    },
    socialIconContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "300px",
        width:"100%",
        alignItems:"center",
        paddingTop:"30px"
    },
    socialIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e2cf52",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
    },
    codeContainer:{
    }
})


const Blogs  = ()=>{
    const classes = useStyles();
    const [isPageLoaded,setIsPageLoaded] = useState(false);
    const [blogsData,setBlogsData] = useState<any>([]);

    useEffect(()=>{
        (async function(){
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/get-blog`,{
                method:"POST"
            });
            const data = await response.json();
            setBlogsData(data);
        }())
        setIsPageLoaded(true);
    },[])



    if(!isPageLoaded){
        return;
    }
    return (
        <div className = {classes.blogContainer}>
            <div className = {classes.header}>
                <Grid  container>
                    <Grid item xs = {4} >
                        <div className = {classes.headerTitle}>
                            Ashish Prajapati
                        </div>
                    </Grid>
                    <Grid item xs = {8}>
                    </Grid>
                </Grid>
            </div>
            <div>
                <div className = {classes.blogsSubtitleContainer}>
                    <div>Blogs</div>
                    <div style = {{width:"25px",height:"2px",backgroundColor:"#fff",margin:"0px 6px"}}></div>
                    <div style = {{color:"#fff"}}>Posted At 01 December</div>
                </div>
                {blogsData.length && 
                <>
                    <div className = {classes.blogTitleContainer}>
                        {blogsData[1].title}
                    </div>
                    <div className = {classes.blogImageContainer}>
                        <img width="100%" src = {blogsData[1]["featured image"]}/>
                    </div>
                    <Grid container>
                        <Grid item xs = {2}>

                            <div className={classes.socialIconContainer}>
                                <div className={classes.socialIcon}>
                                    <Link href="https://www.facebook.com/thebadbluffer">
                                    <a>
                                        <ImFacebook size={24} color="#000" />
                                    </a>
                                    </Link>
                                </div>
                                <div className={classes.socialIcon}>
                                    <Link href="https://twitter.com/ashish_classic">
                                    <a>
                                        <BsTwitter size={24} color="#000" />
                                    </a>
                                    </Link>
                                </div>
                                <div className={classes.socialIcon}>
                                    <Link href="https://github.com/ashish-web-developer">
                                    <a>
                                        <FaGithubAlt size={24} color="#000" />
                                    </a>
                                    </Link>
                                </div>
                                <div className={classes.socialIcon}>
                                    <Link href="https://www.linkedin.com/in/ashish_classic">
                                    <a>
                                        <GrLinkedinOption size={24} color="#000" />
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs = {10}>
                            <Blocks 
                                data = {blogsData[1].blogs} 
                                config = {{
                                    image: {
                                        className:classes.imageContainer ,
                                        actionsClassNames: {
                                            stretched: true,
                                            withBorder: "image-block--with-border",
                                            withBackground: "image-block--with-background",
                                        }
                                    },
                                    paragraph: {
                                        className:classes.paraContainer,
                                    },
                                    header:{
                                        className:classes.headerContainer
                                    },
                                    code:{
                                        className:classes.codeContainer
                                    }

                                }}/>
                        </Grid>
                    </Grid>
                    </>
                }
            </div>
        </div>
    )
}

export default Blogs;