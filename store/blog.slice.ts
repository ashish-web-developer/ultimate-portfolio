import { createSlice, createAsyncThunk ,PayloadAction} from "@reduxjs/toolkit";
import { Comment } from "@/types/blogs";
import { RootState } from "./rootReducer";
import { showSnackbar } from "./snackbar.slice";
// Axios
import {axios} from "../lib/axios";
import { handleToggle } from "./signupLogin.slice";

type BlogInitialState = {
    comments:Array<Comment>|null,
    isCommentDisabled:boolean,
    commentInputVal:string|null
}

type CommentSubmitRequest = {
    blog_id:Number,
}

type CommentSubmitResponse = {
    comments:Array<Comment>
}

export const commentSubmitHandler = createAsyncThunk<CommentSubmitResponse,CommentSubmitRequest,{state:RootState}>(
    "blog/comment/submit",
    async ({blog_id},{dispatch,rejectWithValue,getState})=>{
        try{
            const state = getState();
            const response = await axios.post("/api/comment/create",{
                body:state.blog.commentInputVal,
                blog_id
            })
            if(response.data.success){
                dispatch(updateCommentInputVal(""));
                dispatch(showSnackbar({
                    message:"Comment Posted Successfully",
                    severity:"info",
                }))
            }
            return response.data;
        }catch(error){
            console.log("value of error",error);
            if(error?.response.data.message == "Unauthenticated."){
                dispatch(handleToggle(true))
            }else{
                dispatch(showSnackbar({
                    message:"Something Went Wrong",
                    severity:"error",
                }))
            }
            return rejectWithValue(error?.response.data)
        }
    }
)
const initialState:BlogInitialState = {
    comments:null,
    isCommentDisabled:true,
    commentInputVal:null,
}


export const blogSlice = createSlice({
    "name":"signuplogin",
    initialState,
    reducers:{
        updateComments:(state,action:PayloadAction<Array<Comment>>)=>{
            state.comments = action.payload
        },
        updateIsCommentDisabled:(state,action:PayloadAction<boolean>)=>{
            state.isCommentDisabled = action.payload;
        },
        updateCommentInputVal:(state,action:PayloadAction<string|null>)=>{
            state.commentInputVal = action.payload;
            if(!action.payload){
                state.isCommentDisabled = true;
            }else{
                state.isCommentDisabled = false;
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(commentSubmitHandler.pending,(state)=>{
            state.isCommentDisabled = true;
        })
        builder.addCase(commentSubmitHandler.fulfilled,(state,action)=>{
            state.isCommentDisabled = false;
            state.comments = action.payload.comments; 
        })
        builder.addCase(commentSubmitHandler.rejected,(state)=>{
            state.isCommentDisabled = false;
        })
    }
})

export const {updateComments,updateIsCommentDisabled,updateCommentInputVal} = blogSlice.actions;
export const signupLogin = (state:RootState) => state.blog.comments;
export default blogSlice.reducer;