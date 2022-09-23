import React, { FC, memo ,Suspense,useRef} from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

//components
import Navbar from "../Navbar/Navbar";
import ProjectCube from "./ProjectCube";
import WorkEx from "./WorkEx";
import TechStackCloud from "./TechStackCloud";
import SocialIcon from "./SocialIcon"

//material ui
import { 
  Grid, 
  Button,
  useMediaQuery
} from "@mui/material";

// icons
import { CgArrowDown } from "react-icons/cg";

//three js

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrthographicCamera ,Loader} from "@react-three/drei";
import Avatar from "./DevAvatar";

// react spring
import { useSpring, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";



const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: "700px",
    padding: "3rem",
  },
  scrollCtaContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emailContainer:{
    fontSize:"1.2rem",
    letterSpacing:"0.1rem",
    fontFamily: "'Oswald', sans-serif",
    position:"fixed",
    bottom:"50px",
    left:"50%",
    transform:"translateX(-50%)",
    zIndex:"10"
  },
  pageNumberStyle: {
    position: "absolute",
    fontFamily: "'Bungee', cursive",
    color: "rgb(255, 200, 124)",
    bottom: "0px",
    fontSize: "100px",
    textDecoration: "underline",
    backgroundImage: "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
    WebkitBackgroundClip:"text",
    WebkitTextFillColor:"transparent"
  },
  mainText: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "40px",
    fontWeight: "700",
  },
  mainTextHeader: {
    fontSize: "100px",
    backgroundColor: "#e2cf52",
    color: "#000",
    padding: "0px 50px",
  },
  mainTextSub: {
    letterSpacing: "35px",
  },
  container2:{
    position: "relative",
    background:"#000"
  },
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
  devInfoContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    width:"100%",
    height:"100%"
  },
  devIntro:{
    fontSize:"1.3rem"
  }
});

const Home: FC = () => {
  const classes = useStyles();
  const parallaxRef = useRef<any>(null);
  const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const isMobile = useMediaQuery('(max-width:758px)');
  
  const scrollHandler = (offset:Number):void=>{
    if(parallaxRef?.current){
      parallaxRef.current.scrollTo(offset);
    }
  }
  return (
    <>
    <div className = {classes.emailContainer}>thebadbluffer@proton.me</div>
      <Parallax ref = {parallaxRef} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.container}>
            <Navbar />
            <span className={classes.pageNumberStyle}>01</span>
            <Grid sx={{ height: "100%" }} container>
              <Grid sx={{ display: "flex", alignItems: "center" }} xs={1} item>
                {
                  !isMobile?
                    <SocialIcon/>:null
                }
              </Grid>
              <Grid xs={10} item>
                <Grid sx={{ height: "100%" }} container>
                  <Grid xs={6} item>
                    <Canvas>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[-10, 10, -5]} />
                      <spotLight intensity={0.5} position={[0, -10, -10]} />
                      <Suspense>
                        <ProjectCube />
                      </Suspense>
                    </Canvas>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center" }}
                    xs={6}
                    item
                  >
                    <div className={classes.mainText}>
                      <span className={classes.mainTextHeader}>CREATIVE</span>
                      <br />
                      <animated.div
                        onFocus={() => {
                          console.log("hello world");
                        }}
                        style={springProps}
                        className={classes.mainTextSub}
                      >
                        <span style={{ color: "#e2cf52" }}>DEV</span>ELOPER
                      </animated.div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                xs={1}
                item
              >
                <div style={{ float: "right" }}>
                  <div className={classes.scrollCtaContainer}>
                    <Button onClick = {()=>scrollHandler(1)}>
                      <span style={{ writingMode: "vertical-rl",color:"#fff"}}>
                        SCROLL DOWN
                      </span>
                    </Button>
                    <CgArrowDown size={40} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className={clsx(classes.container,classes.container2)}>
            <span className={classes.pageNumberStyle}>02</span>
            <Grid sx = {{height:"100%",marginRight:"20px"}} container >
              <Grid sx = {{height:"100%"}} xs = {7} item>
                <WorkEx/>
              </Grid>
              <Grid sx = {{height:"100%"}} xs = {4} item>
                {/*<Canvas>
                  <PerspectiveCamera
                    position={[0, 3, 0]}
                    fov={120}
                    makeDefault={true}
                  />
                  <OrthographicCamera
                    position={[-3, 0, 5]}
                    zoom={250}
                    makeDefault={true}
                  />
                  <Suspense>
                    <Avatar rotation={[0, -1, 0]} position={[-3,-1,0]} />
                  </Suspense>
                  <ambientLight intensity={1} />
                  <pointLight position={[-10, 10, 5]} />
                  <spotLight intensity={0.5} position={[0, -10, -10]} />
              </Canvas>*/}
              <TechStackCloud/>

              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
                xs={1}
                item
              >
                <div style={{ float: "right" }}>
                  <div className={classes.scrollCtaContainer}>
                    <Button onClick = {()=>scrollHandler(2)}>
                      <span style={{ writingMode: "vertical-rl",color:"#fff"}}>
                        SCROLL DOWN
                      </span>
                    </Button>
                    <CgArrowDown size={40} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className = {classes.container}>
            <span className={classes.pageNumberStyle}>03</span>
            <Grid sx = {{height:"100%"}} container>
              <Grid item xs = {6}>
                <div className = {classes.devInfoContainer}>
                  <h1><span className = {classes.curlyBraces}> &#123;</span>  Hi, I&apos;m Ashish Prajapati.<span className = {classes.curlyBraces}>&#125;</span> </h1>
                  <p className = {classes.devIntro}>
                    I&apos;m a creative developer / software engineer from India.
                    I use Javascript, Typescript create high-end interactive experiences and products.
                    I currently work as a senior software Developer at Mim-Essay.
                  </p>
                </div>
              </Grid>
              <Grid item xs = {6}>

                <Canvas>
                  <PerspectiveCamera
                    position={[0, 3, 0]}
                    fov={120}
                    makeDefault={true}
                  />
                  <OrthographicCamera
                    position={[-3, 0, 5]}
                    zoom={250}
                    makeDefault={true}
                  />
                  <Suspense>
                    <Avatar rotation={[0, -1, 0]} position={[-3,-1,0]} />
                  </Suspense>
                  <ambientLight intensity={1} />
                  <pointLight position={[-10, 10, 5]} />
                  <spotLight intensity={0.5} position={[0, -10, -10]} />
              </Canvas>


              </Grid>
            </Grid>
        </div>

        </ParallaxLayer>
      </Parallax>
      <Loader/>
    </>
  );
};

export default memo(Home);
