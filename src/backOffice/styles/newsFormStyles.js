import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width:"100vw",
    },
  },
  form: {
    padding: '10px',
    maxWidth: '70%',
    margin: 'auto',
  },
  paper: {
    padding: theme.spacing(5),
  },
  inputs: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  errorCkEditor: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  finalLink: {
    marginTop: '20px',
  },
  img: {
    width:250,
    height:250,
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      width:100,
      height:100,
    },
  }
}))

export default useStyles
