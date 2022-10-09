
import { useEffect ,useRef,useState,memo} from "react";
import { makeStyles } from "@mui/styles";
import { Button ,Grid,Tabs,Tab,Box} from "@mui/material";


const useStyles = makeStyles({
  editorContainer:{
    backgroundColor:"#fff"
  },
  sidePanel:{
    border:"2px solid #e2e3e6",
    minHeight:"500px"
  },
  sidePanelHeader:{
    height:"50px"
  },
  tabs:{
    "&.MuiTab-root":{
      fontFamily:"'Oswald', sans-serif;",
      textTransform:"capitalize"
    },
    "&.Mui-selected": {
      color: '#e2cf52 !important'
    }

  }
})


const EDITOR_HOLDER_ID = "editorjs";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Editor = ()=>{
  const [editorData,setEditorData] = useState();
  const classes = useStyles();
  const [isRendered,setIsRendered] = useState(false);
  const [tabValue,setTabValue] = useState(0);
  let editor;

  function initEditor(){
    const EditorJS = require("@editorjs/editorjs")
    const Header = require("@editorjs/header");
    const Table = require("@editorjs/table");
    const List = require("@editorjs/list");
    const Code = require("@editorjs/code");
    const Embed = require("@editorjs/embed");
    const Image = require("@editorjs/image");

    editor = new EditorJS({
      logLevel:"error",
      holder:EDITOR_HOLDER_ID,
      tools:{
        header:Header,
        table:Table,
        list:List,
        code:Code,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
        },
        image: {
          class: Image,
          config: {
            endpoints: {
              byFile: 'http://localhost:8000/api/upload', // Your backend file uploader endpoint
            }
          }
        }
      },
      data:{},
      placeholder:"Lets write",
    })
  }


  const editorDatahandler = async ()=>{
    const data = await editor.save();
    const response = await fetch("http://localhost:8000/api/blog",{
      method :"POST",
      body:JSON.stringify(data?.blocks),
      headers:{
        "Content-type":"Application/json"
      }
    });

  }
  const tabPanelHandler = (event,newValue)=>{
    setTabValue(newValue);
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
        <Grid item xs = {9}>
          <div className = {classes.editorContainer} id = {EDITOR_HOLDER_ID}>
          </div>
        </Grid>
        <Grid item xs = {3}>
          <div className = {classes.sidePanel}>
            <Box className = {classes.sidePanelHeader}>
              <Tabs TabIndicatorProps  = {{style:{backgroundColor:"#e2cf52"}}}  value={tabValue} onChange = {tabPanelHandler} aria-label="basic tabs example">
                <Tab className = {classes.tabs} label="Post Settings" {...a11yProps(0)} />
                <Tab className = {classes.tabs} label="Item Two" {...a11yProps(1)} />
                <Tab className = {classes.tabs} label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </div>
        </Grid>
      </Grid>
      <Button variant = "contained" onClick = {()=>editorDatahandler()}>Save</Button>
    </div>
  )
}


export default memo(Editor);