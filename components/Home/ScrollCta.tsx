import { forwardRef } from "react";

import {
    Button
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// icons
import { CgArrowDown } from "react-icons/cg";


const useStyles = makeStyles({
  scrollCtaContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})

const scrollCta = forwardRef((props,ref)=>{
    const classes = useStyles();
    const scrollHandler = (offset:Number):void=>{
        if(ref?.current){
            ref.current.scrollTo(offset);
        }
    }
    return(
        <div style={{ float: "right" }}>
            <div className={classes.scrollCtaContainer}>
            <Button onClick = {()=>scrollHandler(props.offset)}>
                <span style={{ writingMode: "vertical-rl",color:"#fff"}}>
                SCROLL DOWN
                </span>
            </Button>
            <CgArrowDown size={40} />
            </div>
        </div>
    )
})


export default scrollCta;