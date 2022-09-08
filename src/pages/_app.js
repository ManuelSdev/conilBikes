import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../assets/theme'

import { wrapper } from '../app/store'

import createEmotionCache from '../lib/createEmotionCache'
import { CacheProvider } from '@emotion/react';

import '../../styles/globals.css'

//Material UI-Next.js
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />

      </ThemeProvider>
    </CacheProvider>

  )


}

export default wrapper.withRedux(App)
