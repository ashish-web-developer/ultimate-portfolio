
import { useEffect ,useRef,useState,memo} from "react";
import { makeStyles } from "@mui/styles";
import { Button ,Grid} from "@mui/material";


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
  let editor;

  function initEditor(){
    const EditorJS = require("@editorjs/editorjs")
    const Header = require("@editorjs/header");
    const Table = require("@editorjs/table");
    const List = require("@editorjs/list");

    editor = new EditorJS({
      logLevel:"error",
      holder:EDITOR_HOLDER_ID,
      tools:{
        header:Header,
        table:Table,
        list:List
      },
      data:{},
      placeholder:"Lets write",
    })
  }


  const editorDatahandler = ()=>{
    editor.save().then((data)=>{
      console.log("value of data",data);
    }).catch((err)=>{
      console.log("value of err",err);
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
    <div>
      <Grid  container>
        <Grid item xs = {8}>
          <div className = {classes.editorContainer} id = {EDITOR_HOLDER_ID}>
          </div>
        </Grid>
        <Grid item xs = {4}>
          <Button onClick = {editorDatahandler} variant = "contained">Save</Button>
        </Grid>
      </Grid>
    </div>
  )
}


export default memo(Editor);