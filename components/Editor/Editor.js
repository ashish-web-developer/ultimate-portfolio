
import { useEffect ,useRef,useState,memo} from "react";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  editorContainer:{
    backgroundColor:"#fff"
  }
})


const EDITOR_HOLDER_ID = "editorjs";
const Editor = ()=>{
  const [editorData,setEditorData] = useState();
  const classes = useStyles();
  const [isRendered,setIsRendered] = useState(false);

  function initEditor(){
    const Editorjs = require("@editorjs/editorjs")
    const Header = require("@editorjs/header");
    const Table = require("@editorjs/table");

    const editor = new Editorjs({
      logLevel:"error",
      holder:EDITOR_HOLDER_ID,
      tools:{
        header:Header,
        table:Table
      },
      data:{},
      placeholder:"Lets write"
    })
  }


  useEffect(()=>{
    setIsRendered(true);
  },[])
  useEffect(()=>{
    if(isRendered){
      initEditor();
    }
  },[isRendered])

  return (
    <div className = {classes.editorContainer} id = {EDITOR_HOLDER_ID}>
    </div>
  )
}


export default memo(Editor);