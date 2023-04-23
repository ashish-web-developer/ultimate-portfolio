
import {useEffect, useState,ReactDOM,useRef, useCallback,FC} from "react";
import Link from "next/link";
import Head from "next/head";


import { makeStyles } from "@mui/styles";
import {
    Theme,
    Grid,
    Input,
    useMediaQuery
} from "@mui/material";


import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";



import Blocks from 'editorjs-blocks-react-renderer';

import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';


// Local Component
import Comment from "@/components/Blog/Comment";
import SignupLoginModal from "@/components/Login/SignupLoginModal";


// Types
import { Blog, Comment as CommentType } from "@/types/blogs";
import UserComment from "@/components/UserComment";


// Redux
import { useAppSelector } from "@/hooks/redux";
import { useAppDispatch } from "@/hooks/redux";
import { updateComments } from "@/store/blog.slice";

const useStyles = makeStyles({
    blogContainer:{
        padding:"50px 160px 0px 160px",
        ['@media(max-width:780px)']:{
            padding:"50px 18px 0px 18px",
        }

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
        fontSize:"2rem",
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
        color:"#e2cf52",
        ['@media(max-width:780px)']:{
            fontSize:"1.6rem"
        }
    },
    blogImageContainer:{
        position:"relative",
        width:"100%",
        border:"5px solid #e2cf52",
        borderRadius: "0px 80px 0px 80px",
        overflow:"hidden",
        ['@media(max-width:780px)']:{
            border:"2px solid #e2cf52",
            borderRadius: "0px 20px 0px 20px",
        }
    },
    bottomBox:{
        position:"absolute",
        bottom:"0px",
        right:"0px",
        height:"100px",
        width:"100px",
        background:"#e2cf52",
        zIndex:"10",
        ['@media(max-width:780px)']:{
            height:"30px",
            width:"30px",
        }

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
    },
    tableContainer:{
        width:"100%",
        "& thead tr th":{
            borderBottom:"2px solid #fff",
            padding:"8px 0px"
        },
        "& tbody tr td":{
            textAlign:"center",
            borderBottom:"1px solid #fff",
            padding:"8px 0px"
        }
    },
    list:{
        fontFamily:"'Allerta Stencil', sans-serif",
        "& li":{
            marginBottom:"12px",
            marginLeft:"100px",
        },
        ['@media(max-width:780px)']:{
            "& li":{
                marginBottom:"12px",
                marginLeft:"16px",
            }
        }
    }
})

interface Props {
    blogsData:Blog;
}

const Blogs  = ({blogsData}:Props)=>{
    const classes = useStyles();
    const [isPageLoaded,setIsPageLoaded] = useState(false);
    const [blogsCreationDate,setBlogCreationDate] = useState<Date>();
    const isMobile = useMediaQuery('(max-width:758px)');
    const user = useAppSelector((state)=>state.user.user);
    const comments = useAppSelector((state)=>state.blog.comments)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(updateComments(blogsData.comments));
        setIsPageLoaded(true);
    },[])

    const onRefChange = useCallback((node:any)=>{
        if(node){
            hljs.highlightAll();
            let elements = Array.from(document.getElementsByClassName("hljs")).forEach(function(element){
                let parentEl = element.parentElement;
                if(parentEl){
                    parentEl.style.cssText=`
                    border:3px solid #e2cf52;
                    border-radius:10px;
                    overflow:hidden;
                    `;
                }
            });
        }
    },[])



    if(!isPageLoaded){
        return;
    }
    return (
        <>
            <Head>
                <title>Ultimate Dev | {blogsData.title}</title>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={blogsData.title}/>
                <meta property="og:description" content={blogsData.meta_description}/>
                <meta property="og:image" content= {blogsData["featured image"]}/>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ashish_classic" />
                <meta name="twitter:title" content={blogsData.title} />
                <meta name="twitter:description" content={blogsData.meta_description} />
                <meta name="twitter:image" content={blogsData["featured image"]} />
            </Head>
            <div className = {classes.blogContainer}>
                <SignupLoginModal/>
                {blogsData && 
                    <>
                        <div className = {classes.header}>
                            <Grid  container>
                                <Grid item xs = {12} md={4} >
                                    <div className = {classes.headerTitle}>
                                        {blogsData.user}
                                    </div>
                                </Grid>
                                <Grid item xs = {0} md = {8}>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <div className = {classes.blogsSubtitleContainer}>
                                <div>Blogs</div>
                                <div style = {{width:"25px",height:"2px",backgroundColor:"#fff",margin:"0px 6px"}}></div>
                                {/*<div style = {{color:"#fff"}}>{`Posted At ${blogsCreationDate?.getDate()} ${blogsCreationDate?.getMonth()} ${blogsCreationDate?.getFullYear()}`}</div>*/}
                            </div>
                                <div className = {classes.blogTitleContainer}>
                                    {blogsData.title}
                                </div>
                                <div className = {classes.blogImageContainer}>
                                    <img width="100%" src = {blogsData["featured image"]}/>
                                    <span className={classes.bottomBox}>
                                    </span>
                                </div>
                                <Grid container>
                                    <Grid item xs = {0} md = {2}>


                                        {
                                            !isMobile && 
                                            <div className={classes.socialIconContainer}>
                                                <div className={classes.socialIcon}>
                                                    <Link href="https://twitter.com/ashish_classic">
                                                        <BsTwitter size={24} color="#000" />
                                                    </Link>
                                                </div>
                                                <div className={classes.socialIcon}>
                                                    <Link href="https://github.com/ashish-web-developer">
                                                        <FaGithubAlt size={24} color="#000" />
                                                    </Link>
                                                </div>
                                                <div className={classes.socialIcon}>
                                                    <Link href="https://www.linkedin.com/in/ashish-classic">
                                                        <GrLinkedinOption size={24} color="#000" />
                                                    </Link>
                                                </div>
                                            </div>
                                        }
                                    </Grid>
                                    <Grid ref = {onRefChange} item xs = {12} md={10}>
                                        <Blocks 
                                            data = {blogsData.blogs} 
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
                                                },
                                                table:{
                                                    className:classes.tableContainer
                                                },
                                                list:{
                                                    className:classes.list
                                                }
                                            }}/>
                                    </Grid>
                                </Grid>
                        </div>
                    </>

                }
                <Comment user = {user} blogsMeta = {blogsData.meta_description} blogId = {blogsData.id}/>
                {
                    comments?.map((comment,index)=>{
                        return <UserComment user = {user} blogId = {blogsData.id} comment = {comment} commentUser = {comment.user} key = {index} />
                    })
                }
            </div>
        </>
    )

}


export async function getServerSideProps({params}:any){
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/get-blog`,{
            method:"POST",
            body:JSON.stringify({
                slug:params.blog
            }),
            headers:{
                "Content-type":"Application/json"
            }
        });
        const data:Blog = await res.json();
        return {
            props:{
               blogsData:data
            }
        }
}

export default Blogs;