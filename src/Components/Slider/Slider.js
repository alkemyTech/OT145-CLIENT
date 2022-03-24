import React, { useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlides } from '../../redux/slides/slidesSlice'
 
// MUI
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Styles
import useStyles from "./styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slide = ({
	title = "title",
	description = "slide description",
	imgLabel = "imageLabel",
	imgSrc = "images/logoSomosMas.png",
}) => {
	const isLogo = imgSrc === "images/logoSomosMas.png" ? true : false;

	const classes = useStyles({ isLogo: isLogo });

	return (
		<Box className={classes.sliderContainer}>
			<Box
				component="img"
				className={classes.sliderImage}
				src={imgSrc}
				alt={imgLabel}
			/>
			<Box className={classes.textBoxContainer}>
				<Box className={classes.textContainer}>
					<Typography variant="h3" className={classes.text}>
						{title}
					</Typography>
					<Typography variant="p" className={classes.text}>
						{description}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

// Principal component
const Slider = () => {

	const dispatch = useDispatch()

	const slideStatus = useSelector(state => state.slides.status)

	const slides = useSelector(state => state.slides.slides)

	useEffect(() => {
		if(slideStatus === 'idle'){
			dispatch(fetchSlides())
		}
	}, [slideStatus, dispatch]);

	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = slides?.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	useEffect(() => {
		const getData = async () => {
			const { data } = await getSlides(3);
			setSlides(data);
		}
		getData();
	}, [])


	const classes = useStyles();

	return (
		<>
			<AutoPlaySwipeableViews
				enableMouseEvents
				onChangeIndex={handleStepChange}
				index={activeStep}
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				interval={50000000000000000}>
				{slides.map((slideData) => {
					return (
						<Slide
							key={slideData.id}
							imgLabel={slideData.name}
							description={slideData.description}
							title={slideData.name}
							imgSrc={slideData.image}
						/>
					);
				})}
			</AutoPlaySwipeableViews>

			{/* Slider buttons */}
			<IconButton
				className={classes.slideButtonLeft}
				sx={{
					color: "#919191",
					backgroundColor: "#fff",
					position: "absolute",
					":hover": {
						backgroundColor: "#efefef",
						color: "#818181",
					},
				}}
				size="medium"
				onClick={handleBack}
				disabled={activeStep === 0}>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				className={classes.slideButtonRight}
				sx={{
					color: "#919191",
					backgroundColor: "#fff",
					position: "absolute",
					":hover": {
						backgroundColor: "#efefef",
						color: "#818181",
					},
				}}
				size="medium"
				onClick={handleNext}
				disabled={activeStep === maxSteps - 1}>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>

			{/* Slider dots */}
			<MobileStepper
				className={classes.sliderDots}
				sx={{
					justifyContent: "center",
				}}
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
			/>
		</>
	);
};

export default Slider;
