import { Typography } from '@mui/material'
import useStyles from './novedadesStyles'

const NewsText =  ({text}) => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="body1" className={classes.typographySize}>
                {text}
            </Typography>
        </>
    )
}

export default NewsText