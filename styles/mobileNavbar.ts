import { makeStyles } from "@mui/styles"; 



const useStyles = makeStyles({
    container:{
        marginTop:"16px"
    },
    navCtaContainer:{
        position:"relative"
    },
    navCta:{
        position:"absolute !important",
        right:"0px"
    },
    logoText:{
        fontFamily:"'Bungee', cursive",
        color:"#fff",
        fontSize:"16px",
        textDecoration:"underline",
        textDecorationColor:"#e2cf52",
        textDecorationThickness:"5px",
        paddingLeft:"16px"
    },
    curlyBraces:{
        color:"#e2cf52"
    },
    drawerContainer:{
        backgroundColor:"#000"
    }
})


export default useStyles;