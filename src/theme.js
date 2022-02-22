import { createTheme } from '@mui/material/styles'
import './App.css'
const font = "'Nunito', sans-serif"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#EC4C4C',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8DCAFF',
      contrastText: '#0D0D0D',
    },
    error: {
      main: '#F3EA73',
      contrastText: '#0D0D0D',
    },
  },
})
