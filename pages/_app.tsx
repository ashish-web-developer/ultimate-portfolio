import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { ThemeProvider} from '@mui/styles'
import { createTheme } from '@mui/material'

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
      <SessionProvider session = {session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
