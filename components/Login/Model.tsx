
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {FC} from "react"

// Local Component 
import PhonixBird from "./Phoenix_bird";

const Model:FC<any> = ({classes})=>{
    return(
        <>
            <div className = {classes.loginRHS}>
                <div className = {classes.modelContainer}>
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[-10, 10, -5]} />
                        <spotLight intensity={0.5} position={[0, -10, -10]} />
                        <Suspense>
                            <PhonixBird rotation={[0, 3.5, 0]} position={[-3,-100,-700]} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className = {classes.loginRHSContentContainer}>
                    <h1 className = {classes.loginRHSTitle}>Lets Expore New World</h1>
                    <div className ={classes.subtitle}>
                        You will get unlimited access to all blog, and you can create your own personal blog free, can contact me also, for any further query.
                    </div>
                </div>
            </div>
        </>

    )
}

export default Model;