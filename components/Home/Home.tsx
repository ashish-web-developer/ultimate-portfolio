import React, { FC, memo ,Suspense,useRef} from "react";
import clsx from "clsx";
import dynamic from "next/dynamic"; 

// Local components
const Navbar = dynamic(()=>import("@/components/Navbar/Navbar"),{
  ssr:false
})

const MobileNavbar = dynamic(()=>import("@/components/Navbar/MobileNavbar"),{
  ssr:false
})

import HomeMainText from "@/components/Home/HomeMainText"

const TechCube = dynamic(()=>import("@/components/Home/TechCube"),{
  ssr:false
})
import WorkEx from "@/components/Home/WorkEx";
import TechStackCloud from "@/components/Home/TechStackCloud";
import Contact from "@/components/Home/HomeSection/Contact";

// material ui
import { Grid, Button ,useTheme,Theme,useMediaQuery} from "@mui/material";
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
import Avatar from "./DevAvatar";

// react spring
import { useSpring, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Style
import useStyles from "@/styles/home.style";




const Home: FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const parallaxRef = useRef<any>(null);
  const isMobile = useMediaQuery('(max-width:758px)');
  const scrollHandler = (offset:Number):void=>{
    if(parallaxRef?.current){
      parallaxRef.current.scrollTo(offset);
    }
  }
  return (
    <>
    {
      !isMobile?
    <div>

    <div className = {classes.emailContainer}>ashish_classic@proton.me</div>
      <Parallax ref = {parallaxRef} pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.container}>
            {!isMobile && <Navbar scrollHandler = {scrollHandler} />}
            <span className={classes.pageNumberStyle}>01</span>
            <Grid sx={{ height: "100%" }} container>
              <Grid sx={{ display: "flex", alignItems: "center" }} xs={1} item>
                <div className={classes.socialIconContainer}>
                  <div className={classes.socialIcon}>
                    <Link href="https://www.facebook.com/thebadbluffer">
                        <ImFacebook color="#000" />
                    </Link>
                  </div>
                  <div className={classes.socialIcon}>
                    <Link href="https://twitter.com/ashish_classic">
                        <BsTwitter color="#000" />
                    </Link>
                  </div>
                  <div className={classes.socialIcon}>
                    <Link href="https://github.com/ashish-web-developer">
                        <FaGithubAlt color="#000" />
                    </Link>
                  </div>
                  <div className={classes.socialIcon}>
                    <Link href="https://www.linkedin.com/in/ashish-classic">
                        <GrLinkedinOption color="#000" />
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid xs={10} item>
                <Grid sx={{ height: "100%" }} container>
                  <Grid xs={6} item>
                    <Suspense>
                      <TechCube/>
                    </Suspense>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center" }}
                    xs={6}
                    item
                  >
                    <HomeMainText/>
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
                    I am a skilled and experienced full-stack developer currently employed at MIM-Essay,
                    where I have been working for a year. My technical proficiency lies in a diverse set
                    of tools and technologies, including Next.js, Laravel, Redux, MySQL, Vim, and TypeScript.
                    I am an expert in developing web applications and have worked on a variety of successful
                    projects, such as Mentr-me, MIM-Essay, Sales-CRM, and Digitalstrategos, showcasing my 
                    expertise in delivering high-quality work. My knowledge of these frameworks and
                    technologies has helped me develop efficient and robust applications that provide
                    an exceptional user experience. I am also proud of my personal portfolio, which showcases 
                    my skills and experience as a developer. I am a valuable asset to my team at MIM-Essay,
                    and my contributions have helped the organization achieve its goals.
                  </p>
                </div>
              </Grid>
              <Grid item xs = {5}>

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
              <Grid 
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
              item 
              xs = {1}>
                <div style={{ float: "right" }}>
                  <div className={classes.scrollCtaContainer}>
                    <Button onClick = {()=>scrollHandler(3)}>
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
          offset={3}
          speed={0.3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >

          <div className = {classes.container}>
            <span className={classes.pageNumberStyle}>04</span>
            <Contact/>
          </div>
        </ParallaxLayer>
      </Parallax>
      <Loader/>
      </div>:
      <div> 
            {isMobile && 
            <>
              <MobileNavbar anchor = "right" />
              <div>
                <div style = {{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}}>
                  <HomeMainText/>
                </div>
              </div>
            </>
            }
      </div>

    }
    </>
  );
};

export default memo(Home);
