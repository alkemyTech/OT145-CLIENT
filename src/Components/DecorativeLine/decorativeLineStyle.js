import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
  },
  redBox: {
    width: '33%',
    height: '1em',
    backgroundColor: theme.palette.primary.main,
  },
  yellowBox: {
    width: '33%',
    height: '1em',
    backgroundColor: theme.palette.warning.main,
  },
  blueBox: {
    width: '33%',
    height: '1em',
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default useStyles
