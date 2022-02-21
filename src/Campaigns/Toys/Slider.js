import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Hidden from '@mui/material/Hidden'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { useStyles } from './Styles/sliderToysStyles'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    label: 'Juguetes para los más chicos',
    imgPath:
      'https://res.cloudinary.com/danb0chax/image/upload/v1645214863/SomosMas/Foto_3_dzs6pk.jpg',
  },
  {
    label: 'Doná juguetes para el Dia del Niño',
    imgPath:
      'https://res.cloudinary.com/danb0chax/image/upload/v1645214862/SomosMas/Manos_10_pzhrqf.jpg',
  },
  {
    label: 'Campaña anual de Juguetes',
    imgPath:
      'https://res.cloudinary.com/danb0chax/image/upload/v1645214862/SomosMas/Foto_5_eer40b.jpg',
  },
]

const Slider = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length
  const classes = useStyles()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleStepChange = (step) => {
    setActiveStep(step)
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                /* className={classes.sliderImage} */
                component="img"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  objectFit: 'cover',

                  [theme.breakpoints.down('sm')]: {
                    height: 400,
                    marginLeft: -20,
                  },
                  [theme.breakpoints.up('sm')]: {
                    height: 400,
                    width: '100%',
                  },
                  [theme.breakpoints.up('md')]: {
                    height: 450,
                    width: '100%',
                  },
                  [theme.breakpoints.up('lg')]: {
                    height: 550,
                    width: '100%',
                  },
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}

            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.sliderArrows}
              /*   sx={{
                position: 'relative',
                marginTop: -5,
                background: 'none',
              }} */
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
            <Hidden smDown>
              <Paper
                square
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 50,
                  pl: 2,
                  bgcolor: 'background.default',
                }}
              >
                <Typography>{images[activeStep].label}</Typography>
              </Paper>
            </Hidden>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  )
}

export default Slider
