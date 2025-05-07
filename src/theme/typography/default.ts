import { TypographyVariantsOptions } from '@mui/material/styles'

const typography: TypographyVariantsOptions = {
    fontFamily: ['Noto Sans JP', 'serif'].join(','),
    h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
    },
    h2: {
        fontWeight: 600,
        fontSize: '3rem',
    },
    h3: {
        fontWeight: 600,
        fontSize: '2.5rem'
    },
    h4: {
        fontWeight: 500,
        fontSize: '2.2rem'
    },
    h5: {
        fontWeight: 500,
        fontSize: '2rem'
    },
    h6: {
        fontWeight: 400,
        fontSize: '1.6rem'
    },
    subtitle1: {
        fontWeight: 800,
        fontStyle: 'italic',
        fontSize: '1.5rem'
    },
    subtitle2: {
        fontWeight: 600,
        fontStyle: 'italic',
        fontSize: '1.3rem'
    },
    body1: {
        fontSize: '1rem'
    },
    body2: {
        fontSize: '.75rem'
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
