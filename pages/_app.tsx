import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider} from '@mui/styles'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette:{
    primary:{
      main:"#e2cf52"
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme= {theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
