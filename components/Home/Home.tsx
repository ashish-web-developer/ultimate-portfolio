import { FC, memo ,Suspense} from "react";
import { makeStyles } from "@mui/styles";

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
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import Model from "./Scene";

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
          <div className={classes.container}>
            <Canvas>
              <PerspectiveCamera
                position={[0, 3, 0]}
                fov={120}
                makeDefault={true}
              />
              <OrthographicCamera
                position={[-3, 0, 5]}
                zoom={60}
                makeDefault={true}
              />
              <Suspense>
                <Model rotation={[-1.6, 0, 0]} position={[10, -7, 0]} />
              </Suspense>
              <ambientLight intensity={1} />
              <pointLight position={[-10, 10, 5]} />
              <spotLight intensity={0.5} position={[0, -10, -10]} />
            </Canvas>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default memo(Home);
