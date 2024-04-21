import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
    fontFamily: ['Lusitana', 'Noto Sans JP', 'serif'].join(','),
    h1: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 700,
        fontSize: '4rem',
    },
    h2: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 600,
        fontSize: '3.4rem',
    },
    h3: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 600,
        fontSize: '2.8rem'
    },
    h4: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 500,
        fontSize: '2.4rem'
    },
    h5: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 500,
        fontSize: '2rem'
    },
    h6: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 400,
        fontSize: '1.6rem'
    },
    subtitle1: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 800,
        fontStyle: 'italic',
        fontSize: '1.5rem'
    },
    subtitle2: {
        fontFamily: ['PlayfairDisplay'].join(''),
        fontWeight: 600,
        fontStyle: 'italic',
        fontSize: '1.3rem'
    },
    body1: {
        fontSize: '1.25rem'
    },
    body2: {
        fontFamily: ['Noto Serif JP', 'serif'].join(','),
        fontSize: '1.25rem'
    },
    button: {
        fontSize: '1.25rem'
    },
    caption: {
        fontSize: '1rem'
    },
    overline: {
        fontSize: '1rem'
    }
}

export default typography
