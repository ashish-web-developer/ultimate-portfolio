import {FC} from "react";
import {useRouter} from "next/router"
// Mui
import {
    IconButton,
    Avatar,
    Stack,
    Button
} from "@mui/material"

// Icons
import {VscChromeClose} from "react-icons/vsc"



// Redux
import { useAppSelector,useAppDispatch } from "@/hooks/redux"; 
import { logoutHandler } from "@/store/userSlice";
import { togglerNavbar } from "@/store/Navbar/navbar.slice";


const DrawerPaper:FC<any> = ({classes})=>{
    const user = useAppSelector((state)=>state.user.user);
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className = {classes.drawerContent}>
        <div className = {classes.closeIconContainer}>
            <IconButton onClick = {()=>dispatch(togglerNavbar(false))}>
                <VscChromeClose color="#fff" size = {30}/>
            </IconButton>
        </div>
        <div className = {classes.navContainer}>
            <Stack spacing = {2}>
                <Button className = {classes.navButton}>
                    Portfolio
                </Button>
                <Button className = {classes.navButton}>
                    About
                </Button>
                <Button className = {classes.navButton}>
                    Contact
                </Button>

                <Button onClick = {()=>router.push("/Resume/resume.pdf")} className = {classes.resumeBtn}>
                    Resume
                </Button>
                {
                    user?
                    <Button onClick = {()=> dispatch(logoutHandler())} className = {classes.resumeBtn}>
                        Sign Out
                    </Button>:
                    <Button onClick = {()=>router.push("/login")} className = {classes.resumeBtn}>
                        Sign In
                    </Button>

                }
            </Stack>
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