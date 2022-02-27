import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useStyles } from './StylesCard';


const CardComponent = ({title,image,placeHolder,description,firstLink,secondLink,textFirstLink,textSecondLink}) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div  className={classes.styleTitle}>
        <Typography variant='body1'>
            <b>{title}</b>
        </Typography>
       </div>

      <CardMedia
        component="img"
        height="194"
        image={image}
        alt=""
        placeholder={placeHolder}
      />
      <CardContent>
        <Typography variant="subtitle2" className={classes.styleDescription}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <div className={classes.containerLink}>
          <div>
            <a href={firstLink} className={classes.styleLink}>{textFirstLink}</a>
          </div>
          <div className={classes.paddingBetweenLink}>
            <a href={secondLink}  className={classes.styleLink}>{textSecondLink}</a>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}

export default CardComponent;