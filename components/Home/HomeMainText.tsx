import useStyles from "@/styles/home.style";
import { TypeAnimation } from "react-type-animation";
import { Hidden } from "@mui/material";

const HomeMainText = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.mainText}>
            <div className = {classes.introText}>👋  Hi I am Ashish </div>
            <span className={classes.mainTextHeader}>CREATIVE</span>
            <br />
            <Hidden smDown>
                <TypeAnimation 
                style = {{
                    letterSpacing:"35px"
                }}
                cursor={false}
                sequence = {["DEV",1000,"DEVELOPER",1000]}
                />
            </Hidden>
            <Hidden smUp>
                <TypeAnimation 
                style = {{
                    letterSpacing:"20px"
                }}
                cursor={false}
                sequence = {["DEV",1000,"DEVELOPER",1000]}
                />
            </Hidden>
        </div>

    )
}

export default HomeMainText;

