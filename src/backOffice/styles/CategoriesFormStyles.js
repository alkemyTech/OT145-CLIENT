import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '630px',
        margin: 'auto',
        paddingTop:20
    },
    formElement: {
        width: '100%'
    },
    linkAtras:{
        padding:30
    }
})

export default useStyles