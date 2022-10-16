import { useEffect ,useState} from "react";
import Editor from "../components/Editor/Editor";
import { makeStyles } from "@mui/styles";
import {Grid,Button,IconButton} from "@mui/material";
import {FiChevronDown} from "react-icons/fi"


const useStyles = makeStyles({
    container:{
        backgroundColor:"#fff",
        color:"#000",
        minHeight:"100vh",
        padding:"0px 3rem"
    },
    header:{
        height:"100px",
        borderBottom:"2px solid #e2e3e6",
        marginBottom:"2rem",
        display:"flex",
        alignItems:"center"
    },
    logoContainer:{
        display:"flex",
        alignItems:"flex-start",
    },
    logoCanvasContainer:{
        width:"70px",
        height:"70px"
    },
    logoText:{
        fontFamily:"'Bungee', cursive",
        color:"#000",
        fontSize:"20px",
        textDecoration:"underline",
        textDecorationColor:"#e2cf52",
        textDecorationThickness:"5px"
    },
    curlyBraces:{
        color:"#e2cf52"
    },
    publishCta:{
        "&.MuiButton-root":{
            color:"#e2cf52",
            fontFamily:"'Oswald', sans-serif;",
            backgroundColor:"#101727",
            padding:"0.5rem 0px"
        },
        "&.MuiButton-root:hover":{
            backgroundColor:"#101727",
        }
    },
})


const BlogEdit = ()=>{
    const [isLoaded,setIsLoaded] = useState(false);
    const classes = useStyles();
    useEffect(()=>{
        setIsLoaded(true);
    },[isLoaded])
    return(
        isLoaded && 
        <div className = {classes.container}>
            <div className = {classes.header}>
                <Grid container>
                    <Grid item xs = {10}>
                        <div className = {classes.logoContainer}>
                            <span className = {classes.logoText}><span className = {classes.curlyBraces}> &#123;</span> Ashish Prajapati <span className = {classes.curlyBraces}>&#125;</span></span>
                        </div>
                    </Grid>
                    <Grid item xs = {1}>
                        <IconButton><FiChevronDown color = "#000" size = {30}/></IconButton>
                    </Grid>
                    <Grid item xs = {1}>
                        <Button fullWidth className = {classes.publishCta} variant = "contained">Publish</Button>
                    </Grid>
                </Grid>
            </div>
            <Editor/>
        </div>
    )
}

export default BlogEdit;