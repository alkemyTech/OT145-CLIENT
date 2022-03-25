import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

const useStyles = makeStyles(theme => ({  
  appBar:{
    backgroundColor: '#fff',
    [theme.breakpoints.up('xl')]: {
      opacity: 0.8,
    }
  },

  boxLogoDeCampana: {
    borderRadius: '50%',
   /*  backgroundColor: '#f5f5f5', */
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
    padding: '3px 0px 3px 0px',
  textAlign: 'center',
    backgroundColor:"#EC4C4C",
    fontSize: '1.5rem',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  line:{
    width: '100%',
    height: '1em',
    backgroundColor:"#EC4C4C",
  },
  toolB:{
    display: 'flex',
    justifyContent: 'space-between',
    padding:'0px 40px 0px 20px',
    
  },
  button:{
    fontWeight:'700',
  }
  
}));

export default useStyles;