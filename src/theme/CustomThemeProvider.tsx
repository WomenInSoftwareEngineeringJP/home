
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { FC, PropsWithChildren } from 'react'


const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}

export default CustomThemeProvider
