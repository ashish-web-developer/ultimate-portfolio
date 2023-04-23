import useStyles from "@/styles/Blog/comment.style";
import { useState ,FC, useEffect} from "react";

import {
    TextField,
    Button,
} from "@mui/material"

// Local Component
import UserLogo from "../UserLogo";

// types
import User from "@/types/user";


// Redux
import { commentSubmitHandler,updateCommentInputVal } from "@/store/blog.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

interface Props{
    blogsMeta:string;
    blogId:number;
    user:User|null
}
const Comment:FC<Props> = ({blogsMeta,blogId,user})=>{
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const isCommentDisabled = useAppSelector((state)=>state.blog.isCommentDisabled);
    const commentInputVal = useAppSelector((state)=>state.blog.commentInputVal);
    return (
        <div className = {classes.container}>
            <div className = {classes.commentTopContainer}>
                <UserLogo/> 
                <span className={classes.commentTopText}>
                    Comments
                </span>
            </div>
            <div className = {classes.metaContainer}>
                {blogsMeta}
            </div>
            <TextField
                value = {commentInputVal}
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled"
                fullWidth
                multiline
                className={classes.textField}
                onChange = {(event)=>dispatch(updateCommentInputVal(event.target.value))}
                placeholder = "Type your comment here....."
                InputProps={{
                    disableUnderline:true,
                    style: {
                        color: '#fff',
                        padding:"12px"
                    }
                }}
            />
            <div className = {classes.btnContainer}>
                <Button onClick = {()=>dispatch(updateCommentInputVal(""))} className = {classes.cancelBtn}>
                    Cancel
                </Button>
                <Button  disabled = {isCommentDisabled} onClick = {()=>dispatch(commentSubmitHandler({blog_id:blogId}))} className = {classes.commentBtn}>
                    Comment
                </Button>
            </div>
        </div>
    )
}

export default Comment;