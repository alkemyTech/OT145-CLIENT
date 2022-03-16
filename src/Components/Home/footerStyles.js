import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: "#f5f5f5",
    	borderTop: 'solid 1px #dfdfdf',
		// width: '100%',
		// position: 'absolute',
		// bottom: 0,
		
	},
	insideContainer:{
		marginTop: '100px',
	},
	footer: {
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
		},
	},
	logoContainer: {
		display: "flex",
		alignItems: "center",
	},
	logoText: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	footerList: {
		listStyle: "none",
		padding: "0",
		textAlign: "center",
	},
	linkItemFooterList: {
		textDecoration: "none",
		color: "#000",
	},
	footerListTitle: {
		textDecoration: "underline",
		fontWeight: "500",
	},
	itemsContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		width: "50%",

		flexDirection: "column",
		alignItems: "center",

		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
			alignItems: "flex-start",
		},
	},
}));

export default useStyles;
