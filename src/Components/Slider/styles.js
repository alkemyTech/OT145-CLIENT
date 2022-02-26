import { makeStyles } from "@mui/styles";

// Styles
const useStyles = makeStyles((theme) => ({
	sliderContainer: {
		display: "flex",
		height: "500px",
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
		height: "20%",
		// display: "none",
        display: "flex",
        color: '#000',
		[theme.breakpoints.up("md")]: {
		    height: "40px",
            justifyContent: 'center',
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
            width: '30%',
            // alignItems: 'center'
            // position: 'absolute',
            // top: '50vh',
            // left: '70%',
            // height: 'fit-content',
            // padding: '15px',
		},
    },
	sliderImage: (props) => ({
		objectFit: props.isLogo ? "contain" :"cover",
        height: "80%",
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
    // buttonContainer: {
    //     position: 'absolute',
    //     top: '250px',
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    // },
    // '$slideButtonLeft, $slideButtonRight': {
    //     position: 'absolute',
    //     top: '250px',
    // },
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
