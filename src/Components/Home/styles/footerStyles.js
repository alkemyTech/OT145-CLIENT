import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: "#fff",
	},
	footer: {
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			alignItems: "flex-start",
			flexDirection: "row",
		},
	},
}));

export default useStyles;
