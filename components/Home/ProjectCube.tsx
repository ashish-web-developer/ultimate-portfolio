import {useRef,useMemo,memo} from "react";
import { useFrame,useLoader} from "@react-three/fiber"
import { TextureLoader } from "three";

const ProjectCube = ()=>{
    const meshRef = useRef<null|any>(null);
    const colorMap = useLoader(TextureLoader,"https://img.icons8.com/color/480/000000/javascript--v1.png");

    useFrame((state, delta) => {
        if(meshRef.current){
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01
        }
    })
    return(
        <mesh
        ref={meshRef}
        >
            <boxBufferGeometry attach = "geometry" args = {[3,3,3]}/>
            <meshStandardMaterial
                    map={colorMap}
             />
        </mesh>
    )
}


export default memo(ProjectCube);