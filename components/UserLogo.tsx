
import { makeStyles } from "@mui/styles"; 
// Avatar 
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

// Redux
import { useAppSelector } from "@/hooks/redux";



const useStyles = makeStyles({
    container:{
        display:"inline-flex",
        alignItems:"center",
        border:"3px solid #fff",
        fontFamily:"'Oswald', sans-serif",
        textTransform:"uppercase",
        borderRadius:"25px",
        padding:"6px 8px"
    }
})


const UserLogo = ()=>{
    const classes = useStyles();
    const user = useAppSelector((state)=>state.user.user);
    const avatar = createAvatar(lorelei, {
        seed: user?.name,
        // ... other options
    });
    return (

        <div className = {classes.container}>
            <div style = {{width:"30px",height:"30px"}} dangerouslySetInnerHTML={{ __html: avatar.toString() }} /> | {user?.name}
        </div>
    )
}

export default UserLogo;

