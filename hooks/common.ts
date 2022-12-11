import { useEffect,useState } from "react";
function useMount(){
	const [isMount,setIsMount] = useState(false);
	useEffect(()=>{
		setIsMount(true)
	},[])
	return isMount;
}



export {useMount};
