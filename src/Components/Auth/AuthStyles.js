import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    containerForm:{      
        padding: '10px',
        maxWidth: '70%',
        margin: 'auto'
    },
    fieldForm:{
        marginBottom: '10px',
        marginTop: '10px !important',
    },
    fieldFormInput:{
        marginBottom:'20px',
    },
    termsContainer: {
        height: '50vh',
    },
    containerModal: {
        display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center'
    },
    modal: {
        fontSize: '12px',
	    backgroundColor: '#51d1f6 ',
	    color: 'black',
	    borderRadius: '8px',
	    padding: '16px',
	    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)'
    },
    termsAndCond: {
        color: '#51d1f6',
        cursor: 'pointer',
        borderBottom: '1px solid  #51d1f6',
    }
}))

export default useStyles;