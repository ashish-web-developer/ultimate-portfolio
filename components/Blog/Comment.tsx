import useStyles from "@/styles/Blog/comment.style";
import { useState ,FC} from "react";

import {
    TextField,
    Button,
} from "@mui/material"

// Local Component
import UserLogo from "../UserLogo";

// Helpers
import { useAxios } from "@/hooks/common";

interface Props{
    blogsMeta:string;
    blogId:number
}
const Comment:FC<Props> = ({blogsMeta,blogId})=>{
    const classes = useStyles();
    const [comment,setComment] = useState<string>();
    const [isCommentDisabled,setIsCommentDisabled] = useState<boolean>(false);
    const {axios} = useAxios();
    const commentSubmitHandler = async ()=>{
        setIsCommentDisabled(true);
        const data = await axios.post("/api/comment/create",{
            body:comment,
            blog_id:blogId
        })
        setIsCommentDisabled(false);
    }
    const onCancelHandler = ()=>{
        setComment("");
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
                <Button  disabled = {isCommentDisabled} onClick = {commentSubmitHandler} className = {classes.commentBtn}>
                    Comment
                </Button>
            </div>
        </div>
    )
}

export default Comment;