// Mui
import {
  Input,
  Button,
  Stack,
  InputLabel,
  InputAdornment,
  Checkbox
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

// Helpers
import useAuth from "../../hooks/auth";
import useStyles from "../../styles/login";

import { Formik } from "formik";

const SignupLogin = () => {
  const classes = useStyles();
  const { login } = useAuth();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        login(values.email, values.password, setSubmitting);
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className={classes.signLoginContainer}>
            <div className={classes.header}>
              <h3 className={classes.headerText}>Welcome to Creative Dev</h3>
              <p className={classes.headerSubtitle}>Create Your Account</p>
            </div>
            <div className={classes.emailContainer}>
              <Stack direction="column" spacing={2}>
                <div>
                  <InputLabel className={classes.inputLabel}>Email</InputLabel>
                  <Input
                    onChange={handleChange}
                    disableUnderline={true}
                    name="email"
                    className={classes.inputStyles}
                    type="text"
                    placeholder="Enter your email"
                    fullWidth
                    endAdornment = {
                        <InputAdornment position ="end">
                            <MdAlternateEmail size = {20} color="#fff"/>
                        </InputAdornment>
                    }
                  />
                </div>
                <div>
                  <InputLabel className={classes.inputLabel}>
                    Password
                  </InputLabel>
                  <Input
                    onChange={handleChange}
                    disableUnderline={true}
                    name="password"
                    className={classes.inputStyles}
                    type="password"
                    placeholder="Enter your password"
                    fullWidth
                    endAdornment = {
                        <InputAdornment position ="end">
                            <RiLockPasswordFill size = {20} color="#fff"/>
                        </InputAdornment>
                    }
                  />
                </div>
                <div className = {classes.bottomContainer}>
                    <Checkbox className = {classes.checkboxStyles}/>
                </div>
              </Stack>
            </div>
            <div className={classes.signBtnContainer}>
              <Stack direction="column" spacing={2}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.submitCta}
                  variant="contained"
                >
                  Continue
                </Button>
                <Button
                  className={classes.socialCta}
                  fullWidth
                  startIcon={<FcGoogle />}
                  variant="outlined"
                >
                  Continue with Google
                </Button>
                <Button
                  className={classes.socialCta}
                  fullWidth
                  startIcon={<FaFacebook />}
                  variant="outlined"
                >
                  Continue with Facebook
                </Button>
                <Button
                  className={classes.socialCta}
                  fullWidth
                  startIcon={<FaGithub />}
                  variant="outlined"
                >
                  Continue with Github
                </Button>
              </Stack>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupLogin;
