import useStyles from "@/styles/Blog/comment.style";
import { useState } from "react";

import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import {
    TextField,
    Button
} from "@mui/material"

// Local Component
import UserLogo from "../UserLogo";

// Helpers
import { useAxios } from "@/hooks/common";

const Comment = ({blogsMeta,blogId})=>{
    const classes = useStyles();
    const [comment,setComment] = useState();
    const {axios} = useAxios();
    const commentSubmitHandler = async ()=>{
      const data = axios.post("/api/comment/create",{
        body:comment,
        blog_id:blogId
      })
      console.log("value of data",data);
    }
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
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled"
                fullWidth
                multiline
                className={classes.textField}
                onChange = {(event)=>setComment(event.target.value)}
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
                <Button className = {classes.cancelBtn}>
                    Cancel
                </Button>
                <Button onClick = {commentSubmitHandler} className = {classes.commentBtn}>
                    Comment
                </Button>
            </div>
        </div>
    )
}

export default Comment;