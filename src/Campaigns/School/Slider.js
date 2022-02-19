import styled from "@emotion/styled";
import React from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
	slide: {
		padding: 15,
		minHeight: 100,
		color: "#fff",
	},
	slide1: {
		background: "#FEA900",
	},
	slide2: {
		background: "#B3DC4A",
	},
	slide3: {
		background: "#6AC0FF",
	},
	img: {
		maxWidth: "50%",
	},
};

const SliderContainer = styled.div`
  display: flex;
  padding: 15%;
	min-height: 100;
	color: "#fff";
`

const SliderOne = () => {
	return (
		<SliderContainer >
			<p>slide n°1</p>
			<img
				style={Object.assign({}, styles.img)}
				src="https://www.rover.com/blog/wp-content/uploads/2019/04/cute-big-eyes-960x540-1.jpg"
				alt=""
			/>
		</SliderContainer>
	);
};

const Slider = () => {
	return (
		<SwipeableViews enableMouseEvents>
			<div style={Object.assign({}, styles.slide, styles.slide1)}>
				<SliderOne />
			</div>
			<div style={Object.assign({}, styles.slide, styles.slide2)}>
				slide n°2
			</div>
			<div style={Object.assign({}, styles.slide, styles.slide3)}>
				slide n°3
			</div>
		</SwipeableViews>
	);
};

export default Slider;
