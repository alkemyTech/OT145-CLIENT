import { makeStyles } from "@mui/styles";

// Styles
const useStyles = makeStyles((theme) => ({
	sliderContainer: {
		display: "flex",
		height: "500px",
		color: "#fff",
		flexDirection: "column",
		width: "100%",
		background: "#323232",
	},
	text: {
		width: "100%",
		alignItems: "center",
		height: "20%",
		// display: "none",
        display: "flex",
        color: '#000',
		[theme.breakpoints.up("md")]: {
		    height: "40px",
		},
	},
    textContainer: {
        display: 'flex',
        height: '100%',
        position: 'relative',
        background: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up("md")]: {
            position: 'absolute',
            top: '50vh',
            left: '70%',
            height: 'fit-content',
            padding: '15px',
		},
    },
	sliderImage: {
		objectFit: "cover",
        height: "80%",
		[theme.breakpoints.up("md")]: {
            height: "100%",
		},
	},
	centerItem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100px",
	},
}));

export default useStyles;
