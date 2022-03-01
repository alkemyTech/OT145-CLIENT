import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

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

// Data to get from anyplace
const defaultSliderData = [
	{
		id: 1,
		name: "test2",
		description: "test description2",
		image: "images/campaign-recent-02.jpg",
		title: "title test 2",
		// image: Foto6,
	},
	{
		id: 2,
		name: "test3",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		image: "images/campaign-recent-03.jpg",
		title: "title test 3",
	},
	{
		id: 3,
		name: "test4",
		description: "test description4",
		// image: Manos10,
	},
];

// Principal component
const Slider = ({ slidersData = defaultSliderData }) => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = slidersData.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	const classes = useStyles();

	return (
		<>
			<AutoPlaySwipeableViews
				enableMouseEvents
				onChangeIndex={handleStepChange}
				index={activeStep}
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				interval={50000000000000000}>
				{slidersData.map((slideData) => {
					return (
						<Slide
							key={slideData.id}
							imgLabel={slideData.name}
							description={slideData.description}
							title={slideData.title}
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
