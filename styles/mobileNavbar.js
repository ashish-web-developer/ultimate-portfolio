import { makeStyles } from "@mui/styles"; 



const useStyles = makeStyles({
    container:{
        marginTop:"16px",
        padding:"0px 16px"
    },
    navCtaContainer:{
        position:"relative"
    },
    navCta:{
        position:"absolute !important",
        right:"0px"
    },
    logoText:{
        fontFamily:"'Bungee', cursive",
        color:"#fff",
        fontSize:"16px",
        textDecoration:"underline",
        textDecorationColor:"#e2cf52",
        textDecorationThickness:"5px",
        paddingLeft:"16px"
    },
    curlyBraces:{
        color:"#e2cf52"
    },
    drawer:{
        "&.MuiDrawer-root":{
            width:"100%",
            height:"100%",
        },
    },
    drawerContent:{
        position:"relative",
        width:"100%",
        height:"100%"
    },
    closeIconContainer:{
        marginTop:"16px",
        marginRight:"16px",
        display:"flex",
        justifyContent:"flex-end"
    },
    navContainer:{
        display:"flex",
        justifyContent:"center",
        marginTop:"2rem",
    },
    navButton:{
        "&.MuiButton-root":{
            color:"#fff"
        }
    },
    resumeBtn:{
        "&.MuiButton-root":{
            border:"3px solid #fff",
            width:"200px"
        },
        "&.MuiButton-text":{
            color:"#fff"
        }
    },
    bottomContainer:{
        position:"absolute",
        bottom:"0px",
        padding:"16px",
        display:"flex",
    },
    bottomContent:{
        color:"#fff",
        paddingLeft:"16px",
        fontFamily:"'Bungee', cursive",
    },
    bottomAvatar:{
        width:"50px !important",
        height:'50px !important'
    },
    userLogoContainer:{
        display:"inline-flex",
        alignItems:"center",
        border:"3px solid #fff",
        fontFamily:"'Oswald', sans-serif",
        textTransform:"uppercase",
        borderRadius:"25px",
        padding:"6px 8px"
    }
})


export default useStyles;