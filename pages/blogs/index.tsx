import {useEffect, useState} from "react";
import Link from "next/link";


import { makeStyles } from "@mui/styles";
import {
    Theme,
    Grid,
    Input
} from "@mui/material";



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
    }
})


const Blogs  = ()=>{
    const classes = useStyles();
    const [isPageLoaded,setIsPageLoaded] = useState(false);
    const [blogsData,setBlogsData] = useState<any>([]);

    useEffect(()=>{
        (async function(){
            const response = await fetch("http://localhost:8000/api/blog");
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
                <Blocks 
                    data = {blogsData[0].blogs} 
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
                        }

                    }}/>
                }
            </div>
        </div>
    )
}

export default Blogs;