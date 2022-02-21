import styled from "@emotion/styled";

// Styles
const SliderContainer = styled.div `
	display: flex;
	/* min-height: 250px;
	max-height: 330px; */
	height: 250px;
	color: #fff;
	/* background: #FEA900; */
	background: ${(props) => (props.background ? props.background : "#FEA900")};
	/* max-height: 400; */
`;

const TextContainer = styled.div `
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const SliderImage = styled.img `
	object-fit: cover;
	width: 40%;
	max-height: 100%;
`;

export { SliderContainer, TextContainer, SliderImage }