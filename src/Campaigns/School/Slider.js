import styled from "@emotion/styled";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import Button from "@mui/material/Button";

const slidesContent = [{}];

const SliderContainer = styled.div`
	display: flex;
	/* min-height: 250px;
	max-height: 330px; */
	height: 250px;
	color: #fff;
	/* background: #FEA900; */
	background: ${(props) => (props.background ? props.background : '#FEA900')};
	/* max-height: 400; */
`;

const TextContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const SliderImage = styled.img`
	object-fit: cover;
	max-width: 40%;
	max-height: 100%;
`;

const Slide = ({
	description = "slide description",
	title = "title",
	buttonText = "ver más",
	img = null,
	backgroundColor = null
}) => {
	return (
		<SliderContainer background={backgroundColor} >
			<SliderImage
				// style={Object.assign({}, styles.img)}
				src={img}
				alt=""
			/>
			<TextContainer>
				<h1>{title}</h1>
				<p>{description}</p>
				<Button variant="contained">{buttonText}</Button>
			</TextContainer>
		</SliderContainer>
	);
};

const Slider = ({
	slidersData = [
		{ id: 1, name: "test2", description: "test description2", backgroundColor: '#12579d', image: 'https://www.rover.com/blog/wp-content/uploads/2019/04/cute-big-eyes-960x540-1.jpg' },
		{ id: 2, name: "test3", description: "test description3", backgroundColor: '#12579d', image: 'https://p4.wallpaperbetter.com/wallpaper/181/205/221/cats-love-wallpaper-preview.jpg' },
		{ id: 3, name: "test3", description: "test description3", image: 'http://cdn26.us1.fansshare.com/photo/animalwallpapers/baby-animals-kittens-kitten-cats-cute-cat-picture-photo-animal-wallpapers-1049853647.jpg' },
		// { name: "test", description: "test description" },
		// { name: "test2", description: "test description2" },
		// { name: "test2", description: "test description2" },
	],
}) => {
	return (
		<SwipeableViews enableMouseEvents>
			{slidersData.map((slideData) => {
				return (
					<Slide key={slideData.id} title={slideData.name} description={slideData.description} backgroundColor={slideData.backgroundColor} img={slideData.image} />
				);
			})}
		</SwipeableViews>
	);
};

export default Slider;
