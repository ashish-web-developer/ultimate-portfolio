import {FC} from "react";

import { TypeAnimation } from "react-type-animation";

interface Props{
    style?:React.CSSProperties,
    cursor:boolean,
    sequence:(string | number | ((element: HTMLElement | null) => void | Promise<void>))[]
}


const Animation:FC<Props> = ({sequence,style,cursor})=>{
    return(
        <TypeAnimation
            sequence={sequence}
            speed={8} 
            wrapper="div"
            repeat={Infinity}
            style={style}
            cursor={cursor}
        />
    )
}

export default Animation;