
import { useEffect ,useState,memo, useCallback,useRef} from "react";
import { makeStyles } from "@mui/styles";
import { 
  Button ,
  Grid,
  Tabs,
  Tab,
  Box,
  Input,
  Snackbar,
  Alert
} from "@mui/material";


// Helpers
import { useAxios } from "@/hooks/common";


// FirstPanel
import FirstPanel from "@/components/Editor/FirstPanel";


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


const Editor = ({id})=>{
  const classes = useStyles();
  const [isRendered,setIsRendered] = useState(false);
  const [tabValue,setTabValue] = useState(0);
  const [isEditorReady,setIsEditorReady] = useState(false);
  const [showSnackbar,setShowSnackbar] = useState(false);
  const [alertMessage,setAlertMessage] = useState("");
  const [blogsData,setBlogsData] = useState({
    blogs:{},
    created_at:null,
    "featured image":"",
    id:null,
    title:"",
    meta_description:"",
    updated_at:null
  });
  const editorRef = useRef(null);
  const {axios,axiosForm} = useAxios();


  useEffect(()=>{
    console.log("value of blogsData",blogsData);
  },[blogsData])




  // Initializing the editor
  const initEditor = useCallback(()=>{
    const EditorJS = require("@editorjs/editorjs")
    const Header = require("@editorjs/header");
    const Table = require("@editorjs/table");
    const List = require("@editorjs/list");
    const Code = require("@editorjs/code");
    const Embed = require("@editorjs/embed");
    const Image = require("@editorjs/image");

    let editor = new EditorJS({
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
      onReady:()=>{
        setIsEditorReady(true);
      },
      data:{},
      placeholder:"Lets write",
    })
    editorRef.current = editor;
  },[]) 




  // blog submit handler 
  
  const blogSubmitHandler = async ()=>{
    if(!blogsData.title){
      setAlertMessage("Please Enter Title");
      setShowSnackbar(true);
    }else if(!blogsData.meta_description){
      setAlertMessage("Please Enter Meta Description")
      setShowSnackbar(true);
    }else if(!blogsData["featured image"]){
      setAlertMessage("Please Add Featured Image");
      setShowSnackbar(true);
    }else{
      const data = await editorRef.current.save();
      axios.post("/api/blog",{
          data:data,
          title:blogsData.title,
          status:0,
          featured_image:blogsData["featured image"],
          meta_description:blogsData.meta_description,
          ...(id?{slug:id}:{})
      }).then(res=>{
        setAlertMessage(res.data.message);
        setShowSnackbar(true);
      }).catch((err)=>{
        console.log(err);
      })
    }
  }

  // Featured Image uploade handler
  const featuredImageHandlerUploader = async (event)=>{
    console.log("inside function")
    const formData = new FormData();
    formData.append("image",event.target.files[0]);
    axiosForm.post("/api/featured-image",formData).then(res=>{
      setBlogsData((prev)=>{
        return{
          ...prev,
          ["featured image"]:res.data.file.url
        }
      })
    })
  }

  const handleSnackbarClose = ()=>{
    setShowSnackbar(false);
  } 


  useEffect(()=>{
    if(isRendered){
      initEditor();
    }
  },[isRendered])


  //
  useEffect(()=>{
      if(id && isEditorReady){
        (async function(){
          const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/get-blog`,{
            method :"POST",
            body:JSON.stringify({
              slug:id
            }),
            headers:{
              "Content-type":"Application/json"
            }
          });
          const data = await response.json();
          console.log("value of data",data);
          editorRef.current.render(data.blogs);
          setBlogsData(data);
        }())
      }
  },[id,isEditorReady])



  useEffect(()=>{
    setIsRendered(true);
  },[])

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
              <Tabs TabIndicatorProps  = {{style:{backgroundColor:"#e2cf52"}}}  value={tabValue} onChange = {(event,value)=>setTabValue(value)} aria-label="basic tabs example">
                <Tab className = {classes.tabs} label="Post Settings" {...a11yProps(0)} />
                <Tab className = {classes.tabs} label="Item Two" {...a11yProps(1)} />
                <Tab className = {classes.tabs} label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value = {tabValue} index = {0}>
              <FirstPanel blogsData={blogsData} setBlogsData={setBlogsData} featuredImageHandlerUploader={featuredImageHandlerUploader}/>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
      <Button variant = "contained" onClick = {()=>blogSubmitHandler()}>{id?"Update":"Save"}</Button>
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}


export default memo(Editor);