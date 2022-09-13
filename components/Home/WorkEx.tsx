// React 
import {useState} from "react";

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
import {Grid} from "@mui/material"
import styles from "../../styles/workex.module.css"

import TechStack from "./TechStack";


const useStyles = makeStyles({
  workContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    height:"100%",
    width:"90%"
  },
  workHeading:{
    fontFamily:"'Bungee', cursive",
    color:"#fff",
    fontSize:"30px",
    textDecoration:"underline",
    textDecorationColor:"#e2cf52",
    textDecorationThickness:"5px"

  },
  curlyBraces:{
      color:"#e2cf52"
  },
  projectItemContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    border:"1px solid #fff"
  },
  projectItem:{
    fontSize:"32px",
    fontFamily:"'Oswald', sans-serif",
    textTransform:"uppercase",
    fontWeight:"600",

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
  }

})

const data = [
  {
    name: 'Rare Wind',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 200,
  },
  {
    name: 'Saint Petersburg',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 400,
  },
  {
    name: 'Deep Blue',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 400,
  },
  {
    name: 'Ripe Malinka',
    description: '#f093fb → #f5576c',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    height: 400,
  },
  {
    name: 'Perfect White',
    description: '#fdfbfb → #ebedee',
    css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
    height: 400,
  },
  {
    name: 'Near Moon',
    description: '#5ee7df → #b490ca',
    css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    height: 400,
  },
]

const WorkEx = ()=>{
    const [open,setOpen] = useState(false);
    const springApi = useSpringRef(); 
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
        <div className={styles.wrapper}>
        <animated.div
            style={{ ...rest, width: size, height: size,display:open?"grid":"block"}}
            className={classes.workExContainer}
            >
            {open && transition((style, item) => (
            <animated.div
                className={styles.item}
                style={{ ...style, background:"#000",border:"1px solid #fff"}}
            />
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
                <TechStack setOpen = {(val)=>setOpen(val)}/>
              </div>
            }
        </animated.div>
        </div>
    )
}


export default WorkEx;