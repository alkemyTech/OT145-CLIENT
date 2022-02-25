import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  mail: {
    paddingTop: '10px',
    color: theme.palette.secondary.main,
  },
  redes: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  subtitle: {
    paddingTop: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem !important',
      paddingTop: '13px',
    },
  },
  icon: {
    paddingRight: '30px',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
}))

export default useStyles
