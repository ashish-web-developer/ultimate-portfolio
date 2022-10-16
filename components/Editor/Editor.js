
import { useEffect ,useState,memo, useCallback} from "react";
import { makeStyles } from "@mui/styles";
import { 
  Button ,
  Grid,
  Tabs,
  Tab,
  Box,
  Input
} from "@mui/material";


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

  },
  statusContainer:{
    display:"flex",
    justifyContent:"space-between",
    borderBottom:"2px solid #e2e3e6",
    width:"100%",
    padding:"12px 24px"
  },
  status:{
    color:"#e2cf52"
  },
  titleContainer:{
    padding:"0px 24px"
  },
  titleInput:{
    "&.MuiInput-root":{
      border:"2px solid #e2e3e6",
      borderRadius:"5px"
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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
const Editor = ()=>{
  const [editorData,setEditorData] = useState();
  const classes = useStyles();
  const [isRendered,setIsRendered] = useState(false);
  const [tabValue,setTabValue] = useState(0);
  const [blogsData,setBlogsData] = useState({
    title:"",
    featuredImageUrl:""
  });
  let editor;

  const initEditor = useCallback(()=>{
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
              byFile: `${process.env.NEXT_PUBLIC_APP_API_URL}/api/upload`, // Your backend file uploader endpoint
            }
          }
        }
      },
      data:{},
      placeholder:"Lets write",
    })
  },[]) 


  const editorDatahandler = useCallback(async()=>{
    const data = await editor.save();
    return data;
  },[])

  const blogSubmitHandler = async ()=>{
    const data = await editorDatahandler();
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/blog`,{
      method :"POST",
      body:JSON.stringify({
        data:data,
        title:blogsData.title,
        status:"draft",
        featured_image:blogsData.featuredImageUrl
      }),
      headers:{
        "Content-type":"Application/json"
      }
    });
  }

  const featuredImageHandlerUploader = async (event)=>{
    console.log("inside function",event.target.files[0]);
    const formData = new FormData();
    formData.append("image",event.target.files[0]);
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/featured-image`,{
      method :"POST",
      body:formData
    });
    const data = await response.json();
    setBlogsData((prev)=>{
      return{
        ...prev,
        featuredImageUrl:data.file.url
      }
    })
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
            <TabPanel value = {tabValue} index = {0}>
              <div className = {classes.statusContainer}>
                <div>Status</div>
                <div className =  {classes.status}>Draft</div>
              </div>
              <div className = {classes.titleContainer}>
                <div style = {{paddingTop:"5px"}}>Title</div>
                <Input onChange={(event)=>setBlogsData((val)=>{return {...val,title:event.target.value}})} className = {classes.titleInput} disableUnderline placeholder = "Title of Blog" fullWidth/>
                <Input onChange={featuredImageHandlerUploader}  fullWidth disableUnderline type = "file" placeholder = "Add File"/>
              </div>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
      <Button variant = "contained" onClick = {()=>blogSubmitHandler()}>Save</Button>
    </div>
  )
}


export default memo(Editor);