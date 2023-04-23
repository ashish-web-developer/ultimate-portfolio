import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleToggle } from "./signupLogin.slice";
import { showSnackbar } from "./snackbar.slice";
import User from "@/types/user";
import type { RootState } from "./rootReducer";
import Cookies from "universal-cookie"

// Axios
import {axios} from "../lib/axios";


interface LoginRequest  {
    email:string;
    password:string;
}

interface LoginResponse {
    status:boolean,
    message:string,
    user:User,
    token:string
}

interface LogoutResponse {
    success:boolean;
    message:false;
}

interface RegisterRequest {
    name:string;
    email:string;
    password:string;
}


interface UserState{
    user:User|null;
    token:string|null;
    login:{
        isLogging:boolean;
        message:string|null;
    }
    register:{
        isSigning:boolean;
        message:string|null;
    }
}

export const loginHandler = createAsyncThunk<LoginResponse,LoginRequest,{state:RootState}>(
  'user/login',
  async ({ email,password },{getState,dispatch,rejectWithValue}) => {
    try{
        const response = await axios.post("/api/login",{
            email,
            password
        });
        if(response.data.status){
            dispatch(handleToggle(false));
            dispatch(showSnackbar({
                message:"You are Logged In successfully!",
                severity:"info",
            }))
        }
        return response.data;
    }catch(error:any){
        dispatch(showSnackbar({
            message:"Your Password or Email must be wrong, Try Again!",
            severity:"error",
        }))
        return rejectWithValue(error?.response?.data);
    }
  }
);


export const registerHandler = createAsyncThunk<LoginResponse,RegisterRequest>(
    "user/register",
    async ({name,email,password},{rejectWithValue,dispatch})=>{
        try{
            const response = await axios.post("api/register",{
                name,
                email,
                password
            });
            dispatch(handleToggle(false));
            dispatch(showSnackbar({
                message:"Your Account Created Successfully!",
                severity:"info",
            }))
            return response.data;
        }catch(error:any){
            dispatch(showSnackbar({
                message:"Account already exist!",
                severity:"error",
            }))
            return rejectWithValue(error?.response.data)
        }
    }
)

export const logoutHandler = createAsyncThunk<LogoutResponse,undefined,{state:RootState}>(
    "user/logout",
    async (_,{getState})=>{
        const state = getState();
        const config = {
            headers: { Authorization: `Bearer ${state.user.token}` }
        };
        const response = await axios.get("/api/logout",config)
        return response.data;

    }
)

export const getUserHandler = createAsyncThunk<User,undefined,{state:RootState}>(
    "user/getuser",
    async (_,{getState})=>{
        const state = getState();
        const config = {
            headers: { Authorization: `Bearer ${state.user.token}` }
        };
        const response = await axios.get("/api/user",config)
        return response.data;
    }
)


const cookie = new Cookies();

const initialState:UserState = {
    user:null,
    token:cookie.get("token"),
    login:{
        isLogging:false,
        message:null,

    },
    register:{
        isSigning:false,
        message:null,
    }
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUser:(state,action)=>{
            state.user = action.payload
        }
    },
    extraReducers:(builder)=>{
        // Login cases
        builder.addCase(loginHandler.pending,(state)=>{
            state.login.isLogging = true;
            state.login.message = "Logging in...."
        })
        builder.addCase(loginHandler.rejected,(state)=>{
            state.login.isLogging = false;
            state.login.message = "Your email or password must be wrong";
        })
        builder.addCase(loginHandler.fulfilled,(state,action)=>{
            state.login.isLogging = false;
            state.login.message = "You are Logged In successfully";
            state.user = action.payload.user;
            state.token = action.payload.token;
            window.sessionStorage.setItem("user",JSON.stringify(action.payload.user))
            let expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate()+30);
            cookie.set("token",action.payload.token,{path:'/',expires:expiryDate});
        })


        // Register cases
        builder.addCase(registerHandler.pending,(state)=>{
            state.register.isSigning = true;
            state.register.message = "Registering...."
        })
        builder.addCase(registerHandler.rejected,(state)=>{
            state.register.isSigning = false;
            state.register.message = "failed";
        })
        builder.addCase(registerHandler.fulfilled,(state,action)=>{
            state.register.isSigning = false;
            state.register.message = "Registered Successfully";
            state.user = action.payload.user;
            state.token = action.payload.token;
            window.sessionStorage.setItem("user",JSON.stringify(action.payload));
            let expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate()+30);
            cookie.set("token",action.payload.token,{path:'/',expires:expiryDate});
        })
        

        // Getting user handler
        builder.addCase(getUserHandler.fulfilled,(state,action)=>{
            state.user = action.payload;
        })
        
        // Log out handler
        builder.addCase(logoutHandler.fulfilled,(state)=>{
            state.user = null;
            cookie.remove("token");
            window.sessionStorage.removeItem("user");
        })
    }

    
})


export const {updateUser} = userSlice.actions;
export const user = (state:RootState) => state.user.user;

export default userSlice.reducer;