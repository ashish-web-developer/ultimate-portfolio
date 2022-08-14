import { FC, memo ,Suspense} from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

//components
import Navbar from "../Navbar/Navbar";
import ProjectCube from "./ProjectCube";

//material ui
import { Grid } from "@mui/material";

// icons
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { CgArrowDown } from "react-icons/cg";
import Link from "next/link";

//three js

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrthographicCamera ,Loader} from "@react-three/drei";
import Avatar from "./DevAvatar"

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
  socialIconContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "150px",
  },
  scrollCtaContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pageNumberStyle: {
    position: "absolute",
    fontFamily: "'Bungee', cursive",
    color: "#fff",
    bottom: "0px",
    fontSize: "100px",
    textDecoration: "underline",
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
  socialIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
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

  }
});

const Home: FC = () => {
  const classes = useStyles();
  const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <>
      <Parallax pages={2}>
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
                <div className={classes.socialIconContainer}>
                  <div className={classes.socialIcon}>
                    <Link href="/">
                      <a>
                        <ImFacebook color="#000" />
                      </a>
                    </Link>
                  </div>
                  <div className={classes.socialIcon}>
                    <Link href="/">
                      <a>
                        <BsTwitter color="#000" />
                      </a>
                    </Link>
                  </div>
                  <div className={classes.socialIcon}>
                    <Link href="/">
                      <a>
                        <FaGithubAlt color="#000" />
                      </a>
                    </Link>
                  </div>
                  <div className={classes.socialIcon}>
                    <Link href="/">
                      <a>
                        <GrLinkedinOption color="#000" />
                      </a>
                    </Link>
                  </div>
                </div>
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
                    <span style={{ writingMode: "vertical-rl" }}>
                      SCROLL DOWN
                    </span>
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
              <Grid sx = {{height:"100%"}} xs = {8} item>
                <div className = {classes.workContainer}>
                  <span className = {classes.workHeading}><span className = {classes.curlyBraces}> &#123;</span> Work <span className = {classes.curlyBraces}>&#125;</span></span>
                  <div style = {{height:"70%"}}>
                    <Grid sx = {{height:"100%"}} container>
                      <Grid xs = {12} item>
                        <Grid sx = {{height:"100%"}} container>
                          <Grid  className = {classes.projectItemContainer} xs = {4} item>
                            <div>
                              <span className = {classes.projectItem}>Mern Dev</span><br/>
                              <span>EJS | Javascript | CSS</span>
                            </div>
                          </Grid>
                          <Grid className = {classes.projectItemContainer} xs = {3} item>
                            <div>
                            <span className = {classes.projectItem}>Vimrc</span><br/>
                            <span>VIM Script</span>
                            </div>
                          </Grid>
                          <Grid className = {classes.projectItemContainer} xs = {5} item>
                            <div>
                              <span className = {classes.projectItem}>IP Address Tracker</span><br/>
                              <span>HTML</span> | <span>Javascript</span>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid xs = {12} item>
                        <Grid sx = {{height:"100%"}} container>
                          <Grid className = {classes.projectItemContainer} xs = {3} item>
                            <div>
                              <span className = {classes.projectItem}>GDF</span><br/>
                              <span>Tailwind CSS</span>
                            </div>
                          </Grid>
                          <Grid className = {classes.projectItemContainer} xs = {5} item>
                            <div>
                              <span className = {classes.projectItem}>Personal blog</span><br/>
                              <span>Next JS</span> | <span>Material ui</span> | <span>Dicebears</span>
                            </div>
                          </Grid>
                          <Grid  className = {classes.projectItemContainer} xs = {4} item>
                            <div>
                              <span className = {classes.projectItem}>Facebook clone</span><br/>
                              <span>Next JS</span> | <span>Material ui</span> | <span>Dicebears</span>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid  sx = {{height:"100%"}} xs = {4} item>
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
