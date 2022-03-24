import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { getSlides } from '../../Services/Home';


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
		name: "Acompañamos a aprender.",
		description: "test description2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
		image: "https://res.cloudinary.com/danb0chax/image/upload/v1646849820/SomosMas/pexels-kindel-media-7105593_cv7jcl.jpg",
		title: "Acompañamos a aprender.",

	},
	{
		id: 2,
		name: "la importancia de jugar.",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		image: 'https://res.cloudinary.com/danb0chax/image/upload/v1646849827/SomosMas/pexels-polesie-toys-4487869_tfd7uk.jpg',
		title: "La importancia de jugar.",
	},
	{
		id: 3,
		name: "Actividad física y deporte",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
		image: 'https://res.cloudinary.com/danb0chax/image/upload/v1646849812/SomosMas/pexels-bruna-saito-1805843_hormkl.jpg',
		title: "Actividad física y deporte.",
	},
];



// Principal component
const Slider = ({ slidersData = defaultSliderData }) => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const [ slides, setSlides ] = useState([]);
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
