import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from "@/store/Navbar/navbar.slice"
import signupLoginReducer from "@/store/signupLogin.slice";
import UserReducer from "@/store/userSlice";

const store =  configureStore({
  reducer: {
    navbar:navbarReducer,
    signupLogin:signupLoginReducer,
    user:UserReducer
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;