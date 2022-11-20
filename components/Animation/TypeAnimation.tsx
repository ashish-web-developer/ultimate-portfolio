import {FC} from "react";

import { TypeAnimation } from "react-type-animation";

interface Props{
    time:number,
    style?:React.CSSProperties,
    cursor:boolean,
    sequence:(string | number | ((element: HTMLElement | null) => void | Promise<void>))[]
}

export default function(prop:Props){
    return(
        <TypeAnimation
            sequence={prop.sequence}
            speed={8} 
            wrapper="div"
            repeat={Infinity}
            style={prop.style}
            cursor={prop.cursor}
        />
    )
}