import { makeStyles } from "@mui/styles";

// Styles
const useStyles = makeStyles((theme) => ({
	sliderContainer: {
		display: "flex",
		height: "550px",
		color: "#fff",
		flexDirection: "column",
		width: "100%",
		background: "#919191",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row"
		},
	},
	text: {
		width: "100%",
		alignItems: "center",
        display: "flex",
        color: '#000',
		[theme.breakpoints.up("md")]: {
		    height: "fit-content",
            justifyContent: 'center',
		},
	},
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 15px',
        height: '100%',
    },
    textBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30%',
        }
    },
	sliderImage: (props) => ({
		objectFit: props.isLogo ? "contain" :"cover",
        height: "65%",
		[theme.breakpoints.up("md")]: {
            height: "100%",
            width: '70%'
		},
	}),
	centerItem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100px",
	},
    slideButtonLeft: {
        left: '10px',
        position: 'absolute',
        top: '250px',
    },
    slideButtonRight: {
        right: '10px',
        position: 'absolute',
        top: '250px',
    },
    sliderDots: {
        marginTop: '10px',
    }
}));

export default useStyles;
