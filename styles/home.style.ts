import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
const useStyles = makeStyles((theme:Theme)=>({
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
    ['@media(max-width:780px)']:{
      fontSize: "24px",
    }
  },
  introText:{
    fontFamily: "'Style Script', cursive",
    fontSize: "30px",
  },
  mainTextHeader: {
    fontSize: "100px",
    backgroundColor: theme.palette.primary.main,
    color: "#000",
    padding: "0px 50px",
    ['@media(max-width:780px)']:{
      fontSize: "50px",
    }
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
    textDecorationColor:theme.palette.primary.main,
    textDecorationThickness:"5px"

  },
  curlyBraces:{
      color:theme.palette.primary.main,
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
  },
  appBar:{
    "&.MuiAppBar-root":{
      height:"60px",
      backgroundColor:"rgb(18,18,18)"
    }
  }
}));

export default useStyles;