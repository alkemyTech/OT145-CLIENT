import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    newsletterContainer: {
        backgroundColor: '#ebebeb',
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
    },
    form: {
        display: 'flex',
        justifyContent:'center',
        gap: '15px'
    },
    text:{
        marginTop: 8
    },
    inputError:{
        backgroundColor: 'none',
        color: '#F00'
    },
    inputContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

export default useStyles;
