import { Input,Button,Stack} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {FcGoogle}  from "react-icons/fc"
import {FaFacebook}  from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const useStyles = makeStyles({
    container:{
        backgroundColor:"#fff",
        border:"1px solid red",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    header:{
        color:"#000",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        fontFamily:"'Oswald', sans-serif;",
        marginBottom:"1.5rem"
    },
    headerText:{
        margin:"0px",
        padding:"0px",
        fontSize:"2rem"
    },
    headerSubtitle:{
        margin:"0px",
        padding:"0px"
    },
    emailContainer:{
        marginBottom:"1rem",
        width:"350px"
    },
    inputStyles:{
        border:"2px solid black",
        borderRadius:"5px",
        padding:"0.2rem 1rem"
    },
    signBtnContainer:{
        width:"350px",
    },
    submitBtnStyles:{
        backgroundColor:"#000",
        border:"none",
        width:"350px",
        padding:"1rem 1rem",
        borderRadius:"5px",
    },
    submitCta:{
        "&.MuiButton-root":{
            color:"#fff",
            fontFamily:"'Oswald', sans-serif;",
            backgroundColor:"#000"
        },
    },
    socialCta:{
        "&.MuiButton-root":{
            color:"#000",
            fontFamily:"'Oswald', sans-serif;",
        },
        "&.MuiButton-outlined":{
            border: "2px black solid",
        },
    }
})

const SignupLogin = ()=>{
    const  classes = useStyles();
    return(
        <div className = {classes.container}>
            <div className = {classes.header}>
                <h3 className = {classes.headerText}>Welcome back</h3>
                <p className = {classes.headerSubtitle}>Please enter your Details</p>
            </div>
            <div className = {classes.emailContainer}>
                <Input className = {classes.inputStyles} type = "text" placeholder="Enter your email" fullWidth/>
            </div>
            <div className = {classes.signBtnContainer}>
                <Stack direction = "column" spacing = {2}>
                <Button className = {classes.submitCta} variant = "contained">Continue</Button>
                <Button className = {classes.socialCta} fullWidth startIcon = {<FcGoogle/>} variant = "outlined">Continue with Google</Button>
                <Button className = {classes.socialCta} fullWidth startIcon = {<FaFacebook/>} variant = "outlined">Continue with Facebook</Button>
                <Button className = {classes.socialCta} fullWidth startIcon = {<FaGithub/>} variant = "outlined">Continue with Github</Button>
                </Stack>
            </div>
        </div>
    )
}

export default SignupLogin;