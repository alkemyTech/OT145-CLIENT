import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    backgroundImage: (props) => ({
        width: '100%',
        height: '40vh',
        objectFit: props.isLogo ? 'contain' : 'cover',
    }),
    title: {
        textTransform: 'uppercase',
        fontWeight: '600',
        padding: '10px'
    }
})

export default useStyles