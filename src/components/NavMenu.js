import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


//Material-ui styling
const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
              Gym Search ATX
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      );

}