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
    paddingTop: '30px',
  },
  icon: {
    paddingRight: '30px',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
}))

export default useStyles
