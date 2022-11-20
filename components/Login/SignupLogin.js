// React
import {useState} from "react";

// Mui
import {
  Input,
  Button,
  Stack,
  InputLabel,
  InputAdornment,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

// Helpers
import useAuth from "../../hooks/auth";


// styles
import useStyles from "../../styles/login";

import { Formik } from "formik";


const signUpLoginButtonTextHandler = (state, isSignup)=>{
  if(state){
    if(isSignup){
      return "Create An Account"
    }else{
      return "Login"
    }
  }else{
    if(isSignup){
      return "Signing Up..."
    }else{
      return "Logging In..."
    }

  }
}

const SignupLogin = () => {
  const classes = useStyles();
  const [isSignup,setIsSignUp] = useState(true);
  const { login, register } = useAuth();

  return (
    <Formik
      initialValues={{ email: "", password: "" ,name:""}}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        isSignup?register(values,setSubmitting,setIsSignUp):login(values,setSubmitting);
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
              <Stack direction="column" spacing={3}>
                {
                 isSignup && <div>
                  <InputLabel className={classes.inputLabel}>Name</InputLabel>
                  <Input
                    onChange={handleChange}
                    disableUnderline={true}
                    name="name"
                    className={classes.inputStyles}
                    type="text"
                    placeholder="Enter your name"
                    endAdornment = {
                        <InputAdornment position ="end">
                            <MdAlternateEmail size = {20} color="#fff"/>
                        </InputAdornment>
                    }
                  />

                </div>
                }
                <div>
                  <InputLabel className={classes.inputLabel}>Email</InputLabel>
                  <Input
                    onChange={handleChange}
                    disableUnderline={true}
                    name="email"
                    className={classes.inputStyles}
                    type="text"
                    placeholder="Enter your email"
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
                {
                  !isSignup && 
                  <div className = {classes.bottomContainer}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox name = "remember" className = {classes.checkboxStyles}/>} label="Remember for 30 days" />
                    </FormGroup>
                  </div>
                }
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.submitCta}
                  variant="contained"
                  fullWidth = {true}
                >
                  {signUpLoginButtonTextHandler(!isSubmitting,isSignup)}
                </Button>
                <div>
                  Don&apos;t Have an Account?
                  <Button onClick = {()=>setIsSignUp(!isSignup)} className = {classes.switchFormCta} variant = "text">{isSignup?"Login":"Sign Up"}</Button>
                </div>
              </Stack>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupLogin;
