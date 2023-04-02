import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";



const useStyles = makeStyles((theme:Theme)=>({
    container:{
        border:"3px solid #fff",
        minHeight:"200px",
        padding:"10px 16px",
        margin:"60px 0px",
        borderRadius:"6px",
        ['@media(max-width:780px)']:{
            margin:"40px 0px",
        }
    },
    commentTopContainer:{
        paddingBottom:"10px",
        borderBottom:"1px solid #fff",
        display:"flex",
        alignItems:"center",
        gap:"20px"
    },
    commentTopText:{
        fontFamily: "'Bungee', cursive",
        color:"#e2cf52",
    },
    metaContainer:{
        padding:"20px 0px",
        fontFamily:"'Allerta Stencil', sans-serif"
    },
    textField:{
        "&.MuiTextField-root":{
            border:"3px solid #fff",
            color:"#fff",
            borderRadius:"6px",
            fontFamily: "'Bungee', cursive",
        }
    },
    btnContainer:{
        display:"flex",
        justifyContent:"flex-end"
    },
    cancelBtn:{
        "&.MuiButton-root":{
            color:"#fff",
            marginTop:"1rem",
            fontFamily:"'Oswald', sans-serif",
            fontSize:"1rem",
            width:"150px"

        },
    },
    commentBtn:{
        "&.MuiButton-root":{
            backgroundColor:"#e2cf52",
            color:"#000",
            marginTop:"1rem",
            fontFamily:"'Oswald', sans-serif",
            fontSize:"1rem",
            width:"150px"

        },
        "&.MuiButton-root:hover":{
            backgroundColor:"#e2cf52",
        }
    },
}));


export default useStyles;
