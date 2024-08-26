/*
Custom Colors in Typescript requires module augmentation
Read more: https://mui.com/material-ui/customization/palette/#typescript
*/
import '@mui/material'


declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
    }

    interface PaletteOptions {
        tertiary?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        tertiary: true
    }
}
