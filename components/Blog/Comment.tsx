import useStyles from "@/styles/Blog/comment.style";
import { useState ,FC, useEffect} from "react";

import {
    TextField,
    Button,
} from "@mui/material"

// Local Component
import UserLogo from "../UserLogo";

// Helpers
import { useAxios } from "@/hooks/common";

// types
import { Comment as CommentType } from "@/types/blogs";
import User from "@/types/user";


// Redux
import { handleToggle } from "@/store/signupLogin.slice";
import { showSnackbar } from "@/store/snackbar.slice";
import { useAppDispatch } from "@/hooks/redux";

interface Props{
    blogsMeta:string;
    blogId:number;
    updateComments:(comments:Array<CommentType>)=>void;
    user:User
}
const Comment:FC<Props> = ({blogsMeta,blogId,updateComments,user})=>{
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const [comment,setComment] = useState<string>("");
    const [isCommentDisabled,setIsCommentDisabled] = useState<boolean>(true);
    const {axios} = useAxios();
    const commentSubmitHandler = async ()=>{
        if(user){
            setIsCommentDisabled(true);
            const res = await axios.post("/api/comment/create",{
                body:comment,
                blog_id:blogId
            })
            updateComments(res.data.comments);
            setComment("");
            setIsCommentDisabled(false);
            dispatch(showSnackbar({
                message:"Comment Posted Successfully",
                severity:"info",
            }))
        }else{
            // For Open signup modal
            dispatch(handleToggle(true));
        }
    }
    const onCancelHandler = ()=>{
        setComment("");
    }
    useEffect(()=>{
        if(comment){
            setIsCommentDisabled(false);
        }else{
            setIsCommentDisabled(true);
        }
    },[comment])
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
                value = {comment}
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
                <Button onClick = {onCancelHandler} className = {classes.cancelBtn}>
                    Cancel
                </Button>
                <Button  disabled = {isCommentDisabled && !comment} onClick = {commentSubmitHandler} className = {classes.commentBtn}>
                    Comment
                </Button>
            </div>
        </div>
    )
}

export default Comment;