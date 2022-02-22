import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// MUI
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
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
	img = '',
	backgroundColor = null,
}) => {

	const classes = useStyles({background: backgroundColor});

	return (
		<Box className={classes.sliderContainer}>
			<img className={classes.sliderImage}
				src={img}
				alt={imgLabel}
			/>
				<Typography className={classes.textContainer} > 
					{description} 
				</Typography>
			{/* <TextContainer>
			</TextContainer> */}
		</Box>
	);
};

const defaultSliderData = [
	{
		id: 1,
		name: "test1",
		description: "test description1",
		backgroundColor: "#12579d",
		image: Foto1,
	},
	{
		id: 2,
		name: "test2",
		description: "test description2",
		backgroundColor: "#d32848",
		image: Foto6,
	},
	{
		id: 3,
		name: "test3",
		description: "test description3",
		image: Foto7,
	},
	{
		id: 4,
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
				interval={155555000}>
				{slidersData.map((slideData) => {
					return (
						<Slide
							key={slideData.id}
							title={slideData.name}
							description={slideData.description}
							backgroundColor={slideData.backgroundColor}
							img={slideData.image}
						/>
					);
				})}
			</AutoPlaySwipeableViews>
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
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						
						{theme.direction === "rtl" ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
					</Button>
				}
			/>
		</>
	);
};

export default Slider;
