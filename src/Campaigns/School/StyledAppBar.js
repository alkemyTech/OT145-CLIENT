import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({  
  appBar:{
    [theme.breakpoints.up('xl')]: {
      opacity: 0.8,
    }
  },

  boxLogoDeCampana: {
    borderRadius: '50%',
    backgroundColor: '#f5f5f5',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin : '5px 20px 5px 0px'   
  },

  logoDeCampaña: {
    width: '70px',
    height: '70px',
  },

  divider: {
    backgroundColor:'white',
    width: '1px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },

  boxLogoDeOng: {
    margin: '0px 0px 0px 20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },

  slogan: {
    margin: '0px 0px 0px 10px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  }
}));

export default useStyles;