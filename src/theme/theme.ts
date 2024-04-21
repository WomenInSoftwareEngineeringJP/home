import createTheme from '@mui/material/styles/createTheme'
import typography from './typography/default';
import { teal, lightBlue, deepPurple, purple, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: purple[200],
            main: purple[300],
            dark: purple[400],
            contrastText: '#FFF',
        },
      secondary: {
        light: lightBlue[400],
        main: lightBlue[800],
        dark: lightBlue[800],
        contrastText: '#000',
      },
      tertiary: {
        light: teal[400],
        main: teal[800],
        dark: teal[900],
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
        default: deepPurple[900],
        paper: deepPurple[800]
      },
      divider: purple[100]
      
    },
    typography
  });

  export default theme
