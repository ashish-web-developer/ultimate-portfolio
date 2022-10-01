import { makeStyles } from "@mui/styles";

import { 
    Theme,
    useTheme ,
    Button
} from "@mui/material";


const useStyles = makeStyles((theme:Theme)=>({
    contactSectionContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    contactSectionSubtitleContainer:{
        display:"flex",
        width:"500px",
        justifyContent:"center",
        textAlign:"center"
    },
    sayHelloCta:{
        "&.MuiButton-root":{
            backgroundColor:"#e2cf52",
            color:"#000",
            marginTop:"2rem",
            fontFamily:"'Oswald', sans-serif",
            fontSize:"1rem",
            width:"150px"

        },
        "&.MuiButton-root:hover":{
            backgroundColor:"#e2cf52",
        }
        
    }
}))




const Contact = ()=>{
    const theme:Theme = useTheme();
    const classes = useStyles();
    return (
        <div>
            <h1 style = {{textAlign:"center"}}>Get In Touch</h1>
            <div className = {classes.contactSectionContainer}>
                Have any Questions?
                <div className = {classes.contactSectionSubtitleContainer}>
                    I am currently looking for new opportunities, It would be great if got a chance to work as a full stack developer.
                </div>
                <Button className = {classes.sayHelloCta} variant = "contained">Say Hello</Button>
            </div>
        </div>
    )
}

export default Contact;