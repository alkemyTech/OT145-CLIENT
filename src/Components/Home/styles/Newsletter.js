import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    newsletterContainer: {
        backgroundColor: '#ebebeb',
        padding: '20px 0',
    },
    content: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        gap: '15px'
    }
}));

export default useStyles;
