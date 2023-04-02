// React 
import {useState} from "react";

// Avatar 
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

import { makeStyles } from "@mui/styles";
// Mui
import {
    IconButton,
    Badge
} from "@mui/material";

//Icons
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


// Axios
import { useAxios } from "@/hooks/common";

// Types
import { Comment } from "@/types/blogs";
import User from "@/types/user";
import { FC } from "react";

// Helpers
import { getTimeDiff } from "@/helpers/common";

const useStyles = makeStyles({
    container:{
        padding:"20px 0px",
        display:"flex",
        flexDirection:"column"
    },
    userContainer:{
        display:"flex",
        alignItems:"center",
        gap:"20px"
    },
    avatarContainer:{
        width:"50px",
        height:"50px",
        border:"3px solid #fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"50%"
    },
    userName:{
        fontFamily: "'Bungee', cursive",
    },
    userComment:{
        fontFamily:"'Allerta Stencil', sans-serif",
        marginLeft:"68px"
    },
    actionsCtaContainer:{
        marginLeft:"68px",
        display:"flex",
        gap:"10px"
    },
    voteActionCta:{
        "&.MuiIconButton-root":{
            color:"#fff"
        }
    },
    badgeStyle:{
        "&.MuiBadge-badge":{
            left:"10px",
        },
        "&.MuiBadge-colorSecondary":{
            backgroundColor:"#fff !important"
        }
    },
    timeDiff:{
        fontFamily:"'Allerta Stencil', sans-serif",
    }
})
interface Props {
    blogId:number,
    comment:Comment,
    commentUser:User,
    user:User
}
const UserComment:FC<Props> = ({blogId, comment,commentUser,user})=>{
    const classes = useStyles();
    const [commentData,setCommentData] = useState(comment);
    const avatar = createAvatar(lorelei, {
        seed: commentUser?.name,
        // ... other options
    });
    const {axios} = useAxios();

    const upvoteHandler = async ()=>{
        const res = await axios.post("/api/comment/upvote",{
            blog_id:blogId,
            comment_id:comment.id,
        })
        setCommentData(res.data.comment);
    }
    const downvoteHandler = async ()=>{
        const res = await axios.post("/api/comment/downvote",{
            blog_id:blogId,
            comment_id:comment.id,
        })
        setCommentData(res.data.comment);
    }
    return (
        <div className = {classes.container}>
            <div className = {classes.userContainer}>
                <div className={classes.avatarContainer} >
                    <div style = {{width:"40px",height:"40px"}} dangerouslySetInnerHTML={{ __html: avatar.toString() }} />
                </div>
                <div className = {classes.userName}>
                    {commentUser.name}<span className = {classes.timeDiff}> | {getTimeDiff(comment.created_at)}</span> 
                </div>
            </div>
            <div className = {classes.userComment}>
                {commentData.body}
            </div>
            <div className = {classes.actionsCtaContainer}>
                <IconButton onClick = {upvoteHandler} className = {classes.voteActionCta} aria-label="upvote" color="primary">
                    <Badge 
                        className = {classes.badgeStyle}
                        color="secondary" 
                        badgeContent={commentData.like?.filter((like)=>like.like==1).length}
                    >
                        {(commentData.like?.some((like)=>like.like==1 && like.user_id == user?.id))?<ThumbUpIcon/>: <ThumbUpOffAltOutlinedIcon/>}
                    </Badge>
                </IconButton>
                <IconButton onClick = {downvoteHandler} className = {classes.voteActionCta} aria-label="downvote" color="primary">
                    <Badge 
                        className = {classes.badgeStyle}
                        color="secondary" 
                        badgeContent={commentData.like?.filter((like)=>like.like==0).length}
                    >
                    {(commentData.like?.some((like)=>like.like == 0 && like.user_id == user?.id))?<ThumbDownIcon/>:<ThumbDownAltOutlinedIcon/>}
                    </Badge>
                </IconButton>
            </div>
        </div>
    )
}

export default UserComment;