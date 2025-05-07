import { createTheme } from '@mui/material/styles'
import typography from './typography/default'
import { lightBlue, deepPurple, purple, grey, indigo } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: purple[700],
            main: purple[800],
            dark: purple[900],
            contrastText: '#FFF'
        },
        secondary: {
            light: lightBlue[400],
            main: lightBlue[800],
            dark: lightBlue[800],
            contrastText: '#000',
        },
        tertiary: {
            light: indigo[500],
            main: indigo[800],
            dark: indigo[900],
            contrastText: '#fff',
        },
        action: {
            active: purple[100],
            hover: purple[300],
            selected: purple[200],
            disabled: grey[200],
            disabledBackground: grey[300]
        },
        background: {
            default: '#170D45',
            paper: deepPurple[900]
        },
        divider: lightBlue[300]
    },
    typography
})

export default theme
