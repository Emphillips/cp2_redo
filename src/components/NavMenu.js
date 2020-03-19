import React from 'react';
// Import Styling
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Import Router 
import { Link } from 'react-router-dom';


//Material-ui styling
const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		
  },
  title: {
		flexGrow: 1,
  },
}));



export default function NavMenu() {
  const classes = useStyles();
      return(
        <div className={classes.root}>
        <AppBar style={{ background: '#2E3B55' }} position="static">
          <Toolbar>
            <Typography variant="h6"  color="inherit" className={classes.title}>
              Another Gym Search ATX
            </Typography>
            <li className="navMenu-link">
            <Link to="/Listing">Listing</Link>       
            </li>
          <li className="navMenu-link">
            <Link to="/Access">Login</Link>
            </li>
          </Toolbar>
        </AppBar>
      </div>
      );

};