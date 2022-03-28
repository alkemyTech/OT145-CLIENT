import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '40vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    formulario: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDonar: {
        marginLeft: theme.spacing(3)
    }
}))


export default useStyles;