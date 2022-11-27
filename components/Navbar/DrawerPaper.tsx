import {FC} from "react";
// Mui
import {
    Icon,
    IconButton,
    Avatar
} from "@mui/material"

// Icons
import {VscChromeClose} from "react-icons/vsc"


// Redux
import { useDispatch } from "react-redux";
import { togglerNavbar } from "@/store/Navbar/navbar.slice";


const DrawerPaper:FC<any> = ({classes})=>{
    const dispatch = useDispatch();
    return (
        <div className = {classes.drawerContent}>
        <div className = {classes.closeIconContainer}>
            <IconButton onClick = {()=>dispatch(togglerNavbar(false))}>
                <VscChromeClose color="#fff" size = {30}/>
            </IconButton>
        </div>
        <div className = {classes.bottomContainer}>
            <Avatar className = {classes.bottomAvatar} alt="Remy Sharp" src="ashish.png" />
            <div className={classes.bottomContent}>
                Ashish Prajapati
            </div>
        </div>
        </div>
    )
}

export default DrawerPaper;