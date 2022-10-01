import {useState} from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Grid,
    Button,
    useTheme,
    Theme
} from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme:Theme)=>({
    techStackTabsContainer:{
        display:"grid",


    },
    tabpanelHeader:{
        fontFamily: "'Bungee', cursive",
        fontSize:"1.5rem"

    },
    tabPanelHeaderExperience:{
        fontFamily:"'Oswald', sans-serif",
        fontSize:"0.8rem"
    },
    tabPanelExperinceDesc:{
        fontFamily:"'Oswald', sans-serif",
        fontSize:"1.1rem"
    },
    viewMoreCta:{
        "&.MuiButton-root":{
            backgroundColor:theme.palette.primary.main,
            color:"#000",
            marginTop:"2rem",
            fontFamily:"'Oswald', sans-serif",
            fontSize:"1rem",
            width:"150px"

        },
        "&.MuiButton-root:hover":{
            backgroundColor:theme.palette.primary.main,
        }
    },
    tabs:{
        "&.MuiTab-root":{
            fontFamily:"'Oswald', sans-serif;",
            textTransform:"capitalize",
            color:"#fff",
            alignItems:"flex-start",
            fontSize:"1rem",
        },
        "&.Mui-selected": {
            color:`${theme.palette.primary.main} !important` 
        }

    },

}));


interface techStackDataI {
    title:string;
    startDate:string;
    endDate:string;
    descList:string[];
}

interface TabPanelI{
    value:number;
    index:number;
    children:any
}

const techStackData:techStackDataI[] = [
    {
        title:'Next JS',
        startDate:"January 2020",
        endDate:"September 2022",
        descList:[
            "Have a quite good experience in it",
            "I mostly work on Next js in my current company",
        ]
    },
    {
        title:"Nest JS",
        startDate:"November 2020",
        endDate:"September 2022",
        descList:[
            "Used it as the backend of of portfolio",
            "Have gain quite good knowledge about this framwork and still curious to learn more, will love to work in a company in which this the part of Tech Stack",
            "Have used Next js in Portfolio too"
        ]
    },
    {
        title:"Typescript",
        startDate:"April 2020",
        endDate:"September 2022",
        descList:[
            "Have a very good experience with typescript",
            "Currently I am using typescript in almost my all project",
            "Want to explore opportunity in it"
        ]
    },
    {
        title:"Mongo DB",
        startDate:"January 2022",
        endDate:"September 2022",
        descList:[
            "Haven't used it much, but quite familiar with it",
            "Would be grateful If got a chance to work in tech company where mongo db is getting use as database",
        ]
    },
    {
        title:"Vim",
        startDate:"January 2020",
        endDate:"September 2022",
        descList:[
            "Been using it for a very long",
            "Just found it very useful, can't even think of switching to other editor",
            "It has almost all keybindings for everything"
        ]
    },
]

const TabPanel:React.FC<TabPanelI> =  (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {(value == index) && (
        <Box component = "div">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index:number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


interface TechStackProps{
    setOpen:(val:boolean)=>void
}

const TechStack:React.FC<TechStackProps> = ({setOpen})=>{
    const [value,setValue] = useState<number>(0);
    const theme = useTheme();
    const classes = useStyles();
    const handleChange = (event:any, newValue:number) => {
        setValue(newValue);
    };
    return (
        <Grid container style = {{height:"100%"}}>
            <Grid mt={2} item xs={2}>
                <Tabs
                    TabIndicatorProps = {{style:{backgroundColor:theme.palette.primary.main,left:"0px",width:"7px"}}}
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                >
                    <Tab className = {classes.tabs} label="Next js" {...a11yProps(0)} />
                    <Tab className = {classes.tabs} label="Nest js" {...a11yProps(1)} />
                    <Tab className = {classes.tabs} label="Typescript" {...a11yProps(2)} />
                    <Tab className = {classes.tabs} label="Mongo db" {...a11yProps(3)} />
                    <Tab className = {classes.tabs} label="Vim" {...a11yProps(4)} />
                </Tabs>

            </Grid>
            <Grid item xs = {10}>
                {
                    techStackData.map((data,index)=>{
                        return(
                        <TabPanel key = {index} value={value} index={index}>
                            <div className = {classes.tabpanelHeader}>
                                {data.title}
                            </div>
                            <div className = {classes.tabPanelHeaderExperience}>
                                {data.startDate} - {data.endDate} 
                            </div>
                            <ul className = {classes.tabPanelExperinceDesc}>
                                {
                                    data.descList.map((desc,i)=>{
                                        return(
                                            <li key={i}>{desc}</li>
                                        )
                                    })
                                }
                            </ul>
                            <Button onClick={()=>setOpen(true)} variant = "contained" className = {classes.viewMoreCta}>View More</Button>
                        </TabPanel>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default TechStack;




