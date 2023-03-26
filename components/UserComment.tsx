// Avatar 
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

import { makeStyles } from "@mui/styles";

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
    }
})

const UserComment = ({comment,user})=>{
    const classes = useStyles();
    const avatar = createAvatar(lorelei, {
        seed: user?.name,
        // ... other options
    });
    return (
        <div className = {classes.container}>
            <div className = {classes.userContainer}>
                <div className={classes.avatarContainer} >
                    <div style = {{width:"40px",height:"40px"}} dangerouslySetInnerHTML={{ __html: avatar.toString() }} />
                </div>
                <div className = {classes.userName}>
                    {user.name}
                </div>
            </div>
            <div className = {classes.userComment}>
                {comment.body}
            </div>
        </div>
    )
}

export default UserComment;