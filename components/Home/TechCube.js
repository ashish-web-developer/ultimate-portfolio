import { useEffect } from "react";


// Local Hooks
import { useMount } from "@/hooks/common";
import { useThree } from "@/hooks/three";


// Mui
import { makeStyles } from "@mui/styles";




const useStyles = makeStyles({
	container:{
		width:"100%",
		height:"100%"
	}
})





const TechCube = ()=>{
	const classes = useStyles();
	const isMount = useMount();
	const {scene,camera,renderer,cube} = useThree();

	function animate(){
		requestAnimationFrame(animate);
		renderer.render(scene,camera);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	}


    useEffect(()=>{
        const element = document.getElementById("cube-container");
		if(isMount && cube){
			let width = element.offsetWidth;
			let height = element.offsetHeight;
			renderer.setSize(width,height,false);
			camera.aspect = width/height;
			camera.updateProjectionMatrix();
			element?.appendChild(renderer.domElement);
			scene.add(cube);
			animate();
		}
    },[isMount])

    return(
        <div className = {classes.container} id = "cube-container">
        </div>
    )
}

export default TechCube;


