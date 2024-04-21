import { FC } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import ColorSwatch from './ColorSwatch';
import StarIcon from '@mui/icons-material/Star'


const ThemePreview: FC = () => {
    return (
        <Container>
            <Stack spacing={1}>
                <Typography variant="h4">Type</Typography>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="h6">Heading 6</Typography>
                <Typography variant="subtitle1">Subtitle 1</Typography>
                <Typography variant="subtitle2">Subtitle 2</Typography>
                <Typography variant="body1">Body 1 This is a paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, at iure quod enim praesentium vel! Vel voluptatum cumque dolorum illum suscipit aspernatur adipisci dolore fugiat. Iusto esse minima debitis rerum?</Typography>
                <Typography variant="body2">Body 2 漢字、ひらがな、カタカナ。僕たちはパチろっボトです！こんにちは！いらしゃいませ。私は初心者です、なのでいつも勉強します。可愛いですよ。欲しいな！</Typography>
                <Typography variant="button">Button</Typography>
                <Typography variant="caption">Caption</Typography>
                <Typography variant="overline">Overline</Typography>


                <Typography variant="h4">Colors</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}><ColorSwatch color="primary">Primary</ColorSwatch></Grid>
                    <Grid item xs={4}><ColorSwatch color="secondary">Secondary</ColorSwatch></Grid>
                    <Grid item xs={4}><ColorSwatch color="tertiary">Tertiary</ColorSwatch></Grid>
                </Grid>


                <Typography variant="h4">Buttons</Typography>
                <Button variant="outlined">This is an MUI Button</Button>


                <Stack spacing={2}>
                    <Typography variant="h4">Icons</Typography>
                    <StarIcon />
                </Stack>
            </Stack>
        </Container>
    )
}

export default ThemePreview
