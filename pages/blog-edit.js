import dynamic from "next/dynamic";
import { useEffect ,useState} from "react";
import Editor from "../components/Editor/Editor";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    container:{
        backgroundColor:"#fff",
        color:"#000"
    }
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
            <Editor/>
        </div>
    )
}

export default BlogEdit;