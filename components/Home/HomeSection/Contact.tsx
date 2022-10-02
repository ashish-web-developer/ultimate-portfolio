import { makeStyles } from "@mui/styles";

import { 
    Theme,
    useTheme ,
    Button
} from "@mui/material";


const useStyles = makeStyles((theme:Theme)=>({
    contactSectionContainer:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    contactSectionHeaderText:{
        fontFamily: "'Bungee', cursive",
        fontSize:"2rem",
        textAlign:"center"
    },
    contactSubSectionContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    contactSectionSubtitleContainer:{
        display:"flex",
        width:"500px",
        fontFamily: "'Oswald', sans-serif",
        justifyContent:"center",
        textAlign:"center",
        marginTop:"0.6rem"
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
        
    },
    pageNumberStyle: {
        position: "absolute",
        fontFamily: "'Bungee', cursive",
        color: "rgb(255, 200, 124)",
        bottom: "0px",
        fontSize: "100px",
        textDecoration: "underline",
        backgroundImage: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent"
    },
}))




const Contact = ()=>{
    const theme:Theme = useTheme();
    const classes = useStyles();
    return (


        <div className = {classes.contactSectionContainer}>
            <div className = {classes.contactSectionHeaderText}>Get In Touch</div>
            <div className = {classes.contactSubSectionContainer}>
                <span style = {{fontFamily:"'Oswald', sans-serif",fontSize:"1.2rem"}}>Have any Questions?</span>
                <div className = {classes.contactSectionSubtitleContainer}>
                    I am currently looking for new opportunities, It would be great if got a chance to work as a full stack developer.
                    If you have any query, just want to say hi, I will try my best to get back to you.
                </div>
                <Button className = {classes.sayHelloCta} variant = "contained">Say Hello</Button>
            </div>
        </div>
    )
}

export default Contact;