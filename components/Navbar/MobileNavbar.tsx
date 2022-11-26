import {FC} from "react";


// Mui
import { Drawer } from "@mui/material";


// Redux
import { useDispatch,useSelector } from "react-redux";
import { togglerNavbar } from "@/store/Navbar/navbar.slice";

interface Props{
    anchor:"left"|"right"|"top"|"bottom";
}

const MobileNavbar:FC<Props> = ({anchor})=>{
    const isOpen = useSelector((state)=>state.navbar.isOpen)
    const dispatch = useDispatch();
    console.log("value of is open",isOpen)
    return (
        <>
            <button onClick={()=>dispatch(togglerNavbar(true))}> click it</button>
            <Drawer
            anchor={anchor}
            open = {isOpen}
            onClose = {()=>dispatch(togglerNavbar(false))}
            >
                Hello world
            </Drawer>
        </>
    )
}

export default MobileNavbar;