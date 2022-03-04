import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Box from '@mui/material/Box'
const Image = ({ urlImg, alt }) => {
    return (
        <Box>
            <LazyLoadImage
                src={urlImg}
                alt={alt}
                effect="blur"
            />
        </Box>
    )
}

export default Image