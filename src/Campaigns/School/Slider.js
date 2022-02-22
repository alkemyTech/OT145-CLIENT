import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// MUI
import Button from "@mui/material/Button";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Images
import Foto1 from "./schoolCampaing/Foto1.jpg";
import Foto6 from "./schoolCampaing/Foto6.jpg";
import Foto7 from "./schoolCampaing/Foto7.jpg";
import Manos10 from "./schoolCampaing/Manos10.jpg";

// Styles
import useStyles from "./styles/Slider";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slide = ({
	description = "slide description",
	imgLabel = "imageLabel",
	imgSrc = null,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.sliderContainer}>
			{imgSrc ? (
				<img className={classes.sliderImage} src={imgSrc} alt={imgLabel} />
			) : null}
			<Container>
				<Typography className={classes.text}>{description}</Typography>
			</Container>
		</Box>
	);
};

const defaultSliderData = [
	{
		id: 1,
		name: "test2",
		description: "test description2",
		image: Foto6,
	},
	{
		id: 2,
		name: "test3",
		description: "test description3",
		image: Foto7,
	},
	{
		id: 3,
		name: "test4",
		description: "test description4",
		image: Manos10,
	},
];

// Principal component
const Slider = ({ slidersData = defaultSliderData }) => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = slidersData.length;

	const classes = useStyles();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<>
			<AutoPlaySwipeableViews
				enableMouseEvents
				onChangeIndex={handleStepChange}
				index={activeStep}
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				interval={5000}>
				{slidersData.map((slideData) => {
					return (
						<Slide
							key={slideData.id}
							imgLabel={slideData.name}
							description={slideData.description}
							imgSrc={slideData.image}
						/>
					);
				})}
			</AutoPlaySwipeableViews>
			<Container>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}>
							{theme.direction === "rtl" ? (
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
							disabled={activeStep === 0}>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
						</Button>
					}
				/>
			</Container>
		</>
	);
};

export default Slider;
