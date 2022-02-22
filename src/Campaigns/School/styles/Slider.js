import { makeStyles } from "@mui/styles";

// Styles
const useStyles = makeStyles((theme) => (
	{
		sliderContainer: (props) => ({
			display: "flex",
			height: "450px",
			color: "#fff",
			flexDirection: "column",
			width: "100%",
			background: props.background ? props.background : "#FEA900",
		}),
		textContainer: {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			maxHeight: '40px',
			height: '100%',
			display: 'none',
		},
		sliderImage : {
			objectFit: 'cover',
			height: '100%',
		}
	}
));

export default useStyles;
