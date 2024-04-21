import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import Router from './routes/Router';
import { GlobalStyles } from '@mui/material';
import CustomThemeProvider from './theme/CustomThemeProvider';
import './index.css'

import '@fontsource/noto-sans-jp/300.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CustomThemeProvider>
            <CssBaseline />
            <GlobalStyles styles={{ body: { backgroundColor: '#311b92' } }} />
            <Router />
        </CustomThemeProvider>
    </React.StrictMode>,
)
