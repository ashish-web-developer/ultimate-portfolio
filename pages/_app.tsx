import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider} from '@mui/styles'
import { createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import UserProvider from './UserProvider'
import store from "@/store/rootReducer";



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
        <Provider store={store}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </Provider>
      </ThemeProvider>
  )
}

export default MyApp
