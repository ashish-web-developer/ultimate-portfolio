import Link from "next/link";

import { makeStyles } from "@mui/styles";

// icons
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";


const useStyles = makeStyles({
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
    



const SocialIcon = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.socialIconContainer}>
            <div className={classes.socialIcon}>
            <Link href="https://www.facebook.com/thebadbluffer">
                <a>
                <ImFacebook color="#000" />
                </a>
            </Link>
            </div>
            <div className={classes.socialIcon}>
            <Link href="https://twitter.com/thebad_bluffer">
                <a>
                <BsTwitter color="#000" />
                </a>
            </Link>
            </div>
            <div className={classes.socialIcon}>
            <Link href="https://github.com/ashish-web-developer">
                <a>
                <FaGithubAlt color="#000" />
                </a>
            </Link>
            </div>
            <div className={classes.socialIcon}>
            <Link href="https://www.linkedin.com/in/ashish-prajapati-abb3b824a">
                <a>
                <GrLinkedinOption color="#000" />
                </a>
            </Link>
            </div>
        </div>

    )
}


export default SocialIcon;