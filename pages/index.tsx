import type { NextPage } from 'next'
import Home from '../components/Home/Home'
import {useEffect,useState} from "react";


const Index = () => {
  const [pageLoaded,setPageLoaded] = useState(false);

  useEffect(()=>{
    setPageLoaded(true);
  },[])
  return (
    pageLoaded &&
     <div>
      <Home/>
    </div>
  )
}

export default Index 
