import { makeStyles } from "@mui/styles"; 



const useStyles = makeStyles({
    container:{
        backgroundColor:"#000",
        width:"100%",
        height:"100vh",
    },
    signLoginContainer:{
        backgroundColor:"#000",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"center",
        paddingLeft:"5rem"
    },
    header:{
        color:"#000",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        fontFamily:"'Oswald', sans-serif;",
        marginBottom:"1.5rem"
    },
    headerText:{
        margin:"0px",
        padding:"0px",
        fontSize:"2rem",
        color:"#fff"

    },
    headerSubtitle:{
        margin:"0px",
        padding:"0px",
        color:"#5c5c67"
    },
    emailContainer:{
        marginBottom:"1rem",
        width:'80%',
    },
    inputLabel:{
        "&.MuiInputLabel-root":{
            color:"#5c5c67"
        }
    },
    inputStyles:{
        "&.MuiInput-root":{
            borderBottom:"2px solid #e2e3e6",
            borderRadius:"0px",
            padding:"0.2rem 0rem",
            color:"#fff",
            width:"100%"
        }
    },
    checkboxStyles:{
        "&.MuiCheckbox-root":{
            color:"#5c5c67"
        }
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
            color:"#e2cf52",
            fontFamily:"'Oswald', sans-serif;",
            backgroundColor:"#101727",
            padding:"0.5rem 0px",
            height:"50px"
        },
        "&.MuiButton-root:hover":{
            backgroundColor:"#101727",
        }
    },
    socialCta:{
        "&.MuiButton-root":{
            color:"#000",
            fontFamily:"'Oswald', sans-serif;",
        },
        "&.MuiButton-outlined":{
            border: "2px solid #e2e3e6 ",
        },
        "&.MuiButton-outlined:hover":{
            border: "2px solid #e2e3e6 ",
        },
    },
    switchFormCta:{
        "&.MuiButton-root":{
            color:"#e2cf52",
            textTransform:"none",
            margin:"0px",
            padding:"0px"
        },
    },
    loginRHS:{
        width:"100%",
        height:"100%",
        paddingTop:"3rem"
    },
    modelContainer:{
        width:"100%",
        height:"300px"
    },
    loginRHSTitle:{
        fontFamily: "'Satisfy', cursive",
        textAlign:"center",
        fontSize:"3rem",
        backgroundImage: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
        WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent"
    },
    subtitle:{
        fontFamily:"'Allerta Stencil', sans-serif",
        width:"50%",
        textAlign:"center"
    },
    loginRHSContentContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }

})


export default useStyles;