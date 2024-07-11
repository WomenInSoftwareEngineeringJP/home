import Paper from '@mui/material/Paper'
import { Theme, styled } from '@mui/material/styles'

interface SwatchProps {
    color: string
}

function getHexFromColorName(color: string, theme: Theme) {
    switch (color) {
        case 'primary':
            return theme.palette.primary.main
        case 'secondary':
            return theme.palette.secondary.main
        case 'tertiary':
            return theme.palette.tertiary?.main
    }
    return color
}

const ColorSwatch = styled(Paper)<SwatchProps>(({ theme, color }) => ({
    backgroundColor: getHexFromColorName(color, theme),
    ...theme.typography.h4,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default ColorSwatch
