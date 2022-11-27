import {FC} from "react";
// Mui
import {
    Icon,
    IconButton
} from "@mui/material"

// Icons
import {GrClose} from "react-icons/gr";


// Redux
import { useDispatch } from "react-redux";
import { togglerNavbar } from "@/store/Navbar/navbar.slice";


const DrawerPaper:FC<any> = ({classes})=>{
    const dispatch = useDispatch();
    return (
        <>
        <div className = {classes.closeIconContainer}>
            <IconButton onClick = {()=>dispatch(togglerNavbar(false))}>
                <GrClose size = {24}/>
            </IconButton>
        </div>
        </>
    )
}

export default DrawerPaper;