import {FC} from "react";

// Mui
import {
    Drawer, 
    Grid ,
    IconButton,
    useTheme
} from "@mui/material";

// Local components
import DrawerPaper from "@/components/Navbar/DrawerPaper";


// Redux
import { useDispatch,useSelector } from "react-redux";
import { togglerNavbar } from "@/store/Navbar/navbar.slice";


// Icons
import {GiHamburgerMenu} from "react-icons/gi"


// styles
import useStyles from "@/styles/mobileNavbar";


// Avatar 
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';


// Redux 
import { useAppSelector } from "@/hooks/redux";

interface Props{
    anchor:"left"|"right"|"top"|"bottom";
}

const MobileNavbar:FC<Props> = ({anchor})=>{
    const classes = useStyles();
    const isOpen = useSelector((state:any)=>state.navbar.isOpen)
    const user = useAppSelector((state)=>state.user.user);
    const dispatch = useDispatch();
    const avatar = createAvatar(lorelei, {
        seed: user?.name,
        // ... other options
    });
    return (
        <>
            <Drawer
            anchor={anchor}
            open = {isOpen}
            onClose = {()=>dispatch(togglerNavbar(false))}
            className = {classes.drawer}
            PaperProps={{
                sx:{
                    backgroundColor:"#000",
                    width:"100%"
                }
            }}
            >
                <DrawerPaper classes = {classes}/>
            </Drawer>
            <>
            <Grid className = {classes.container} container>
                <Grid xs = {8} item>
                    {
                        user?
                        <div className = {classes.userLogoContainer}>
                            <div style = {{width:"30px",height:"30px"}} dangerouslySetInnerHTML={{ __html: avatar.toString() }} /> | {user.name}
                        </div>:
                        <span className = {classes.logoText}><span className = {classes.curlyBraces}> &#123;</span> Ashish Prajapati <span className = {classes.curlyBraces}>&#125;</span></span>
                    }
                </Grid>
                <Grid className = {classes.navCtaContainer} xs = {4} item>
                    <IconButton className = {classes.navCta} onClick = {()=>dispatch(togglerNavbar(true))} aria-label="navigation" color="success">
                        <GiHamburgerMenu size = {24}/>
                    </IconButton>
                </Grid>
            </Grid>
            </>
        </>
    )
}

export default MobileNavbar;