import {useState} from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Grid,
    Button
} from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    techStackTabsContainer:{
        display:"grid",


    },
    tabpanelHeader:{
        fontFamily: "'Bungee', cursive",

    },
    tabPanelHeaderExperience:{
        fontFamily:"'Oswald', sans-serif;",
        fontSize:"0.8rem"
    },
    tabPanelExperinceDesc:{
        fontFamily:"'Oswald', sans-serif;",
    },
    viewMoreCta:{
        "&.MuiButton-root":{
            backgroundColor:"#e2cf52",
            color:"#000",
            marginTop:"2rem"
        }
    },
    tabs:{
        "&.MuiTab-root":{
            fontFamily:"'Oswald', sans-serif;",
            textTransform:"capitalize",
            color:"#fff",
            alignItems:"flex-start"
        },
        "&.Mui-selected": {
        color: '#e2cf52 !important'
        }

    }
})
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
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

const TechStack = ({setOpen})=>{
    const [value,setValue] = useState<Number>(0);
    const classes = useStyles();
    const handleChange = (event, newValue:number) => {
        setValue(newValue);
    };
    return (
        <Grid container style = {{height:"100%"}}>
            <Grid mt={2} item xs={2}>
                <Tabs
                    TabIndicatorProps = {{style:{backgroundColor:"#e2cf52",left:"0px",width:"7px"}}}
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
                <TabPanel value={value} index={0}>
                    <div className = {classes.tabpanelHeader}>
                        Next js
                    </div>
                    <div className = {classes.tabPanelHeaderExperience}>
                        November 2021 - September 2022
                    </div>
                    <ul className = {classes.tabPanelExperinceDesc}>
                        <li>Worked on Facebook clone app using Next js</li>
                        <li>Using Nest js in Mentr-me</li>
                        <li>Have used Next js in Portfolio too</li>
                    </ul>
                    <Button onClick={()=>setOpen(true)} variant = "contained" className = {classes.viewMoreCta}>View More</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className = {classes.tabpanelHeader}>
                        Nest Js
                    </div>
                    <div className = {classes.tabPanelHeaderExperience}>
                        April 2022 - September 2022
                    </div>
                    <ul className = {classes.tabPanelExperinceDesc}>
                        <li>Used it as the backend of of portfolio</li>
                        <li>Have gain quite good knowledge about this framwork and still curious to learn more, will love to work in a company in which this the part of Tech Stack</li>
                        <li>Have used Next js in Portfolio too</li>
                    </ul>
                    <Button onClick={()=>setOpen(true)} variant = "contained" className = {classes.viewMoreCta}>View More</Button>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className = {classes.tabpanelHeader}>
                        Next js
                    </div>
                    <div className = {classes.tabPanelHeaderExperience}>
                        November 2021 - September 2022
                    </div>
                    <ul className = {classes.tabPanelExperinceDesc}>
                        <li>Worked on Facebook clone app using Next js</li>
                        <li>Using Nest js in Mentr-me</li>
                        <li>Have used Next js in Portfolio too</li>
                    </ul>
                    <Button onClick={()=>setOpen(true)} variant = "contained" className = {classes.viewMoreCta}>View More</Button>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className = {classes.tabpanelHeader}>
                        Next js
                    </div>
                    <div className = {classes.tabPanelHeaderExperience}>
                        November 2021 - September 2022
                    </div>
                    <ul className = {classes.tabPanelExperinceDesc}>
                        <li>Worked on Facebook clone app using Next js</li>
                        <li>Using Nest js in Mentr-me</li>
                        <li>Have used Next js in Portfolio too</li>
                    </ul>
                    <Button onClick={()=>setOpen(true)} variant = "contained" className = {classes.viewMoreCta}>View More</Button>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className = {classes.tabpanelHeader}>
                        Next js
                    </div>
                    <div className = {classes.tabPanelHeaderExperience}>
                        November 2021 - September 2022
                    </div>
                    <ul className = {classes.tabPanelExperinceDesc}>
                        <li>Worked on Facebook clone app using Next js</li>
                        <li>Using Nest js in Mentr-me</li>
                        <li>Have used Next js in Portfolio too</li>
                    </ul>
                    <Button onClick={()=>setOpen(true)} variant = "contained" className = {classes.viewMoreCta}>View More</Button>
                </TabPanel>
            </Grid>
        </Grid>
    )
}

export default TechStack;




