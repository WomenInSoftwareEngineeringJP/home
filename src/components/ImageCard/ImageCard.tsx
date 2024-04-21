import { FC } from 'react';
import Card from '@mui/material/Card'

interface ImageCardProps {
    src: string
    alt: string
    width?: number | string
    height?: number | string
}

const ImageCard: FC<ImageCardProps> = ({ src, alt, width, height }) => {

    return <Card sx={{ width: width, height: height, margin: 2 }} color="tertiary">
        <img src={src} alt={alt} width={width} height={height} />
    </Card>
}

export default ImageCard
