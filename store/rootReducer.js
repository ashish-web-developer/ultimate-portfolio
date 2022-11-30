import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from "@/store/Navbar/navbar.slice"

export default configureStore({
  reducer: {
    navbar:navbarReducer
  },
})