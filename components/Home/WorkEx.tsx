// React 
import {useState} from "react";
import Link from "next/link"

// Spring

import {
    useChain,
    animated,
    useSpringRef, 
    useSpring,
    config,
    useTransition
} from "react-spring";

//  mui
import { makeStyles } from "@mui/styles";
import {
  Button,
  useTheme,
  Theme
} from "@mui/material"

// local components

import TechStack from "./TechStack";


const useStyles = makeStyles((theme:Theme)=>({
  workParentContainer:{
    width:"100%",
    height:"560px",
    backgroundColor:"#000",
    padding:"20px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  workContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    height:"100%",
    width:"90%"
  },
  curlyBraces:{
      color:theme.palette.primary.main
  },
  projectItemContainer:{
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    willChange: "transform, opacity",
    border:"1px solid #fff"
  },
  projectItemAnker:{
    width: "100%",
    height: "100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

  },
  projectItem:{
    fontSize:"18px",
    fontFamily:"'Oswald', sans-serif",
    textTransform:"uppercase",
    fontWeight:"600",
    color:"#fff"

  },
  workExContainer:{
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
    gridGap: "25px",
    padding: "25px",
    background: "white",
    borderRadius:"5px",
    cursor: "pointer",
    boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
    willChange: "width, height"
  },
  techStackContainer:{
    width:"100%"
  },
  techStackHeader:{
    fontSize:"2rem",
    fontFamily:"'Oswald', sans-serif",
    width:"100%",
    display:"flex",
    alignItems:"center"
  },
  line:{
    width:"300px",
    height:"2px",
    display:"inline-block",
    backgroundColor:"#fff",
    marginLeft:"1rem"
  },
  viewLessCta:{
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


}));

const data = [
  {
    height: 200,
    project:"Mern Dev",
    techStack:"EJS | Javascript | CSS",
    link:"https://github.com/ashish-web-developer/MernDev"
  },
  {
    height: 400,
    project:"VIMRC",
    techStack:"Vim Script",
    link:"https://github.com/ashish-web-developer/vimrc"
  },
  {
    height: 400,
    project:"IP ADDRESS TRACKER",
    techStack:"HTML | Javascript",
    link:"https://github.com/ashish-web-developer/ipAddressTracker"
  },
  {
    height: 400,
    project:"GDF",
    techStack:"Tailwind css",
    link:"https://github.com/ashish-web-developer/gdf"
  },
  {
    height: 400,
    project:"PERSONAL Blog",
    techStack:"Next js | Material UI | Dicebear",
    link:"https://github.com/ashish-web-developer/personal-blog-repo"
  },
  {
    height: 400,
    project:"Facebook Clone",
    techStack:"Next Js | Material Ui | dicebrear",
    link:"https://github.com/ashish-web-developer/facebook-clone-app"
  },
]

const WorkEx = ()=>{
    const [open,setOpen] = useState(false);
    const springApi = useSpringRef(); 
    const theme = useTheme();
    const classes = useStyles();

    const {size,...rest} = useSpring({
        ref:springApi,
        config:config.stiff,
        from:{
            size:"20%",
            background:"#000",
        },
        to:{
            size:open?"100%":"80%",
            background:"#000",
        }

    })
    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])


    return (
        <div className={classes.workParentContainer}>
        <animated.div
            style={{ ...rest, width: size, height: size,display:open?"grid":"block"}}
            className={classes.workExContainer}
            >
            {open && transition((style, item) => (
            <animated.div
                className={classes.projectItemContainer}
                style={{
                   ...style,
                  background:"#000",
                  border:"2px solid #fff",
                  borderTop:"5px solid yellow"
                }}
            >
              <Link href = {item.link}>
                <a className = {classes.projectItemAnker}>
                  <div className = {classes.projectItem}>{item.project}</div>
                  <div>{item.techStack}</div>
                </a>
              </Link>
            </animated.div>
            ))}
            {
              !open &&
              <div className = {classes.techStackContainer}>
                <div className = {classes.techStackHeader}>
                  <span>
                    <span className = {classes.curlyBraces}> &#123;</span>My Tech Stack<span className = {classes.curlyBraces}>&#125;</span>
                  </span>
                  <span className = {classes.line}></span>
                </div>
                <TechStack setOpen = {(val:boolean)=>setOpen(val)}/>
              </div>
            }
        </animated.div>
        {open && <Button onClick = {()=>setOpen(false)} variant = "contained" className = {classes.viewLessCta}>View Less</Button>}
        </div>
    )
}


export default WorkEx;