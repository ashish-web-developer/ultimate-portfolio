import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createContext,useEffect,useState} from "react";

import { ThemeProvider} from '@mui/styles'
import { createTheme } from '@mui/material'
import useAuth from '../hooks/auth';



const theme = createTheme({
  palette:{
    primary:{
      main:"#e2cf52"
    }
  }
})

function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
      <ThemeProvider theme= {theme}>
          <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
