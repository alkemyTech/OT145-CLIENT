import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  containerList: {
    minWidth: 400,
    maxWidth: 1200,
    margin: 'auto',
    padding: '10px 10px',
  },
  styleLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  contLink: {
    minWidth: 400,
    maxWidth: 1200,
    padding: '10px',
  },
  img: {
    objectFit: 'contain',
  },
}))

export default useStyles
