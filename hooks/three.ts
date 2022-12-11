
import { useEffect,useRef } from "react"
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    TextureLoader,
    MeshStandardMaterial,
	BoxGeometry,
    Mesh,
    AmbientLight
} 
from "three"


interface threeRefType{
    scene:null|Scene;
    camera:null|PerspectiveCamera;
    renderer:null|WebGLRenderer;
    cube:null|Mesh

}


const loader = new TextureLoader();

function useThree(){
	const light = new AmbientLight( 0xffffff );
    const geometry = new BoxGeometry( 2.7,2.7,2.7 );
    const threeRef = useRef<threeRefType>({
        scene:null,
        camera:null,
        renderer:null,
        cube:null
    })
    useEffect(()=>{
		const cubeMaterials = [
			new MeshStandardMaterial({map:loader.load("TechCube/icon1.png")}),
			new MeshStandardMaterial({map:loader.load("TechCube/icon2.png")}),
			new MeshStandardMaterial({map:loader.load("TechCube/icon3.png")}),
			new MeshStandardMaterial({map:loader.load("TechCube/icon4.png")}),
			new MeshStandardMaterial({map:loader.load("TechCube/icon5.png")}),
			new MeshStandardMaterial({map:loader.load("TechCube/icon6.png")}),
		]
        threeRef.current.scene = new Scene();
        threeRef.current.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        threeRef.current.renderer = new WebGLRenderer({alpha:false,antialias:true});
        threeRef.current.cube = new Mesh(geometry,cubeMaterials);
        threeRef.current.camera.position.z = 5;
        threeRef.current.scene.add(light);
    },[])
    return {
        scene:threeRef.current.scene,
        camera:threeRef.current.camera,
        renderer:threeRef.current.renderer,
        cube:threeRef.current.cube
    }
}


export {useThree}